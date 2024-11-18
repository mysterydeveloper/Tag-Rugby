sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  'sap/ui/model/Sorter',
  'sap/ui/core/BusyIndicator'
], function (Controller, JSONModel, Sorter, BusyIndicator) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Register.Register", {

    gender: {
      0: "Male",
      1: "Female"
    },

    onInit: function () {
      var oModel = new JSONModel({
        gender: 0,
        name: "",
        number: "",
        numbergender: 0,
        addMode: true,
        removeMode: false
      });
      this.getView().setModel(oModel);

      this.getOwnerComponent().getRouter().getRoute("Register").attachMatched(this._onRouteMatched, this);

    },

    _onRouteMatched: function (oEvent) {
      this.refresh();
    },

    refresh: function () {
      BusyIndicator.show(0);
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Event',
          State: 'Active'
        },
        success: function (oData) {
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "events");
          BusyIndicator.hide();
        }.bind(this),
        datatype: "jsonp",
      });
    },

    onListItemPress: function (oEvent) {
      this.getSplitAppObj().to(this.createId("regdetail"));
      var data = this.getView().getModel("events").oData[oEvent.getSource().oBindingContexts.events.sPath.split("/")[1]];
      var oModel = new JSONModel(data);
      console.log(data);
      this.getView().setModel(oModel, "event");
      this.getSplitAppObj().toDetail(this.createId("detail"));
      this.refreshMaleFemaleTables(data.Id)
    },

    refreshPlayers: function () {
      this.refreshMaleFemaleTables(this.getView().getModel("event").getProperty("/Id"))
    },

    refreshMaleFemaleTables: function (eventId) {
      console.log(eventId);  
      BusyIndicator.show(0);
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          gender: "Male",
          eventId: eventId
        },
        success: function (oData) {
          oData.sort(function (a, b) {
            return a.time - b.time;
          });
          let counter = 1;
          oData.forEach(element => {
            if (counter > 12) {
              element.inOrOut = "Reserve"
            } else {
              element.inOrOut = "Playing"
            }
            element.number = counter++;
          });
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "MalePlayers");
          BusyIndicator.hide();
        }.bind(this),
        datatype: "jsonp",
      });
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          gender: "Female",
          eventId: eventId
        },
        success: function (oData) {
          oData.sort(function (a, b) {
            return a.time - b.time;
          });
          let counter = 1;
          oData.forEach(element => {
            if (counter > 12) {
              element.inOrOut = "Reserve"
            } else {
              element.inOrOut = "Playing"
            }
            element.number = counter++;

          });
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "FemalePlayers");
        }.bind(this),
        datatype: "jsonp",
      });
    },
    onPressMasterBack: function () {
      this.getSplitAppObj().toMaster(this.createId("regmaster"));
    },

    getSplitAppObj: function () {
      const result = this.byId("regSplitAppDemo");
      if (!result) {
        Log.info("SplitApp object can't be found");
      }
      return result;
    },

    grouper: function (oGroup) {
      return {
        key: oGroup.oModel.oData[oGroup.sPath.split("/")[1]].inOrOut
      };
    },

    getGroupHeader: function (oGroup) {
      return new sap.m.GroupHeaderListItem({
        title: oGroup.key,
        upperCase: true
      });

    },

    onAdd: function () {
        BusyIndicator.show(0);
      $.ajax({
        type: "POST",
        url: "/api/create/",
        data: {
          type: 'Register',
          time: new Date().getTime(),
          name: this.getView().getModel().getProperty("/name"),
          eventId: this.getView().getModel("event").getProperty("/Id"),
          gender: this.gender[this.getView().getModel().getProperty("/gender")]
        },
        success: function (oData) {
          this.getView().getModel().setProperty("/name", "");
          this.refreshMaleFemaleTables(this.getView().getModel("event").getProperty("/Id"))
          BusyIndicator.hide();
        }.bind(this),
        datatype: "jsonp",
      });
    },

    showDelete: function () {
      this.getView().getModel().setProperty("/addMode", false);
      this.getView().getModel().setProperty("/removeMode", true);
    },

    showAdd: function () {
      this.getView().getModel().setProperty("/addMode", true);
      this.getView().getModel().setProperty("/removeMode", false);
    },

    onDelete: function () {
        BusyIndicator.show(0);
      let data = this.getView().getModel(this.gender[this.getView().getModel().getProperty("/numbergender")] + "Players").oData[this.getView().getModel().getProperty("/number") - 1];
      console.log(data);
      data.type= "Register";
      delete data["inOrOut"];
      delete data["number"];
      $.ajax({
        type: "POST",
        url: "/api/delete/",
        data: data,
        success: function (oData) {
          this.refreshMaleFemaleTables(this.getView().getModel("event").getProperty("/Id"))
          BusyIndicator.hide();
        }.bind(this),
        datatype: "jsonp",
      });
    }
  });

});

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  'sap/ui/model/Sorter',
], function (Controller, JSONModel, Sorter) {
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
      this.refresh();
      this.getView().getModel().setProperty("/mode", "StretchCompressMode");
    },

    refresh: function () {
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
        }.bind(this),
        datatype: "jsonp",
      });
    },

    onListItemPress: function (oEvent) {
      this.getView().getModel().setProperty("/mode", "HideMode");

      var data = this.getView().getModel("events").oData[oEvent.getSource().oBindingContexts.events.sPath.split("/")[1]];
      var oModel = new JSONModel(data);
      this.getView().setModel(oModel, "event");
      this.getSplitAppObj().toDetail(this.createId("detail"));
      this.getView().getModel().setProperty("/type", "update")
      this.refreshMaleFemaleTables(data._id)
    },

    refreshMaleFemaleTables: function (_id) {

      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          gender: "Male",
          id: _id
        },
        success: function (oData) {
          oData.sort(function (a, b) {
            return a.time - b.time;
          });
          let counter = 1;
          oData.forEach(element => {
            if (counter > 16) {
              element.inOrOut = "Reserve"
            } else {
              element.inOrOut = "Playing"
            }
            element.number = counter++;
          });
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "MalePlayers");
        }.bind(this),
        datatype: "jsonp",
      });
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          gender: "Female",
          id: _id
        },
        success: function (oData) {
          oData.sort(function (a, b) {
            return a.time - b.time;
          });
          let counter = 1;
          oData.forEach(element => {
            if (counter > 16) {
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
      this.getView().getModel().setProperty("/mode", "StretchCompressMode");
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
      $.ajax({
        type: "POST",
        url: "/api/create/",
        data: {
          type: 'Register',
          time: new Date().getTime(),
          name: this.getView().getModel().getProperty("/name"),
          id: this.getView().getModel("event").getProperty("/_id"),
          gender: this.gender[this.getView().getModel().getProperty("/gender")]
        },
        success: function (oData) {
          this.refreshMaleFemaleTables(this.getView().getModel("event").getProperty("/_id"))
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
      console.log(this.getView().getModel().getProperty("/number"));
      console.log(this.getView().getModel(this.gender[this.getView().getModel().getProperty("/numbergender")] + "Players"));
      let data = this.getView().getModel(this.gender[this.getView().getModel().getProperty("/numbergender")] + "Players").oData[this.getView().getModel().getProperty("/number") - 1];
      console.log(data);
      delete data["inOrOut"];
      delete data["number"];
      $.ajax({
        type: "POST",
        url: "/api/delete/",
        data: data,
        success: function (oData) {
          this.refreshMaleFemaleTables(this.getView().getModel("event").getProperty("/_id"))
        }.bind(this),
        datatype: "jsonp",
      });
    }
  });

});

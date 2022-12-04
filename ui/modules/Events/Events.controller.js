sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  'sap/ui/model/Sorter',
], function (Controller, JSONModel, Sorter) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Events.Events", {

    onInit: function () {
      var oModel = new JSONModel({
        editMode: false
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
        },
        success: function (oData) {
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "events");
        }.bind(this),
        datatype: "jsonp",
      });
    },

    onListItemPress: function (oEvent) {
      var data = this.getView().getModel("events").oData[oEvent.getSource().oBindingContexts.events.sPath.split("/")[1]];
      var oModel = new JSONModel(data);
      this.getView().setModel(oModel, "event");
      this.getSplitAppObj().toDetail(this.createId("detail"));
      this.getView().getModel().setProperty("/type", "update");
      this.getSplitAppObj().to(this.createId("detail"));

      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          gender: "Male",
          id: data["_id"]
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
          this.getView().setModel(oModel, "malePlayers");
        }.bind(this),
        datatype: "jsonp",
      });
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          gender: "Female",
          id: data["_id"]
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
          this.getView().setModel(oModel, "femalePlayers");
        }.bind(this),
        datatype: "jsonp",
      });
    },

    onPressMasterBack: function () {
      this.getSplitAppObj().toMaster(this.createId("master"));
    },

    getSplitAppObj: function () {
      const result = this.byId("SplitAppDemo");
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

    onEdit: function () {
      let oldEvent = JSON.parse(JSON.stringify(this.getView().getModel("event").getProperty("/")));
      this.getView().getModel().setProperty("/oldEvent", oldEvent);
      this.getView().getModel().setProperty("/editMode", true)
    },

    onSave: function () {
      let url = "";
      if (this.getView().getModel().getProperty("/type") == "update") {
        url = "/api/update/";
      } else {
        url = "/api/create/"
      }
      $.ajax({
        type: "POST",
        url: url,
        data: this.getView().getModel("event").getProperty("/"),
        success: function (oData) {
          this.refresh();
        }.bind(this),
        datatype: "jsonp",
      });
      this.getView().getModel().setProperty("/editMode", false)
    },

    onDelete: function () {
      $.ajax({
        type: "POST",
        url: "/api/delete/",
        data: this.getView().getModel("event").getProperty("/"),
        success: function (oData) {
          this.refresh();
        }.bind(this),
        datatype: "jsonp",
      });
    },

    onCancel: function () {
      let oldEvent = JSON.parse(JSON.stringify(this.getView().getModel().getProperty("/oldEvent")));
      this.getView().getModel("event").setProperty("/", oldEvent);
      console.log(this.getView().getModel("event").getProperty("/"))
      console.log(this.getView().getModel().getProperty("/oldEvent"))
      this.getView().getModel().setProperty("/editMode", false)
    },

    onAdd: function () {
      this.getView().getModel().setProperty("/mode", "HideMode");
      var oModel = new JSONModel({
        type: "Event"
      });
      this.getView().setModel(oModel, "event");
      this.getSplitAppObj().toDetail(this.createId("detail"));
      this.getView().getModel().setProperty("/editMode", true)
      this.getView().getModel().setProperty("/type", "create")
      var oModel = new JSONModel({});
      this.getView().setModel(oModel, "malePlayers");
      var oModel = new JSONModel({});
      this.getView().setModel(oModel, "femalePlayers");
    }
  });

});

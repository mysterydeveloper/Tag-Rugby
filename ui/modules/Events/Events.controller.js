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
            element.number = counter++;
            if (counter > 16) {
              element.inOrOut = "Reserve"
            } else {
              element.inOrOut = "Playing"
            }
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
            element.number = counter++;
            if (counter > 16) {
                element.inOrOut = "Reserve"
              } else {
                element.inOrOut = "Playing"
              }
          });
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "femalePlayers");
        }.bind(this),
        datatype: "jsonp",
      });
    },

    onPressMasterBack: function () {
      this.getSplitAppObj().backMaster();
    },

    getSplitAppObj: function () {
      const result = this.byId("SplitAppDemo");
      if (!result) {
        Log.info("SplitApp object can't be found");
      }
      return result;
    },

    grouper: function(oGroup) {
        return {
            key: oGroup.oModel.oData[oGroup.sPath.split("/")[1]].inOrOut
        };
    },

    getGroupHeader: function(oGroup){
        return new sap.m.GroupHeaderListItem( {
            title: oGroup.key,
            upperCase: true
        });
    
    },

    onEditPress: function () {
      let model = this.getView().getModel();
      model.editMode = true;
      this.getView().setModel(model);
    }
  });

});

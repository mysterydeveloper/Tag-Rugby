sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.TeamsPicking.TeamsPicking", {

    onInit: function () {

      this.getOwnerComponent().getRouter().getRoute("TeamsPicking").attachMatched(this._onRouteMatched, this);

    },

    _onRouteMatched: function (oEvent) {
      if (jQuery.sap.storage.get("token") !== true) {
        this.getOwnerComponent().getRouter().navTo("Login", {
          previousPage: "Teams"
        });
      } else {
        this.refresh();
      }
    },

    onListItemPress: function (oEvent) {
      var data = this.getView().getModel("events").oData[oEvent.getSource().oBindingContexts.events.sPath.split("/")[1]];
      var oModel = new JSONModel(data);
      this.getView().setModel(oModel, "event");
      this.getSplitAppObj().toDetail(this.createId("detail"));
      this.getSplitAppObj().to(this.createId("detail"));
      this.refreshDetailTable("team1");
      this.refreshDetailTable("team2");
      this.refreshDetailTable("team3");
      this.refreshDetailTable("team4");
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          id: eventId
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
            }
            element.number = counter++;

          });
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, teamID);
        }.bind(this),
        datatype: "jsonp",
      });

    },

    refreshDetailTable: function (teamID) {
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Register',
          Team: teamID,
          id: eventId
        },
        success: function (oData) {
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, teamID);
        }.bind(this),
        datatype: "jsonp",
      });
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


  });

});

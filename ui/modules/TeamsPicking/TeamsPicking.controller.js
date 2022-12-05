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


    refresh: function () {
      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          type: 'Event',
          State: 'Active'
        },
        success: function (oData) {
          console.log(oData);
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "events");
        }.bind(this),
        datatype: "jsonp",
      });
    },


  });

});

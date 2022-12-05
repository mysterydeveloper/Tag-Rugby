sap.ui.define([
  "sap/ui/core/mvc/Controller",
], function (Controller) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Players.Players", {

    onInit: function () {
        this.getOwnerComponent().getRouter().getRoute("Players").attachMatched(this._onRouteMatched, this);

    },

    _onRouteMatched: function (oEvent) {
      if (jQuery.sap.storage.get("token") !== true) {
        this.getOwnerComponent().getRouter().navTo("Login", {
          previousPage: "Players"
        });
      }
    },
  });

});

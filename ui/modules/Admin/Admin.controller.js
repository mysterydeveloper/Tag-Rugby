sap.ui.define([
  "sap/ui/core/mvc/Controller",
], function (Controller) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Admin.Admin", {

    onInit: function () {
      this.getOwnerComponent().getRouter().getRoute("Admin").attachMatched(this._onRouteMatched, this);

    },

    _onRouteMatched: function (oEvent) {
      if (jQuery.sap.storage.get("token") !== true) {
        this.getOwnerComponent().getRouter().navTo("Login", {
          previousPage: "Admin"
        });
      }
      else{

      }
    },
  });

});

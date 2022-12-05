sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Teams.Teams", {

    onInit: function () {
      this.getOwnerComponent().getRouter().getRoute("Teams").attachMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      this.refresh();
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
      var data = this.getView().getModel("events").oData[oEvent.getSource().oBindingContexts.events.sPath.split("/")[1]];
      var oModel = new JSONModel(data);
      this.getView().setModel(oModel, "event");
      this.getSplitAppObj().toDetail(this.createId("detail"));
      this.getView().getModel().setProperty("/type", "update");
      this.getSplitAppObj().to(this.createId("detail"));

    },
  });

});

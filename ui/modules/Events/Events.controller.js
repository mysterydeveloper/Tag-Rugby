sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Events.Events", {

    onInit: function () {

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

    onListItemPress: function(oEvent) {
        console.log(oEvent.getSource());
        console.log(oEvent.getSource().oBindingContexts.events.sPath.split("/")[1]);
    }
  });

});

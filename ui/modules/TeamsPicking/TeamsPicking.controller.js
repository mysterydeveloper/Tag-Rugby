sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.TeamsPicking.TeamsPicking", {

    onInit: function () {
        
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
            console.log(oData);
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, "events");
        }.bind(this),
        datatype: "jsonp",
      });
    },
  });

});

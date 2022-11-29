sap.ui.define([
  "sap/base/Log",
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Sorter",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/format/DateFormat",
  "sap/m/ToolbarSpacer",
  "sap/ui/table/library",
  "sap/ui/thirdparty/jquery"
], function (Log, Controller, Sorter, JSONModel, DateFormat, ToolbarSpacer, library, jQuery) {
  "use strict";

  // shortcut for sap.ui.table.SortOrder
  var SortOrder = library.SortOrder;

  return Controller.extend("tag.rugby.ui.modules.App", {

    onInit: function () {
      // set explored app's demo model on this sample
      var oJSONModel = this.initSampleDataModel();
      var oView = this.getView();
      oView.setModel(oJSONModel);
      this._oShellToolPage = this.getView().byId("idShellToolPage");
    },

    onSideNavigationExpandedToggle: function () {
      this._oShellToolPage.toggleSideContentMode();
    },

    selectedItem: function(oEvent) {
        this._oShellToolPage.toggleSideContentMode();
        console.log(oEvent.getSource().mProperties.key);
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo(oEvent.getSource().mProperties.key);
    },

    initSampleDataModel: function () {


      $.ajax({
        type: "POST",
        url: "/api/read/",
        data: {
          id: 'oP31fZoXLdnJo0k8DZKb',
          gender: "Female"
        },
        success: function (oData) {
          console.log(oData);
        },
        datatype: "jsonp",
      });
    },

  });

});

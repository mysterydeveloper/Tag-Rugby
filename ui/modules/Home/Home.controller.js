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

  return Controller.extend("tag.rugby.ui.modules.Home.Home", {

    onInit: function () {

    },
  });

});

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Login.Login", {

    onInit: function () {
      var oModel = new JSONModel({
        login: "",
        valueStateText: "Incorrect Token",
        valueState: "None",
        previousPage: ""
      });
      this.getView().setModel(oModel);
      this.getOwnerComponent().getRouter().getRoute("Login").attachMatched(this._onRouteMatched, this);

    },

    _onRouteMatched : function (oEvent) {
        var oQueryParameter = oEvent.getParameter("arguments")["previousPage"];
        console.log(oQueryParameter);
        this.getView().getModel().setProperty("/previousPage", oQueryParameter)
    },

    Login: function () {
      $.ajax({
        type: "POST",
        url: "/api/Login/",
        data: {
          login: this.getView().getModel().getProperty("/login"),
        },
        success: function (oData) {
          console.log(oData);
          if (oData.login) {
            this.getOwnerComponent().getRouter().navTo(this.getView().getModel().getProperty("/previousPage"));
            jQuery.sap.storage.put("token", true);
          }
          else{
            this.getView().getModel().setProperty("/valueState", "Error")
          }
        }.bind(this),
        datatype: "jsonp",
      });
    },


  });

});

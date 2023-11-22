sap.ui.jsfragment("com.ibm.simpleapp.fragments.inputJS", {
    createContent: function () {
      var oInput = new sap.m.input({
        value: "Fragment JS",
      });
  
      return oInput;
    },
  });
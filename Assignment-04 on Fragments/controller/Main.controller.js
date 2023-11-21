sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/Fragment"], function (Controller,Fragment) {
    return Controller.extend("com.ibm.simpleapp.controller.Main", {
      device: Device,
      onInit: function () {
        
      },
      onPressCloseDialog: function(){
        var oView=this.getView();
        if(!this.byId('dialogueId')){
            Fragment.load({
                name:"com.ibm.simpleapp.fragments.input",
                controller:this,
                id:oView.getId()
            }).then(function(oDialog){
                oDialog.open();
            });

        }else{
            this.byId('dialogueId').open();

        }
      },
      onPressCloseDialog: function(){
        this.byId('dialogueId').close();
      }
      
      
    });
  });
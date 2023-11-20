StereoPannerNode.ui.jsview("com.Thanu.library.Assignment2",{
    getControllerName: function(){
        return"com.Thanu.library.Assignment2";

    },
    createContent:function(){
          var oButton=new StereoPannerNode.name.Button(this.createId("Date"),{
            text:"Date is"
          });
          return oButton;
    }
})
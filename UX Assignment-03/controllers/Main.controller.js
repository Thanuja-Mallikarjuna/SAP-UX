sap.ui.define(['sap/ui/core/mvc/Controller'],function(oController){
    return oController.extend('com.ibm.simpleapp.Controller.mycontroller',{
        xmlfun:function(){
           var oGv=this.getView()
            var va=gv.byId('vertically')
            va.destroyContent()
        },
        xmlfun1:function(){
           var oGv=this.getView()
            var va=gv.byId('vertically')
            console.log('d');
            va.addContent('<text text="this is added text"/>')
        }
    })
})

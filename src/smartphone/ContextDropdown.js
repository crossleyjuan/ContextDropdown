bizagi.rendering.basicUserField.extend("bizagi.rendering.ContextDropdown",{}, {

    /*************************************************************/
    /* methods to be overriden by the implementations            */
    /*************************************************************/
    getEditableControl: function () {
        return this.getGenericControl();
    },
    getReadonlyControl: function () {
        return this.getGenericControl();
    },
    getGenericControl: function () {

        //standard initialization
        var self = this;
        var control = self.getControl();
        var properties = self.properties;
        var extendedData = self.extendedData;

        //if no display name is explictly defined, use the following default text
        var bindedXpathValue = properties.value || "Hello World, I am a Widget";

        //you can do slightly different things in design mode or in runtime
        if (properties.designMode)
            bindedXpathValue = bindedXpathValue + " previewed in the Forms designer";
        else
            bindedXpathValue = bindedXpathValue + " running at the Work portal";

        //self is our base. The Widget control is defined in this case, containing a <div> HTML element.
        self.myinput = $("<div>");

        //we can add up any number of inner elements to the control
        self.myinput.append("<h2>" + bindedXpathValue + " (smartphone version) </h2>");
        
        var img_element = $("<img src='http://www.bizagi.com/images/branding/logo_blue.png' alt=''/>");
        self.myinput.append(img_element);

        //define a class for your element so that appearance is customizable from the CSS style sheet.
        self.myinput.addClass("ContextDropdown_MainDivClass");

        //always return the control
        self.setValue( properties.value || "Hello World, I am a Widget");
        return self.myinput;
    }
});
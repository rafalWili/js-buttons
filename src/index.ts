console.log('lets get started');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;


//const submitCta : HTMLElement | null = document.getElementById("save_settings");

// if(submitCta !== null ){

// }
interface ButtonsShape {
    text: string;
    // xPos?: number;
    // yPos?: number;
  }
  


class CreateButton {
     
    private ctaText : string;

        constructor(ctaText: string){
            this.ctaText = ctaText;
        }

    public getCtaText = () => {
        return this.ctaText;
    }
    public setCtaText = (text: string) => {
        return this.ctaText = text;
    }
    

    public init = (buttonSettings : ButtonsShape ) => {
        let text = this.setCtaText(buttonSettings.text);
        return `<a href="" > ${text} </a>`;
    }



}




// let cta = new CreateButton('text' );

// console.log( cta.init( {text : "new btn !"} ) );
console.log('let\'s get started');

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
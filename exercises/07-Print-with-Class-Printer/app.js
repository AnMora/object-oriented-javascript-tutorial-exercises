class Printer{
    
    // You can add new functions here, HOWEVER- we would prefer you didn't.
    // It is a good practice to have the constructor listed first.
    
    constructor(){
    	this._brand = 'Epson'; //will be a string 
    	this._model = 'TX-200'; //will be a string 
    }
    
    //you can add new functions here
  
    printerTest() {
        //Se utiliza $ solamente para las concatenaciones en strings para evitar el +
        return `My brand is ${this._brand} and my model ${this._model}`;
    } 
    
    //you can add new class functions here
    getModel(){
        //return `The model of the printer is: ${this._model}`;
        //return this._model;
        return this._model;
    }
}

let epsonPrinter = new Printer();
//console.log(`The model of the printer is: ${epsonPrinter.getModel()}`);
console.log("The model of the printer is: "+epsonPrinter.getModel());
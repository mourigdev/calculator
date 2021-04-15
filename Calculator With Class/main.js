class Calculator {
    constructor(num1, num2, symbol) {
        this.num1 = num1;
        this.num2 = num2;
        this.symbol = symbol

        this.current_Display = "0";
        this.previous_Display = "";

        // Detect if "0" of Current_Display will be Removed or Not
        this.clearAll = true

        // Where will be the output of affichage() 
        this.affichagePrevious = document.querySelector(".previous")
        this.affichageCurrent = document.querySelector(".current")

        this.affichage(this.affichagePrevious, this.affichageCurrent)


    }

    ApendNumber(number) {
        this.number = number

        // don't Allow click to "." two time
        if (this.number == "." && this.current_Display.includes(".")) return;

        // "0" of Current_Display will be Removed Here
        if (this.clearAll == true && this.number !== ".") {
            this.current_Display = ""
            this.clearAll = false
        }

        // "0" of Current_Display I will Keep it here
        if (this.clearAll == true && this.number == ".") {
            this.clearAll = false
        }

        // if The num1 is saved Don't allow user to click numbers until he click a Symbol 
        if (this.num1 !== null && this.symbol == "") return;

        
        this.current_Display = this.current_Display.toString() +
            this.number.toString();

        if (this.num1 == null) return;

        this.num2 = this.current_Display

    }




    SymbolClick(operation) {

        if (this.clearAll == true) {
            this.clearAll = false
        }


        // This because We need to keep the Calcul After he click many time Symbols
        if (this.num1 !== undefined) {

                this.results(this.symbol);
                this.operation = operation;
                this.symbol = this.operation
            return;
        }


        // Append Data of Num2 to Num1 After clicking a symbol 
        // (work just if num1 is Undifined)

        this.previous_Display = this.current_Display.toString();
        this.num1 = this.previous_Display.toString()
        this.current_Display = ""
        this.operation = operation;
        this.symbol = this.operation



    }


    results(x) {

        this.x = x


        this.previous = parseFloat(this.num1)
        this.current = parseFloat(this.num2)

        if (isNaN(this.previous) || isNaN(this.current)) return;


        if (this.x == null) {

            this.x = this.symbol

        }



        switch (this.x) {
            case "+":
                this.final = this.previous + this.current
                console.log(this.final)
                break;

            case "-":

                this.final = this.previous - this.current
                console.log(this.final)
                break;

            case "*":

                this.final = this.previous * this.current
                console.log(this.final)
                break;

            case "/":
                this.final = this.previous / this.current
                console.log(this.final)
                break;

        }

        this.current_Display = " "
        this.num2 = ""

        this.previous_Display = (this.final).toString()
        this.num1 = (this.final).toString()
        this.symbol = "";
        this.operation = ""


    }


    affichage(show_previous, show_current) {

        show_current.innerHTML = `<p id="output1"> ${this.current_Display.toString()} </p>`

        if (this.clearAll == true) {
            show_previous.innerHTML = "";
        }

        if (this.num1 == null) return;
        show_previous.innerHTML = `<p id="outputText"> ${this.num1} ${this.symbol} ${this.current_Display.toString()} </p>`

    }


    clear() {

        this.clearAll = true
        this.current_Display = "0"
        this.previous_Display = ""
        this.symbol = undefined
        this.operation = undefined
        this.num2 = undefined
        this.num1 = undefined
        this.final = undefined
        this.previous = undefined
        this.x = undefined


    }



    back(){
        
        this.current_Display = this.current_Display.slice(0,(this.current_Display).length-1) ;
        this.affichage(this.affichagePrevious, this.affichageCurrent);
        
    }



}


var appCalc = new Calculator();


// When clicking a Number
document.querySelectorAll('[class="numbers"]').forEach(element => {
    element.addEventListener('click', () => {

        appCalc.ApendNumber(element.textContent)
        appCalc.affichage(appCalc.affichagePrevious, appCalc.affichageCurrent)


    })
})



// When clicking a Symbol
document.querySelectorAll('[class="symbol"]').forEach(element => {
    element.addEventListener('click', () => {

        appCalc.SymbolClick(element.textContent)

        appCalc.affichage(appCalc.affichagePrevious, appCalc.affichageCurrent)

    })
})



// When Clicking  Egal("=")
document.querySelector('[class="egal"]').addEventListener('click', () => {


    appCalc.results()

    appCalc.affichage(appCalc.affichagePrevious, appCalc.affichageCurrent)

})


// When Clicking Clear Button
document.querySelector('[class="clear"]').addEventListener('click', () => {


    appCalc.clear()

    appCalc.affichage(appCalc.affichagePrevious, appCalc.affichageCurrent)

})
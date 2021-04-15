class Calculator {
    constructor(num1, num2, symbol) {
        this.num1 = num1;
        this.num2 = num2;
        this.symbol = symbol

        this.current_Display = "";
        this.previous_Display = "";


    }

    ApendNumber(number) {

        this.number = number

        if (this.num1 !== null && this.symbol == "") return;

        this.current_Display = this.current_Display.toString() +
        this.number.toString();
        console.log(this.current_Display)
        console.log(this.num1)


        let cc = document.querySelector(".previous")
        let dd = document.querySelector(".current")
        this.affichage(cc, dd)

        if (this.num1 == null) return;

        this.num2 = this.current_Display
        console.log(this.num2);




        this.affichage(cc, dd)

    }


    SymbolClick(operation) {

        if (this.current_Display == "") return;
        

        if ((typeof (this.num1) !== 'undefined')) {
            if (this.num2!=="" && this.symbol !== "") {
                this.results(this.symbol);
            }
            console.log("Noooooo")
            this.operation = operation;
            this.symbol = this.operation

            if (this.current_Display == "") return;

            this.results(this.symbol);

            let cc = document.querySelector(".previous")
            let dd = document.querySelector(".current")
    
            this.affichage(cc, dd)

            return;
        }


        this.previous_Display = this.current_Display.toString();
        this.num1 = this.previous_Display.toString()
        this.current_Display = ""
        this.operation = operation;
        this.symbol = this.operation
        console.log(this.symbol)


    }


    results(x) {

        this.x = x
        // this.final = final

        this.previous = parseFloat(this.num1)
        this.current = parseFloat(this.num2)

        if (isNaN(this.previous) || isNaN(this.current)) return;


        if (this.x == null) {
            console.log(this.symbol)
            this.x = this.symbol

            console.log(x)

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
        console.log(this.symbol)


        let cc = document.querySelector(".previous")
        let dd = document.querySelector(".current")

        this.affichage(cc, dd)

    }


    affichage(show_previous, show_current) {

        show_current.innerHTML = this.current_Display.toString();
        if (this.num1 == null) return;
        show_previous.innerHTML = this.num1 + this.symbol + this.current_Display.toString()

    }


    // clear(){

    //     this.current_Display = ""
    //     this.previous_Display = ""
    //     this.symbol = null;
    //     this.operation = null
    //     this.num2 = null
    //     this.num1 = null
    //     this.final = null
    //     this.previous = null
    //     this.x = null

    //     let cc = document.querySelector(".previous")
    //     let dd = document.querySelector(".current")

    //     this.affichage(cc, dd)
    // }


}


var appCalc = new Calculator();

document.querySelectorAll('[class="numbers"]').forEach(element=>{
    element.addEventListener('click',()=>{
        console.log(element.textContent)

        appCalc.ApendNumber(element.textContent)

    })
})



document.querySelectorAll('[class="symbol"]').forEach(element=>{
    element.addEventListener('click',()=>{
        console.log(element.textContent)

        appCalc.SymbolClick(element.textContent)

    })
})



    document.querySelector('[class="egal"]').addEventListener('click',()=>{
     

        appCalc.results()

    })


    document.querySelector('[class="clear"]').addEventListener('click',()=>{
  

        appCalc.clear()

    })




// var cc = new Calculator()

// cc.SymbolClick("/")
// cc.results()

// console.log(cc.num1);
// console.log(cc.num2)

// // console.log()
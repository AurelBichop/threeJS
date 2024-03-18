export default class Form{
    constructor(){
        this.buttons = document.querySelectorAll(".personnages button");
        this.form = document.querySelector("form");
        this.submitButton = document.querySelector("form button");

        this.vador = document.querySelector(".vador")
        this.luke = document.querySelector(".luke")

        this.inputs = document.getElementsByTagName("input");
        this.validatedInputs = [];

        this.showForm();
        this.checkInputsWithEvents();
        this.goToFightPage();
    }

    showForm(){
        for(let button of this.buttons)
        {
            button.addEventListener(
                "click",
                () => this.onClickButton(button)
            );
        }
    }
    
    onClickButton(button){
        
        this.enebledHtmlElement(this.form);
        this.form.classList.add("translate-null")
    
        if (button.value == "luke"){
            this.submitButton.classList.add("green-illumination");
            this.disabledHtmlElement(this.vador);
        }else{
            this.submitButton.classList.add("red-illumination");
            this.disabledHtmlElement(this.luke);
        }
    
        localStorage.setItem("jediChoisi", button.value)

        this.checkInput();
    }
    
    goToFightPage(){
        this.submitButton.addEventListener(
            "click",
            this.onClicksubmitButton.bind(this)
        )
    }
    
    onClicksubmitButton(event){
        event.preventDefault();
        localStorage.setItem("pseudo", this.inputs[0].value)
        window.location.href = "/combat.html"
    }
    
    checkInputsWithEvents(){
        for(let input of this.inputs)
        {
            input.addEventListener('input',
            () => this.onDetectChangeInput(input))
        }
    }
    
    checkInput(){
        for(let input of this.inputs)
        {
            this.onDetectChangeInput(input);
        }
    }

    onDetectChangeInput(input){
        if(input.value != "" && !this.validatedInputs.includes(input)){
            this.validatedInputs.push(input)
        }else if(input.value == "" && this.validatedInputs.includes(input)){
            this.validatedInputs = this.validatedInputs.filter(
                elmt => input != elmt
            );
        }
    
        if(this.validatedInputs.length == this.inputs.length){
            this.enabledHtmlElementVisible(this.submitButton);
        };
    }
    
    enabledHtmlElementVisible(htmlElement){
        htmlElement.classList.remove('disabled-but-visible')
    }
    
    disabledHtmlElement(htmlElement){
        htmlElement.classList.add("disabled");
    }
    
    enebledHtmlElement(htmlElement){
        htmlElement.classList.remove("disabled");
    }
}
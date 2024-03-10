const buttons = document.querySelectorAll(".personnages button");
const form = document.querySelector("form");
const submitButton = document.querySelector("form button");

const vador = document.querySelector(".vador")
const luke = document.querySelector(".luke")

const inputs = document.getElementsByTagName("input");
let validatedInputs = [];

const showForm = () => {
    for(let button of buttons)
    {
        button.addEventListener("click",()=>onClickButton(button));
    }
}

const onClickButton = (button)=>{
    
    enebledHtmlElement(form);
    form.classList.add("translate-null")

    if (button.value == "luke"){
        submitButton.classList.add("green-illumination");
        disabledHtmlElement(vador);
    }else{
        submitButton.classList.add("red-illumination");
        disabledHtmlElement(luke);
    }
}

const goToFightPage = () => {
    submitButton.addEventListener(
        "click",
        onClickSubmitButton
    )
}

const onClickSubmitButton = (event) => {
    event.preventDefault();
    window.location.href = "/combat.html"
}

const checkInputs = ()=>{
    for(let input of inputs)
    {
        input.value="";
        input.addEventListener('input',
        ()=>onDetectChangeInput(input))
    }
}

const onDetectChangeInput = (input) => {
    if(input.value != "" && !validatedInputs.includes(input)){
        validatedInputs.push(input)
    }else if(input.value == "" && validatedInputs.includes(input)){
        validatedInputs = validatedInputs.filter(
            elmt => input != elmt
        );
    }

    if(validatedInputs.length == inputs.length){
        enabledHtmlElementVisible(submitButton);
    };
}

const enabledHtmlElementVisible = (htmlElement) => htmlElement.classList.remove('disabled-but-visible')

const disabledHtmlElement = (htmlElement)=>{
    htmlElement.classList.add("disabled");
}

const enebledHtmlElement = (htmlElement)=>{
    htmlElement.classList.remove("disabled");
}

showForm();
checkInputs();
goToFightPage();
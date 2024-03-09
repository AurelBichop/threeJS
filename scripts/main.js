const input = document.querySelector("input");

input.addEventListener("input",(e)=>{
    e.preventDefault();
    console.log(e.target.value);
});
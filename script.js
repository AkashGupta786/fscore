let form = document.querySelector("form");
let p1 = document.querySelector("#person1");
let p2 = document.querySelector("#person2");
let scorediv = document.querySelector("#score");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let fsscore = Math.floor(Math.random()*100);
    scorediv.innerText = `this is it ${fsscore} %`;    
})



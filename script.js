
var jokeDiv = document.querySelector(".joke");
var refBtn = document.querySelector(".btn1");
var darkMode = document.querySelector(".btn2");
var svg1 = document.querySelector(".btn1 svg");
var svg2 = document.querySelector(".btn2 svg");
var mainCont = document.querySelector(".main-container");
var jokeBox = document.querySelector(".joke-box");
var isDark = false;

var opt = {
    headers: { 'X-Api-Key': 'CuytM4Dh23zPs9XL2NHGyQ==4cTX3tmmBLEg5M1L'},
    method: 'GET',
}

async function getJoke(){
    jokeDiv.innerHTML = "🤣🤣🤣🤣🤣";
    let fjoke = await fetch('https://api.api-ninjas.com/v1/dadjokes', opt);
    let resJoke = await fjoke.json();
    showOnUI(resJoke[0].joke);
}

function showOnUI(joke){
    jokeDiv.innerHTML = "";
    jokeDiv.innerHTML = `${joke}`;
}

refBtn.addEventListener("click",getJoke);


darkMode.addEventListener("click",()=>{
    if(!isDark){
        svg1.style.stroke = "white";
        svg1.style.fill = "white";
        svg2.style.fill = "white";
        svg2.style.fill = "white";
        mainCont.style.backgroundColor="black";
        document.body.style.color = "#BFF34F";
        jokeBox.style.background = "rgba(255,255,255,0.1)"
        document.body.style.textShadow = "0 0 10px #BFF34F";
        isDark = true;
    }else{
        svg1.style.stroke = "black";
        svg1.style.fill = "black";
        svg2.style.fill = "black";
        mainCont.style.backgroundColor = "#BFF34F";
        document.body.style.color = "black";
        isDark = false;
    }
})

darkMode.addEventListener("mouseover", ()=>{
        if(isDark){
            svg2.style.stroke = "white";
            svg2.style.fill = "black";
        }else{
            
            svg2.style.stroke = "black";
            svg2.style.fill = "black";
        }
})

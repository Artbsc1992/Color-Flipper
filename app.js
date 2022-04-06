const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
    //get random number between 0 - 3 [1]
    const randomNumer = 2;
    document.body.style.backgroundColor = color [randomNumer];
    console.log(color.textContent)
})
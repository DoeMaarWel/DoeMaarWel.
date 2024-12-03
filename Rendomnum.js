const mybutton = document.getElementById("mybutton");
const label = document.getElementById("Mylabel");
const min = 1;
const max = 100;
let rendomNum;

mybutton.onclick = function(){
  rendomNum = Math.floor(Math.random() * max) + min;
Mylabel.textContent = rendomNum;
}   

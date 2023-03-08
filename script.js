let h1 = document.getElementById('start')
let div1 = document.getElementById('showcase')
let css1 = document.getElementById('view1')
let head = document.getElementById('one')
let button = document.getElementById('btn1');
let newSide = document.getElementById('skill-bar');

button.addEventListener("mousedown", function(){
    div1.style.display = "none"
    css1.setAttribute('href', "./new.css");
})

h1.addEventListener("mouseover", function(e){
     h1.style.background = "2px, 2px 2px gray";
})               

newSide.addEventListener("mouseover", function(e){
    newSide.style.boxShadow = "5px, 5px 5px white";
}
)
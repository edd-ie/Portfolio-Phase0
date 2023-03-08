let h1 = document.getElementById('start')
let div1 = document.getElementById('showcase')
let css1 = document.getElementById('view1')
let head = document.getElementById('one')
let button = document.getElementById('btn1');

button.addEventListener("mousedown", function(){
    alert("Hello There!")
    div1.style.display = "none"
    css1.setAttribute('href', "./new.css");
})

h1.addEventListener("mouseover", function(e){
     h1.style.background = "2px, 2px 2px black";
})               


let h1 = document.getElementById('start')
let div1 = document.getElementById('showcase')
let css1 = document.getElementById('view1')
let head = document.getElementById('one')
let button = document.getElementById('btn1');
let newSide = document.getElementsByClassName('skill-bar');


const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

button.addEventListener("mousedown", function(){
    div1.style.display = "none"
    css1.setAttribute('href', "./new.css");
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
    
        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
            
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    setInterval(draw, 30);
})



h1.addEventListener("mouseover", function(e){
    h1.style.color = "black";
    h1.style.boxShadow = "0 2px 20px 0 #0f0 inset,0 2px 20px #0f0, 0 2px 50px 0 #0f0 inset,0 2px 20px #0f0";
    h1.style.fontWeight = "bold";
})      

h1.addEventListener("mouseout", function(e){
    h1.style.fontWeight = "normal";
    h1.style.color = "#0F0";
    h1.style.boxShadow = "";
})

let p = document.querySelector('.text');
let div = document.querySelector('.row');
let text = document.querySelector('#Textarea');

div.addEventListener('change',()=>{
    var color = document.querySelector('.color');
    var size = document.querySelector('.size');
    var font = document.querySelector('select');
    var color1 = document.querySelector('.color1');
    p.style.color = color.value ;
    p.style.fontSize = size.value + "px" ;
    p.style.fontFamily = font.value ;
    p.style.backgroundColor = color1.value ;
    });

let It = document.querySelector('#It');
It.addEventListener('click',()=>  { if(p.style.fontStyle =="normal") p.style.fontStyle = "italic" ; else p.style.fontStyle = "normal"; });

let Gr = document.querySelector('#Gr');
Gr.addEventListener('click',()=>  { if(p.style.fontWeight =="normal") p.style.fontWeight = "bold" ; else p.style.fontWeight = "normal"; });

let Un = document.querySelector('#Un');
Un.addEventListener('click',()=>  { if(p.style.textDecorationLine =="none") p.style.textDecorationLine = "underline" ; else p.style.textDecorationLine = "none"; });


let left = document.querySelector('#Left');
left.addEventListener('click',()=>  { p.style.textAlign = "left"; });

let center = document.querySelector('#Center');
center.addEventListener('click',()=>  { p.style.textAlign = "center"; });

let right = document.querySelector('#Right');
right.addEventListener('click',()=>  { p.style.textAlign = "right"; });


let line = document.querySelector("#Line")
line.addEventListener('click',()=> {
    var inputText = text.value;
    if (inputText === '') 
          alert("Write your text plz!")
    else {p.textContent += "\n"+ inputText ; 
          text.value= "";
          }
    })

let delet = document.querySelector("#delete");
delet.addEventListener('click',()=> {
    if (p.textContent === '') 
          alert("Already Deleted")
    else p.textContent= "";
    })




   

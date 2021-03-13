var p = document.querySelector('p');
var div = document.querySelector('.row');
div.addEventListener('change',(e)=>{


    var color = document.querySelector('.color');
    var size = document.querySelector('.size');
    var font = document.querySelector('select');

    p.style.color = color.value ;
    p.style.fontSize = size.value + "px" ;
    p.style.fontFamily = font.value ;
           
    
});


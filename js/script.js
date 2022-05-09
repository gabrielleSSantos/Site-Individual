// let count = 1;
// document.getElementById("radio1").ckecked = true ;

// setInterval( function(){
//     nextImage();
// }, 2000)

// function nextImage(){
//     count++;
//     if(count>4){
//         count=1;
//     }
// document.getElementById("radio"+count).ckecked = true ;

// }

// ANIMAÇÃO DO TEXTO PAGINA INDEX
var i = 0;
// var A = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("text").innerHTML = txt.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

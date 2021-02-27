var front = false;
let ima;

var btn = document.getElementById("myBoton");
btn.addEventListener("click", carga);

var btn2 = document.getElementById('flip-button');
btn2.addEventListener("click", change);

const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const image = document.querySelector('img');
const constraints = {
  //video: true
  //video: { facingMode: (front? "user" : "environment") }
   video: { 
    //facingMode: (front? "user" : "environment"), 
    facingMode: "user",
    frameRate: { ideal: 10, max: 15 },
    width: 720, height: 480  } 
}

var btn3 = document.getElementById("myBtn");


function change(){
front = !front;
document.getElementById("xyz").style["background-image"] = "";
document.getElementById("output").style.visibility = "hidden";

}

function carga() {

  var names =  document.getElementById("names").value;
  console.log(names);
  //document.getElementById("texto").innerHTML = names;
  document.getElementById("xyz").style["background-image"] = 'url("'+names+'")';
}

  
  var loadFile = function(event) {
  ima = document.getElementById("output");
  ima.src = URL.createObjectURL(event.target.files[0]);
  ima.style.visibility = "visible";

};
  


//funciones para mover la  imagen

dragElement(document.getElementById("xyz"));

function updateSliderR(element) {
  var sliderValueR = document.getElementById("SliderRED").value;
  document.getElementById("xyz").style.width =  sliderValueR+"px"
  document.getElementById("output").style.width =  sliderValueR+"px"

  console.log(sliderValueR);

}

function updateSliderO(element) {
  var sliderValueOP = document.getElementById("SliderOP").value;
  document.getElementById("xyz").style.opacity =  sliderValueOP;

  console.log(sliderValueOP);

}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
  video.srcObject = stream;
  video.play();
}).catch(function(err){
})



function myFunction() {
  if (video.paused) {
    video.play();
    btn3.innerHTML = "Play";
  } else {
    video.pause();
    btn3.innerHTML = "Play";
  }
}
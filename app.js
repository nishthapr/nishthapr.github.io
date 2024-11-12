document.getElementById("Div1").innerHTML = "Hello, world!"; 



var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {


function plusSlides(x) {
  if(x == 1){
    var n = 1;
  }else{
    var n = -1;
  }

  document.getElementById("Div7").innerHTML = isNaN(n).toString();
  document.getElementById("Div5").innerHTML = n;
  document.getElementById("Div4").innerHTML = isNaN(slideIndex).toString();
  slideIndex += n;

  document.getElementById("Div6").innerHTML = isNaN(slideIndex).toString();
  showSlides(slidee);
}

document.getElementById("Div9").innerHTML = "file tis connected";

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  document.getElementById("Div8").innerHTML = "the function has run" + n;
  document.getElementById("Div9").innerHTML = isNaN(n).toString();

  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length} ;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(6==6){
   
  slides[slideIndex-1].style.display = "initial";
  }
}

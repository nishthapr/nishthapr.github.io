document.getElementById("Div1").innerHTML = "Hello, world!"; 

document.getElementById("Div9").innerHTML = "file tis connected";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.getElementById("Div9").innerHTML = "file tis connected";

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length} ;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(6==6){
  document.getElementById("Div9").innerHTML = "tis run!" + n; 
  slides[slideIndex-1].style.display = "initial";
  }
}

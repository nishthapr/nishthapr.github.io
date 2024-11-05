document.getElementById("Div1").innerHTML = "Hello, world!"; 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.getElementById("Div9").innerHTML = "file tis connected";

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  document.getElementById("Div9").innerHTML = "tis run!" + n; 

  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length} ;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "";
}

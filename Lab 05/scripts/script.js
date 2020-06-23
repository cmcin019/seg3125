$(document).ready(function(){
  $(".bike-span-wrapper").click(function(){
    $(".bike-option-info").slideToggle("slow");
  });
});


$(document).ready(function(){
  $(".wheels-span-wrapper").click(function(){
    $(".wheels-option-info").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".breaks-span-wrapper").click(function(){
    $(".breaks-option-info").slideToggle("slow");
  });
});


$(document).ready(function(){
  $(".frame-span-wrapper").click(function(){
    $(".frame-option-info").slideToggle("slow");
  });
});


















var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

// function codeAddress() {
//   setInterval(function(){ plusDivs(1); }, 5000);
// }
// window.onload = codeAddress;

// Code based off of:
//https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("body-deals-img");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    // dots[i].style.opacity = "1";
    dots[i].className = dots[i].className.replace(" demo-white", "");
  }
  x[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " demo-white";
}

























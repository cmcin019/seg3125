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



$("#datepicker").datepicker({
    beforeShowDay: function(date) {
        var day = date.getDay();
        return [(day != 1 && day != 2), ''];
    }
});




function swapProf() {
	document.getElementById("emp-sel").options.length = 0;
	// alert();
	var elem = document.getElementById("emp-sel");
	// alert();
	var time = document.getElementById("selTime");
	var opt = document.createElement('option');
	var opt2 = document.createElement('option');
	// alert(time.value);
	if (time.value == "10-11" || time.value == "11-12" || time.value == "12-13") {
		// alert(time.value);
	    opt.value = "day";
	    opt.innerHTML = "Henry Ford";
	    elem.appendChild(opt);
	    opt2.value = "day";
	    opt2.innerHTML = "Frank Sins";
	    elem.appendChild(opt2);
	} else {
	    opt.value = "day";
	    opt.innerHTML = "Sami Davis";
	    elem.appendChild(opt);
	    opt2.value = "day";
	    opt2.innerHTML = "Tuck Ever";
	    elem.appendChild(opt2);
	}
}















// https://jsfiddle.net/dae4y126/

function dateLoad(argument) {

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("min", today);


}


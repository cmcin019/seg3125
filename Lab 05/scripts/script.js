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
























var disabledDays = ["3-3-2020","3-17-2020","4-2-2020","4-3-2020","4-4-2020","4-5-2020"];

function nationalDays(date) {
    var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
    //console.log('Checking (raw): ' + m + '-' + d + '-' + y);
    for (i = 0; i < disabledDays.length; i++) {
        if($.inArray((m+1) + '-' + d + '-' + y,disabledDays) != -1 || new Date() > date) {
            //console.log('bad:  ' + (m+1) + '-' + d + '-' + y + ' / ' + disabledDays[i]);
            return [false];
        }
    }
    //console.log('good:  ' + (m+1) + '-' + d + '-' + y);
    return [true];
}
function noWeekendsOrHolidays(date) {
    var noWeekend = jQuery.datepicker.noWeekends(date);
    return noWeekend[0] ? nationalDays(date) : noWeekend;
}

jQuery(document).ready(function() {
    jQuery('#dateTimeInput').datepicker({
        minDate: new Date(2020, 5, 16),
        maxDate: new Date(2020, 6, 31),
        dateFormat: 'DD, MM, d, yy',
        constrainInput: true,
        beforeShowDay: noWeekendsOrHolidays
    });
});

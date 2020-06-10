
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function codeAddress() {
  setInterval(function(){ plusDivs(1); }, 5000);
}
window.onload = codeAddress;

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
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " demo-white";
}


//  $(window).scroll(function() {   
//    if($(window).scrollTop() + $(window).height() >= $(document).height()-5) {
//     document.getElementById("topnav").style.display = "block";
//    } else {
//     document.getElementById("footer").style.display = "none";
//    }
// });



// window.onscroll = function() {scrollFunc()};

// function scrollFunc() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("topnav").className = "topnav";
//   } else {
//     document.getElementById("topnav").className = "";
//   }
// }





function openInfo(evt, tabName) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  // document.getElementById("footer").style.display = "block";



  var cartLst = document.getElementById("center-title-cart");
  cartLst.innerHTML = "";

  var titlSpa = document.createElement("span");
  titlSpa.innerHTML = "<h2>Your chosen goods :</h2> <br> " ;

  cartLst.appendChild(titlSpa)
  var totalAmnt = 0;
  for (var i = 0; i < cartProductNameLst.length; i++) {

    var spa = document.createElement("span");
    spa.innerHTML = "   " + cartProductAmountLst[i] + " " + cartProductNameLst[i] + " $" + (cartProductPriceLst[i] * cartProductAmountLst[i]).toFixed(2) + "<br>";

    cartLst.appendChild(spa);

    totalAmnt = totalAmnt + (cartProductPriceLst[i] * cartProductAmountLst[i])

  }


  var space = document.createElement("div");
  space.style.height = "2px";
  space.style.width = "100%";
  space.style.margin = "0 auto";
  space.style.borderRadius = "10px";
  space.style.backgroundColor = "#fff";

  cartLst.appendChild(document.createElement("br"));
  cartLst.appendChild(space);
  cartLst.appendChild(document.createElement("br"));



  var totl = document.createElement("span");
  totl.innerHTML = "<h4>Total :</h4> $" + totalAmnt.toFixed(2);;

  cartLst.appendChild(totl);




  cartLst.style.textAlign = "left";

  if (cartProductNameLst.length == 0) {
    cartLst.innerHTML = "";
    cartLst.style.textAlign = "center";

    var spa = document.createElement("span");
    spa.innerHTML = " <span>Add iteams to your cart</span><br> <span>You will see them here with the total price</span>";


    cartLst.appendChild(spa);
  }

}


function getDealsOptions(str, val) {
  if (str == 'food') {
    var ele = document.getElementsByClassName("deals-body-food-span-option-food");
    if (val == "") {
      document.getElementById("category-food").value = "active";
      document.getElementById("category-food").style.color = "white";
      document.getElementById("category-food").style.backgroundColor = "#83947A";
      document.getElementById("category-food").style.border = "2px solid white";

      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "inline-block";   
      }
    } else {
      document.getElementById("category-food").value = "";
      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "none";   
      }
      document.getElementById("category-food").style.color = "#83947A";
      document.getElementById("category-food").style.backgroundColor = "white";
      document.getElementById("category-food").style.border = "2px solid #83947A";
    }
  }
  else if (str == 'appliances') {
    var ele = document.getElementsByClassName("deals-body-food-span-option-appliances");
    if (val == "") {
      document.getElementById("category-appliances").value = "active";
      document.getElementById("category-appliances").style.color = "white";
      document.getElementById("category-appliances").style.backgroundColor = "#83947A";
      document.getElementById("category-appliances").style.border = "2px solid white";

      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "inline-block";   
      }    
    } else {
      document.getElementById("category-appliances").value = "";
      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "none";   
      } 
      document.getElementById("category-appliances").style.color = "#83947A";
      document.getElementById("category-appliances").style.backgroundColor = "white";
      document.getElementById("category-appliances").style.border = "2px solid #83947A";
    }  
  }
  else if (str == 'electronics') {
    var ele = document.getElementsByClassName("deals-body-food-span-option-electronics");
    if (val == "") {
      document.getElementById("category-electronics").value = "active";
      document.getElementById("category-electronics").style.color = "white";
      document.getElementById("category-electronics").style.backgroundColor = "#83947A";
      document.getElementById("category-electronics").style.border = "2px solid white";

      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "inline-block";   
      }   
    } else {
      document.getElementById("category-electronics").value = "";
      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "none";   
      }  

      document.getElementById("category-electronics").style.color = "#83947A";
      document.getElementById("category-electronics").style.backgroundColor = "white";
      document.getElementById("category-electronics").style.border = "2px solid #83947A";
    } 
  }
  else if (str == 'outdoor') {
    var ele = document.getElementsByClassName("deals-body-food-span-option-outdoor");
    if (val == "") {
      document.getElementById("category-outdoor").value = "active";
      document.getElementById("category-outdoor").style.color = "white";
      document.getElementById("category-outdoor").style.backgroundColor = "#83947A";
      document.getElementById("category-outdoor").style.border = "2px solid white";

      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "inline-block";   
      }   
    } else {
      document.getElementById("category-outdoor").value = "";
      for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = "none";   
      }    
    
      document.getElementById("category-outdoor").style.color = "#83947A";
      document.getElementById("category-outdoor").style.backgroundColor = "white";
      document.getElementById("category-outdoor").style.border = "2px solid #83947A";
    } 
  }

  var catFoo = document.getElementById("category-food").value;
  var catApp = document.getElementById("category-appliances").value;
  var catElc = document.getElementById("category-electronics").value;
  var catOut = document.getElementById("category-outdoor").value;

  var eleLast = document.getElementsByClassName("sort-options");
  // alert(catFoo == "active" );
  if (catFoo == "active" || catApp == "active"|| catElc == "active" || catOut == "active") {
    for (var i = 0; i < ele.length; i++ ) {
      eleLast[i].style.display = "inline-block";   
    }   
  } else {
    for (var i = 0; i < ele.length; i++ ) {
      eleLast[i].style.display = "none"; 
    }
  }
}


function selectOptiom(val, id) {
  // alert();
  var tmp = document.getElementById(id);
   // alert();
  if (val == "") {
    tmp.value = "active";
    tmp.style.color = "white";
    tmp.style.backgroundColor = "#83947A";
    tmp.style.border = "2px solid white";
  } else {
    tmp.value = "";
    tmp.style.color = "#83947A";
    tmp.style.backgroundColor = "white";
    tmp.style.border = "2px solid #83947A";    
  }
}

function choseSort(lnkPho, str, val, spa, claT, opClass) {
// alert("hello");
  var cla = document.getElementsByClassName(claT);  
  // alert(cla);
  for (var i = 0; i < cla.length; i++ ) {
    // alert("hello");
    cla[i].style.color = "#83947A";
    cla[i].style.backgroundColor = "white";
    cla[i].style.border = "2px solid #83947A";
    cla[i].value = "";
  }   
  var ele = document.getElementById(str);
  ele.style.color = "white";
  ele.style.backgroundColor = "#83947A";
  ele.style.border = "2px solid white";
  ele.value = "active";

  document.getElementById(spa).style.display = "table";

  var namePriceLst = showItems(opClass, str);

  // alert(num);
  $("#"+lnkPho).empty();
  for (var i = 0; i < namePriceLst.length; i++) {

    // namePriceLst[i];
    var divOut = document.getElementById(lnkPho);
    // divOut.innerHTML = "";
    var nameVal = namePriceLst[i].name;

    var divIn = document.createElement("div");
    divIn.classList.add(lnkPho + "-unit");
    var imgI =  document.createElement("img");
    imgI.src = "photos/" + namePriceLst[i].name + ".png";
    imgI.alt = namePriceLst[i].name;
    imgI.classList.add("tablinks");
    imgI.value = nameVal;
    imgI.onclick =
        function(){  
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
          var close = document.getElementById("closeModal");
          var modDisp = document.getElementById("modal-content-inside");
          modDisp.innerHTML = "";
          // alert(this.nameVal)

          var imgI =  document.createElement("img");
          imgI.src = "photos/" + this.value + ".png";
          imgI.alt = this.value;
          imgI.style.width = "300px";
          imgI.style.borderRadius = "50%";
          imgI.style.border = "2px solid white";

          modDisp.appendChild(imgI);

          var modDisp = document.getElementById("modal-content-inside-name");
          modDisp.innerHTML = "<h2>" + this.value + "</h2>";

          var itemDescrpt = document.getElementById("modal-content-info")
          itemDescrpt.innerHTML = "<h2>Description</h2> <br>";

          for (var i = 0; i < products.length; i++) {
            if (products[i].name == this.value) {
              
              itemDescrpt.append(products[i].description);
              // itemDescrpt.appendChild(document.createElement("br"));

              var priceIn = document.getElementById("modal-content-Price");


              priceIn.innerHTML = "";


              priceIn.appendChild(document.createElement("br"));
              priceIn.append(products[i].price + " CAD");
            
              var inNum = document.getElementById("modal-content-Price-num");
              inNum.innerHTML = "";

              var inputNum = document.createElement('input');
              inputNum.type = 'number';
              inputNum.name = 'product';
              inputNum.id = products[i].name;
              inputNum.min = 1;
              inputNum.value = 1;
              inputNum.style.width = "30px";
              var strPrice = products[i].name + "Price";

              var inNumContent = document.getElementById("modal-content-Price");
              inNumContent.value = products[i].price;

              inputNum.addEventListener('change', function() { updateProductPrice(this.id, "modal-content-Price"); }, false);
              inNum.appendChild(inputNum);



              var addToCart = document.getElementById("addCart");
              addToCart.value = products[i].name;
              addToCart.name = products[i].price;


              addToCart.onclick = function() {
                var str = document.getElementById(this.value);
                cartProductPriceLst.push(this.name);
                cartProductNameLst.push(this.value);
                cartProductAmountLst.push(str.value);
                // alert(cartProductNameLst);
                modal.style.display = "none";

              }
            }
          }


          close.onclick = function() {
            modal.style.display = "none";
          }
      };

    var divInBot = document.createElement("div");
    divInBot.classList.add(lnkPho+"-unit-text");
    var sp = document.createElement("span");

    sp.innerHTML = namePriceLst[i].name + "<br> $" + namePriceLst[i].price;
    sp.id = lnkPho+"-unit-text";
    sp.value = nameVal;
    sp.onclick =
        function(){  
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
          var close = document.getElementById("closeModal");
          var modDisp = document.getElementById("modal-content-inside");
          modDisp.innerHTML = "";
          // alert(this.nameVal)

          var imgI =  document.createElement("img");
          imgI.src = "photos/" + this.value + ".png";
          imgI.alt = this.value;
          imgI.style.width = "300px";
          imgI.style.borderRadius = "50%";
          imgI.style.border = "2px solid white";

          modDisp.appendChild(imgI);

          var modDisp = document.getElementById("modal-content-inside-name");
          modDisp.innerHTML = "<h2>" + this.value + "</h2>";

          var itemDescrpt = document.getElementById("modal-content-info")
          itemDescrpt.innerHTML = "<h2>Description</h2> <br>";

          for (var i = 0; i < products.length; i++) {
            if (products[i].name == this.value) {
              
              itemDescrpt.append(products[i].description);
              // itemDescrpt.appendChild(document.createElement("br"));

              var priceIn = document.getElementById("modal-content-Price");


              priceIn.innerHTML = "";


              priceIn.appendChild(document.createElement("br"));
              priceIn.append(products[i].price + " CAD");
            
              var inNum = document.getElementById("modal-content-Price-num");
              inNum.innerHTML = "";

              var inputNum = document.createElement('input');
              inputNum.type = 'number';
              inputNum.name = 'product';
              inputNum.id = products[i].name;
              inputNum.min = 1;
              inputNum.value = 1;
              inputNum.style.width = "30px";
              var strPrice = products[i].name + "Price";

              var inNumContent = document.getElementById("modal-content-Price");
              inNumContent.value = products[i].price;

              inputNum.addEventListener('change', function() { updateProductPrice(this.id, "modal-content-Price"); }, false);
              inNum.appendChild(inputNum);



              var addToCart = document.getElementById("addCart");
              addToCart.value = products[i].name;
              addToCart.name = products[i].price;


              addToCart.onclick = function() {
                var str = document.getElementById(this.value);
                cartProductPriceLst.push(this.name);
                cartProductNameLst.push(this.value);
                cartProductAmountLst.push(str.value);
                // alert(cartProductNameLst);
                modal.style.display = "none";

              }
            }
          }


          close.onclick = function() {
            modal.style.display = "none";
          }
      };

    divInBot.appendChild(sp);
    divIn.appendChild(imgI);
    divIn.appendChild(divInBot);

    divOut.appendChild(divIn);  

  }

}














function showItems(opClassTmp, str) {
  var opClass = document.getElementsByClassName(opClassTmp)
  let product_names = [];
  let tmpLst = [];
  // alert(products.name);
  // Sorting algorithms were based on :
  // https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
  
  var class_itms = [];
  for (var i = 0; i < opClass.length; i++ ) {
    if (opClass[i].value != "") {
      var strOpTmp = opClass[i].id.toLowerCase();
      var newStrOpTmp= strOpTmp.substr(0, strOpTmp.indexOf('-')); 
      class_itms.push(newStrOpTmp);
    }
  }

  for (var m = 0; m < class_itms.length; m++) {
    class_itms[m];

    for (let n=0; n<products.length; n+=1) {
      // alert(products[n].name);
      // alert(product_names.includes(products[n].name));
      if (products[n][class_itms[m]] == true && !(tmpLst.includes(products[n].name))) {
        tmpLst.push(products[n].name);
        product_names.push({name: products[n].name, price: products[n].price.toFixed(2)});
        // product_names.push(products[n].price.toFixed(2));
      }
    }
  }

  if (str == 'high_to_low') {
    product_names.sort(function(a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });
  } else if (str == 'low_to_high') {
    product_names.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
  } else if (str == 'a_to_z') {
    product_names.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else {
    product_names.sort(function(a, b) {
      var nameA = b.name.toUpperCase(); // ignore upper and lowercase
      var nameB = a.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  // alert(product_names[0].name);
  return product_names;

}



function updateProductPrice(prodName, price) {

  var elem = document.getElementById(price);
  var elemName = document.getElementById(prodName);
  var tmp = elem.value * elemName.value;
  elem.innerHTML = "<br>" + tmp.toFixed(2) + " CAD";

}


function search(){  


  var nameOfProdSearch = document.getElementById("search").value;
  var boo = 0;
  for (var z = 0; z < products.length; z++) {
    if(products[z].name == nameOfProdSearch) {
      boo = 1;
    }
  }


  if (boo == 0) {
    alert("We regret to inform you that this product is not available");
  } else {

    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    var close = document.getElementById("closeModal");
    var modDisp = document.getElementById("modal-content-inside");
    modDisp.innerHTML = "";
    // alert(this.nameVal)

    var imgI =  document.createElement("img");
    imgI.src = "photos/" + nameOfProdSearch + ".png";
    imgI.alt = nameOfProdSearch;
    imgI.style.width = "300px";
    imgI.style.borderRadius = "50%";
    imgI.style.border = "2px solid white";

    modDisp.appendChild(imgI);

    var modDisp = document.getElementById("modal-content-inside-name");
    modDisp.innerHTML = "<h2>" + nameOfProdSearch + "</h2>";

    var itemDescrpt = document.getElementById("modal-content-info")
    itemDescrpt.innerHTML = "<h2>Description</h2> <br>";

    for (var i = 0; i < products.length; i++) {
      if (products[i].name == nameOfProdSearch) {
        
        itemDescrpt.append(products[i].description);
        // itemDescrpt.appendChild(document.createElement("br"));

        var priceIn = document.getElementById("modal-content-Price");


        priceIn.innerHTML = "";


        priceIn.appendChild(document.createElement("br"));
        priceIn.append(products[i].price + " CAD");
      
        var inNum = document.getElementById("modal-content-Price-num");
        inNum.innerHTML = "";

        var inputNum = document.createElement('input');
        inputNum.type = 'number';
        inputNum.name = 'product';
        inputNum.id = products[i].name;
        inputNum.min = 1;
        inputNum.value = 1;
        inputNum.style.width = "30px";
        var strPrice = products[i].name + "Price";

        var inNumContent = document.getElementById("modal-content-Price");
        inNumContent.value = products[i].price;

        inputNum.addEventListener('change', function() { updateProductPrice(this.id, "modal-content-Price"); }, false);
        inNum.appendChild(inputNum);



        var addToCart = document.getElementById("addCart");
        addToCart.value = products[i].name;
        addToCart.name = products[i].price;


        addToCart.onclick = function() {
          var str = document.getElementById(this.value);
          cartProductPriceLst.push(this.name);
          cartProductNameLst.push(this.value);
          cartProductAmountLst.push(str.value);
          // alert(cartProductNameLst);
          modal.style.display = "none";

        }
      }
    }


    close.onclick = function() {
      modal.style.display = "none";
    }
  }
};





function resetCart(){
  cartProductPriceLst = [];
  cartProductNameLst = [];
  cartProductAmountLst = [];
  openInfo(event, 'Cart');
}





















// function showSorts(argument) {
//   alert();
//   var eleLast = document.getElementsByClassName(argument + "-sort-options");
//   eleLast[i].style.display = "inline-block";   
//   // alert(catFoo == "active" );
// }
























































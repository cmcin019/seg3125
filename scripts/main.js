
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

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
	document.getElementById("footer").style.display = "block";

}

 $(window).scroll(function() {   
   if($(window).scrollTop() + $(window).height() >= $(document).height()-5) {
   	document.getElementById("footer").style.display = "block";
   } else {
   	document.getElementById("footer").style.display = "none";
   }
});

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct3, slct2, slct4) {
    var s1 = document.getElementById(slct1);
    var s3 = document.getElementById(slct3);
    var s2 = document.getElementById(slct2);
    var s4 = document.getElementById(slct4);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
    // s2.append('<button class="tablinks" onclick="openInfo(event, \'Item\')">');
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, s3.value, s4.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i = i + 2) {
			
		var productName = optionArray[i];
		// create the number input and add in HTML DOM

		var inputNum = document.createElement('input');
		inputNum.type = 'number';
		inputNum.name = 'product';
		inputNum.id = productName;
		inputNum.min = 0;
		inputNum.value = 0;
		var strPrice = productName + "Price";

		inputNum.addEventListener('change', function() { updateProductPrice(this.id, this.id + "Price"); }, false);


		s2.appendChild(inputNum);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('button')
		label.htmlFor = productName;
		// label.class = "tablinks";
		label.value = productName;
		label.onclick = 
		function(){  

			var displayItem = document.getElementById('displayItem');
			displayItem.innerHTML = "<h2>" + this.value + "</h2>";

			var img = document.createElement('img');
			img.src = "photos/"+this.value+".png";
			img.width = 400;

			displayItem.appendChild(img);

			var itemDescrpt = document.getElementById('itemDescrpt');
			itemDescrpt.innerHTML = "<h2>Description</h2>";

			for (var i = 0; i < products.length; i++) {
				if (products[i].name == this.value) {
					
					itemDescrpt.append(products[i].description);
					itemDescrpt.appendChild(document.createElement("br"));
					var cost = document.createElement("h2");
					cost.innerHTML = "Cost";

					itemDescrpt.appendChild(cost);
					itemDescrpt.append(products[i].price + " CAD");
				}
			}

			openInfo(event, 'Item'); 


		   if($(window).scrollTop() + $(window).height() >= $(document).height()-5) {
		   	document.getElementById("footer").style.display = "block";
		   } else {
		   	document.getElementById("footer").style.display = "none";
		   }



			return false;
  		};

		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		var spa = document.createElement('span');
		spa.id = optionArray[i] + "Price";
		spa.value = optionArray[i + 1];
		spa.innerHTML = optionArray[i + 1];

		var spa2 = document.createElement('span');
		spa2.innerHTML = '$';
		s2.appendChild(spa2);
		s2.appendChild(spa);







		
		// create a breakline node and add in HTML DOM
		// s2.append("</button>");
		s2.appendChild(document.createElement("br"));    
	}

	var extra = document.getElementById('extra');
	extra.innerHTML = '<br><i>* Press on the item for more details</i>';
	document.getElementById("addCart").style.display = "block";
	document.getElementById("reset").style.display = "block";
	openInfo(event, 'Products');
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	// alert(ele[2].value);
	for (i = 0; i < ele.length; i++) { 

		if (ele[i].value > 0) {
			para.append(ele[i].value + " ");
			para.appendChild(document.createTextNode(ele[i].id));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].id);
			chosenProducts.push(ele[i].value);
	
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts) + "$"));
		
	openInfo(event, 'Cart'); 
}





function updateProductPrice(prodName, price) {

	var elem = document.getElementById(price);
	var elemName = document.getElementById(prodName);
	var tmp = elem.value * elemName.value;
	elem.innerHTML = tmp.toFixed(2);

}























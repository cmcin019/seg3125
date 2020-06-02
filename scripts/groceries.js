	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, est et efficitur dapibus, mi nulla bibendum turpis, at facilisis quam orci eget ex. Vivamus nec nibh urna. Vivamus ac tristique ex. Mauris quis lectus sem. Integer dapibus leo vel elit hendrerit auctor. Morbi sit amet lorem a lectus porttitor convallis in non urna. Praesent lacus purus, semper rutrum pulvinar quis, varius at nibh. Proin non accumsan velit."
	},
	{
		name: "cabbage",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.35,
		description: "Nulla et massa fermentum felis dignissim tempus in at augue. Fusce consectetur arcu non ante finibus, pellentesque rutrum libero tincidunt. Pellentesque venenatis diam eget eros dignissim fringilla. Curabitur sollicitudin quam ex, luctus efficitur nisl porta in. Aenean a turpis bibendum orci sagittis mollis. Duis ut ullamcorper augue. Nunc id tincidunt elit. Donec porta ullamcorper efficitur. In scelerisque efficitur lorem ac mollis. Donec est neque, faucibus nec felis non, congue lacinia massa. Nam non porta urna."
	},
	{
		name: "corn",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 5.99,
		description: "Quisque eleifend justo sed porta laoreet. Morbi laoreet ante vel eros aliquet, et commodo justo lobortis. Fusce interdum laoreet volutpat. Nam molestie malesuada tellus, et gravida ex. Quisque iaculis maximus erat fringilla porttitor. Vestibulum accumsan sed urna a condimentum. Sed tristique luctus dolor, non suscipit sem finibus sed. Phasellus finibus tortor metus, id aliquet ante vulputate eget. Duis aliquam, ligula venenatis porttitor dictum, lorem diam dapibus libero, sit amet egestas metus arcu sit amet nibh. Nam a nisi at ante aliquam dictum."
	},
	{
		name: "bressel sprouts",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.35,
		description: "Fusce tempus viverra placerat. Nullam ut nunc urna. Aliquam dictum mauris interdum odio condimentum molestie. Praesent eget elementum purus. Morbi vitae lectus eget sem ultrices egestas. Mauris ut eros commodo quam commodo varius ac id justo. Etiam ipsum dolor, sodales vitae quam eget, efficitur ullamcorper sapien. Nullam justo nibh, laoreet sed magna at, fermentum euismod massa. Etiam hendrerit eu turpis eget finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce interdum sed odio a porttitor."
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 1.99,
		description: "Sed eget lacus dignissim, euismod sapien condimentum, pharetra odio. Curabitur id eros ac ligula pulvinar ullamcorper. Quisque tempus nibh quis tortor ornare, eget volutpat quam egestas. Morbi tempus, lectus eget bibendum dapibus, turpis lacus consectetur neque, vitae dapibus urna tortor sit amet ex. Mauris sagittis nibh nec nulla bibendum luctus. Nunc non mattis purus. Duis vehicula maximus mauris ut efficitur. Aliquam sit amet augue nec enim dictum blandit."
	},
	{
		name: "puding",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 2.35,
		description: "Suspendisse potenti. Vivamus porta ligula sed nunc facilisis, fringilla ultricies lacus scelerisque. Aliquam libero nibh, aliquet non erat nec, sodales commodo mauris. Sed vitae ex dapibus, sagittis lorem eu, porttitor lorem. Duis dictum laoreet dignissim. Morbi lorem augue, faucibus et ipsum eget, commodo venenatis ex. Nunc lacinia quam id ultrices blandit. Nullam fringilla erat eget maximus maximus. Phasellus in euismod diam. Ut eu massa enim. Morbi velit ex, convallis et massa a, vulputate posuere leo. Nunc faucibus, augue efficitur ullamcorper euismod, turpis nisl pharetra lectus, non vehicula lorem odio dictum neque. Vestibulum in libero sapien. Pellentesque at lorem lacinia, placerat leo vitae, pellentesque tortor. Aliquam sit amet interdum ipsum. Cras ut interdum justo."
	},
	{
		name: "clementine",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		description: "Nullam ac tristique tellus. Nam eget ex eget leo blandit suscipit. Duis a lorem luctus, ornare nisi pharetra, finibus massa. Aenean felis enim, placerat ac urna vel, tempus pharetra nibh. Donec sodales dui nisi, vel scelerisque nulla aliquet in. Nullam volutpat sapien non fermentum posuere. Vivamus felis sapien, ultricies ac imperdiet vel, pretium eu neque. Quisque a leo eros."
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		description: "Curabitur vestibulum lorem at turpis faucibus varius. Nulla a varius quam. Vivamus sit amet tellus ut nulla pharetra tristique ut rutrum ex. Vivamus vehicula placerat nibh, elementum elementum magna convallis at. Aenean in tempor est, ac sodales tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sed mattis lacus. Suspendisse consectetur semper orci. Pellentesque vestibulum orci quis ipsum pellentesque, sed eleifend tellus fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dictum nisl et faucibus congue."
	},
	{
		name: "tofu",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 10.00,
		description: "Fusce sollicitudin turpis dignissim odio tempus, eget pulvinar eros laoreet. Praesent suscipit eget nisl at lacinia. Aenean vehicula fringilla nunc at lacinia. Fusce vitae turpis vitae magna aliquam sollicitudin sit amet et ante. Vestibulum laoreet diam ullamcorper augue dictum, vel gravida velit faucibus. Donec eget consectetur mi, id maximus augue. Sed ante neque, rhoncus vitae aliquam vitae, pellentesque non mauris. Nunc nec nunc ipsum. Quisque at enim et sapien dictum semper. Morbi ut magna eget leo ullamcorper tempus. Aenean rutrum lobortis neque sed rhoncus. Integer luctus libero et odio posuere, posuere vestibulum risus feugiat. Sed tristique nec lorem et ultrices. Donec euismod quam a quam convallis, sollicitudin porttitor dolor semper. Praesent porta euismod porta."
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 23.50,
		description: "Nam blandit, lacus in tempor commodo, est elit volutpat elit, in vestibulum eros nisi ac ligula. Curabitur ac tellus purus. Nulla in nisi magna. In congue ante non ligula condimentum laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec posuere leo neque. Donec elementum sodales imperdiet. Nam odio eros, auctor non metus condimentum, volutpat sollicitudin lectus."
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, orgRes, sort) {
	let product_names = [];

	// Sorting algorithms were based on :
	// https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
	
	if (sort == 'high_to_low') {
		prods.sort(function(a, b) {
		    return parseFloat(b.price) - parseFloat(a.price);
		});
	} else if (sort == 'low_to_high') {
		prods.sort(function(a, b) {
		    return parseFloat(a.price) - parseFloat(b.price);
		});
	} else if (sort == 'a_to_z') {
		prods.sort(function(a, b) {
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
		prods.sort(function(a, b) {
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

	for (let i=0; i<prods.length; i+=1) {
		if ((orgRes == "show_organic") && (prods[i].organic == true) || (orgRes != "show_organic")) {

			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
				product_names.push(prods[i].price.toFixed(2));
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
				product_names.push(prods[i].price.toFixed(2));
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
				product_names.push(prods[i].price.toFixed(2));
			}
			else if ((restriction == "GlutenMeatFree") && (prods[i].glutenFree == true) && (restriction == "GlutenMeatFree") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
				product_names.push(prods[i].price.toFixed(2));
			}
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;

	for (var i = 0; i < chosenProducts.length; i = i + 2) {
		for (var j = 0; j < products.length; j++) {
			if (chosenProducts[i] == products[j].name) {
				// alert(products[j].name);
				totalPrice += products[j].price * chosenProducts[i+1];
			}
		}
	}

	return totalPrice.toFixed(2);
}










































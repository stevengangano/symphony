document.getElementById("results").innerHTML = ""

$.ajax({
    url: "https://api.myjson.com/bins/1040j",
    // url: "../symphonyJSON.js",
    dataType: "json",
    success: function(data) {
   
    for(i=0;i<data.products.length;i++){

   		var jdata = data.products[i]// loops through everything in volumeInfo array
 		
   		// Inserts title, author, description, thumbnail, button here
   		var mainDiv = document.createElement('div') 
   		mainDiv.setAttribute('id', 'background')
    	mainDiv.className = "col-lg-4 col-md-4 col-sm-6 col-xs-12"

   		//Product Image
   		var newImg=document.createElement('img')
   		var innerDiv=document.createElement('div')
   		var HR = document.createElement('HR')
   		innerDiv.className = 'innerDiv';
   		HR.className=('hr')
   		newImg.setAttribute('src', jdata.mainImage.ref)
   		newImg.setAttribute('alt', 'some fiji image')
   		newImg.className = 'productImage';
   		innerDiv.appendChild(newImg)
   		mainDiv.appendChild(innerDiv)
   		mainDiv.appendChild(HR)
   	
   		//Product Name
   		var newH5=document.createElement('h6')
   		var title= document.createTextNode(jdata.name)
   		newH5.className="productName";
   		newH5.appendChild(title)
   		mainDiv.appendChild(newH5)

   		price1 = jdata.defaultPriceInCents 

   		//Product Price
   		var newH6 = document.createElement('h6')
   		var price = document.createTextNode("$" + price1/100)
   		newH6.className = 'productPrice'
   		newH6.appendChild(price)
   		mainDiv.appendChild(newH6)

   		if (price1 === 995) {
    		document.getElementById('background').style.display = 'none';
    	}

   		document.getElementById('results').appendChild(mainDiv)

   		//Bonus Questions:
		// Create a filtering rule (eg, hide products if less than $20)
		// Create sorting rule (eg, display products by name, price, date)

    	} //FOR LOOP END
    }, //SUCCESS END
    type: 'GET'
}); //AJAX END




document.getElementById("results").innerHTML = ""

$.ajax({
    url: "https://api.myjson.com/bins/1040j",
    dataType: "json",
    success: function(data) {

     for(i=0;i<data.products.length;i++){

      var productData = data.products[i]
    
      //Inserts product image, name, andn price 
      var mainDiv = document.createElement('div') 
      mainDiv.setAttribute('id', 'background')
      mainDiv.className = "col-lg-4 col-md-4 col-sm-6 col-xs-12"


      //Product Image
      var newImg=document.createElement('img')
      var innerDiv=document.createElement('div')
      var HR = document.createElement('HR')
      innerDiv.className = 'innerDiv';
      HR.className=('hr')
      newImg.setAttribute('src', productData.mainImage.ref)
      newImg.setAttribute('alt', 'some fiji image')
      newImg.className = 'productImage';
      innerDiv.appendChild(newImg)
      mainDiv.appendChild(innerDiv)
      mainDiv.appendChild(HR)
    
      //Product Name
      var newH5=document.createElement('h6')
      var title= document.createTextNode(productData.name)
      newH5.className="productName";
      newH5.appendChild(title)
      mainDiv.appendChild(newH5)
     
      //Product Price
      var dollarAmount = productData.defaultPriceInCents/100
      var newH6 = document.createElement('h6')
      var price = document.createTextNode("$" + dollarAmount)
      newH6.className = 'productPrice'
      newH6.appendChild(price)
      mainDiv.appendChild(newH6)  

      document.getElementById('results').appendChild(mainDiv)

      //My attempt to filtering each product by price
      var productPrices = productData.defaultPriceInCents/100
      console.log(productPrices)

      //Show under $10
      var underTenfilter = function(price) {
          return price > 9.95
      }

      var underTen = function() {
          var filteredPrices1 = productPrices.filter(underTenfilter)
          if (filteredPrices1) {         
            $("#background").css("display", "none");
          }
      }

      //Show $11 - $20
      var elevenAndtwenty = function() {
          if (productPrices < 10 || productPrices > 20) {         
            $("#background").css("display", "none");
          }
      }

      //Show $21 - $35
      var twentyoneAndthirtyfiveFilter  = function(price) {
        return price <= 20

      }

      var twentyoneAndthirtyfive = function() {
          var filteredPrices2 = productPrices.filter(underTenfilter)
          if (filteredPrices2) {         
            $("#background").css("display", "none");
          }
      }


      } //FOR LOOP END
    }, //SUCCESS END
    type: 'GET'
}); //AJAX END





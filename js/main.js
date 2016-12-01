document.getElementById("results").innerHTML = ""

$.ajax({
    url: "https://api.myjson.com/bins/1040j",
    dataType: "json",
    success: function(data) {

     for(i=0;i<data.products.length;i++){

      var productData = data.products[i]
    
      // Inserts product image, name, andn price 
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
      newImg.setAttribute('id', 'pImage')
      innerDiv.appendChild(newImg)
      mainDiv.appendChild(innerDiv)
      mainDiv.appendChild(HR)
    
      //Product Name
      var newH5=document.createElement('h6')
      var title= document.createTextNode(productData.name)
      newH5.className="productName";
      newH5.setAttribute('id', 'product')
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

    //   Filter Attempt
    //   $("#underTen").click(function(){     
    //     if(dollarAmount == 20) {
    //       $(".productName").css("display", "none");
    //       Look up how to hide "dollarAmount"
    //     }
    // });


  

      } //FOR LOOP END
    }, //SUCCESS END
    type: 'GET'
}); //AJAX END





document.getElementById("results").innerHTML = ""

$.ajax({
    url: "https://api.myjson.com/bins/1040j",
    // url: "../symphonyJSON.js",
    dataType: "json",
    success: function(data) {

    //   var products = data.products


      function morethantwenty () {
      filteredProduct = products.filter(function(product){
          // return product.defaultPriceInCents > 20;
         return product.defaultPriceInCents/100 > 20
      })
    }

    // var morethantwenty = function(){
    //   return products.filter(function(){
    //     return   
    //   })
    // }

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


      document.getElementById('results').appendChild(mainDiv)

    //   var products = data.products

    //   function morethantwenty () {
    //   filteredProduct = products.filter(function(product){
    //       // return product.defaultPriceInCents > 20;
    //      return product.defaultPriceInCents/100 > 20
    //   })
    // }

    var morethantwenty = function(){
      return jdata.filter(function(product){
        if (product.defaultPriceInCents/100 > 20) {
          $("#hide").click(function(){
              $("p").hide();
          });
        } 
      })
    }

      //Bonus Questions:
    // Create a filtering rule (eg, hide products if less than $20)
    // Create sorting rule (eg, display products by name, price, date)

      } //FOR LOOP END
    }, //SUCCESS END
    type: 'GET'
}); //AJAX END

//      belowTenDollars = function () {      
  //     if ((jdata.defaultPriceInCents/100) < 10.00) {
  //       $(".productImage").css("display", "none");
  //       $(".hr").css("display", "none");
  //       $(".productName").css("display", "none");
  //       $(".productPrice").css("display", "none");
  //     }
  //   }

  //   $("#ten").click(function(){
  //     // if (hdata.defaultPriceInCents < 20000 {
  //     $(".productImage").css("display", "none");
  //     $(".hr").css("display", "none");
  //     $(".productName").css("display", "none");
  //     $(".productPrice").css("display", "none");
  //   // } 
  // });

  //       $("#show").click(function(){
  //     // if (hdata.defaultPriceInCents < 20000 {
  //     $(".productImage").css("display", "inline-block");
  //     $(".hr").css("display", "block");
  //     $(".productName").css("display", "block");
  //     $(".productPrice").css("display", "block");
  //   // } 
  // });




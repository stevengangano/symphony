function searchBooks(){
	var search =  document.getElementById("search").value
	document.getElementById("results").innerHTML = ""

	$.ajax({
	    url: "https://www.googleapis.com/books/v1/volumes?q=" + search ,
	    dataType: "json",
	    success: function(data) {
	   
	    for(i=0;i<data.items.length;i++){
	   		var jdata = data.items[i].volumeInfo // loops through everything in volumeInfo array
	 
	   		// Inserts title, author, description, thumbnail, button here
	   		var mainDiv = document.createElement('div') 
	    	mainDiv.className = "col-sm-12 img-thumbnail"


	   		// Title
	   		var newH5=document.createElement('h5')
	   		var title= document.createTextNode('Title: ' + jdata.title)
	   		newH5.appendChild(title)
	   		mainDiv.appendChild(newH5)

	   		// Author
	   		var newH6= document.createElement('h6')
	   		var author= document.createTextNode('Author: ' + jdata.authors[0])
	   		newH6.appendChild(author)
	   		mainDiv.appendChild(newH6)

	
	   		// Description
	   		var para=document.createElement('P')
	   		var description=document.createTextNode('Description: ' + jdata.description)
	   		para.className='desc'
	   		para.appendChild(description)
	   		mainDiv.appendChild(para)


	   		// Thumbnail 
	   		var newImg=document.createElement('img')
	   		newImg.setAttribute('src', jdata.imageLinks.thumbnail)
	   		newImg.className="img-rounded img-responsive"
	   		newImg.className="margin"
	   		mainDiv.appendChild(newImg)

	   		// Learn more Button
	   		var newDiv=document.createElement('div')
	   		var newAtag=document.createElement('a')
	   		newAtag.innerHTML = "Learn more"
	   		newAtag.className = "btn btn-info"
	   		newAtag.setAttribute('href', jdata.infoLink)
	   		newAtag.setAttribute('target', '_blank')
	   		newDiv.appendChild(newAtag)
	 		mainDiv.appendChild(newDiv)

	   		document.getElementById('results').appendChild(mainDiv)

	    }
	    },
	    type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', searchBooks, false)


// Activates the enter key
function searchKeyPress(e) {
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('button').click();
        return false;
    }
    return true;
}










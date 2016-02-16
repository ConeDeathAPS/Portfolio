//BEGIN ALGORITHM VIS CODE//
var elements;
var data;
//reset the visualization
var buildVis = function(data) {
	elements = [];
	$("#bubble_sort").empty();
	var target = document.getElementById("bubble_sort");
	for (i = 0; i < data.length; i++) {
		//init the rect element
		var rectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		//calculate x and y pos
		var y = 134-data[i];
		var x = (i*2) + (i*20);
		//set attributes
		rectElement.setAttribute("height", data[i]);
		rectElement.setAttribute("width", 20);
		rectElement.setAttribute("x", x);
		rectElement.setAttribute("y", y);
		rectElement.setAttribute("id", "index" + i);
		//append the rect element
		target.appendChild(rectElement);
		elements.push(rectElement);
	}
	//init and append the pointers
	var pointerElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	pointerElement.setAttribute("points", "10,25 5,5 15,5");
	pointerElement.setAttribute("id", "pointer");
	target.appendChild(pointerElement);
	var runnerElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	runnerElement.setAttribute("points", "32,25 27,5 37,5");
	runnerElement.setAttribute("id", "runner");
	target.appendChild(runnerElement);
	console.log(elements);
}

var bubbleSort = function(data, speed) {
	var swapped = true;
	setInterval(function() {
		//get elements to move
		var indicator = document.getElementById("b_sort_indicator");
		var pointer = document.getElementById("pointer");
		var runnerElem = document.getElementById("runner");	
		indicator.style.visibility = "hidden";
		//if we made a swap, then we may not be done yet so check again for something to swap		
		if (swapped) {
			swapped = false;
			var i = 0;
			var runner = i+1;
			transformDist = 22;
			//move the pointers
			pointer.setAttribute("transform", "translate("+(transformDist*i)+")");
			runnerElem.setAttribute("transform", "translate("+(transformDist*i)+")");
			indicator.style.visibility = "hidden";
			setInterval(function() {
				//perform a swap if it is needed
				if (i < data.length-1) {
					if (data[i] > data[runner]) {
						indicator.style.visibility = "visible";
						//store the current positions of the pointed and runto elements as numbers
						var i_pos = Number(elements[i].attributes[2].value);
						var r_pos = Number(elements[runner].attributes[2].value);
						//swap elements visually
						elements[i].setAttribute("x", i_pos += 22);
						elements[runner].setAttribute("x", r_pos -= 22);
						//swap the elements in the elements array
						var temp = elements[i];
						elements[i] = elements[runner];
						elements[runner] = temp;
						//swap in data array
						temp = data[i];
						data[i] = data[runner];
						data[runner] = temp;
						swapped = true;
					} else {
						indicator.style.visibility = "hidden";
					}
					i++;
					runner++;	
					pointer.setAttribute("transform", "translate("+(transformDist*i)+")");
					runnerElem.setAttribute("transform", "translate("+(transformDist*i)+")");				
				} else {
					clearInterval();
				}
			}, speed);
		} else {
			return true;
		}
	}, speed*20);
}
//END ALGORITHM VIS CODE//
// ===============================BEGIN CAROUSEL FUNCTIONS==========================//
//preload the images and return them in an array
var loadImages = function() {

	img1 = new Image();
	img2 = new Image();
	img3 = new Image();
	img4 = new Image();
	img5 = new Image();

	img1.src = "./static/images/F1DB_team.png";
	img1.title = String("Uses the Ergast and Google Maps APIs, LAMP stack, and Materialize.<p><button data-toggle='modal' data-target='#F1Modal' class='btn btn-default'>More about F1 Databucket</button></p>");
	img2.src = "./static/images/voicechat_chat.png";
	img2.title = String("Uses WebRTC for peer-to-peer audio streaming, MEAN stack. Also uses Socket.io for text chat.<p><button data-toggle='modal' data-target='#VCModal' class='btn btn-default'>More about Voicechat</button></p>");
	img3.src = "./static/images/evit_event.png";
	img3.title = String("Event Organization app using Rails. Team project with <a href='http://www.linkedin.com/in/erikarudzis'>Erika Rudzis.</a><p><button data-toggle='modal' data-target='#EvitModal' class='btn btn-default'>More about Evitorg</button></p>");
	img4.src = "./static/images/magrathea_main.png";
	img4.title = String("Our first project! eCommerce app using LAMP. Team project with <a href='http://www.linkedin.com/in/brandonwebdev'>Brandon Williams</a> and <a href='http://www.linkedin.com/in/erikarudzis'>Erika Rudzis.</a><p><button data-toggle='modal' data-target='#MagModal' class='btn btn-default'>More about Magrathea</button></p>");
	img5.src = "./static/images/winslow_main.png";
	img5.title = String("Winslow is a hair salon in Kirkland Washington. I redesigned their website for easier access on mobile devices, and an updated look on desktop.<p><button data-toggle='modal' data-target='#WinslowModal' class='btn btn-default'>More about Winslow</button></p>");


	images = [img1, img2, img3, img4, img5];
	console.log("Loaded images", images);
	return carouselInit(images);
}
//load the first image into the carousel
var carouselInit = function(images) {
	$("#carousel").prepend(images[counter]).fadeIn('fast', function() { $(".carousel_move").fadeIn('fast');});
	$("#caption").html(images[counter].title);

}
//traverse the carousel based upon whatever direction the user wants to go (based upon the id attribute of the icon they clicked on)
var carouselTraverse = function(direction) {
	var index;
	//go whichever direction was clicked
	if (direction === "next") {
		counter++;
	} else if (direction === "prev") {
		counter--;
	} else {
		console.log("Whoops!", direction);
	}
	//if the counter is less than 0, then we must begin using abs()
	//using mod so that no matter how many times they click, index will always be between 0 and 3
	if (counter < 0) {
		index = Math.abs(counter)%images.length;
	} else {
		index = counter%images.length;
	}	
	//remove the current image and append the next (or previous) one
	$("#carousel > img").remove();
	$("#carousel").prepend(images[index]);
	$("#caption").html(images[index].title);
}
//===============================END CAROUSEL FUNCTIONS==========================//
//=============================BEGIN TABBING FUNCTIONS===========================//
var getTab = function(ID) {
	var projectData = projects(ID);
	$("#tab_content > img").attr("src", projectData.img);
	if (ID === "MCCalc") {
		$("#tab_content > img").width("8%");
	} else {
		$("#tab_content > img").width("100%");
	}
	$("#tab_content > p").html(projectData.descr);
}
//=============================END TABBING FUNCTIONS===========================//

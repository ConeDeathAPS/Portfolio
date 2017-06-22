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
	$("#tab_content > img").attr("alt", projectData.alt);
	if (ID === 'MCCalc' || ID === 'ZeroToSixty') {
		$("#tab_content > img").attr("style", "width:20%");
	} else {
		$("#tab_content > img").attr("style", "width:100%");
	}
	$("#tab_content > p").html(projectData.descr);
}
//=============================END TABBING FUNCTIONS===========================//

var projects = function(ID) {

	switch (ID) {

		case "F1DB":
			return {img: "./static/images/F1DB_team.png", 
					alt: "F1 team page",
					descr: "Uses the Ergast and Google Maps APIs, LAMP stack, and Materialize.<button data-toggle='modal' data-target='#F1Modal' class='btn btn-default'>More about F1 Databucket</button>"};
			break;

		case "VoiceChat":
			return {img: "./static/images/voicechat_chat.png",
					alt: "VoiceChat main",
					descr: "Uses WebRTC for peer-to-peer audio streaming, MEAN stack. Also uses Socket.io for text chat.<button data-toggle='modal' data-target='#VCModal' class='btn btn-default'>More about Voicechat</button>"};
			break;

		case "Winslow":
			return {img: "./static/images/winslow_main.png",
					alt: "Winslow main",
					descr: "Winslow is a hair salon in Kirkland Washington. I redesigned their website for easier access on mobile devices, and an updated look on desktop.<button data-toggle='modal' data-target='#WinslowModal' class='btn btn-default'>More about Winslow</button>"};
			break;

		case "EvitOrg":
			return {img: "./static/images/evit_event.png",
					alt: "EvitOrg Events",
					descr: "Event Organization app using Rails. Team project with <a href='http://www.linkedin.com/in/erikarudzis'>Erika Rudzis.</a><button data-toggle='modal' data-target='#EvitModal' class='btn btn-default'>More about Evitorg</button>"};
			break;

		case "Magrathea":
			return {img: "./static/images/magrathea_main.png",
					alt: "Magrathea main",
					descr: "Our first project! eCommerce app using LAMP. Team project with <a href='http://www.linkedin.com/in/brandonwebdev'>Brandon Williams</a> and <a href='http://www.linkedin.com/in/erikarudzis'>Erika Rudzis.</a><button data-toggle='modal' data-target='#MagModal' class='btn btn-default'>More about Magrathea</button>"};
			break;

		case "MCCalc":
			return {img: "./static/images/minecalc_main.png",
					alt: "Minecraft Calculator main",
					descr: "My first time building an app for Android! This app is intented to be fairly simple, as I am also learning Java along the way. It is intended to be a handy tool to help with Minecraft builds and dealing with items.<button data-toggle='modal' data-target='#MCModal' class='btn btn-default'>More about Minecraft Calculator</button>"};
			break;

		default:
			return {error: "Unknown project"};
	}	
}	
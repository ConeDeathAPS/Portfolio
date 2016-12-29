var projects = function(ID) {

	switch (ID) {

		case "F1DB":
			return {img: "./static/images/F1DB_team.png", 
					alt: "F1 team page",
					descr: "Uses the Ergast and Google Maps APIs, LAMP stack, and Materialize.<button data-toggle='modal' data-target='#F1Modal' class='btn btn-default'>More about F1 Databucket</button>"};
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
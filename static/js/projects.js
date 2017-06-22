var projects = function(ID) {

	switch (ID) {

		case 'F1DB':
			return {
					img: './static/images/F1DB_team.png', 
					alt: 'F1 team page',
					descr: 'Uses the Ergast and Google Maps APIs, LAMP stack, and Materialize.<button data-toggle=\'modal\' data-target=\'#F1Modal\' class=\'btn btn-default\'>More about F1 Databucket</button>'
				};
			break;

		case 'MCCalc':
			return {
					img: './static/images/minecalc_main.png',
					alt: 'Minecraft Calculator main',
					descr: 'My first time building an app for Android! This app is intented to be fairly simple, as I am also learning Java along the way. It is intended to be a handy tool to help with Minecraft builds and dealing with items.<button data-toggle=\'modal\' data-target=\'#MCModal\' class=\'btn btn-default\'>More about Minecraft Calculator</button>'
				};
			break;

		case 'ZeroToSixty':
			return {
					img: './static/images/Zero-Sixty_main.png',
					alt: 'Zero to Sixty main',
					descr: 'For my latest app, I wanted indulge my passion for cars a little bit and make something to time how long it takes for a car to go from 0-60. I was going to use the speed provided via GPS, but that was too easy. I ended up using the linear accelerometer built into most phones to convert 3 axes of acceleration readings into a 3D vector. Using that, along with elapsed time, it is possible to determine the speed of the phone.<button data-toggle=\'modal\' data-target=\'#ZeroToSixty\' class=\'btn btn-default\'>More about Zero to Sixty</button>'
			};

		default:
			return {error: 'Unknown project'};
	}	
}	
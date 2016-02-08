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
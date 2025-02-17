function draw_n(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var xb1 = random(5, max);
	var y1 = random(5, q1);
	var xb2 = random(xb1, max);
	var x2 = random(5, xb1);
	var x3 = random(xb1, xb2);
	var y2 = random(q3, max);

	// left line
	for (var k = 0; k <= items; k++) {

	    var x = lerp(xb1, x2, k / items);
	    var y = lerp(y1, y2, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// middle line
	for (var l = 0; l <= items; l++) {

	    var x = lerp(xb1, x3, l / items);
	    var y = lerp(y1, y2, l / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// right line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xb2, x3, j / items);
	    var y = lerp(y1, y2, j / items);
	 
	    ellipse(x, y, pr, pr);

	}

}
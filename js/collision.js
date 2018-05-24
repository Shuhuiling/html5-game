var momfruitcollision = function() {
	for(var i = 0; i < fruit.num; i ++) {
		if(fruit.alive[i]) {
			var distance = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			console.log(distance);
			if(distance < 900) {
				fruit.dead(i);
			}
		}
	}
}
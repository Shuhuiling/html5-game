var babyObj = function() {
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
babyObj.prototype.init = function() {
	this.x = 350;
	this.y = 350;
	this.angle = 0;
	this.babyEye.src = "images/babyEye0.png";
	this.babyBody.src = "images/babyFade0.png";
	this.babyTail.src = "images/babyTail0.png";
}
babyObj.prototype.drawBaby = function() {
	
	this.x = lerpDistance(mom.x,this.x,0.98);
	this.y = lerpDistance(mom.y,this.y,0.98);

	var deltaX = this.x - mom.x;
	var deltaY = this.y - mom.y;
	var beta = Math.atan2(deltaY,deltaX); // -Pi~PI
	
	this.angle = lerpAngle(beta,this.angle,0.9);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail,-this.babyTail.width * 0.5 + 23,-this.babyTail.height * 0.5);
	ctx1.drawImage(this.babyBody,-this.babyBody.width * 0.5,-this.babyBody.height * 0.5);
	ctx1.drawImage(this.babyEye,-this.babyEye.width * 0.5,-this.babyEye.height * 0.5);
	ctx1.restore();
}
var momObj = function () {
	this.x ;
	this.y ;
	this.fishEye = new Image();
	this.fishBody = new Image();
	this.fishTail = new Image();
	this.angle;
}
momObj.prototype.init = function () {
	this.x = 400;
	this.y = 300;
	this.angle = 0;
	this.fishEye.src = "images/bigEye0.png";
	this.fishBody.src = "images/bigSwim0.png";
	this.fishTail.src = "images/bigTail0.png";
}
momObj.prototype.drawMom = function () {
	
	this.x = lerpDistance(mx,this.x,0.9);
	this.y = lerpDistance(my,this.y,0.9);

	var deltaX = this.x - mx;
	var deltaY = this.y - my;
	var beta = Math.atan2(deltaY,deltaX); // -Pi~PI
	
	this.angle = lerpAngle(beta,this.angle,0.9);
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle); // 旋转画布，相对的移动原点

	ctx1.drawImage(this.fishTail,-this.fishTail.width * 0.5 + 30,- this.fishTail.height * 0.5);
	ctx1.drawImage(this.fishBody,-this.fishBody.width * 0.5,-this.fishBody.height * 0.5);
	ctx1.drawImage(this.fishEye,-this.fishEye.width * 0.5,- this.fishEye.height * 0.5);
	ctx1.restore();

}
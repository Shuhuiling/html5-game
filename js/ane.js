// 绘制海葵
var aneObj = function () {
	this.x = [];
	this.num = 50;
	this.hei = [];
	};

aneObj.prototype.init = function () {
	for(var i = 0; i < this.num; i ++) {
		this.x[i] = i * 16 + Math.random() * 20;
		this.hei[i] = 200 + Math.random() * 50;
	}
}

aneObj.prototype.drawAne = function () {
	for(var i = 0; i < this.num; i ++) {
			ctx2.save();
            ctx2.globalAlpha = 0.6; // 绘制大量带有相同透明度的
			ctx2.beginPath();
			ctx2.moveTo(this.x[i],600);
			ctx2.lineTo(this.x[i], 600 - this.hei[i]);
			ctx2.lineWidth = 20;
			ctx2.lineCap = "round";
			ctx2.strokeStyle = "#3b154e";
			ctx2.stroke();
			ctx2.closePath();
			ctx2.restore();
	}
}



			


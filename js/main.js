// 全局变量
var can1 = document.getElementById("canvas1");
var can2 = document.getElementById("canvas2");
var ctx1 = can1.getContext('2d'); // fish
var ctx2 = can2.getContext('2d'); // background

var img = new Image();

var deltaTime = 0; // 两帧之间的时间间隔，保证动画过渡的平滑
var lastTime = Date.now();

var ane;

var fruit;

var mom;

var mx;
var my; // 鼠标的坐标位置

var baby;
window.onload = function (){
	init();
	render();
}
	
var init = function () {
	can1.addEventListener('mousemove',onMouseMove,false);
		// img.src 直接写根目录下相对应的文件
	img.src = "images/background.jpg";
	
	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	mx = 400;
	my = 300;

	baby = new babyObj();
	baby.init();
}

var render = function() {
	// 	drawAne();
	window.requestAnimationFrame(render);
	var nowTime = Date.now();
	deltaTime = nowTime - lastTime; 
	if(deltaTime > 50) deltaTime = 50;
	lastTime = nowTime;
	
	drawbackground();
	ane.drawAne();
		
	fruitMonitor();
	fruit.drawFruit();

	ctx1.clearRect(0,0,800,600);
	mom.drawMom();

	momfruitcollision();

	baby.drawBaby();
};

var onMouseMove = function(e) {
	if(e.offSetX || e.layerX) {
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
	}
}


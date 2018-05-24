// 绘制果实
var fruitObj = function () {
	this.num = 30;
	this.x = [];
	this.y = [];
	this.alive = []; // bool
	this.l = []; // 控制果实的大小
	this.spd = []; // 每个果实上升的速度
	this.orange = new Image();
	this.blue = new Image();
	this.fruitType = []; // 果实的颜色
}

fruitObj.prototype.init = function () {
	for(var i = 0; i < this.num; i ++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003; // [0.017,0.02] 大约在0.01
		// this.bornFruit(i);// 为了控制数量，不能让所有的果实存活
		this.fruitType[i] = "";
	}
	this.orange.src = "images/fruit.png";
	this.blue.src = "images/blue.png"
}

fruitObj.prototype.drawFruit = function () {
	for(var i = 0; i < this.num; i ++) {
		if(this.alive[i]) {
			if(this.fruitType[i] == "blue") {
				var pic = this.blue;
			}
			else {
				var pic = this.orange;
			}

			if(this.l[i] <= 13) {
				this.l[i] += this.spd[i] * deltaTime; // 随时间变化的变量
			}
			else {
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
		
			ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5 ,this.y[i] - this.l[i] * 0.5,
				this.l[i],this.l[i]);
			if(this.y[i] <= 10) {
				this.alive[i] = false;
			}
		}
		
	}
}

fruitObj.prototype.bornFruit = function (i) {
	var fruitID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[fruitID];
	this.y[i] = 600 - ane.hei[fruitID];
	this.l[i] = 0;
	this.alive[i] = true;
	var can = Math.random();
	if(can < 0.2) {
		this.fruitType[i] = "blue";
	}
	else{
		this.fruitType[i] = "orange";
	}
}

fruitObj.prototype.dead = function(i) {
	this.alive[i] = false;
}
var fruitMonitor = function() { // 制定果实监控
	var num = 0;
	for(var i = 0; i < fruit.num; i ++) {
		if(fruit.alive[i])  num ++;
		// 判断有多少果实存活
	}
	if (num < 15) {
		// 产生果实
		sendFruit();
		return;
	}
};

// 判断哪个果实处于闲置状态
var sendFruit = function () {
	console.log(11);
	for(var i = 0; i < fruit.num; i ++) {
		if(!fruit.alive[i]) {
			fruit.bornFruit(i);
			return;
		}
	}
};


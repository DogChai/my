var dataObj = function() {
	this.fruitNum = 0;
	this.doubles = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

// dataObj.prototype.rest = function() {
// 	this.fruitNum = 0;
// 	this.doubles = 1;
// }

dataObj.prototype.draw = function() {
	var w = can1.width;
	var h = can1.height;
	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'white'; 
	ctx1.fillStyle = 'white';
	// ctx1.fillText("num：" + this.fruitNum,w * 0.5, h - 50);
	// ctx1.fillText("double：" + this.doubles,w * 0.5,h - 80);
	ctx1.fillText("SCORE：" + this.score,w * 0.5,h - 30);

	if(this.gameOver) {
		this.alpha += deltaTime * 0.0008;
		if(this.alpha > 1) {
			this.alpha = 1;
		} 
		ctx1.fillStyle = 'rgba(255,255,255,' + this.alpha + ')'
		ctx1.fillText('Game Over',w * 0.5, h* 0.5);
	}

	ctx1.restore();
}

dataObj.prototype.addScore = function(){
	this.score += this.fruitNum * 100 * this.doubles;
	this.fruitNum = 0;
	this.doubles = 1;
}
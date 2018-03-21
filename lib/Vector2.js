class Vector2 {
  constructor(dx,dy,color) {
    this._dx = dx;
    this._dy = dy;
    this._r = Math.sqrt(this._dx*this._dx + this._dy*this._dy);
    this._angle = Math.atan2(this._dy,this._dx);
    this.color = color || "yellow"
  }

  get dx(){
	   return this._dx;
  }
  get dy(){
	   return this._dy;
  }
  get angle(){
	   return Math.atan2(this._dy,this._dx);
  }
  get r(){
	   return Math.sqrt(this._dx*this._dx+this._dy*this._dy);
  }
  set dx(dx){
  	this._dx = dx;
  	this._angle = Math.atan2(this._dy,this._dx);
  	this._r = Math.sqrt(this._dx*this._dx+this._dy*this._dy);
  }
  set dy(dy){
  	this._dy = dy;
  	this._angle = Math.atan2(this._dy,this._dx);
  	this._r = Math.sqrt(this._dx*this._dx+this._dy*this._dy);
  }
  set angle(angle){
  	this._angle = angle;
  	this._dx = this.r * Math.cos(this._angle);
  	this._dy = this.r * Math.sin(this._angle);
  }
  set r(r){
  	if (r<0){
    	this._angle += Math.PI;
  	}
  	this._r = Math.abs(r);
  	this._dx = this._r * Math.cos(this._angle);
  	this._dy = this._r * Math.sin(this._angle);
  }

  add(vector){
    this._dx += vector._dx;
    this._dy += vector._dy;
  }

  subtractVector(a,b){
    this.dx = b.dx - a.dx;
    this.dy = b.dy - a.dy;
  }

  dot(b){
    return this.dx * b.dx + this.dy * b.dy;
  }

  draw (dx,dy,scale) {
    context.fillStyle = this.color;
    let h = 4;
    let aw = 10;
    let ah = 10;
    // console.log(this.r);
    context.save();
    context.beginPath();
    context.translate(dx,dy);
    context.rotate(this.angle);
    context.moveTo(0,0);
    context.lineTo(0,h);
    context.lineTo(this._r*scale - aw,h);
    context.lineTo(this._r*scale - aw,ah);
    context.lineTo(this._r*scale,0);
    context.lineTo(this._r*scale - aw,-ah);
    context.lineTo(this._r*scale - aw,-h);
    context.lineTo(0,-h);
    context.lineTo(0,0);
    context.closePath();
    context.stroke();
    context.fill();


    context.restore();
  }
}

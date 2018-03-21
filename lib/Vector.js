
class Vector {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
    this._r;
    this._angle;
  }

get r() {
  return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
}

set r(input){
this._r = input;
}

get angle(){
  return Math.atan2(this.dy,this.dx);
}


  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }
}

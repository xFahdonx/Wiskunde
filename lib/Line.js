class Line {
  constructor(slope, yIntercept) {
    this.slope = slope;
    this.yIntercept = yIntercept;
    this.length = null;
  }
  calcy(x) {
    return this.slope * x + this.yIntercept;
  }

  letSlopeAndPointDefineLine(slope,A){
    this.slope = slope;
    this.yIntercept= A.y - (A.x*this.slope);
    context.beginPath();
    context.moveTo(0, this.calcy(0));
    context.lineTo(800, this.calcy(800));
    context.stroke();
    context.closePath();
  }

  MakeTheLine(a, b,drawable) {
    this.slope = (a.y - b.y) / (a.x - b.x);
    this.yIntercept = a.y - a.x * this.slope;
    //this.length = a.GetDistance(b);

    if (drawable == "true" || drawable == "static") {
      if(drawable == "static"){
        context.beginPath();
        context.moveTo(0, this.calcy(0));
        context.lineTo(800, this.calcy(800));
        context.stroke();
        context.closePath();
      }
      else {
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
        context.closePath();
      }
    }
  }

  MakeThePerpendicularLine(line, point) {
    this.slope = -1 / line.slope;
    this.yIntercept = point.y - this.slope * point.x;

    context.beginPath();
    context.moveTo(0, this.calcy(0));
    context.lineTo(800, this.calcy(800));
    context.stroke();
    context.closePath();
  }

  Inersection (m) {
    var ans = {};
    ans.x = (m.yIntercept - this.yIntercept) / (this.slope - m.slope);
    ans.y = (ans.x * this.slope) + this.yIntercept;
    return ans;
  }
}

class Triangle {
  constructor(color,draggable,pointA,pointB,pointC) {
    this.pointA = pointA || new Point(40, 30, 20, "grey");
    this.pointB = pointB || new Point(40, 530, 20, "grey");
    this.pointC = pointC || new Point(540, 30, 20, "grey");
    this.pointD = pointC || new Point(0, 0, 10, "red");
    this.line1 = new Line();
    this.line2 = new Line();
    this.line3 = new Line();
    this.pointGravity1 = new Point(0, 0, 5, "black");
    this.pointGravity2 = new Point(0, 0, 5, "black");
    this.line4 = new Line();
    this.line5 = new Line();
    this.x = (this.pointA.x + this.pointB.x + this.pointC.x) / 3;
    this.y = (this.pointA.y + this.pointB.y + this.pointC.y) / 3;
    this.draggable = draggable || false;
    this.folume = null;
    this.colorState = color || "Yellow";
    this.seclected = false;
  }

  SetupTriangle(){
    if (this.draggable) {
      this.pointA.drag();
      this.pointB.drag();
      this.pointC.drag();
    }
  }

  UpdateTraingle(){
    this.x = (this.pointA.x + this.pointB.x + this.pointC.x) / 3;
    this.y = (this.pointA.y + this.pointB.y + this.pointC.y) / 3;

    context.beginPath();
    context.moveTo(this.pointA.x,this.pointA.y);
    context.lineTo(this.pointB.x,this.pointB.y);
    context.stroke();
    context.lineTo(this.pointC.x,this.pointC.y);
    context.stroke();
    context.lineTo(this.pointA.x,this.pointA.y);
    context.stroke();
    if (this.colorState != "Transparent") {
      context.fillStyle = this.colorState;
      context.fill();
    }

    console.log(this.draggable);
    if (this.draggable){
      this.pointA.draw();
      this.pointB.draw();
      this.pointC.draw();
    }

  }

  SetTheCenterOfGravity(drawable){
    this.pointGravity1.GetToTheMiddleOfTwoLines(this.pointA,this.pointB);
    this.pointGravity2.GetToTheMiddleOfTwoLines(this.pointC,this.pointB);

    this.line4.MakeTheLine(this.pointGravity1,this.pointC);
    this.line5.MakeTheLine(this.pointGravity2,this.pointA);


    this.pointD.GetToTheMiddle(this.line4,this.line5);

    if (drawable) {
      this.pointD.draw();
    }
  }
}

class Square {
  constructor(x,y,lenght,height,color,draggable) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.lenght = lenght;
    this.colorState = color;
    this.draggable = draggable;
    this.pointA = new Point(this.x, this.y, 15, "grey");
    this.pointB = new Point(this.x+this.lenght, this.y, 15, "grey");
    this.pointC = new Point(this.x, this.y+this.height, 15, "grey");
    this.pointD = new Point(this.x+this.lenght, this.y+this.height, 15, "grey");
    const inputfield1 = document.createElement("input1");
    inputfield1.setAttribute('type', 'text');
    inputfield1.setAttribute('value','default');
  }

  ObjectSetup(){
    if (this.draggable) {
      this.pointA.drag();
      this.pointB.drag();
      this.pointC.drag();
      this.pointD.drag();
    }
  }

  ObjectUpdate(){





    this.pointA.x = this.x;
    this.pointA.y = this.y;
    this.pointB.x = this.x + this.lenght;
    this.pointB.y = this.y;
    this.pointC.x = this.x;
    this.pointC.y = this.y + this.height;
    this.pointD.x = this.x + this.lenght;
    this.pointD.y = this.y + this.height;

    context.beginPath();
    context.moveTo(this.pointA.x,this.pointA.y);
    context.lineTo(this.pointB.x,this.pointB.y);
    context.stroke();
    context.lineTo(this.pointD.x,this.pointD.y);
    context.stroke();
    context.lineTo(this.pointC.x,this.pointC.y);
    context.stroke();
    context.lineTo(this.pointA.x,this.pointA.y);
    context.stroke();
    if (this.colorState != "Transparent") {
      context.fillStyle = this.colorState;
      context.fill();
    }

    if (this.draggable) {
      this.pointA.draw();
      this.pointB.draw();
      this.pointC.draw();
      this.pointD.draw();
    }
  }
}

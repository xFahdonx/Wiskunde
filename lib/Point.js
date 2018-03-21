class Point {
  constructor(x, y, radius, color, label, density) {
    this.x = x;
    this.y = y;
    this.r = radius || 50;
    this.color = color || "grey";
    this.density = density || 1;
    this.folume = radius * radius * Math.PI / 4;
    this.mass = this.density * this.folume;
    this.label = label || "";
    this.value = 0;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = this.color;
    context.fill();
    context.closePath();


    if(this.label != ""){
      context.fillStyle = "black";
      context.font = "20px Georgia";
      context.fillText(this.label,this.x-this.r / 3,this.y + this.r / 4)
    }
  }


  drag() {
    let dragStatus = false;
    let rect = canvas.getBoundingClientRect();
    let mousePosition = {};

    addEventListener("mousedown", (evt) => {
      mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };

      if (this.GetDistance(mousePosition) < this.r) {
        dragStatus = true;
        addEventListener('mouseup', () => {
          dragStatus = false;
        })

      } else {
        dragStatus = false;
      }
    });

    addEventListener('mousemove', (evt) => {
      mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      }

      if (dragStatus) {
        this.x = mousePosition.x;
        this.y = mousePosition.y;
      };
    });
  }

  GetDistance(P) {
    if (P.x == null) {
      let dx = this.x - P.x;
      let dy = this.y - P.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let pointA = new Point(100,100,20,"LightBlue","A");
let pointB = new Point(600,400,20,"LightBlue","B");
let pointC = new Point(200,400,20,"LightBlue","C");
let vectorA = new Vector2(pointB.x-pointA.x,pointB.y-pointA.y);
let vectorB = new Vector2();
let vectorC = new Vector2();
let lineA = new Line();
let lineB = new Line();


pointA.drag();
pointB.drag();
pointC.drag();


Update()
function Update() {
  requestAnimationFrame(Update);
  context.clearRect(0,0,800,450);
  lineA.MakeTheLine(pointA, pointC,"true","red")
  lineB.letSlopeAndPointDefineLine(-1/lineA.slope,pointA);
  vectorA.dx = pointB.x - pointA.x;
  vectorA.dy = pointB.y - pointA.y;

  vectorB.dx = 1;
  vectorB.dy = lineA.slope;
  vectorB.r = 1;
  vectorB.r = vectorB.dot(vectorA);

  vectorC.dx = -vectorB.dy;
  vectorC.dy = vectorB.dx;
  vectorC.r = 1;
  vectorC.r = vectorC.dot(vectorA);

  pointB.draw();
  pointC.draw();
  vectorA.draw(pointA.x,pointA.y,1);
  vectorB.draw(pointA.x,pointA.y,1);
  vectorC.draw(pointA.x,pointA.y,1);
  pointA.draw();
}

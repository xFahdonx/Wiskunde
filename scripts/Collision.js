const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


let pointA = new Point(100,90,20,"Red","A");
let pointB = new Point(400,100,20,"Red","B");
let g = {};
g.point = new Point(200,200,20,"lightblue","P");
g.pos = new Vector2(g.point.x,g.point.y);
g.vel = new Vector2(1,1);
g.Update = () =>{
  g.pos.add(g.vel);
  g.pos = new Vector2(g.point.x,g.point.y);
  if (g.pos.dx > canvas.width - g.point.r || g.pos.dx < g.point.r) {
    g.vel.dx = -g.vel.dx;
  }

  if (g.pos.dy > canvas.height - g.point.r || g.pos.dy < g.point.r) {
    g.vel.dy = -g.vel.dy;
  }
  g.point.draw();
}

let h = {};
h.point = new Point(200,400,20,"lightblue","P");
h.pos = new Vector2(g.point.x,g.point.y);
h.Update = () =>{
  h.pos = new Vector2(g.point.x,g.point.y);
  h.point.draw();
}


let l = new Line(1,1);
let l2 = new Line(2,2);

pointA.drag();
pointB.drag();

Update();
function Update() {
  requestAnimationFrame(Update);
  context.clearRect(0, 0, 800, 800);
  l.MakeTheLine(pointA,pointB,"static");
  l2.MakeThePerpendicularLine(l, g.point)

  g.Update();




  pointA.draw();
  pointB.draw();
}

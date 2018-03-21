const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let arraylength = 800;
let ballarray = new Array();
for (var i = 0; i < arraylength; i++) {
  ballarray[i] = new Point();
}

console.log(canvas.height);
let position = new Vector2(Math.random() * canvas.height, Math.random() * canvas.lenght);
let velocity = new Vector2(4, 0);
let acceleration = new Vector2(0, 1);
let Epot = 450 - position.dy;


Setup();
Update();

function Setup() {



}


function Update() {
  requestAnimationFrame(Update);
  context.clearRect(0, 0, 800, 800);

  for (var i = 0; i < arraylength; i++) {
    ballarray[i].x = position.dx;
    ballarray[i].y = position.dy;
    position.add(velocity);
    velocity.add(acceleration);
    ballarray[i].draw();
    velocity.draw(ballarray[i].x, ballarray[i].y, 10);
  }


  if (position.dx < 0 || position.dx > 800) {
    velocity.dx = -velocity.dx;
  }
  if (position.dy < 0 || position.dy > 450) {
    velocity.dy = Math.sqrt(2 * Epot);
    velocity.dy = -velocity.dy;
  }


  //console.log(position.r);
}
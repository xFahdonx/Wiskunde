const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2(100,100);
let direction = new Vector2(1,0);
let velocity = new Vector2(3,4);

let player = new Point(position.dx,position.dy,10);
let bullets = [];
let resistance = 0.98;
let goUp, goDown, goLeft, goRight;




window.addEventListener('keydown',(evt)=> {
  // console.log(evt);
  switch (evt.keyCode) {
    case 37:
      goLeft = true;
      //velocity.angle -= 0.1;
      //velocity.r += 0.1;
      break;
    case 39:
      goRight = true;
      //velocity.angle += 0.1;
      //velocity.r += 0.1;
      break;
    case 38:
      goUp = true;
      //velocity.r++;
      break;
    case 40:
      goDown = true;
      velocity.r--;
      break;
    default:

  }
})

window.addEventListener('keyup',(evt)=> {
  // console.log(evt);
  switch (evt.keyCode) {
    case 37:
      goLeft = false;
      break;
    case 39:
      goRight = false;
      break;
    case 38:
      goUp = false;
      break;
    case 40:
      goDown = false;
      break;
    default:

  }
})

function Update () {
  requestAnimationFrame(Update);
  context.clearRect(0,0,800,450);

  if (goUp) {
    console.log("Up");
    velocity.r++;
  }

  if (goDown) {
    console.log("Down");
  }

  if (goLeft) {
    console.log("Left");
    velocity.angle -= 0.1;
  }

  if (goRight) {
    console.log("Right");
    velocity.angle += 0.1;
  }


  if (position.dx < 0) {
    position.dx = 800;
  }

  if (position.dy < - 10) {
    position.dy = canvas.height + 10;
  }

  if (position.dy > canvas.height + 10) {
    position.dy = - 10;
  }

  if (position.dx > 800) {
    position.dx = 0;
  }

  // console.log(velocity.r);
  if (velocity.r > 10){
    velocity.r = 10;
  }
  player.x = position.dx;
  player.y = position.dy;
  position.add(velocity);
  player.draw();
  velocity.r*= resistance;
  velocity.draw(player.x, player.y,5);
  // direction.draw(player.x, player.y,5);


}

Update();

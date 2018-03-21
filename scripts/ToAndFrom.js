const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const points = document.getElementById('Points');
const players = document.getElementById('Players');

var velocity = new Vector2(0,0);
velocity.r=5;
var path = [];

Nodes = CreateNewPoints(2,"","grey");
Players = CreateNewPoints(1,"P","Yellow");

Update();

function Update() {
  requestAnimationFrame(Update);
  context.clearRect(0, 0, 800, 800);
  // GetToNextPoint(Pointses[0],Pointses[1]);
  DrawPoints(Nodes);
  DrawPoints(Players);
  for (var i = 0; i < Players.length; i++) {
    console.log(Nodes);
    GoTroughRoute(Players[i],Nodes);
  }
}

function GetToNextPoint(point1,point2) {
    velocity.subtractVector(point1.pos,point2.pos);
    velocity.r = 5;
    point1.pos.add(velocity);
}

function GoTroughRoute(player,currentPath){
  console.log(player.point.GetDistance(currentPath[player.value].point));
  if (player.point.GetDistance(player.point,currentPath[player.value].point) < 5) {
    GetToNextPoint(player.point,currentPath[player.value].point);
  }
  // else {
  //   if (player.value < currentPath.length) {
  //     player.value++;
  //   }
  //   else {
  //     player.value = 0;
  //   }
  // }
}

function GetRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function Refresh(){
  pointsnumber = points.value;
  playersnumber = players.value;
  Pointses = CreateNewPoints(pointsnumber,"","grey");
}

function CreateNewPoints(pointsnumber,name,color){
  let objects = new Array;
  for (var i = 0; i < pointsnumber; i++) {
    objects[i] = {}
    objects[i].pos = new Vector2(GetRandom(canvas.width),GetRandom(canvas.height));
    objects[i].point = new Point(objects[i].pos.dx,objects[i].pos.dy,20,color,name+(i+1) );
    objects[i].value = i;
  }
  return objects;
}

function DrawPoints(objects) {
  for (var i = 0; i < objects.length; i++) {
    objects[i].point.x = objects[i].pos.dx;
    objects[i].point.y = objects[i].pos.dy;
    objects[i].point.draw();
  }
}

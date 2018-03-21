const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var alfabet = ["A","B","C","E","F","G"];
var P = new Array();

CreateRoute(1);
Update();

function Update() {
  requestAnimationFrame(Update);

  for (var i = 0; i < P.length; i++) {
    P[i].draw();

  }
}

function CreateRoute(points) {

  for (var i = 0; i < points + 1; i++) {
    P[i] = new Point(Random(canvas.width),Random(canvas.height),"grey",alfabet[i]);
    console.log(P[i]);
  }

}

function Random(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

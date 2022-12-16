var ball =(
x:46,
y:73,
radius:2,
speedx:3,
speedy:4,
color:["yellow","orange","red"]
)




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius)
  fill(ball.color[2])
}
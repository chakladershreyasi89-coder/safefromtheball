let xPoz;
let yPoz;
let ballSize = 20;

let arcDiameter = 100;
let arcRadius = arcDiameter / 2;
let arcOffset = 50;

let leftArcX, rightArcX, topArcY, bottomArcY;

// Variables for arc movement
let leftArcY, rightArcY, topArcX, bottomArcX;

// Variables for ball's loop movement
let angle = 0; // Starting angle
let loopRadius = 100; // Radius of the ball's circular path
let loopSpeed = 0.05; // Speed of the ball's rotation

function setup() {
  createCanvas(400, 400);

  // Define fixed arc positions
  leftArcX = arcOffset;
  rightArcX = width - arcOffset;
  topArcY = arcOffset;
  bottomArcY = height - arcOffset;

  // Initialize movable arc positions
  leftArcY = height / 2;
  rightArcY = height / 2;
  topArcX = width / 2;
  bottomArcX = width / 2;
}

function draw() {
  background('orange');

  stroke('black');
  strokeWeight(20);
  noFill();

  // --- Update arc positions based on mouse movement ---
  // Left and Right arcs move with mouseY
  leftArcY = mouseY;
  rightArcY = mouseY;

  // Top and Bottom arcs move with mouseX
  topArcX = mouseX;
  bottomArcX = mouseX;
  
  // Constrain arc movement to stay within the canvas
  leftArcY = constrain(leftArcY, arcOffset, height - arcOffset);
  rightArcY = constrain(rightArcY, arcOffset, height - arcOffset);
  topArcX = constrain(topArcX, arcOffset, width - arcOffset);
  bottomArcX = constrain(bottomArcX, arcOffset, width - arcOffset);
  
  // --- Draw the four arcs with their new positions ---
  // Left Arc
  arc(leftArcX, leftArcY, arcDiameter, arcDiameter, -HALF_PI, HALF_PI);

  // Right Arc
  arc(rightArcX, rightArcY, arcDiameter, arcDiameter, HALF_PI, PI + HALF_PI);

  // Top Arc
  arc(topArcX, topArcY, arcDiameter, arcDiameter, 0, PI);

  // Bottom Arc
  arc(bottomArcX, bottomArcY, arcDiameter, arcDiameter, PI, TWO_PI);

  // --- Update the ball's position using a loop ---
  // Calculate new position based on sine and cosine
  xPoz = (width / 2) + cos(angle) * loopRadius;
  yPoz = (height / 2) + sin(angle) * loopRadius;
  
  // Increment the angle for the next frame
  angle += loopSpeed;

  // No collision detection needed since the ball is now following a fixed path.
  // The 'game' aspect is now controlling the arcs to track the ball.

  // --- Draw the moving ball ---
  fill('black');
  noStroke();
  ellipse(xPoz, yPoz, ballSize, ballSize);
}

  
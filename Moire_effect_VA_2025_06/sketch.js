// I used a Youtube video to get my bearings with the moire effect:
//Computing Masterclass, 'How to make ' Moire Pattern ' in p5.js', YouTube, 26 September 2019, <https://youtu.be/62SbexSgQIw?si=xf1rkwWWszgqYrP1>[Accessed 3 June 2025]

//global functions/variable:
let mode = 0 // let declares a new variable and starts pattern order with pattern numbered as 0
function setup() {
  createCanvas(500, 500) //canvas size
  noFill() //makes sure circles have absolutely nothing filling them
  angleMode(DEGREES) //allows creation of triangles using degree measurements
  //end of global functions/variable
}
function draw() { //function that makes custom design visible
    background(0) //paints every frame black, preventing pattern remains
//Pattern 1 - Circles:
  if (mode === 0) { //such 'modes' are added for each pattern, allowing the space bar to alternate between patterns by numbering them and shuffling through them
    let num = 30 //max number of shape iterations before outermost vanish
      strokeWeight(7) //defines thickness of circle perimiter(s)
    for(let i = 0;i < num; i++) { 
      
// I referred to p5.js to figure out how to write some syntax correctly, frameCount being a prominent one:
//McCarthy, L. frameCount, p5.js, <https://p5js.org/reference/p5/frameCount/>[Accessed 3 June 2025]
      
    let r = i * 30 + (frameCount % 60)  //for loop that runs indefinitely, creating triangles that increase in size by 30px, with a framerate variable that makes shape bigger every 60 frames indefinitely
    stroke('rgb(16,16,231)') //circle colours
    ellipse(145,250,r) //positioning of circle along x and y axis, and width without height (height becomes same as width if not provided, making said circle)
    stroke('rgb(231,16,16)') 
    ellipse(350,250,r)
    }
    
// I referred to p5.js to figure out how to write some syntax correctly, triangle() being a prominent one:
//McCarthy, L. triangle(),p5.js, <https://p5js.org/reference/p5/triangle/>[Accessed 3 June 2025]
    
//Pattern 2 - Triangles:
}  else if (mode === 1) { 
    let num = 30
      strokeWeight(2)
    for(let i = 0; i < num; i++) { 
    let r = i * 30 + (frameCount % 60) 
    stroke('rgb(255,160,91)')
    drawTriangle1(150, 250, r)
    stroke('rgb(255,160,91)')
    drawTriangle2(350, 250, r)
    }
//Pattern 3 - Circles and triangles:
}  else if (mode === 2) {
    let num = 30
    //number of shape iterations
    strokeWeight(3)
  //defines thickness of both shapes perimiter(s).
    for(let i = 0;i < num; i++) { 
    let r = i * 30 + (frameCount % 60)
    stroke('rgb(255,238,254)')
    ellipse(width / 2,height / 2,r)//positions circle in the middle by dividing height and width values by 2 to locate the center
    stroke('rgb(255,238,254)')
    drawTriangle3(width / 2, height / 2, r)
    }
 }
}
function drawTriangle1(x, y, r, rotation) {
  push() //saves specific shape styling
  translate(x, y)
  rotate(rotation)
  beginShape() //function initiating shape drawing
  for (let i = 0; i < 3; i++) {
    let angle = i * 120 - 0 //rotation value for one of three points of the orange triangle.
    let vx = cos(angle) * r //left distance
    let vy = sin(angle) * r //right distance
    vertex(vx, vy) //instructing pj5 to draw at a certain x and y coordinate
 }
  endShape(CLOSE) //links start and end of triangle drawing
  pop() //restores canvas to blank again by removing shape(s) for next drawing/pattern
}
function drawTriangle2(x, y, r, rotation) {
  push();
  translate(x, y)
  rotate(rotation)
  beginShape()
  for (let i = 0; i < 3; i++) {
    let angle = i * 120 - 180 //triangle rotation
     // Points upward by default
    let vx = cos(angle) * r
    let vy = sin(angle) * r
    vertex(vx, vy)
 }
  endShape(CLOSE)
  pop()
}
function drawTriangle3(x, y, r, rotation) {
  push()
  translate(x, y)
  rotate(rotation)
  beginShape()
  for (let i = 0; i < 3; i++) {
    let angle = i * 120 - 90
    let vx = cos(angle) * r
    let vy = sin(angle) * r
    vertex(vx, vy)
 }
  endShape(CLOSE)
  pop()
}
//'Button' function that allows user to change between patterns via the space key.Each click shifts along by one amongst three patterns.
function keyPressed() {  
  if (key === ' ') { //key is basically the 'button' here
    mode = (mode + 1) % 3 // cycles through three patterns.
  }  
}
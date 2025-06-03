## Experiment 1 - Moiré effect
I was tasked to select from the following list:

- An alternative visual way to represent a realtime clock
- A real time audio visualiser, with 4 different effects
- A data visualiser with some animated effect when data or view changes 
- Experiment with the moire effect. Create 3 variations or experiments that change over time or change with the mouse.

I decided to choose the moire effect task, as it piqued my interest the most, and I was curious to see what I could create with such a prompt. I made three patterns: the first consists of two symmetrically multiplying circles placed next to eachother with enough space between them to create the overlapping moire effect of two different colours, another consisted of a similar layout but with triangles instead, which created an entirely different looking pattern - as per my prediction, and lastly, the third pattern consists of a circle and a triangle stacked together in the center, which also created an entirely new pattern.

The functional stem of these ideas initially originated from some of our very first pj5 sessions where we went over pj5 basics and looked into Algorithmic art for the first time. I was fascinated by the beautiful patterns and creatios people were capable of conjuring out of lines of code. I wanted to take a peice of that and further develop it in my work to demonstrate my small but significant progress when it comes to familiarising myself with javascript as someone who has never had anything to do with it beforehand. I enjoyed tinkering with the different values and seeing what they do as I further developed my understanding of how it all works. Seeing visual feedback from my adjustments had left me wanting to create something with the patterns I was stumbling upon by chance.

I have noticed that I had gotten ahead of myself on a few occasions, w=for example when I wanted to create an elaborate double pattern that spun in opposite directions, only to realise that I couldnt even word exactly what I envisioned to google so it cound try and be of use, nor could I even begin to fathom how to write it. I chose to settle for a simpler but arguably equally good design instead in the end.
 
I'd say that theres a few things that could have been improved, such as the overall complexity of the project, and the tidiness of the code. Be it that I gave myself more time, I would have also tried to figure out how to attatch the video correctly to the repository, but in all, time management concerns aside, having taken my limited javascript capabilities into consideration, I'd say its not a bad first project overall - it functions how I expected it to, and the toggle button works to alternate between patterns (Space Bar).


Code:  
(Images below)

```
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
```
![two circles Moiré](https://github.com/Vixl24/CCO4104-VA-Creative-Coding-Portfolio/blob/main/two_circles_moire.png)
![Two triangles Moiré effect](https://github.com/Vixl24/CCO4104-VA-Creative-Coding-Portfolio/blob/main/two_triangles_moire.png)
![Triangle circle stacked Moiré](https://github.com/Vixl24/CCO4104-VA-Creative-Coding-Portfolio/blob/main/triangle_circle_stacked_moire.png)

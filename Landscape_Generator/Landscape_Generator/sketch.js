//referred to p5js.org for basics
//Note for self ( center-x, center-y, width, height );
  let slider;
  let hillsButton, cityButton, duneButton
  let mode = ""
  let numBuildings = 0
  
  function setup() {
  createCanvas(600, 400)

//referred to p5js.org:
//https://p5js.org/reference/p5/createSlider/
//The slider functionality has failed following the landscape implementation but it currently preserves the pre-existing gradient background.
  slider = createSlider(0, 100)
  slider.position(10, -20)
  slider.size(80)
  
//three buttons
  let hillsButton = createButton('Hills')
  hillsButton.style('font-size', '14px')
  hillsButton.position(200,80)
  hillsButton.size(60,20)
  hillsButton.mousePressed(() => {
    mode = "hills"
    numBuildings = 0
    numDune = 0
    redraw()
  })

  let cityButton = createButton('City')
  cityButton.style('font-size', '14px')
  cityButton.position(275,80)
  cityButton.size(60,20)
  cityButton.mousePressed(() => {
    mode = "city"
    numBuildings = int(random(19, 81))
    buildingWidth = random(0, 11)
    buildingWidth = width / numBuildings
    numDune = 0
    numHills = 0
    redraw()
  })
    
  let duneButton = createButton('Dune')
  duneButton.style('font-size', '14px')
  duneButton.position(350,80)
  duneButton.size(60,20)
  duneButton.mousePressed(() => {
    mode = "dune"
    numDunes = int(random(4, 8))
    duneWidth = width / numDunes
    numBuildings = 0
    numHills = 0
    redraw()
  })
  noLoop();
}

  function draw() {
  
//referred to p5js.org AND ChatGPT in the following section:
//https://p5js.org/reference/p5/lerpColor/
//PROMPT: "how do I link my slider to a gradient in a way that the colours transform from one gradient to another in p5 "
  
  let t = map(slider.value(), 0, 100, 0, 1)
  let gradientA_start = color(75, 84, 219)
  let gradientA_end = color(248, 189, 255)
  let gradientB_start = color(104, 12, 242)
  let gradientB_end = color(235, 105, 75)
  
  //ChatGPT generated chunk from same prompt, with name adjustment. 
  let startColor = lerpColor(gradientA_start, gradientB_start, t);
  let endColor = lerpColor(gradientA_end, gradientB_end, t);

//ChatGPT generated chunk from same prompt.
  for (let y = 0; y < height; y++) {
  let inter = map(y, 0, height, 0, 1);
  let c = lerpColor(startColor, endColor, inter);
  stroke(c);
  line(0, y, width, y);
}

  noStroke()
  fill(0)
  textSize(20)
  text("Welcome to Landscape Generator",163,45)
  textSize(15)
  text("Select your landscape:",230,67)
  textSize(11.5)
    
//referred to previous ChatGPT generated chunk of similar code above to write the following, combined with P5.js manual
//McCarthy, L., Random, p5.js,<https://p5js.org/reference/p5/random/>[Accessed 29 July 2025] 
//McCarthy, L., for, p5.js, <//https://p5js.org/reference/p5/for/>[Accessed 29 July 2025] 
    
  if (mode === "city") {
  for (let i = 0; i < numBuildings; i++) {
  let buildingHeight = random(49, 210);
  rect(i * buildingWidth, height - buildingHeight, buildingWidth, buildingHeight)
    }
  }
    
  if (mode === "hills") {
    let numHills = random(4, 7)
    for (let i = 0; i < numHills; i++) {
    let x = (i + 0.5) * width / numHills
    let r = random(80, 150)
    ellipse(x, height, r * 2, r * 2)
    }
  }

//Referred to p5js.org manual and YouTube video:
//McCarthy, L. frameCount, p5.js, <https://p5js.org/reference/p5/push/>[Accessed 29 July 2025] 
//McCarthy, L. pop(), p5.js,<https://p5js.org/reference/p5/pop/>
//The Coding Train, How to Rotate Shapes in p5.js (translate, rotate, push, pop),<https://youtu.be/o9sgjuh-CBM?si=8-fKL6_OqgKpkRV5>[Accessed 29 July 2025]
  
  if (mode === "dune") {
    rectMode(CENTER)
    let duneSize = random(180, 250)
    let numDunes = random(3, 5)
    for (let i = 0; i < numDunes; i++) {
    let x = (i + 0.5) * width / numDunes
    let y = height - duneSize / 20

    push()
    translate(x, y)
    rotate(PI / 6)
    rect(0, 0, duneSize, duneSize)
    pop()
    }
  }

}
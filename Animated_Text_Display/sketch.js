let scene = "menu"

function setup() {
  cnv = createCanvas(400, 400)
  cnv.elt.setAttribute("tabindex", "0")
  //chatGPT assisted timeout feature to bypass blocked auto focus
setTimeout(() => {
    cnv.elt.focus()
}, 100);

  textAlign(CENTER)
  
}

function draw() {
  background(220)
  
  if (scene === "intro") {
    introScene();
  } else if (scene === "optimist") {
    optimistTask();
  } else if (scene === "pessimist") {
    pessimistTask();
  }

  
  if (scene === "menu") {
    menu() 
  } else if (scene === "optimistSun") {
    optimistSun()
  } else if (scene === "optimistTask") {
    optimistTask() 
  } else if (scene === "optimistFeedback") {
    optimistFeedback()
  } else if (scene === "theEnd") {
    theEnd()
  } else if (scene === "pessimistSun") {
    pessimistSun()
  } else if (scene === "pessimistTask") {
    pessimistTask()
  } else if (scene === "pessimistFeedback") {
    pessimistFeedback()
  } else if (scene === "theEnd") {
    menu()
  }
}


function changeScene(newScene) {
  scene = newScene
  index = 0;  
  lastMillis = millis()
}

function menu() {
  
  //center man
  push()
  //brown floor
  strokeWeight(0)
  fill(74,52,37)
  rect (0,200,400,200)
  //beige wall
  strokeWeight(0)
  fill(221,202,187)
  rect (0,0,400,120)
  //brown wall
  strokeWeight(0)
  fill(94,72,57)
  rect (0,120,400,80)
  fill(84,62,47)
  rect (0,200,400,18)
  //top brown wall line
  strokeWeight(0)
  fill(84,62,47)
  rect (0,118,400,5)
  //brown wall tiles  
  fill(84,62,47)
  rect (5,129,30,65)
  rect (45,129,30,65)
  rect (85,129,30,65)
  rect (125,129,30,65)
  rect (165,129,30,65)
  rect (205,129,30,65)
  rect (245,129,30,65)
  rect (285,129,30,65)
  rect (325,129,30,65)
  rect (365,129,30,65)
  //light brown wall lines
  fill(94,72,57)
  rect (0,140,400,5)
  rect (0,207,400,5)
  //chair
  textSize(103)
  text('🪑', 200, 255)
  //people
  //face
  fill(222,199,145)
  rect (185,119,30,20)
  rect (182,122,36,10)
  rect (189.5,113,21,33)
  rect (187,111,26,32)
  rect (192.5,114,15,43)
  //center man hair
  fill(69,39,6)
  rect (190,106,15,15)
  rect (190,104.5,10,10)
  rect (185,108,10,10)
  rect (200,108,11,10)
  rect (209,111,9,8)
  rect (181,112,9,8)
  rect (181,112,9,8)
  rect (180,116,6,8)
  rect (213,116,6,8)
  //shirt
  fill(80,125,136)
  rect (180.5,155,40,43)
  rect (190.5,148,19,4)
  fill(80,125,136)
  rect (192.5,150,15,5)
  rect (176,158,50,25)
  fill(70,110,130)
  rect (192.5,151,10,1.7)
  rect (172.5,163,4,19) //left arm
  fill(70,110,130)
  rect (171.5,170,2,19)
  rect (172.5,164,3,28)
  rect (175.5,180,2,16)
  rect (177.5,183,3,14)
  fill(80,125,136)
  //right arm
  fill(70,110,130)
  rect (225.5,163,4,19)
  rect (226.5,164,2,26)
  rect (224.5,180,2,16)
  rect (221.5,183,3,14)
  rect (219.5,185,3,14)
  //bottom of shirt
  fill(80,125,136)
  rect (182.5,160,35,50) 
  //before bottom of shirt peice
  rect (180,193,40,10)  
  fill(70,110,130) //darker left arm lower bits
  rect (184.5,169,2,15)//left dark armpit part
  rect (186.5,166,1.5,10)
  rect (212.5,169,2,15)//right dark armpit part
  rect (211.5,166,1.5,10)
  rect (179.5,187,3,16)
  //trousers
  fill(64,64,64)
  rect (180,205,40,13)
  rect (175,210,50,15)
  rect (178,215,44,15)
  rect (190,215,22,70)
  rect (182,215,36.5,20)
  rect (176,230,32.5,10)
  rect (174,235,32.5,10)
  rect (172,245,32.5,10)
  rect (170,255,32.5,10)
  //lower  left arm continuation
  fill(70,110,130)
  rect (182.5,191,3,15)
  rect (185.5,195,3,13)
  rect (187.5,204,5,5)
  //white cup 
  fill(246,246,246)
  rect(195.5,183,16,18)
  rect(196.5,185,12,18)
  rect(209.5,186,5,5)
  fill(82,55,25)
  rect(196.5,184,13,2)
  //steam
  fill(70,110,130)
  rect(200,180,4,2)
  rect(202,177,5,2)
  rect(199,174,6,2)
  rect(202,170,5,2)
  //lower left hand
  fill(222,199,145)
  rect (189,198,10,7)
  rect (191.5,198,10,9)
  rect (194.5,197,9,9)
  rect (192.5,195,4,9)
  //lower right hand
  rect (210,189,9,10)
  rect (213,185,4,3)
  //upper trouser knee
  fill(64,64,64)
  rect (193,202,17,10)
  rect (187,203,17,10)
  fill(55,55,55)
  rect (196.5,230,2.5,7)
  rect (195,235,2.5,7)
  rect (194,240,2.5,7)
  rect (193,245,2.5,7)
  rect (192,250,2.5,7)
  rect (191,255,2.5,7)
  rect (190,260,2.5,7)
  rect (199,225,3,2)
  rect (203,223,6,2)
  rect (211,227,2,4)
  rect (180,220,2,3)
  rect (183,215,2,3)
  rect (186,210,2,3)
  //left shoe my pov
  fill(38,39,38)
  rect (173,265,15,7)
  rect (171,269,17,7)
  rect (170,273,16,7)
  rect (169,276,13,7)
  rect (168,279,11,7)
  //right shoe my pov
  rect (194,285,14,7)
  rect (193,289,16,7)
  pop()
  
  //pessimist and optimist
  push()
  strokeWeight(0)
  //left head
  fill(222,199,145)
  rect (0,280,66,55)
  rect (0,330,60,20)
  rect (0,340,55,17)
  rect (0,350,50,15)
  rect (0,360,45,12)
  rect (0,370,39,8)
  rect (0,378,25,22)
  //left hair
  fill(173,149,99)
  rect (0,245,40,40)
  rect (0,250,50,40)
  rect (0,280,70,30)
  rect (0,260,65,30)
  rect (0,260,60,68)
  rect (0,260,56,80)
  rect (0,260,51,90)
  rect (0,270,44,90)
  rect (0,280,36,87)
  rect (0,290,26,85)
  //orange shirt
  fill(177,115,38)
  rect (0,390,50,10)
  rect (50,393,50,7)
  rect (100,396,25,4)
  //right head
  fill(222,199,145)
  rect (334,280,66,55)
  rect (340,330,60,20)
  rect (345,340,55,17)
  rect (350,350,50,15)
  rect (355,360,45,12)
  rect (361,370,39,8)
  rect (375,378,25,22)
  //right hair
  fill(173,149,99)
  rect (360,245,40,40)
  rect (350,250,50,40)
  rect (330,280,70,30)
  rect (335,260,65,30)
  rect (340,260,60,68)
  rect (345,260,56,80)
  rect (350,260,51,90)
  rect (355,270,44,90)
  rect (364,280,36,87)
  rect (374,290,26,85)
  //blue shirt
  fill(106,129,172)
  rect (350,390,50,10)
  rect (300,393,50,7)
  rect (275,396,25,4)
  pop()
  
  
  textSize(33)
  text('👓', 200, 142)
  
  textSize(17);
  textFont(`Courier`)
  fill(91,59,24)
  stroke(91,59,24)
  rect (43,60,312,0.5)
  text('The Optimist and The Pessimist.', 200, 50)
  text('< Select your mindset >', 200, 80)
  textSize(10)
  stroke(0,0)
}

//PESSIMIST SCENES

function pessimistSun() {
  background(192,244,247)
 push()
  strokeWeight(0)
  fill(267,255,210)
  ellipse(280,120,190,190)
  fill(192,244,247)
  ellipse(280,120,180,180)
  fill(267,255,210)
  ellipse(280,120,170,170)
  fill(267,244,206)
  ellipse(280,120,130,130)
  fill(255,237,210)
  ellipse(280,120,75,75)
  
  fill(255,255,255)
  ellipse(90,230,150,75)
  ellipse(170,230,110,55)
  ellipse(260,250,70,35)
    pop()
    textSize(12)
    fill(0,0,0)
   text('Lets start nice and simple.', 200, 20)
        text('What do you think about the sun?', 200, 40)
        text('- Its too bright. And too hot. I always burn under it..', 200, 350)
    fill(98,153,209)
  text('Press Right Arrow key (>) to continue', 200, 80)
}

function pessimistTask() {
    background(14,51,70)
  
  push()
  fill(146,161,179)
  rectMode(CENTER)
  translate(width/3, height/3)
  rotate(50);
  rect(0,0,150,200)
  push()
  
  fill(41,83,97)
  rect(0,-80,135,4)
  rect(0,-70,135,4)
  rect(0,-60,135,4)
  rect(0,-50,135,4)
  rect(0,-40,135,4)
  rect(0,-30,135,4)
  rect(0,-20,135,4)
  rect(0,-10,135,4)
  rect(0,0,135,4)
  rect(0,10,135,4)
  rect(0,20,135,4)
  rect(0,30,135,4)
  rect(0,40,135,4)
  rect(0,50,135,4)
  rect(0,60,135,4)
  rect(0,70,135,4)
  rect(0,80,135,4)
  rect(0,90,135,4)
  pop()
  translate(width/8, height/3)
  rotate(25)
  rect(0,0,150,200)
    fill(14,51,70)
  rect(0,-80,135,4)
  rect(0,-70,135,4)
  rect(0,-60,135,4)
  rect(0,-50,135,4)
  rect(0,-40,135,4)
  rect(0,-30,135,4)
  rect(0,-20,135,4)
  rect(0,-10,135,4)
  rect(0,0,135,4)
  rect(0,10,135,4)
  rect(0,20,135,4)
  rect(0,30,135,4)
  rect(0,40,135,4)
  textSize(12)
  fill(167,243,243)
  text('This is so much',0,65)
  text('work..',0,75)
  pop()
    fill(167,243,243)
  text('What do you think about set tasks?', 200, 40)
    text('- Theyre daunting... I struggle to start..', 200, 350)
    fill(104,200,220)
  text('Press Right Arrow key (>) to continue', 200, 80)
}

  
function pessimistFeedback() {
    background(148,161,148)
  rect(10,10,10,10)
  
  push()
    background(223,177,111)
  fill(185,110,19)
  strokeWeight(0)
rect(60,100,170,100)
rect(70,92,150,117)
rect(80,85,130,130)
  fill(255,255,255)
 textSize(25)
 text('Feedback!',145,142)
   text(':)',145,172)
  fill(95,40,0)
rect(182,155,170,100)
rect(192,147,150,117)
rect(202,140,130,130)
  fill(185,110,19)
rect(190,160,170,100)
rect(200,152,150,117)
rect(210,145,130,130)
  fill(255,255,255)
    textSize(25)
text('Oh...ok',275,205)
text(':/',275,235)
    pop()
  fill(0,0,0)
  textSize(15)
  text('What do you think about feedback?', 200, 40)
  text('- I dont know... I dont do much with it...', 200, 350)
  fill(163,86,7)
  text('Press Right Arrow key (>) to continue', 200, 80)
}
    
//-----------------------------------
//OPTIMIST SCENES

function optimistSun() {
  background(137,221,221)
 push()
  strokeWeight(0)
  fill(238,226,26)
  ellipse(280,120,190,190)
  fill(137,221,221)
  ellipse(280,120,180,180)
  fill(238,226,26)
  ellipse(280,120,170,170)
  fill(238,196,26)
  ellipse(280,120,130,130)
  fill(238,156,26)
  ellipse(280,120,75,75)
  
  fill(255,255,255)
  ellipse(90,230,150,75)
  ellipse(170,230,110,55)
  ellipse(260,250,70,35)
    pop()
    textSize(12)
    fill(0,0,0)
   text('Lets start nice and simple.', 200, 20)
        text('What do you think about the sun?', 200, 40)
        text('- Its cool. Everything thrives off of it', 200, 350)
    fill(98,153,209)
  text('Press Left Arrow key (<) to continue', 200, 80)
}

function optimistTask() {
    background(165,122,47)
  
  push()
  fill(236,212,160)
  rectMode(CENTER)
  translate(width/3, height/3)
  rotate(50);
  rect(0,0,150,200)
  push()
  
  fill(165,122,47)
  rect(0,-80,135,4)
  rect(0,-70,135,4)
  rect(0,-60,135,4)
  rect(0,-50,135,4)
  rect(0,-40,135,4)
  rect(0,-30,135,4)
  rect(0,-20,135,4)
  rect(0,-10,135,4)
  rect(0,0,135,4)
  rect(0,10,135,4)
  rect(0,20,135,4)
  rect(0,30,135,4)
  rect(0,40,135,4)
  rect(0,50,135,4)
  rect(0,60,135,4)
  rect(0,70,135,4)
  rect(0,80,135,4)
  rect(0,90,135,4)
  pop()
  translate(width/8, height/3)
  rotate(25)
  rect(0,0,150,200)
    fill(165,122,47)
  rect(0,-80,135,4)
  rect(0,-70,135,4)
  rect(0,-60,135,4)
  rect(0,-50,135,4)
  rect(0,-40,135,4)
  rect(0,-30,135,4)
  rect(0,-20,135,4)
  rect(0,-10,135,4)
  rect(0,0,135,4)
  rect(0,10,135,4)
  rect(0,20,135,4)
  rect(0,30,135,4)
  rect(0,40,135,4)
  textSize(12)
  fill(255,255,255)
  text('This will be fun!',0,65)
  pop()
    fill(0,0,0)
  text('What do you think about set tasks?', 200, 40)
    text('- Theyre fun, I always learn something new :)', 200, 350)
    fill(255,251,227)
  text('Press Left arrow key (<) to continue', 200, 60)
}

  function optimistFeedback() {
    push()
    background(241,228,153)
  fill(238,196,26)
  strokeWeight(0)
rect(60,100,170,100)
rect(70,92,150,117)
rect(80,85,130,130)
  fill(255,255,255)
 textSize(25)
 text('Feedback!',145,142)
   text(':)',145,172)
  fill(241,228,153)
rect(182,155,170,100)
rect(192,147,150,117)
rect(202,140,130,130)
  fill(238,196,26)
rect(190,160,170,100)
rect(200,152,150,117)
rect(210,145,130,130)
  fill(255,255,255)
    textSize(25)
text('Noted!',275,205)
text(':)',275,235)
    pop()

    textSize(12)
    fill(0,0,0)
        text('What do you think about feedback?', 200, 40)
        text('- Its great, it tells me where I can', 200, 350)
            text('can improve for next time!', 200, 370)
    fill(194,161,26)
  text('Press Left Arrow key (<) to continue', 200, 80)
}
    
//-----------------------------------
//END
    function theEnd() {
      background(236,217,168)
    //brown floor
  strokeWeight(0)
  fill(74,52,37)
  rect (0,200,400,200)
  //beige wall
  strokeWeight(0)
  fill(221,202,187)
  rect (0,0,400,120)
  //brown wall
  strokeWeight(0)
  fill(94,72,57)
  rect (0,120,400,80)
  fill(84,62,47)
  rect (0,200,400,18)
  //top brown wall line
  strokeWeight(0)
  fill(84,62,47)
  rect (0,118,400,5)
  //brown wall tiles  
  fill(84,62,47)
  rect (5,129,30,65)
  rect (45,129,30,65)
  rect (85,129,30,65)
  rect (125,129,30,65)
  rect (165,129,30,65)
  rect (205,129,30,65)
  rect (245,129,30,65)
  rect (285,129,30,65)
  rect (325,129,30,65)
  rect (365,129,30,65)
  //light brown wall lines
  fill(94,72,57)
  rect (0,140,400,5)
  rect (0,207,400,5)
  //chair

  push()
  textSize(103)
  text('🪑', 200, 255)
  pop()
      
  text('Its all a matter of mindset.', 200, 70)
      fill(221,202,187)
  text('Its all a matter of mindset.', 200, 330)

}

function keyPressed() {
  if (scene === "menu") {
    if (keyCode === RIGHT_ARROW) {
      scene = "pessimistSun"
    } else if (keyCode === LEFT_ARROW) {
      scene = "optimistSun"
    }
  }
  
  // OPTIMIST PATH
  else if (scene === "optimistSun") {
    if (keyCode === LEFT_ARROW) {
      scene = "optimistTask"
    }
  }
  else if (scene === "optimistTask") {
    if (keyCode === LEFT_ARROW) {
      scene = "optimistFeedback"
    }
  }
  else if (scene === "optimistFeedback") {
    if (keyCode === LEFT_ARROW) {
      scene = "theEnd"
    }
  }
  // PESSIMIST PATH
  else if (scene === "pessimistSun") {
    if (keyCode === RIGHT_ARROW) {
      scene = "pessimistTask"
    }
  }
  else if (scene === "pessimistTask") {
    if (keyCode === RIGHT_ARROW) {
      scene = "pessimistFeedback"
    }
  }
  else if (scene === "pessimistFeedback") {
    if (keyCode === RIGHT_ARROW) {
      scene = "theEnd"
    }
  }
  // END
  else if (scene === "theEnd") {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      scene = "menu"
    }
  }
}
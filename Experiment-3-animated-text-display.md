## Experiment 3 - Animated Text Display

I was tasked to select from the following list:

- Use of pose detection or image classifier to drive some interesting visual behaviour (techniques will be shared in Week 11)
- concrete poetry project 
- An animated, progressive text display, that reveals a poem or block of text over a period of time in some interesting way
- An autonomous pattern generator that will create a rich visual effect that is different each time it is run (think Tyler Hobbs - Fidenza)
- one key game (two players) with a clear win state 

I had selected the third bullet point - An animated text display. I had previously came up with the idea to create a progressive text display that allows the user to get involved in said the experience by allowing them to reveal the text themselves in some way, but after days of trying to implement moving parts to my multiple 'scene' experience, I encountered some increasingly complex issues that I was unable to resolve, which ultimately lead to me finally scrapping moveable parts altogether, as they turned out, in fact, immoveable in my case.

The experience shows users both how an optimist and a pessimist perceive certain situations, prompting them to self-reflect on how they perceive life hurdles and general life situations themselves, and to evaluate whether they may, or may not, need to adjust their schemas of situations that come their way in life. I don't exclude myself from the users of this experience. If anything, I would say the creation of this experience has been both a lesson and an opportunity for myself to re-evaluate how I approach tasks in life, and especially in responsibility demanding contexts like university, as well as life. A positive and proactive mindset can get a person much further in life than a negative and passive one. I've experienced this personally, and through this experience I hope to get across to others who may be feeling stuck, how fruitful and beneficial a positive mindset can be when approaching everyday things. I hadn't left myself much time to add more 'scenes' by the time I realised I was too far deep in p5 territory to be able to make anything that I was trying to bring to reality, actually work. I was incredibly disappointed with my lack of success in making text type itself out, or implementing moveable items throughout the scenes. My presence of scenes made it difficult to follow examples and customise them specifically to my code, with constant dead-ends after many hours of trying to get ideas to work.

Nonetheless Im not entirely disappointed in this creation, as it still bears a strong personal message about probably the biggest progress preventor I had over the past academic year. I had found myself enjoying work once I was already too close to deadlines, and falling behind on understanding as a result of a fear of the unknown. The creation of this short experience has given me lots of time to reflect on the past year and digest what I would need to change going forward to improve my overall performance for the sake of my future self, in all aspects of life, as well as academic. 

Despite the experience running seamlessly and being in a state of what I can call 'complete', I would say that there is definitely room for improvement in the code that I have created at hand. I am aware of sections that I could have optimised better, such as when I was creating repetitive shape collections for backdrops in scenes or when creating lines on sheets of decorational sheets of paper, as just one variable typically changes in these groups of shapes. I could have used for loops to make the code more compact, be it that I had more experience in using them at hand, and if I hadn't overindulged in features that were to ultimately fail in their implementation. In future I would try to work on this optimisation deficit and work on realising that I'm getting ahead of myself sooner than later. Below I've attached an example of code from my Animated Text Display where I created the lines for sheets of paper in one of the scenes and beneath it, an example of optimised code I could have included instead.

Before:
```
  rect(0,0,135,4)
  rect(0,10,135,4)
  rect(0,20,135,4)
  rect(0,30,135,4)
  rect(0,40,135,4)
  rect(0,50,135,4)
  rect(0,60,135,4)
  rect(0,70,135,4)
  rect(0,80,135,4)
```
What could have been done:
```
for (let y = 0; y <= 80; y += 10) {
  rect(0, y, 135, 4);
}
```
I would would have likely saved myself lots of time and effort if I didn't manually create my scenes using mostly shapes, and just drew them instead. But once I had already completed the opening scene, I felt obligated to continue in the same way. In future, I would advise myself not to do this again and rather just draw the scene on an external program and import the images instead. It would save lots of unnecessary effort which could otherwise be used to optimise code and add more functional features.

Half way through the development process, I needed to get the program to automatically have the canvas focus on the keyboard to await left or right arrow key input rather than having the user be forced to figure out that they need to click the program screen to 'activate' it and in turn be able to play through the experience.

I had asked chatGPT why I still had to click my canvas to make it capable of registering buttons 'as soon as the program runs' despite the fact that I set it to focus on the keyboard from the start. It explained to me that browsers sometimes block auto-focus on the canvas without user interaction for security and UX reasons, and suggested to add a setTimeout function to delay the focus temporarily to bypass the block. As niche as my problem seemingly was, the AI was able to offer me a small and simple solution that fixed my issue, which was a pleasant experience and was far quicker than scavenging the internet for answers on the seemingly niche subject.

Before:
```
function setup() {
  cnv = createCanvas(400, 400)
  cnv.elt.setAttribute("tabindex", "0")
  cnv.elt.focus()

  textAlign(CENTER)
}
```
After:
```
function setup() {
  cnv = createCanvas(400, 400)
  cnv.elt.setAttribute("tabindex", "0")
  setTimeout(() => {
    cnv.elt.focus()
  }, 100);  // 100ms delay

  textAlign(CENTER)
}
```

Despite what could be improved within my program, I can't exactly hate what I created. It delivers the message I wished to carry across to the user sufficiently well and it functions to an adequate degree. I would have definitely considered adding more scenes if this project was to have a larger purpose and if I had left myself more time rather than wasting a large proportion of it on ultimately failed implementation attempts. I am however unsure as to whether directly referring to the characters as 'Optimist' and 'Pessimist' is very appropriate and whether something like 'Mr.Cann' and 'Mr.Canott' would be more socially acceptable but with my lack of external opinions on the matter taken into consideration, along with the knowledge that I carry no harmful intentions of calling them in that way, but rather seek to carry over a clear and understandable idea that the experience exists to prompt the user to ponder on the topic of mindset, one may deem it acceptable.

Note: I absolutely did not only rediscover the p5 library of example works that would have helped me tremendously merely on the morning of the day I submit this work. Not at all. And I am not an absolute stump for it. Totally not. 

[Link to the code](/Animated_Text_Display/index.html)
## 
## Screenshots
![Menu](https://github.com/user-attachments/assets/c31a025b-e0dc-4233-b2d0-8cb0ffe0b889)

![OptimistTask](https://github.com/user-attachments/assets/aecf11e1-8b1e-45ab-9afa-dc47d0d946bc)

![OptimistFeedback](https://github.com/user-attachments/assets/f7440cc9-4053-4253-a54d-cca25c5fd78d)

![PessimistSun](https://github.com/user-attachments/assets/bc3f82bc-da20-4e67-8e46-e6e998ad4a02)

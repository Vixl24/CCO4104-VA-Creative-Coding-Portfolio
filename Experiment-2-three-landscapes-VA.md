## Experiment 2 - Three Landscapes
I was tasked to select from the following list:

- Alternative pixels – display pixel data from the webcam in at least 3 ways that are not pixels, or directly coloured squares.
- A city or landscape generator, with at least 3 distinct types of building or land. 
- Mouse disturber - a 'force field' from the mouse changes or moves an arrangement of shapes when the mouse is near or over them. Create three different variations of behaviour.
- A mouse-driven painting tool with 4 different 'brush' tools

I have chosen to create a generator of three different landscapes. I initially planned to create three wonders of the world before realising that first of all, the shapes were too ambitious of a project for my skillset, and that they may not count very well as different landscapes, but rather three different structures, lastly I also came to the conclusion that I likely wouldn't be able to demonstrate relevant coding knowledge by just placing shapes down and colouring them. I have been trying to focus on Intended Learning Outcomes more and as a result, having reflected more upon the moire task that I had created, I came to the realisation that it may not quite cut it as exactly moire patterns, but rather semi-illusions created by eternally generating overlapping shapes from a stationary point. I am still pondering on what I will do with them as I write this. I am currently considering changing one of them into a guaranteed moire and leaving the others as lesser, follow up candidates.

Following my idea reflection for this task, I had decided to settle with three landscapes that can be told apart from each other by even their mere silhouettes, which would guarantee their ability to be told apart from each other as landscapes, rather than three different structures and such. 

I initially tried creating three individual buttons by plotting down rectangles and placing text on top after having seen it done so on a youtube tutorial before realising that there's a button function in the p5 manual that I could just use. Now looking back I realise that it was rather silly of me not to assume and search for one in the first place. This saved me a lot of time and effort.

I wanted to make it stylistic to an extent and wished to achieve this by adding a toggleable gradient sunrise and sunset for the background. I attempted to create one at first using the p5 manual, but it only showed me how I could make a blocky looking gradient, rather a smooth one but ChatGPT later provided me with a better way to create a gradient when I happened to ask it how I could make my slider transition one gradient into another, although to do so it used a chunk of code I was struggling to wrap my head around a little, and would have been unable to conjure up independently with my terribly minimal background in JavaScript - that being the p5 manual for the most part. So I used that part of code to learn from it and contribute it to my 30% of AI generated code that is permitted as per the brief. 

From this activity I have learned how to harness the limitless knowledge of chatGPT without having it write necessarily all of my work for me, which I can also use to help me when I get stuck. I've learned to use it as a guide in my learning process, and its been able to let me know that I'm getting a bit too ambitious with a project when my knowledge is not vast enough to attempt certain things within given time constraints. For example, when I came up with the idea to have toggle-able sunrise and sunset themed gradients for the background, I wasn't expecting it to break once I had figured out how to implement my first landscape.

I had asked ChatGPT whether lots of adjusting would need to be made to resolve this issue, and as optimistic as it was sounding, it let me know what I would need to add code which I knew I'd struggle to implement in a timely manner with my skillset. In the end, I had to get a bit unorthodoxically creative to preserve the sunset effect that remained, as, if I was to create a still sunset, it wouldn't look quite as colourful as the two semi-transparently overlapping ones I had at hand in the frozen state. I know I could have just implemented more colours into the gradient, but I felt that just moving the slider off screen would be significantly faster. This of course leaves my program less optimised, but doing so has saved me, what I would argue would have been a significant amount of, time. Ultimately, I get a nice sunset in the background, so my end result has been achieved, without the overambitious implementations to it.

I'd say I've learned quite a lot about JavaScript too, although my progress may probably be deemed mere basics by many. I could have learned more by now but I'm a bit of a slow learner when it comes to code. I tend to need to refer to example code to even remember how to write it correctly, therefore for me, its been a big jump, so I'm fairly happy with where I've gotten in that regard. I've also discovered sources like thinkspace.com which has a good amount of introductory topics on java amongst other things which has improved my understanding of certain coding techniques and even elaborated on why the moire pattern works (turn out its specifically due to anti-aliasing).

- On the topic of the moire pattern, I had (at a fairly late period) realised that perhaps what I had originally done for the moire task may not be quite deemed 'moire enough', it seemed more like an illusion (whether I got round to fixing it will forever remain a mystery to the current me writing this.)

If I was to change anything about my program given extra knowledge and patience to do it, I would have likely corrected the way in which my background gradient was done, as its not exactly the most 'correct' way to do it. I would have also liked to add some kind of gradient onto the buildings and such to create a sense of an atmospheric fog, and in turn add visual depth to the generated landscapes. However, this would have required a complete change in how the shapes are generated in the first place. Although now that I think about it, I could have perhaps looked into adding a semi-transparent gradient fog over the top of the landscapes somehow.

Once I had implemented the city and hills generation, I moved on to the dunes. I was initially baffled by how I would create a shape that would resemble a dune well which I could then reproduce like the others. I initially found a video on YouTube by The Coding Train that gave a decent introduction on creating custom shapes, but after attempting to create one, I had stumbled upon some undesirable results using curveVertexes, and having not had the patience to study custom shape creation in more depth, combined with me having to likely then struggle to figure out how to duplicate it like in the other generators, I thought of just using tilted square shapes instead. Having messed with their angle of rotation, I had discovered a position that more or less resembles dunes in a much less complex way.

Note - For some reason unbeknownst to me, the city generation can break along the y axis if it is selected specifically after dune generation. I am not sure what causes this but if you restart the program and select it either first, or after hills it works just fine again.

[Link to the code](/Landscape_Generator/index.html)
## 
## Screenshots
![Hills Image](https://github.com/user-attachments/assets/57c3975d-3ca7-43d0-8b4d-b0ae98851db5)

![City Image](https://github.com/user-attachments/assets/c9864981-e0d4-4aed-a059-526d2e22637f)

![Dunes Image](https://github.com/user-attachments/assets/17a31a86-3141-4f22-a440-c701c2c7c2ee)
##
## Function Recordings
![Hills GIF](https://github.com/user-attachments/assets/796da2c3-e7bb-4b26-9588-9bb7170a2f69)

![City GIF](https://github.com/user-attachments/assets/8e325f73-a712-474a-babc-a41ce9e4d2b3)

![Dunes GIF](https://github.com/user-attachments/assets/befabe54-2e80-459d-a546-68deb3ba54d4)







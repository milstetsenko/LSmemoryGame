# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Milana Stetsenko**

Time spent: **10** hours spent in total

Link to project: (https://glitch.com/edit/#!/smooth-factual-whale)


# Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The timer is a gradient switching between the red, yellow, and green
- [x] When the user ran out of time, the popup appears that the time is up and the number of mistakes left

# Video Walkthrough

Here's a walkthrough of implemented user stories:
Gif 1, showing the mistakes and timeout alerts with the timer:


![](https://cdn.glitch.com/58851715-84a9-4992-aab0-f97aeae62535%2Fezgif.com-crop.gif?v=1615035442082)

Gif 2, showing the game lost alert with the timer:

![](https://cdn.glitch.com/58851715-84a9-4992-aab0-f97aeae62535%2Fezgif.com-crop-2.gif?v=1615035589355)

Gif 3, showing the win alert with the timer:

![](https://cdn.glitch.com/58851715-84a9-4992-aab0-f97aeae62535%2Fezgif.com-crop-3.gif?v=1615035678652)






# Reflection Questions
### 1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 


I have used stack overflow for the advice on the timer() function: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

For the styling: https://cssreference.io/animations/

For the gradient animation:  https://codepen.io/P1N2O/pen/pyBNzX

For the random sequence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


### 2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 


The project overall was not hard since a lot of it is following the guide. Creating the additional features was exciting and required some more research, but I did not struggle to find and implement the solutions. My biggest challenge was working in HTML and CSS.

I have never used them. Therefore, I do not know the syntax and the meaning of the majority of the code. For the required components, the process went smoothly because I only needed to understand what was written for me, not to code myself. With the optional features, however, I struggled to set the timer image and the number correctly. I could not align them with the start and end buttons. I looked for a simple solution without creating multiple divs and combining them because I realized that this would be a significant learning curve and I would need to learn much much more. I have spent over an hour reading about CSS and HTML, looking through Stack Overflow. Eventually, I analyzed what each of the parameters means and applied them in an informative way. My design is far from ideal, but it looks appropriate and professional, sufficient for the game. 

Setting aside the time to learn the meanings of the parameters I was using has helped me fix the issue.





### 3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I have many questions. I have probably seen just a tiny piece of what a programmer can do, and I am curious to learn more through projects. This project was much fun, and it evoked my interest in WebDev. I want to learn more, and I liked developing because I can see the result of my work right away and interact with users more directly. 

As for more specific questions, I am curious to know more about passing the data to the database and making requests. It was not covered in prework, but I think it is also essential to store the progress store and update user's data on different types of websites. This idea connects more to the backend knowledge I already have. After learning Swift and the network requests and schemas, I also wonder what the differences are between these procedures in web development and Swift.





4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

As I mentioned before, I would store user's data.  I would have to connect it to some database, update it, pull data from the database to output the leaderboards, rankings, user's profiles. 

I would need to implement all these components into the game for people to play together or store their progress to train their memory. But for people to return to the game more than one time, I would also make the game more complicated. I would add several levels of complexity. I need to develop better, more engaging rules. Since I want to make some levels, just increasing the number of buttons or increasing the pattern's length will make the game boring. So I would change the buttons each time,  make them move around to make it complicated, add random speed, play simultaneously with others on the same boards to compete, etc.


I would also work on design improvement to make it minimalistic but appealing for the users. As of now, I have no knowledge of CSS and HTML, and my skills are limited, but I would be excited to learn intermediate and advanced tools to make my game stand out.
# License

    Copyright [Milana Stetsenko]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

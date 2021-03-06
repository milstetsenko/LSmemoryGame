//Global Constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const freqMap = { //setting the pitches for each of the buttons
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 578.2
}



//Global Variables
var pattern = [2, 2, 5, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0; //where the user is in the clue sequence
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0
var timer_count= 0 // to stop the older timer when the new one started
var timer_new = true // checking whether the person guessed on time
var left_mistakes = 3 // limit on mistakes the person can make



//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


/// START AND END GAME FUNCTIONS



// Generate the secret pattern
function secretPattern(min, max){  
var nums = Array.from({length: 8}, () => Math.floor(Math.random() * (max - min) + min));//The maximum is exclusive and the minimum is inclusive
   
  return nums
                  
}
                


function startGame(){
    //intialize the pattern 
    pattern = secretPattern(1,6)
  //initialize the number of mistakes
    mistakes= 0
    clueHoldTime = 1000; //how long to hold each clue's light/sound

    console.log(pattern)
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}


function stopGame(){
    //initialize game variable
  console.log("hi, stopGame")
    timer_count+=1
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}



//FUNCTIONS TO PRODUCE THE SOUNDS AND LIGHT THE BUTTONS 

function playTone(btn,len){ 
  console.log("hi")
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}



function startTone(btn){
  
  if(!tonePlaying){
    console.log("hi")
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}



//light up the buttons for the clues
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}




////FUNCTIONS TO PLAY THE CLUES


function timer(){
  // timer_new = true
  var cur_timer_count = timer_count
  var seconds = 16
   document.getElementById("countdown").textContent;
  
  var countdown = setInterval(function(){
      seconds--;
      (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s";
      document.getElementById("countdown").textContent = seconds;
    
      if (seconds <= 0 ) {
        clearInterval(countdown);
        timeoutAlert();//alert indicating that the time is out and using on of the mistakes
      }
    // if the new timer is created, delete the old timer
    if (cur_timer_count < timer_count){
      clearInterval(countdown);
    }
  },1000);
  
} 
  


//play a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}




//play a sequence of the clues for instructions
function playClueSequence(){
  guessCounter = 0
  clueHoldTime -= 100 // each time, the duration of the button press is 0.1 second shorter
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  
  }
//starting the timer after the sequence was played to track the times required for the guesses
timer()
}




  //FUNCTIONS THAT CHECK THE USER'S PERFORMANCE
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
} 



function winGame(){
  stopGame();
  alert("Congratulations! You memory is incredible");
} 

// popup that a user made a mistake, indicating the mistakes left
function mistakeAlert(){
  left_mistakes = 2-mistakes
  alert("You made a mistake! Mistakes left: "+left_mistakes) ;
} 


// popup that a user did not make a guess in 15s, indicating the mistakes left
function timeoutAlert(){
  progress++;
  mistakes+=1
  left_mistakes = 2-mistakes
  alert("The time for the guess is out. Proceed to the next round. Mistakes left: "+left_mistakes) ;
  playClueSequence();
} 




function guess(btn){
  console.log("user guessed: " + btn);

if(!gamePlaying){
    return;
  }
  

  if(pattern[guessCounter] == btn){
    //Guess was correct!
    console.log("guess was correct");
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
      progress++;
      //update to stop the old timer so it does not interfere
      timer_count+=1
      playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect

    if (mistakes<2){
      progress++;
      mistakes+=1
      //stop the old timer and start the new one when the timer() is called again
      timer_count+=1
      mistakeAlert()
      playClueSequence();
    }
    
    //GAME OVER: LOSE!
    else{
      loseGame();
    }
    
  }
}    
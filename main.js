const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var audio;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
    
    playy();
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    audio.pause();
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

function playy() {
  audio = new Audio('song.mp3');
  audio.play();
          audio.addEventListener('ended', function(){
            
        }, true);
        audio.loop = true;
}

function playtest(){

audio = new Audio('song.mp3')
audio.addEventListener('timeupdate', function(){
  console.log('rr')
    var buffer = .44
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('playing')
    }
});

}
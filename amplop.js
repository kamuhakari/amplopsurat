document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    
    openBtn.addEventListener('click', function() {
        envelope.classList.add('open');
      
    });
    
    closeBtn.addEventListener('click', function() {
        envelope.classList.remove('open');
    });
});


// audio

const rootElement = document.querySelector(':root');
const audioIconWrapper = document.querySelector ('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;


function disableScroll (){
    scrollTop = window.scrollXOffset || document.documentElement.scrollTop;
    scrollLeft = window.scrollYOffset || document.documentElement.scrollLeft;

    window.onscroll = function (){

      window.scrollTo(screenTop, screenLeft);
    }

    
    rootElement.style.scrollBehavior = 'auto';
    
  }


  function enableScroll(){
    window.onscroll = function () { }
    rootElement.style.scrollBehavior = 'smooth';
    // localStorage.setItem('opened','true');
    playAudio ();
  }




  function playAudio(){
    
    song.volume = 0.5;
    audioIconWrapper.style.display = 'flex';
    song.play();
    isPlaying = true;
  }

  audioIconWrapper.onclick = function () {
    if(isPlaying){
        song.pause ();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
        this.getElementsByClassName('close-btn');
    } else {
        song.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
  }
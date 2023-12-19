let videoBtn = document.getElementById('video');
let playBtn = document.getElementById('play-btn')
let progressBar = document.querySelector('.progress-bar')

//addeventlistener
playBtn.addEventListener('click', (playOrPauseVideo))
video.addEventListener('click', (playOrPauseVideo))
video.addEventListener('timeupdate', (updateProgressBar))


function updateProgressBar(event) {
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;

    progressBar.style .cssText=  `width: ${(currentTime / duration) * 100}%
    ;`
  
   
}


//play and pause func
let isPlayingVideo = false

function playOrPauseVideo() {
    if (!isPlayingVideo) {
        video.play()
        isPlayingVideo = true
        playBtn.classList.replace("fa-play", "fa-pause")
    } else {
        video.pause()
        isPlayingVideo = false
        playBtn.classList.replace("fa-pause", "fa-play")
    }
}
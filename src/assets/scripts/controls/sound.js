const soundControlInit = () => {

  const soundBtn = document.getElementById('soundBtn');

  const backgroundSong = new Audio('./assets/sounds/original-tetris-soundtrack.mp3');
  backgroundSong.loop = true;

  let isPlaying = false;

  const toggleSound = () => {

    if(isPlaying) {

      soundBtn.classList.remove('btn--on');
      backgroundSong.pause();
      isPlaying = false;

    } else {

      soundBtn.classList.add('btn--on');
      backgroundSong.play();
      isPlaying = true;

    }

  }

  soundBtn.addEventListener('click', toggleSound);

}

export default soundControlInit;

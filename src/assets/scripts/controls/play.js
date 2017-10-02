const playControlInit = (state, action) => {

  const playBtn = document.getElementById('playBtn');
  const body = document.body;

  let firstPlay;

  const togglePlay = () => {

    if(!firstPlay) {
      action();
      firstPlay = true;
    }

    if(state.play) {
      state.play = false;
      playBtn.classList.remove('btn--pause');
      body.classList.add('paused-state');
    } else {
      state.play = true;
      playBtn.classList.add('btn--pause');
      body.classList.remove('paused-state');
    }

  }

  // --------------
  // Play with btn
  // --------------

  playBtn.addEventListener('click', togglePlay);

  // --------------
  // Play with keyboard
  // --------------

  window.addEventListener('keydown', (e) => {
    const pressEnter = e.which == 13 || e.keyCode == 13;
    if (pressEnter) togglePlay();
  });

}

export default playControlInit;

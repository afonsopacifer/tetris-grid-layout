const playControlInit = (state, onlyFirstAction) => {

  const playBtn = document.getElementById('playBtn');

  let firstPlay;

  const togglePlay = () => {

    state.play
    ? state.play = false
    : state.play = true

    if(!firstPlay) {
      onlyFirstAction();
      firstPlay = true;
    }

    playBtn.classList.contains('btn--pause')
    ? playBtn.classList.remove('btn--pause')
    : playBtn.classList.add('btn--pause')

  }

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

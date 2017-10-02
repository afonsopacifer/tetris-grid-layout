const helperControlInit = (state) => {

  const helperBtn = document.getElementById('helperBtn');
  const closeBtn = document.getElementById('closeHelperBtn');
  const helperBox = document.getElementById('helperContainer');

  let helperBoxState;

  const toggleHelperBox = () => {
    if(helperBoxState) {

      helperBox.style.display = 'none';
      state.play = true;
      helperBoxState = false;

    } else {

      state.play = false;
      helperBox.style.display = 'flex';
      helperBoxState = true;

    }
  }

  helperBtn.addEventListener('click', toggleHelperBox);
  closeBtn.addEventListener('click', toggleHelperBox);

  const helperKeyboardControl = (e) => {
    const pressH = e.which == 72 || e.keyCode == 72;
    if (pressH) toggleHelperBox();
  }

  window.addEventListener('keydown', helperKeyboardControl);

}

export default helperControlInit;

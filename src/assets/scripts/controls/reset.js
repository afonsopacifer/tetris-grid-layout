const resetControlInit = () => {

  const reset = () => {
    location.reload();
  }

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', reset);

  const resetControl = (e) => {
    const pressEsc = e.which == 27 || e.keyCode == 27;
    if (pressEsc) reset();
  }

  window.addEventListener('keydown', resetControl);

}

export default resetControlInit;

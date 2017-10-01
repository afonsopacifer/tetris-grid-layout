const resetControlInit = () => {

  const reset = document.getElementById('resetBtn');

  reset.addEventListener('click', () => {
    location.reload();
  });

}

export default resetControlInit;

const btnTrocaTema = document.getElementById('trocar-tema');

btnTrocaTema.addEventListener('change', () => {
  document.body.classList.toggle('modo-escuro')
})
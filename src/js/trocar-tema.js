const btnTrocaTema = document.getElementById('trocar-tema');

btnTrocaTema.addEventListener('change', () => {
  if(btnTrocaTema.checked){
    document.body.classList.add('modo-escuro');
  }else{
    document.body.classList.remove('modo-escuro');
}


})


  // const checkbox = document.getElementById("myCheckbox");

  // // Verifica se há um valor armazenado no armazenamento local
  // if (localStorage.getItem("checkboxValue")) {
  //   // Define o valor da caixa de seleção com base no valor armazenado
  //   checkbox.checked = JSON.parse(localStorage.getItem("checkboxValue"));
  // }

  // // Adiciona um ouvinte de evento para atualizar o valor armazenado quando a caixa de seleção for alterada
  // checkbox.addEventListener("change", function() {
  //   localStorage.setItem("checkboxValue", checkbox.checked);
  // });

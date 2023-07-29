const menuOpacity = document.getElementById('menu-hamburguer');
const container = document.querySelectorAll('.container')

console.log(container);


menuOpacity.addEventListener("change", onCheckboxChanged);




function onCheckboxChanged(event) {
    // Obtenha o valor do checkbox
    let isChecked = event.target.checked;
  
    // Faça algo com o valor
    if (isChecked) {
        // container.

        
        console.log(123);
      // O checkbox está marcado
    } else {
        console.log(0);
      // O checkbox não está marcado
    }
  }
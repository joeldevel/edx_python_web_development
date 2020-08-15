const grid = document.getElementById('grid-products');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const products = document.getElementsByClassName('image-container');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log('event is ', event)
  if( event.target == grid ) modal.style.display = 'grid';

  else if (modal.style.display != 'none' && event.target != modal ) {
    modal.style.display = "none";
  }
}

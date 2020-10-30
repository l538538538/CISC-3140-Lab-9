var box = document.querySelector('.box');
var currentClass = '';


function F1() {
  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  document.getElementById("display").innerHTML = Date();
  box.classList.add( 'show-bottom' );
  currentClass = 'show-bottom';
}

function F2() {
  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  box.classList.add( 'show-front' );
  currentClass = 'show-front';
}


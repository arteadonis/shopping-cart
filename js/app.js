// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
  // cuando se presiona agregar carrito
  listaCursos.addEventListener('click', agregarCurso);
}

// funcion que se ejecuta cuando se presiona el boton de agregar carrito
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains('agregar-carrito')) {
    console.log(e.target);
  }
}

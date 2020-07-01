const body = document.querySelector("body");

const boton = document.getElementById("boton");
boton.addEventListener("click", cambio);

function cambio(e) {
  let color = document.getElementById("texto").value;
  body.style.backgroundColor = color;
  e.preventDefault();
}

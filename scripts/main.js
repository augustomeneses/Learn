let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/Legalidad-Digital-Logo-800x800.png") {
    miImage.setAttribute("src", "images/second-image.jpg");
  } else {
    miImage.setAttribute("src", "images/Legalidad-Digital-Logo-800x800.png");
  }
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial, " + miNombre;
  }
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Hola amorchi, " + nombreAlmacenado;
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};

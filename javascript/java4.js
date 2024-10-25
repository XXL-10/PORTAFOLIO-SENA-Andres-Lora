document.getElementById("btnMenu").addEventListener("click", function () {
  let elemento = document.getElementById("navbar");
  if (elemento.classList.contains("navbar")) {
    elemento.classList.remove("navbar");
    elemento.classList.add("no_navbar");
  } else {
    elemento.classList.remove("no_navbar");
    elemento.classList.add("navbar");
  }
});


const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#men");
const formulario = document.querySelector(".forms");

formulario.addEventListener("submit", validaFormulario);

function validaFormulario(e) {
  e.preventDefault();
  if (
    nombre.value === "" ||
    telefono.value === "" ||
    email.value === "" ||
    mensaje.value === ""
  ) {
    mostrarError("Todos los campos son obligatorios");
    return;
  } else {
    alert('Hemos recibido sus datos, pronto nos pondremos en contacto.')
    formulario.submit();
  }
}

function mostrarError(mensaje) {
  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.style.background = "red";
  alerta.style.textAlign = "center";
  alerta.style.color = "white";
  alerta.style.fontSize = "3rem";
  formulario.appendChild(alerta);
  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

function mensajeEnviado(mensaje) {
  const alerta1 = document.createElement('p');
  alerta1.textContent = mensaje;
  alerta1.style.background = "green";
  alerta1.style.textAlign = "center";
  alerta1.style.color = "white";
  alerta1.style.fontSize = "3rem";
  formulario.appendChild(alerta1);
  setTimeout(() => {
    alerta1.remove();
  }, 5000);
}

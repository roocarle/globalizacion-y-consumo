const startBtn = document.getElementById("startBtn");
const gridCursos = document.getElementById("gridCursos");
const descripcion = document.getElementById("descripcionCurso");
const popup = document.getElementById("popup");
const final = document.getElementById("final");
const cita = document.getElementById("cita");
const textoReflexion = document.getElementById("textoReflexion");
const verMasBtn = document.getElementById("verMasBtn");

startBtn.addEventListener("click", () => {
  gridCursos.classList.remove("hidden");
  verMasBtn.classList.remove("hidden");
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    descripcion.classList.remove("hidden");
    descripcion.textContent = card.dataset.desc;
  });
});

verMasBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  descripcion.classList.add("hidden");
  verMasBtn.classList.add("hidden"); 
});

document.getElementById("reflexBtn").addEventListener("click", () => {
  popup.classList.add("hidden");
  final.classList.remove("hidden");
});

document.querySelectorAll(".choice").forEach(btn => {
  btn.addEventListener("click", () => {
    final.classList.add("hidden");

    const eleccion = btn.dataset.eleccion;
    if (eleccion === "comodidad") {
      textoReflexion.innerHTML = `<em>Está buenísimo tener todo al alcance de un clic… pero si todo se vuelve fácil y rápido, ¿alguna vez llegamos a entender algo de verdad? Consumir no es lo mismo que aprender.</em>`;
    } else {
      textoReflexion.innerHTML = `<em>La educación no es solo para saber más. Es para aprender a pensar, a escuchar, a convivir. Con otros, descubrimos lo que solos no podríamos ver. Acompañar y ser acompañado también es formar parte de algo más grande que uno mismo.</em>`;
    }
    cita.classList.remove("hidden");
  });

  document.getElementById("volverBtn").addEventListener("click", () => {
  cita.classList.add("hidden");
  final.classList.remove("hidden");
});

});

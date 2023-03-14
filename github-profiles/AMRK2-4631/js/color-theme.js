// Obtenemos el botón y el elemento html
const button = document.getElementById("theme-button");
const html = document.documentElement;

// Escuchamos el evento click del botón
button.addEventListener("click", function () {
  // Obtenemos el valor actual de la variable data-theme
  const theme = html.getAttribute("data-theme");

  // Si es light, lo cambiamos a dark, y viceversa
  if (theme === "light") {
    html.setAttribute("data-theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
  }
});

function tMode(themeMode) {
  if (themeMode.matches) {
    html.setAttribute("data-theme", "dark");
    console.log("Mode: Dark");
  } else {
    html.setAttribute("data-theme", "light");
    console.log("Mode: Light");
  }
}

let themeMode = window.matchMedia("(prefers-color-scheme: dark)");
tMode(themeMode);
themeMode.addListener(tMode);

function startExperience() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    retina_detect: true
  });
}

particlesJS("particles-js", {
  particles: {
    number: { value: 25 },
    shape: {
      type: "image",
      image: {
        src: "/img/balloon-light.png", // Globos con colores claros
        width: 40,
        height: 40
      }
    },
    opacity: { value: 0.8 },
    size: { value: 18, random: true },
    move: {
      enable: true,
      speed: 1.5,
      direction: "top",
      out_mode: "out"
    }
  },
  retina_detect: true
});

function startExperience() {
  // Inicializa las partículas primero
  particlesJS("particles-js", {
    // configuración aquí...
  });

  // Luego activa el contenido
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
}

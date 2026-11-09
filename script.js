// script.js

const podcastEpisodes = [
  {
    title: "Capítulo 1: Titulo capítulo 1",
    description: "Breve descripción del capítulo 1.",
    cover: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Capítulo 2: Titulo capítulo 2",
    description: "Breve descripción del capítulo 2.",
    cover: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Capítulo 3: Titulo capítulo 3",
    description: "Breve descripción del capítulo 3.",
    cover: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const coverImg = document.getElementById("podcast-cover");
  const epTitle = document.getElementById("ep-title");
  const epDesc = document.getElementById("ep-desc");
  const epLink = document.getElementById("ep-link");
  const buttons = document.querySelectorAll(".ep-btn");

  // Cambia el capítulo al instante y lo deja fijo
  function selectEpisode(index) {
    const episode = podcastEpisodes[index];

    coverImg.src = episode.cover;
    epTitle.textContent = episode.title;
    epDesc.textContent = episode.description;
    epLink.href = episode.youtubeUrl;

    buttons.forEach((b, i) => b.classList.toggle("active", i === index));
  }

  // Carga inicial (Capítulo 1)
  selectEpisode(0);

  buttons.forEach((btn) => {
    const epIndex = parseInt(btn.getAttribute("data-ep"), 10);

    // Hover: el último capítulo sobre el que pasó el mouse se queda
    btn.addEventListener("mouseenter", () => selectEpisode(epIndex));

    // Click / tap (para celulares)
    btn.addEventListener("click", () => selectEpisode(epIndex));
  });
});
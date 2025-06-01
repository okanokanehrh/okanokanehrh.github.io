// Basit terminal yazı efekti (isteğe bağlı)
document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".fade-in");
  lines.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.5}s`;
  });
});

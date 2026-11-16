// JavaScript da landing page.
document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave para links internos (caso sejam adicionadas âncoras no futuro).
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      // Ignora href="#" vazio.
      if (!href || href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start"
        });
      }
    });
  });
});

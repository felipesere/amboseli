function toggleDarkMode() {
  let mode = document.body.getAttribute('color-mode');
  let invertedMode = mode === "dark" ? "light" : "dark";
  localStorage.setItem('color-mode', invertedMode);
  document.body.setAttribute('color-mode', invertedMode);
}

document.addEventListener('DOMContentLoaded', function() {
  const mode = localStorage.getItem('color-mode') || "light";
  document.body.setAttribute('color-mode', mode)

  for (const button of document.querySelectorAll('.dark-mode-toggle-btn')) {
    button.addEventListener('click', toggleDarkMode)
  }
});

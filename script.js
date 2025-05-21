const pages = document.querySelectorAll('.page');
function goToPage(id) {
  pages.forEach(page => {
    if (page.id === id) {
      page.classList.add('active');
      page.classList.remove('hidden');
    } else {
      page.classList.remove('active');
      page.classList.add('hidden');
    }
  });
}

// Set default page
goToPage('tutors');

// Toggle light/dark mode with button label update
const toggleBtn = document.getElementById('toggleMode');
function updateToggleLabel() {
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Switch to Light Mode';
    toggleBtn.setAttribute('aria-pressed', 'true');
  } else {
    toggleBtn.textContent = 'Switch to Dark Mode';
    toggleBtn.setAttribute('aria-pressed', 'false');
  }
}
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateToggleLabel();
});
updateToggleLabel();
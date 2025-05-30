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

ocument.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    grade: form.grade.value,
    help: form.help.value,
    inquiry: form.inquiry.value
  };
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw8Po1NpCZD1MlEaw5uj57jRrdWUMtrs-0vSzks8gH5OUGwfjdy5w83xo78TfuxrOUz/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
      document.getElementById('form-message').textContent = "Thank you! We'll be in touch soon.";
      form.reset();
    } else {
      document.getElementById('form-message').textContent = "Submission failed. Please try again.";
    }
  } catch (err) {
    document.getElementById('form-message').textContent = "Submission failed. Please try again.";
  }
});
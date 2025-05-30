// ---------- Light/Dark Mode Toggle ----------
const toggleBtn = document.getElementById('toggleMode');

function updateToggleLabel() {
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.setAttribute('aria-pressed', 'true');
    document.documentElement.style.background = "var(--dark-bg)";
  } else {
    toggleBtn.setAttribute('aria-pressed', 'false');
    document.documentElement.style.background = "var(--light-bg)";
  }
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateToggleLabel();
});

updateToggleLabel();

// ---------- Navigation Highlight on Scroll ----------
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  sections.forEach((section, i) => {
    if (
      section.offsetTop - 100 <= scrollPos &&
      section.offsetTop + section.offsetHeight - 100 > scrollPos
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[i].classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll);

// ---------- Contact Form Submission ----------
document.getElementById('contactForm').addEventListener('submit', function(e) {
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

  fetch('https://script.google.com/macros/s/AKfycbw8Po1NpCZD1MlEaw5uj57jRrdWUMtrs-0vSzks8gH5OUGwfjdy5w83xo78TfuxrOUz/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    document.getElementById('form-message').textContent = "Thank you! We'll be in touch soon.";
    form.reset();
  })
  .catch((err) => {
    console.error(err);
    document.getElementById('form-message').textContent = "An error occurred. Please try again.";
  });
});

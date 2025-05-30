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
document.getElementById('contactForm').addEventListener('submit', async function(e) {
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
    const response = await fetch('https://script.google.com/macros/s/AKfycbwxWBukOyQBs9xIK5Ge6hk_ZJYciXejEbV7pnZQjOiOrpsY_b86qlOje1aLZ1LXgWg/exec', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
});


    if (response.ok) {
      document.getElementById('form-message').textContent = "Thank you! We'll be in touch soon.";
      form.reset();
    } else {
      document.getElementById('form-message').textContent = "Submission failed. Please try again.";
    }
  } catch (err) {
    console.error(err);
    document.getElementById('form-message').textContent = "An error occurred. Please try again.";
  }
});


// Smooth scroll to anchors
const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// Modal popup for Learn More buttons
const createModal = () => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.style = `
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    display: none;
  `;

  modal.innerHTML = `
    <div style="background: #fff; color: #000; padding: 20px; max-width: 500px; border-radius: 10px; position: relative;">
      <span id="close-modal" style="position: absolute; top: 10px; right: 20px; cursor: pointer; font-weight: bold;">&times;</span>
      <div id="modal-content"></div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('close-modal').onclick = () => {
    modal.style.display = 'none';
  };
};

const setupLearnMoreButtons = () => {
  const learnMoreButtons = document.querySelectorAll('.read');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  const serviceDescriptions = {
    0: "We assess the value of property accurately based on current market conditions.",
    1: "We handle rental collection, maintenance, and tenant management professionally.",
    2: "We develop affordable, high-quality housing projects for different markets.",
    3: "We help you market and sell your property with full legal support.",
    4: "We guide your investment decisions through detailed real estate analysis."
  };

  learnMoreButtons.forEach((btn, index) => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      modalContent.textContent = serviceDescriptions[index] || 'More information coming soon...';
      modal.style.display = 'flex';
    });
  });
};

// Contact form submission
const setupContactForm = () => {
  const form = document.querySelector('.contact-form form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out to Kagemwa Limited! We will contact you shortly.');
    form.reset();
  });
};

// Social icon interaction
const setupSocialIcons = () => {
  const icons = document.querySelectorAll('.home-sci a, .contact-icons a');
  icons.forEach(icon => {
    icon.addEventListener('click', e => {
      if (icon.getAttribute('href')==='#'){
      e.preventDefault();
      alert('Redirecting to our social media page...');}
    });
  });
};

// Init all
window.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  createModal();
  setupLearnMoreButtons();
  setupContactForm();
  setupSocialIcons();
});


// Set time-based greeting in home-content h3
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
}

document.addEventListener("DOMContentLoaded", () => {
    const greetingEl = document.querySelector(".home-content h3");
    if (greetingEl) {
        greetingEl.textContent = getGreeting();
    }
});

function toggleReadMore() {
  const moreText = document.querySelector('.more-text');
  const dots = document.querySelector('.dots');
  const btn = document.querySelector('.read-more-btn');

  if (moreText.style.display === 'inline') {
    moreText.style.display = 'none';
    dots.style.display = 'inline';
    btn.textContent = 'Read more';
  } else {
    moreText.style.display = 'inline';
    dots.style.display = 'none';
    btn.textContent = 'Read less';
  }
}

// Back to Top button functionality
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

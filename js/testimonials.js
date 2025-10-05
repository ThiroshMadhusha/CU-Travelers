document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.testimonials__slider');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.pagination-btn.prev');
  const nextBtn = document.querySelector('.pagination-btn.next');
  const counter = document.querySelector('.pagination-counter');
  let currentIndex = 0;
  const totalCards = cards.length;
  const visibleCards = 1; // Number of cards visible at a time

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 16; // Include gap
    const offset = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}px)`;
    counter.textContent = `${currentIndex + 1} / ${totalCards}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalCards - visibleCards;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateSlider();
    }
  });

  // Initial setup
  updateSlider();

  // Resize handler to adjust slider
  window.addEventListener('resize', updateSlider);
});
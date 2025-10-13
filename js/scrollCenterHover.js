// Mobile ONLY scroll center hover effect - One card active at a time
function initScrollCenterHover() {
  // Detect if it's a touch device (real mobile)
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
  };

  const cards = document.querySelectorAll('.offer-card');
  
  // Only run on touch devices (real mobile)
  if (!isTouchDevice()) {
    return; // Don't run on desktop
  }

  const viewportCenter = window.innerHeight / 2;

  function checkCardsInCenter() {
    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      // Find the card closest to viewport center
      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    // Remove active class from all cards
    cards.forEach(card => {
      card.classList.remove('active');
    });

    // Add active class only to the closest card on mobile
    if (closestCard) {
      closestCard.classList.add('active');
    }
  }

  // Check on scroll
  window.addEventListener('scroll', checkCardsInCenter, { passive: true });

  // Initial check
  checkCardsInCenter();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollCenterHover);
} else {
  initScrollCenterHover();
}
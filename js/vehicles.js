// Export function to be called after component loads
function initVehiclesSlider() {
  const slider = document.querySelector('.vehicles__slider');
  const cards = document.querySelectorAll('.vehicle-card');
  const prevBtn = document.querySelector('.pagination-btn.prev');
  const nextBtn = document.querySelector('.pagination-btn.next');

  // Safety check - ensure elements exist
  if (!slider || !cards.length || !prevBtn || !nextBtn) {
    console.error('Vehicle slider elements not found');
    return;
  }

  let currentIndex = 0;
  const totalCards = cards.length;
  let visibleCards = 3;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let startTranslate = 0;
  let currentTranslate = 0;
  let swipeDirection = null; // Track swipe direction: 'horizontal' or 'vertical'

  function updateVisibleCards() {
    if (window.innerWidth <= 576) {
      visibleCards = 1;
    } else if (window.innerWidth <= 992) {
      visibleCards = 2;
    } else {
      visibleCards = 3;
    }
    // Reset to first card on resize to avoid issues
    currentIndex = 0;
    updateSlider(false);
  }

  function updateSlider(animate = true) {
    if (!visibleCards || totalCards === 0 || !cards[0]) return;

    const computedStyle = window.getComputedStyle(slider);
    const gapSize = parseFloat(computedStyle.gap) || 16;
    const singleCardWidth = cards[0].getBoundingClientRect().width;
    const cardStepWidth = singleCardWidth + gapSize;
    
    // Maximum index: we can scroll until the last card is in the visible area
    const maxIndex = Math.max(0, totalCards - visibleCards);
    
    // Keep currentIndex within bounds
    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);
    
    // Calculate the translation offset
    const offset = -currentIndex * cardStepWidth;
    
    slider.style.transition = animate ? 'transform 0.5s ease' : 'none';
    slider.style.transform = `translateX(${offset}px)`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  // Previous button click
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // Next button click
  nextBtn.addEventListener('click', () => {
    const maxIndex = Math.max(0, totalCards - visibleCards);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  // Swipe functionality for touch devices
  slider.addEventListener('mousedown', startSwipe);
  slider.addEventListener('touchstart', startSwipe, { passive: true });

  slider.addEventListener('mousemove', dragSwipe);
  slider.addEventListener('touchmove', dragSwipe, { passive: false });

  slider.addEventListener('mouseup', endSwipe);
  slider.addEventListener('touchend', endSwipe);
  slider.addEventListener('mouseleave', endSwipe);

  function startSwipe(e) {
    if (totalCards <= visibleCards) return;
    isDragging = true;
    swipeDirection = null; // Reset direction
    
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    
    // Get current transform value
    const transform = slider.style.transform;
    const match = transform.match(/translateX\(([^)]+)px\)/);
    currentTranslate = match ? parseFloat(match[1]) : 0;
    startTranslate = currentTranslate;
    
    slider.style.transition = 'none';
  }

  function dragSwipe(e) {
    if (!isDragging) return;
    
    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    
    // Determine swipe direction on first significant movement
    if (swipeDirection === null && (Math.abs(diffX) > 5 || Math.abs(diffY) > 5)) {
      if (Math.abs(diffX) > Math.abs(diffY)) {
        swipeDirection = 'horizontal';
      } else {
        swipeDirection = 'vertical';
      }
    }
    
    // Only handle horizontal swipes - allow vertical scrolling
    if (swipeDirection === 'horizontal') {
      e.preventDefault(); // Prevent scroll only for horizontal swipes
      currentTranslate = startTranslate + diffX;
      slider.style.transform = `translateX(${currentTranslate}px)`;
    } else if (swipeDirection === 'vertical') {
      // Allow vertical scrolling by not preventing default and ending drag
      isDragging = false;
      updateSlider(); // Reset to current position
    }
  }

  function endSwipe() {
    if (!isDragging) return;
    isDragging = false;

    // Only process if it was a horizontal swipe
    if (swipeDirection !== 'horizontal') {
      updateSlider();
      return;
    }

    const singleCardWidth = cards[0].getBoundingClientRect().width;
    const gapSize = parseFloat(window.getComputedStyle(slider).gap) || 16;
    const cardStepWidth = singleCardWidth + gapSize;
    const maxIndex = Math.max(0, totalCards - visibleCards);
    const swipeThreshold = cardStepWidth * 0.3;
    const diffX = currentTranslate - startTranslate;

    if (Math.abs(diffX) > swipeThreshold) {
      if (diffX < 0) {
        // Swiped left (next)
        currentIndex = Math.min(currentIndex + 1, maxIndex);
      } else {
        // Swiped right (previous)
        currentIndex = Math.max(currentIndex - 1, 0);
      }
    }
    updateSlider();
  }

  // Initialize and handle window resize
  let resizeTimeout;
  updateVisibleCards();
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => updateVisibleCards(), 150);
  });

  console.log('Vehicle slider initialized successfully with smart swipe detection');
}
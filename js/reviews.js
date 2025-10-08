// Store reviews in memory
let reviews = [];

// Toast notification function
function showToast(message, type = 'success') {
  // Remove any existing toast
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.textContent = message;

  // Add to body
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Initialize review functionality
function initializeReviews() {
  const stars = document.getElementById('rating-stars');
  const submitBtn = document.querySelector('.submit-review');
  const reviewComment = document.getElementById('review-comment');
  const reviewGuestName = document.getElementById('review-guest-name');
  const reviewsList = document.getElementById('reviews-list');
  const reviewCount = document.getElementById('review-count');
  
  let rating = 0;

  // Star rating interactivity
  stars.addEventListener('click', (e) => {
    const rect = stars.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const starWidth = rect.width / 5;
    rating = Math.floor(clickX / starWidth) + 1;
    updateStars();
  });

  function updateStars() {
    const filled = '★'.repeat(rating);
    const empty = '☆'.repeat(5 - rating);
    stars.textContent = filled + empty;
  }

  // Submit review functionality
  submitBtn.addEventListener('click', () => {
    const comment = reviewComment.value.trim();
    const guestName = reviewGuestName.value.trim();
    
    // Validation
    if (guestName === '') {
      showToast('Please enter your name before submitting.', 'error');
      reviewGuestName.focus();
      return;
    }

    if (rating === 0) {
      showToast('Please select a rating before submitting.', 'warning');
      return;
    }
    
    if (comment === '') {
      showToast('Please write a comment before submitting.', 'error');
      reviewComment.focus();
      return;
    }

    // Create review object
    const review = {
      author: guestName,
      rating: rating,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      comment: comment
    };

    // Add to reviews array
    reviews.push(review);

    // Add review to DOM
    addReviewToDOM(review);

    // Update review count
    reviewCount.textContent = reviews.length;

    // Reset form
    reviewComment.value = '';
    reviewGuestName.value = '';
    rating = 0;
    updateStars();

    // Show success message
    showToast('Review submitted successfully! Thank you for your feedback.', 'success');
  });

  function addReviewToDOM(review) {
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    
    const filledStars = '★'.repeat(review.rating);
    const emptyStars = '☆'.repeat(5 - review.rating);
    
    reviewItem.innerHTML = `
      <img src="/assets/hero/avatar.jpg" alt="User Icon" class="review-avatar">
      <div class="review-details">
        <p class="review-author">${escapeHtml(review.author)} <span class="review-rating">Rating: <span class="rating-stars">${filledStars}${emptyStars}</span></span></p>
        <p class="review-date">${review.date}</p>
        <p class="review-comment">${escapeHtml(review.comment)}</p>
      </div>
    `;
    
    reviewsList.appendChild(reviewItem);
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeReviews);
} else {
  initializeReviews();
}
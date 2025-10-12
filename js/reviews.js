// reviews.js - With Email Integration
let reviews = [];
let currentPostTitle = '';
let isSubmitting = false;

// Your EmailJS configuration
const EMAILJS_CONFIG = {
  serviceID: 'service_k1t11li',
  templateID: 'template_xc9e3jb',
  publicKey: 'sUh7UBoSSZw9sYxBD'
};

// Initialize EmailJS (recommended for reliability)
emailjs.init(EMAILJS_CONFIG.publicKey);

// Toast notification function
function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Load existing reviews from demo data + localStorage
function loadReviews() {
  console.log('Loading reviews for postTitle:', currentPostTitle);
  
  if (!currentPostTitle) {
    console.error('No post title available for loading reviews.');
    return;
  }

  try {
    // Initialize reviewsData if it doesn't exist
    if (typeof window.reviewsData === 'undefined') {
      console.warn('window.reviewsData not found, initializing empty object');
      window.reviewsData = {};
    }

    // Load demo reviews from global reviewsData
    const demoReviews = window.reviewsData[currentPostTitle] || [];
    console.log('Demo reviews loaded:', demoReviews);

    // Load user-added reviews from localStorage
    const storedReviewsKey = `userReviews_${encodeURIComponent(currentPostTitle)}`;
    const storedReviews = JSON.parse(localStorage.getItem(storedReviewsKey)) || [];
    console.log('Stored reviews loaded:', storedReviews);

    // Combine and reverse to show latest first
    reviews = [...demoReviews, ...storedReviews].reverse();

    const reviewsList = document.getElementById('reviews-list');
    const reviewCount = document.getElementById('review-count');
    
    if (!reviewsList || !reviewCount) {
      console.error('Review elements not found in DOM');
      return;
    }

    reviewsList.innerHTML = '';
    
    reviews.forEach(review => addReviewToDOM(review));
    reviewCount.textContent = reviews.length;
    console.log(`Loaded ${reviews.length} reviews for title: ${currentPostTitle}`);

  } catch (error) {
    console.error('Error loading reviews:', error);
  }
}

// Submit review locally to localStorage
function submitReviewToStorage(review) {
  if (!currentPostTitle) {
    throw new Error('No travel title found for submission.');
  }

  try {
    // Load existing user reviews from localStorage
    const storedReviewsKey = `userReviews_${encodeURIComponent(currentPostTitle)}`;
    const storedReviews = JSON.parse(localStorage.getItem(storedReviewsKey)) || [];

    // Add new review
    storedReviews.push(review);

    // Save back to localStorage
    localStorage.setItem(storedReviewsKey, JSON.stringify(storedReviews));

    return true;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
}

// Send review to your email via EmailJS
async function sendReviewEmail(review, location) {
  try {
    const templateParams = {
      to_email: 'thiroshmadhusha0520@gmail.com',
      location: location,
      guest_name: review.author,
      rating: '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating) + ` (${review.rating}/5)`,
      date: review.date,
      comment: review.comment,
      json_format: `{ author: '${review.author}', rating: ${review.rating}, date: '${review.date}', comment: '${review.comment}' }`
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error.text || error);
    return false;
  }
}

// Add review to DOM (prepend to show latest at top)
function addReviewToDOM(review) {
  const reviewsList = document.getElementById('reviews-list');
  if (!reviewsList) return;

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
  
  // Prepend to show latest at the top
  reviewsList.insertBefore(reviewItem, reviewsList.firstChild);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize review functionality
function initializeReviews() {
  console.log('initializeReviews called');
  
  const travelTitleElement = document.getElementById('travel-title');
  if (!travelTitleElement) {
    console.log('Not on travel detail page, skipping review initialization');
    return;
  }

  const stars = document.getElementById('rating-stars');
  const submitBtn = document.querySelector('.submit-review');
  const reviewComment = document.getElementById('review-comment');
  const reviewGuestName = document.getElementById('review-guest-name');
  const reviewsList = document.getElementById('reviews-list');
  const reviewCount = document.getElementById('review-count');
  
  if (!stars || !submitBtn || !reviewComment || !reviewGuestName || !reviewsList || !reviewCount) {
    console.error('One or more review elements not found in DOM');
    return;
  }

  let rating = 0;

  currentPostTitle = travelTitleElement.textContent.trim();
  console.log('Initialized with postTitle:', currentPostTitle);
  
  if (!currentPostTitle) {
    console.error('Travel title is empty');
    showToast('Error: Unable to load page details', 'error');
    return;
  }

  // Load reviews immediately on initialization
  loadReviews();

  stars.addEventListener('click', (e) => {
    const rect = stars.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const starWidth = rect.width / 5;
    rating = Math.ceil(clickX / starWidth);
    rating = Math.max(1, Math.min(5, rating));
    updateStars();
  });

  function updateStars() {
    const filled = '★'.repeat(rating);
    const empty = '☆'.repeat(5 - rating);
    stars.textContent = filled + empty;
  }

  updateStars();

  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    const comment = reviewComment.value.trim();
    const guestName = reviewGuestName.value.trim();
    
    if (!currentPostTitle) {
      showToast('Error: Unable to determine the post title. Please try again.', 'error');
      return;
    }

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

    isSubmitting = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const review = {
      author: guestName,
      rating: rating,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      comment: comment
    };

    try {
      submitReviewToStorage(review);
      reviews.push(review);
      addReviewToDOM(review);
      reviewCount.textContent = reviews.length;

      reviewComment.value = '';
      reviewGuestName.value = '';
      rating = 0;
      updateStars();

      showToast('Review submitted successfully! Thank you for your feedback.', 'success');

      sendReviewEmail(review, currentPostTitle).then(emailSent => {
        if (emailSent) {
          console.log('Email notification sent successfully');
        } else {
          console.log('Email notification failed, but review is saved locally');
        }
      });
      
    } catch (error) {
      showToast('Failed to submit review. Please try again.', 'error');
      console.error('Error submitting review:', error);
    } finally {
      isSubmitting = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Publish';
    }
  });
  
  console.log('Review system initialized successfully');
}

console.log('reviews.js loaded');
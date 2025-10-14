// Reviews data
const reviewsData = [
  // Google Reviews
  {
    platform: 'google',
    name: 'Chanuka Alawaththa',
    rating: 5,
    date: 'October 12, 2025',
    text: 'If you want to pay for a phone, buyzone mobile is the best place. They have excellent customer service and a wide range of products at competitive prices.',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'
  },
  {
    platform: 'google',
    name: 'Tharindu Weththasinghe',
    rating: 5,
    date: 'October 12, 2025',
    text: 'Very Best Customer Service..& Friendly Starff..Good Quality Products...Highly Recommended This',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'
  },
  {
    platform: 'google',
    name: 'Pasidu Kavishka',
    rating: 5,
    date: 'October 12, 2025',
    text: 'Good customer service and friendly stuff I brought honor 400 and I recommend this place for everyone',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'
  },
  {
    platform: 'google',
    name: 'Sarah Johnson',
    rating: 5,
    date: 'October 10, 2025',
    text: 'Amazing experience exploring Sri Lanka with CUToursSL! The tour was well-organized and our guide was incredibly knowledgeable. Highly recommend!',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'
  },
  {
    platform: 'google',
    name: 'Michael Chen',
    rating: 5,
    date: 'October 8, 2025',
    text: 'Professional service from start to finish. The vehicles were clean and comfortable, and the drivers were punctual and friendly.',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'
  },
  {
    platform: 'google',
    name: 'Christopher Anderson',
    rating: 5,
    date: 'October 6, 2025',
    text: 'Best tour operator in Sri Lanka! Our family had an unforgettable experience. The itinerary was perfectly planned and executed. Every detail was taken care of with precision. The driver was knowledgeable, friendly, and made our journey comfortable and enjoyable. We visited amazing places and learned so much about Sri Lankan culture and history.',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'
  },
  
  // TripAdvisor Reviews
  {
    platform: 'tripadvisor',
    name: 'Emma Williams',
    rating: 5,
    date: 'October 11, 2025',
    text: 'Best tour company in Sri Lanka! They customized our itinerary perfectly and showed us hidden gems we would never have found on our own.',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://www.tripadvisor.com/YOUR_TRIPADVISOR_URL'
  },
  {
    platform: 'tripadvisor',
    name: 'David Anderson',
    rating: 5,
    date: 'October 9, 2025',
    text: 'Exceptional service and great value for money. Our driver was like a personal tour guide, sharing stories and local knowledge throughout our journey.',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://www.tripadvisor.com/YOUR_TRIPADVISOR_URL'
  },
  {
    platform: 'tripadvisor',
    name: 'Lisa Martinez',
    rating: 5,
    date: 'October 7, 2025',
    text: 'CUToursSL made our honeymoon unforgettable! Every detail was taken care of, and we felt safe and well-cared for throughout our trip.',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://www.tripadvisor.com/YOUR_TRIPADVISOR_URL'
  },
  {
    platform: 'tripadvisor',
    name: 'James Wilson',
    rating: 5,
    date: 'October 5, 2025',
    text: 'Highly professional and reliable. They went above and beyond to ensure we had the best experience. Will definitely book with them again!',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://www.tripadvisor.com/YOUR_TRIPADVISOR_URL'
  },
  {
    platform: 'tripadvisor',
    name: 'Sophie Brown',
    rating: 5,
    date: 'October 3, 2025',
    text: 'Outstanding tour experience! The attention to detail and personalized service made our Sri Lankan adventure truly special. Five stars!',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://www.tripadvisor.com/YOUR_TRIPADVISOR_URL'
  },
  {
    platform: 'tripadvisor',
    name: 'Alexander Thompson',
    rating: 5,
    date: 'October 1, 2025',
    text: 'We had the most amazing time with CUToursSL! The tour was expertly organized, covering all the must-see destinations in Sri Lanka. Our guide was incredibly knowledgeable about the local culture, history, and wildlife. The accommodation was top-notch, and transportation was comfortable throughout. I highly recommend this company to anyone planning a trip to Sri Lanka!',
    avatar: '/assets/hero/avatar.jpg',
    reviewUrl: 'https://www.tripadvisor.com/YOUR_TRIPADVISOR_URL'
  }
];

// Shuffle array function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get platform logo
function getPlatformLogo(platform) {
  return platform === 'google' 
    ? '/assets/googlel.png' 
    : '/assets/tripad.png';
}

// Generate stars HTML
function generateStars(rating) {
  let starsHTML = '';
  for (let i = 0; i < 5; i++) {
    starsHTML += '<i class="ri-star-fill"></i>';
  }
  return starsHTML;
}

// Truncate name to max 10 characters
function truncateName(name) {
  if (name.length > 10) {
    return name.substring(0, 10) + '...';
  }
  return name;
}

// Check if text needs "Read more"
function needsReadMore(text) {
  const tempDiv = document.createElement('div');
  tempDiv.style.cssText = 'width: 300px; line-height: 1.6; font-size: 0.95rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;';
  tempDiv.textContent = text;
  document.body.appendChild(tempDiv);
  const needsMore = tempDiv.scrollHeight > tempDiv.clientHeight;
  document.body.removeChild(tempDiv);
  return needsMore;
}

// Update review counts
function updateReviewCounts() {
  const googleReviews = reviewsData.filter(r => r.platform === 'google');
  const tripadvisorReviews = reviewsData.filter(r => r.platform === 'tripadvisor');
  
  const googleCountEl = document.getElementById('google-review-count');
  const tripadvisorCountEl = document.getElementById('tripadvisor-review-count');
  
  if (googleCountEl) {
    googleCountEl.textContent = `Based on ${googleReviews.length.toLocaleString()} Reviews`;
  }
  
  if (tripadvisorCountEl) {
    tripadvisorCountEl.textContent = `Based on ${tripadvisorReviews.length.toLocaleString()} Reviews`;
  }
}

// Initialize reviews slider
function initReviewsSlider() {
  const reviewsWrapper = document.getElementById('reviews-wrapper');
  
  if (!reviewsWrapper) {
    console.error('Reviews wrapper not found');
    return;
  }

  // Update review counts
  updateReviewCounts();

  // Shuffle reviews to randomize display
  const shuffledReviews = shuffleArray(reviewsData);

  // Populate reviews
  shuffledReviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'swiper-slide';
    
    const showReadMore = needsReadMore(review.text);
    
    reviewCard.innerHTML = `
      <div class="review__card">
        <div class="review__header">
          <img src="${review.avatar}" alt="${review.name}" class="review__avatar" onerror="this.src='/assets/hero/avatar.jpg'">
          <div class="review__user-info">
            <div class="review__name" title="${review.name}">${truncateName(review.name)}</div>
            <div class="review__stars">
              ${generateStars(review.rating)}
            </div>
            <div class="review__date">${review.date}</div>
          </div>
          <img src="${getPlatformLogo(review.platform)}" alt="${review.platform}" class="review__platform-badge" onerror="this.style.display='none'">
        </div>
        <p class="review__text">${review.text}</p>
        ${showReadMore ? `<a href="${review.reviewUrl}" target="_blank" class="read-more-btn">Read more</a>` : ''}
      </div>
    `;
    reviewsWrapper.appendChild(reviewCard);
  });

  // Initialize Swiper
  const swiper = new Swiper('.reviewsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  console.log('Reviews slider initialized with', shuffledReviews.length, 'reviews');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviewsSlider);
} else {
  initReviewsSlider();
}
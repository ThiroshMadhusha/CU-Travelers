// js/featured.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('featured.js loaded'); // Debug log
  if (window.featuredPostsData) {
    const featuredContainer = document.getElementById('featured-post-container');
    if (featuredContainer) {
      console.log('Container found:', featuredContainer); // Debug log
      const featuredTemplate = document.createElement('template');
      featuredTemplate.innerHTML = `
        <div class="post-box">
          <img src="" alt="" class="post-img">
          <span class="featured-badge">Featured</span>
          <div class="card-box">
            <box-icon name="map-pin" type="solid" color="orange"></box-icon>
            <span class="location"></span>
            <span class="rating">★ <span class="rating-value"></span> (<span class="reviews"></span>)</span>
          </div>
          <a href="#" class="post-title"></a>
          <div class="price-book-container">
            <span class="price"><span class="price-amount"></span><span class="price-unit"></span></span>
            <button class="book-btn">Book Now</button>
          </div>
        </div>
      `;

      window.featuredPostsData.forEach(post => {
        const postBox = featuredTemplate.content.cloneNode(true);
        
        postBox.querySelector('.post-img').src = post.img || '';
        postBox.querySelector('.location').textContent = post.location || 'Unknown';
        postBox.querySelector('.rating-value').textContent = post.rating || 'N/A';
        postBox.querySelector('.reviews').textContent = post.reviews || '0';
        postBox.querySelector('.post-title').textContent = post.title || 'Untitled';
        postBox.querySelector('.post-title').href = post.title ? `/pages/travel-view.html?title=${encodeURIComponent(post.title)}` : '#';
        postBox.querySelector('.price-amount').textContent = post.price ? '$' + post.price : '$0';
        postBox.querySelector('.price-unit').textContent = post.priceUnit || '/per tour';

        featuredContainer.appendChild(postBox);
      });
    } else {
      console.error('featured-post-container not found in the DOM');
    }
  } else {
    console.error('featuredPostsData is not available');
  }
});
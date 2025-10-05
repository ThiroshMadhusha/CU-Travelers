// postsData.js
const postsData = [
  {
    img: '/assets/nature/blebeach.jpg',
    title: 'Yala National Park',
    location: 'Monaragala',
    price: '20',
    priceUnit: '/per tour',
    category: 'nature',
    tag: 'Popular',
    description: 'Explore the wild beauty of Yala National Park, home to leopards, elephants, and diverse birdlife.'
  },
  {
    img: '/assets/beachs/goyambokka2.jpg',
    title: 'Arugam Bay',
    location: 'Tangalle',
    price: '99',
    priceUnit: '/per tour',
    category: 'beach',
    tag: 'Famous',
    description: 'Sri Lanka has a coastline of over 1600 km and is ideally suited for windsurfing, speed boating, and other water sports. Arugam Bay has azure skies and slanting coconut trees. If you are looking to surf in turquoise waters, Arugam Bay must be in your list of must-see tourist places in Sri Lanka.'
  },
  {
    img: '/assets/nature/tangallelagoon3.jpg',
    title: 'Whale Watching',
    location: 'Mirissa',
    price: '220',
    priceUnit: '/per tour',
    category: 'nature',
    tag: 'Popular',
    description: 'Experience the thrill of whale watching in Mirissa, where you can spot blue whales and dolphins in their natural habitat.'
  },
  {
    img: '/assets/popular/lighthouse.jpg',
    title: 'Udawalawe National Park',
    location: 'Udawalawe',
    price: '80',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Famous',
    description: 'Discover Udawalawe National Park, known for its large elephant population and scenic landscapes.'
  },
  {
    img: '/assets/popular/tea.jpg',
    title: 'Blue Beach Island',
    location: 'Ratnapura',
    price: '30',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Trending',
    description: 'Relax on the pristine shores of Blue Beach Island, a hidden gem with crystal-clear waters.'
  },
  {
    img: '/assets/popular/anu.jpg',
    title: 'Goyambokka Beach',
    location: 'Anuradhapura',
    price: '400',
    priceUnit: '/per tour',
    category: 'beach',
    tag: 'New',
    description: 'Enjoy the serene beauty of Goyambokka Beach, perfect for a peaceful getaway.'
  },
  {
    img: '/assets/popular/mat.jpg',
    title: 'Rekawa Lagoon',
    location: 'Matale',
    price: '25',
    priceUnit: '/per tour',
    category: 'nature',
    tag: 'Explore',
    description: 'Visit Rekawa Lagoon for a unique experience of bird watching and turtle nesting sites.'
  },
  {
    img: '/assets/popular/dam.jpg',
    title: 'Dondra Head Lighthouse',
    location: 'Dambulla',
    price: '35',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Hidden',
    description: 'Climb to the top of Dondra Head Lighthouse for stunning coastal views.'
  },
  {
    img: '/assets/popular/handu.jpg',
    title: 'Handunugoda Tea Estate',
    location: 'Udawalawe',
    price: '30',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Classic',
    description: 'Tour the historic Handunugoda Tea Estate and savor the finest Ceylon tea.'
  },
  {
    img: '/assets/popular/ancient.jpg',
    title: 'Ancient Ruins',
    location: 'Anuradhapura',
    price: '40',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Historic',
    description: 'Explore the ancient ruins of Anuradhapura, a UNESCO World Heritage site.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const postContainer = document.getElementById('post-container');
  const postTemplate = document.getElementById('post-template');

  postsData.forEach(post => {
    const postBox = postTemplate.content.cloneNode(true);
    
    postBox.querySelector('.post-box').classList.add('all'); // Default class for filtering
    postBox.querySelector('.post-box').classList.add(post.category); // Add category class for filtering
    postBox.querySelector('.post-img').src = post.img;
    postBox.querySelector('.location').textContent = post.location;
    postBox.querySelector('.price-amount').textContent = '$' + post.price;
    postBox.querySelector('.price-unit').textContent = post.priceUnit;
    postBox.querySelector('.post-title').textContent = post.title;
    postBox.querySelector('.post-title').href = `/pages/travel-view.html?title=${encodeURIComponent(post.title)}`; // Navigate to view page
    postBox.querySelector('.tag').textContent = post.tag;
    postBox.querySelector('.book-btn').addEventListener('click', () => {
      window.location.href = `/pages/travel-view.html?title=${encodeURIComponent(post.title)}`;
    });

    postContainer.appendChild(postBox);
  });
});
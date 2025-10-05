// postsData.js
const postsData = [
  {
    img: '/assets/nature/blebeach.jpg',
    title: 'Yala National Park',
    location: 'Monaragala',
    price: '20',
    priceUnit: '/per tour',
    category: 'nature',
    tag: 'Popular'
  },
  {
    img: '/assets/beachs/goyambokka2.jpg',
    title: 'Arugam Bay',
    location: 'Tangalle',
    price: '99',
    priceUnit: '/per tour',
    category: 'beach',
    tag: 'Famous'
  },
  {
    img: '/assets/nature/tangallelagoon3.jpg',
    title: 'Whale Watching',
    location: 'Mirissa',
    price: '220',
    priceUnit: '/per tour',
    category: 'nature',
    tag: 'Popular'
  },
  {
    img: '/assets/popular/lighthouse.jpg',
    title: 'Udawalawe National Park',
    location: 'Udawalawe',
    price: '80',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Famous'
  },
  {
    img: '/assets/popular/tea.jpg',
    title: 'Blue Beach Island',
    location: 'Ratnapura',
    price: '30',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Trending'
  },
  {
    img: '/assets/popular/anu.jpg',
    title: 'Goyambokka Beach',
    location: 'Anuradhapura',
    price: '400',
    priceUnit: '/per tour',
    category: 'beach',
    tag: 'New'
  },
  {
    img: '/assets/popular/mat.jpg',
    title: 'Rekawa Lagoon',
    location: 'Matale',
    price: '25',
    priceUnit: '/per tour',
    category: 'nature',
    tag: 'Explore'
  },
  {
    img: '/assets/popular/dam.jpg',
    title: 'Dondra Head Lighthouse',
    location: 'Dambulla',
    price: '35',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Hidden'
  },
  {
    img: '/assets/popular/handu.jpg',
    title: 'Handunugoda Tea Estate',
    location: 'Udawalawe',
    price: '30',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Classic'
  },
  {
    img: '/assets/popular/ancient.jpg',
    title: 'Ancient Ruins',
    location: 'Anuradhapura',
    price: '40',
    priceUnit: '/per tour',
    category: 'other',
    tag: 'Historic'
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

    postContainer.appendChild(postBox);
  });
});
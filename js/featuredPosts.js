// featuredPosts.js
const featuredPostsData = [
  {
    img: '/assets/popular/airport.jpg',
    title: 'Airport Shuttle Services',
    location: 'Colombo',
    price: '120',
    priceUnit: '/per pickup or drop',
    description: 'Smooth and reliable transfers from or to the airport with CU Tours Sri Lanka. Enjoy comfortable, air-conditioned vehicles and friendly drivers ensuring timely pickups and drop-offs. Whether arriving or departing, travel stress-free with door-to-door service to hotels or destinations across Sri Lanka. Perfect for solo travelers, families, or groups seeking comfort, safety, and punctuality every time.',
    distance: '400 k/m',
    maxGroupSize: 7,
    address: 'add location',
    gallery: [
      '/assets/featured/airport1.jpg',
      '/assets/featured/airport6.jpg',
      '/assets/featured/airport2.jpg',
      '/assets/featured/airport3.jpg',
      '/assets/featured/airport5.jpg',
    ],
details: [
  {
    title: 'Pick Up',
    points: [
      'Meet at airport with name board',
      'Direct hotel transfer'
    ]
  },
  {
    title: 'Drop',
    points: [
      'On-time airport drop-off',
      'Comfortable & Safe ride'
    ]
  },
  {
    title: 'Best time to start',
    points: [
      '3–4 hrs before flight',
      'Avoid rush hours'
    ]
  }
]

  },
  {
    img: '/assets/popular/bridge1.jpg',
    title: 'Ella One Day Tour',
    location: 'Ella',
    price: '100',
    priceUnit: '/per tour',
    description: 'Experience the charm of Sri Lanka’s hill country in Ella. Home to lush tea plantations and misty mountains. Visit the iconic Nine Arch Bridge, Little Adam’s Peak, and the scenic Ravana Falls. Capture breathtaking photos, sip fresh Ceylon tea, and enjoy panoramic views of the valleys below. A perfect day trip blending nature, culture, and adventure.',
    distance: '300 k/m',
    maxGroupSize: 7,
    address: 'add location',
    gallery: [
      '/assets/featured/ella1.jpg',
      '/assets/featured/ella4.jpg',
      '/assets/featured/ella2.jpg',
      '/assets/featured/ella5.jpg',
      '/assets/featured/ella6.jpg'
    ],
    details: [
      {
        title: 'Tour Plan',
        points: ['Hike to Nine Arch Bridge', 'Visit tea plantations', 'Little Adam Peak']
      },
      {
        title: 'What we Can View',
        points: ['Iconic bridge', 'Tea fields', 'Ravana Falls']
      },
      {
        title: 'Best time to start',
        points: ['Morning for cooler weather', 'Dry season preferred']
      }
    ]
  },
  {
    img: '/assets/popular/gallfort.jpg',
    title: 'Galle City Tour',
    location: 'Galle',
    price: '25',
    priceUnit: '/per tour',
    category: 'nature',
    description: 'Discover the colonial beauty of Galle, a UNESCO World Heritage city on Sri Lanka’s southern coast. Explore the historic Galle Fort, Lighthouse, and charming cobblestone streets lined with boutiques and cafés. Visit Unawatuna Beach for a relaxing swim and enjoy local seafood by the ocean. A tour rich in history, culture, and coastal charm.',
    distance: '300 k/m',
    maxGroupSize: 7,
    address: 'add location',
    gallery: [
      '/assets/featured/galle2.jpg',
      '/assets/featured/galle1.jpg',
      '/assets/featured/galle3.jpeg',
      '/assets/featured/galle4.jpg',
      '/assets/featured/galle5.jpg',
    ],
    details: [
      {
        title: 'Tour Plan',
        points: ['Explore Galle Fort', 'Visit museums', 'Beach walk', 'Hadungoda Tea Plantation']
      },
      {
        title: 'What we Can View',
        points: ['Colonial architecture', 'Ocean views', 'Historical sites']
      },
      {
        title: 'Best time to start',
        points: ['Afternoon for sunset views', 'Year-round but avoid rain']
      }
    ]
  },
  {
    img: '/assets/popular/yala.jpg',
    title: 'Yala National Park Safari',
    location: 'Monaragala',
    price: '30',
    priceUnit: '/per tour',
    description: 'Embark on an exciting wildlife safari in Yala National Park, home to leopards, elephants, crocodiles, and hundreds of bird species. Ride through dense jungles and open grasslands as expert drivers guide you to the best wildlife spots. Ideal for nature lovers and photographers, this tour promises thrilling encounters and unforgettable scenery.',
    distance: '400 k/m',
    maxGroupSize: 7,
    address: 'add location',
    gallery: [
      '/assets/gallery/yala1.jpg',
      '/assets/gallery/yala2.jpg',
      '/assets/gallery/yala3.jpg',
      '/assets/gallery/yala4.jpg',
      '/assets/gallery/yala5.jpg',
      '/assets/gallery/yala6.jpg'
    ],
    details: [
      {
        title: 'Tour Plan',
        points: ['Early morning safari', 'Spot wildlife', 'Wildlife Photography']
      },
      {
        title: 'What we Can View',
        points: ['Elephants', 'Leopards', 'Birds']
      },
      {
        title: 'Best time to start',
        points: ['Dawn for animal activity', 'Dry season']
      }
    ]
  },
  {
    img: '/assets/popular/udawalawa.jpg',
    title: 'Udawalawe Safari',
    location: 'Udawalawe',
    price: '80',
    priceUnit: '/per tour',
    description: 'Witness the majestic beauty of Sri Lanka’s wildlife at Udawalawe National Park. Famous for its large elephant herds, the park also hosts buffalo, deer, crocodiles, and vibrant birdlife. Enjoy a peaceful jeep safari through stunning landscapes surrounding Udawalawe Reservoir. A must-visit destination for those who love nature and wildlife photography.',
    distance: '500 k/m',
    maxGroupSize: 7,
    address: 'add location',
    gallery: [
      '/assets/gallery/udawalawe1.jpg',
      '/assets/gallery/udawalawe2.jpg',
      '/assets/gallery/udawalawe3.jpg',
      '/assets/gallery/udawalawe4.jpg',
      '/assets/gallery/udawalawe5.jpg',
      '/assets/gallery/udawalawe6.jpg'
    ],
    details: [
      {
        title: 'Tour Plan',
        points: ['Safari drive', 'Elephant orphanage visit', 'Bird watching', 'Return']
      },
      {
        title: 'What we Can View',
        points: ['Elephants', 'Buffalo', 'Crocodiles']
      },
      {
        title: 'Best time to start',
        points: ['Early morning', 'Avoid midday heat']
      }
    ]
  },
  {
    img: '/assets/popular/whales.jpg',
    title: 'Whale Watching',
    location: 'Mirissa',
    price: '220',
    priceUnit: '/per tour',
    description: 'The three main whale and dolphin watching areas in Sri Lanka are Mirissa in the south-west, Trincomalee in the north-east. The most frequently targeted species of whale for whale watching in Sri Lanka is the blue whale, which can be observed off the coast of Mirissa between December and March, and off Trincomalee between March and July. Bryde\'s whales and sperm whales are sometimes also opportunistically observed during trips that are focused on blue whales.',
    distance: '300 k/m',
    maxGroupSize: 7,
    address: 'add location',
    gallery: [
      '/assets/gallery/whales1.jpg',
      '/assets/gallery/whales2.jpg',
      '/assets/gallery/whales3.jpg',
      '/assets/gallery/whales4.jpg',
      '/assets/gallery/whales5.jpg',
      '/assets/gallery/whales6.jpg'
    ],
    details: [
      {
        title: 'Tour Plan',
        points: ['Boat departure', 'Whale spotting', 'Lunch on board', 'Return to shore']
      },
      {
        title: 'What we Can View',
        points: ['Blue whales', 'Dolphins', 'Ocean scenery']
      },
      {
        title: 'Best time to start',
        points: ['Seasonal: Dec-Mar', 'Calm sea conditions']
      }
    ]
  },
  {
    img: '/assets/popular/polonnaruwa.jpg',
    title: 'Ancient City Visit Tour',
    location: 'Polonnaruwa',
    price: '15',
    priceUnit: '/per tour',
    description: 'Step back in time with a journey to Polonnaruwa, Sri Lanka’s second ancient capital and a UNESCO World Heritage Site. Explore well-preserved ruins of royal palaces, temples, Buddha statues, and sacred stupas. Learn about the island’s rich history and marvel at ancient architecture surrounded by lush greenery. A must-see for culture and history lovers.',
    distance: '500 k/m',
    maxGroupSize: 7,
    address: 'add location',
    gallery: [
      '/assets/gallery/polonnaruwa1.jpg',
      '/assets/gallery/polonnaruwa2.jpg',
      '/assets/gallery/polonnaruwa3.jpg',
      '/assets/gallery/polonnaruwa4.jpg',
      '/assets/gallery/polonnaruwa5.jpg',
      '/assets/gallery/polonnaruwa6.jpg'
    ],
    details: [
      {
        title: 'Tour Plan',
        points: ['Visit ancient ruins', 'Explore temples', 'Historical guided tour', 'Free time']
      },
      {
        title: 'What we Can View',
        points: ['Ancient architecture', 'Statues', 'Ruins']
      },
      {
        title: 'Best time to start',
        points: ['Morning to avoid heat', 'Dry weather']
      }
    ]
  }
];

function initFeaturedPosts() {
  console.log('Initializing featured posts...');
  const postContainer = document.getElementById('post-container');
  const postTemplate = document.getElementById('post-template');

  if (!postContainer || !postTemplate) {
    console.error('Error: #post-container or #post-template not found in the DOM');
    return;
  }

  console.log('Found post-container and post-template, generating cards...');

  // Clear existing cards (except view-more-container) to prevent duplicates
  const viewMoreContainer = postContainer.querySelector('.view-more-container');
  postContainer.innerHTML = '';
  postContainer.appendChild(viewMoreContainer);

  // Generate tour cards
  featuredPostsData.forEach((post, index) => {
    try {
      const postBox = postTemplate.content.cloneNode(true);
      
      // Add default category if undefined
      postBox.querySelector('.post-box').classList.add('all', post.category || 'nature');
      postBox.querySelector('.post-img').src = post.img;
      postBox.querySelector('.post-img').alt = post.title;
      postBox.querySelector('.location').textContent = post.location;
      postBox.querySelector('.price-amount').textContent = '$' + post.price;
      postBox.querySelector('.price-unit').textContent = post.priceUnit;
      postBox.querySelector('.post-title').textContent = post.title;
      postBox.querySelector('.post-title').href = `/pages/travel-view.html?title=${encodeURIComponent(post.title)}`;
      postBox.querySelector('.book-btn').addEventListener('click', () => {
        window.location.href = `/pages/travel-view.html?title=${encodeURIComponent(post.title)}`;
      });

      // Insert tour cards before the view-more-container
      postContainer.insertBefore(postBox, viewMoreContainer);
      console.log(`Successfully appended card ${index + 1}: ${post.title}`);
    } catch (error) {
      console.error(`Error generating card for ${post.title}:`, error);
    }
  });
}

// Export the data for use in other files
function getToursData() {
  return featuredPostsData;
}
const featuredPostsData = [
  {
    img: '/assets/popular/yala.jpg',
    title: 'Yala National Park Saffari',
    location: 'Monaragala',
    price: '30',
    priceUnit: '/per tour',
    description: 'Missing Yala National Park while Sri Lanka sightseeing might bring regret to wildlife lovers. It is home to a host of wildlife and birds you are bound to run into a group of elephants bathing in streams, tossing their trunks wildly or leopards nestling lazily on tree branches. You could opt for the safari drives or a nature trail among the thick green foliage of the forest. Some tourists also camp at Yala and enjoy a barbeque under the stars. With so much to see and do here, Yala is indeed one of the best tourist places in Sri Lanka. Yala is the perfect place to try your hand at wildlife photography.',
    distance: '400 k/m',
    maxGroupSize: 7,
    address: 'add location'
  },
  {
    img: '/assets/popular/bridge1.jpg',
    title: 'Ella Tour',
    location: 'Ella',
    price: '100',
    priceUnit: '/per tour',
    description: 'Nine Arch Bridge is also called the Bridge in the sky and is among the iconic Sri Lanka tourism places. It is in the small mountain town of Ella and offers visitors with splendid view of the surrounding area which comprises of lush greenery and tea fields. What makes the bridge unique is that it is made up of stone, brick and cement. There is no use of any steel. It is one of the best places to visit in Sri Lanka for a memorable holiday.',
    distance: '300 k/m',
    maxGroupSize: 7,
    address: 'add location'
  },
  {
    img: '/assets/popular/udawalawa.jpg',
    title: 'Udawalawe Park Saffari',
    location: 'Udawalawe',
    price: '80',
    priceUnit: '/per tour',
    description: 'Udawalawe National Park is a must-visit place for wildlife lovers. It is one of those few places where elephant sightings are quite frequent. Not only elephant, you get a chance to get a glimpse of many animals including peacocks, water buffalo, crocodiles, jackals, monkeys and deer. For the best experience of this top attractions in Sri Lanka, take a safari early morning when the animals are most active.',
    distance: '500 k/m',
    maxGroupSize: 7,
    address: 'add location'
  },
  {
    img: '/assets/popular/whales.jpg',
    title: 'Whale Watching',
    location: 'Mirissa',
    price: '220',
    priceUnit: '/per tour',
    description: 'The three main whale and dolphin watching areas in Sri Lanka are Mirissa in the south-west, Trincomalee in the north-east. The most frequently targeted species of whale for whale watching in Sri Lanka is the blue whale, which can be observed off the coast of Mrissa between December and March, and off Trincomalee between March and July. Bryde\'s whales and sperm whales are sometimes also opportunistically observed during trips that are focused on blue whales.',
    distance: '300 k/m',
    maxGroupSize: 7,
    address: 'add location'
  },
  {
    img: '/assets/popular/polonnaruwa.jpg',
    title: 'Ancient City Visit Tour',
    location: 'Polonnaruwa',
    price: '15',
    priceUnit: '/per tour',
    description: 'This is one of the top Sri Lanka tourist spots which is also claimed to be one of the world heritage sites. The place gained its importance after the arrival of the Bodhi Tree which is also called the "tree of enlightenment". The place protects the tree and keeps it away from the wild elephants during the reign of King Kirthi Sri Rangasingha.',
    distance: '500 k/m',
    maxGroupSize: 7,
    address: 'add location'
  },
  {
    img: '/assets/popular/gallfort.jpg',
    title: 'Galle City Tour',
    location: 'Galle',
    price: '25',
    priceUnit: '/per tour',
    category: 'nature',
    description: 'Sigiriya or the mount of remembrance is a World Heritage Site and one of the most stunning places to see in Sri Lanka. This giant formation of rock rises out of nowhere towering over everything in its vicinity. It is quite a climb to the top but once up there you will get to see a panoramic view of the nearby sights and the Sigiriya fort. The rock fortress is a slice of history perched on a rock and is really worth a visit.',
    distance: '300 k/m',
    maxGroupSize: 7,
    address: 'add location'
  },
  {
    img: '/assets/popular/airport.jpg',
    title: 'Airport Shuttle Services',
    location: 'Colombo',
    price: '120',
    priceUnit: '/per pickup or drop',
    description: 'Sri Lanka has a coastline of over 1600 km and is ideally suited for windsurfing, speed boating, and other water sports. Arugam Bay has azure skies and slanting coconut trees. If you are looking to surf in turquoise waters, Arugam Bay must be in your list of must-see tourist places in Sri Lanka.',
    distance: '400 k/m',
    maxGroupSize: 7,
    address: 'add location'
  },
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
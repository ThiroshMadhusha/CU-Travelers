// app.js
const imageData = [
    {
        src: "/./assets/animals/yala.jpg",
        location: "Kataragama",
        type: "Yala National Park",
        description: "Famous for its leopards, elephants, and diverse birdlife, Yala National Park offers thrilling safaris, making it one of Sri Lanka's premier wildlife destinations.",
        price: "$50",
        badge: "Featured",
        category: "nature" // Sample filter keyword
    },
    {
        src: "/./assets/temple/waurukannala.jpg",
        location: "Dikwella",
        type: "Wevurukannala Vihara Temple",
        description: "Home to the largest seated Buddha statue in Sri Lanka, this temple is a significant religious site with historical value, intricate murals, and an impressive design.",
        price: "$20",
        badge: "Popular",
        category: "other" // Sample filter keyword
    },
    {
        src: "/./assets/animals/kalamatiya.jpg",
        location: "Kalametiya",
        type: "Kalametiya Bird Sanctuary",
        description: "A peaceful sanctuary home to a variety of bird species. It's a haven for birdwatchers and nature lovers, with scenic views of lagoons and mangroves.",
        price: "$30",
        badge: "Featured",
        category: "nature" // Sample filter keyword
    },
    {
        src: "/./assets/popular/lighthouse.jpg",
        location: "Matara",
        type: "Dondra Head Lighthouse",
        description: "Sri Lanka’s tallest lighthouse, located near Matara, offers panoramic views of the southern coast and is a popular spot for photographers and history enthusiasts.",
        price: "$25",
        badge: "Popular",
        category: "beach" // Sample filter keyword
    }
];

// Function to generate slider items
function generateSliderItems() {
    const postContainer = document.getElementById('post-container');
    const postTemplate = document.getElementById('post-template');
    if (!postContainer || !postTemplate) {
        console.error('post-container or post-template not found');
        return;
    }

    imageData.forEach(item => {
        const postBox = postTemplate.content.cloneNode(true);
        postBox.querySelector('.post-img').src = item.src;
        postBox.querySelector('.post-img').alt = item.type;
        postBox.querySelector('.post-title').textContent = item.type;
        postBox.querySelector('.location').textContent = item.location;
        if (item.badge) {
            const badgeElement = document.createElement('span');
            badgeElement.className = 'featured-badge';
            badgeElement.textContent = item.badge;
            postBox.querySelector('.post-box').appendChild(badgeElement);
        }
        postBox.querySelector('.post-price').textContent = `${item.price}/per tour`;
        postBox.querySelector('.booking-btn').addEventListener('click', () => {
            alert(`Booking for ${item.type} at ${item.location}`);
        });
        postContainer.appendChild(postBox.cloneNode(true));
    });
}

// Call the function to generate slider items
generateSliderItems();
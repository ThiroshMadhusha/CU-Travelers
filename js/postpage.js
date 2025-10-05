// document.addEventListener('DOMContentLoaded', () => {
//     const postContainer = document.getElementById('post-container');
//     const postTemplate = document.getElementById('post-template');

//     postsData.forEach(post => {
//         const postBox = postTemplate.content.cloneNode(true);

//         postBox.querySelector('.post-box').classList.add(post.category.toLowerCase());
//         postBox.querySelector('.post-img').src = post.img;
//         postBox.querySelector('.category').textContent = post.category;
//         const postTitle = postBox.querySelector('.post-title');
//         postTitle.textContent = post.title;
//         postTitle.href = post.link;
//         postTitle.addEventListener('click', (e) => {
//             e.preventDefault();
//             sessionStorage.setItem('post', JSON.stringify(post));
//             window.location.href = post.link;
//         });
//         postBox.querySelector('.post-description').textContent = post.description;

//         postContainer.appendChild(postBox);
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('post-container');
    const postTemplate = document.getElementById('post-template');

    postsData.forEach(post => {
        const postBox = postTemplate.content.cloneNode(true);

        postBox.querySelector('.post-box').classList.add(post.category.toLowerCase());
        postBox.querySelector('.post-img').src = post.img;
        postBox.querySelector('.category').textContent = post.category;
        const postTitle = postBox.querySelector('.post-title');
        postTitle.textContent = post.title;
        postTitle.href = post.link;

        // Add a click event to set post data in sessionStorage and redirect
        postTitle.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.setItem('post', JSON.stringify(post));
            console.log("Data stored in sessionStorage:", post); // Check the stored data
            window.location.href = post.link;
        });

        postBox.querySelector('.post-description').textContent = post.description;

        postContainer.appendChild(postBox);
    });
});

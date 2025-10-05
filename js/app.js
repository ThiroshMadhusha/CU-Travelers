let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.slider .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
}

let timeRunning = 1000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun;

function startAutoRun() {
    runAutoRun = setTimeout(() => {
        nextBtn.click(); // Trigger the next button click automatically
    }, timeAutoNext);
}

startAutoRun(); // Start the slider auto-running at the beginning

function moveSlider(direction) {

    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, {once: true});

    // Enable both buttons
    nextBtn.style.pointerEvents = 'auto';
    prevBtn.style.pointerEvents = 'auto';

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    startAutoRun(); // Restart the auto-run after each click
}

// Enable both buttons
nextBtn.style.pointerEvents = 'auto';
prevBtn.style.pointerEvents = 'auto'; 

document.onreadystatechange = function() {
    if (this.readyState !== 'complete') {
        document.querySelector("body").style.visibility = 'hidden';
        document.querySelector(".preloader").style.visibility = 'visible';
        document.querySelector("body").style.overflowY = 'hidden';
    } else {
        setTimeout(() => {
            document.querySelector("body").style.visibility = 'visible';
            document.querySelector(".preloader").style.transform = 'translateY(100%)';
            document.querySelector(".preloader").style.visibility = 'hidden';
            document.querySelector("body").style.overflowY = 'scroll';
        }, 2000); // 2-second delay
    }
};


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

let slidecount = 0;

function updateSlide() {
    // Remove animation class from all images
    img1.classList.remove('animate');
    img2.classList.remove('animate');
    img3.classList.remove('animate');
    img4.classList.remove('animate');
    img5.classList.remove('animate');
    img6.classList.remove('animate');
    
    if (slidecount === 0) {
        img1.style.opacity = 1;
        img2.style.opacity = 0;
        img3.style.opacity = 0;
        img4.style.opacity = 0;
        img5.style.opacity = 0;
        img6.style.opacity = 0;
        img1.classList.add('animate'); // Add animation class to the visible image
        console.log(slidecount);
    } else if (slidecount === 1) {
        img1.style.opacity = 0;
        img2.style.opacity = 1;
        img3.style.opacity = 0;
        img4.style.opacity = 0;
        img5.style.opacity = 0;
        img6.style.opacity = 0;
        img2.classList.add('animate'); // Add animation class to the visible image
        console.log(slidecount);
    } else if (slidecount === 2) {
        img1.style.opacity = 0;
        img2.style.opacity = 0;
        img3.style.opacity = 1;
        img4.style.opacity = 0;
        img5.style.opacity = 0;
        img6.style.opacity = 0;
        img3.classList.add('animate'); // Add animation class to the visible image
        console.log(slidecount);
    } else if (slidecount === 3) {
        img1.style.opacity = 0;
        img2.style.opacity = 0;
        img3.style.opacity = 0;
        img4.style.opacity = 1;
        img5.style.opacity = 0;
        img6.style.opacity = 0;
        img4.classList.add('animate'); // Add animation class to the visible image
        console.log(slidecount);
    } else if (slidecount === 4) {
        img1.style.opacity = 0;
        img2.style.opacity = 0;
        img3.style.opacity = 0;
        img4.style.opacity = 0;
        img5.style.opacity = 1;
        img6.style.opacity = 0;
        img5.classList.add('animate'); // Add animation class to the visible image
        console.log(slidecount);
    } else if (slidecount === 5) {
        img1.style.opacity = 0;
        img2.style.opacity = 0;
        img3.style.opacity = 0;
        img4.style.opacity = 0;
        img5.style.opacity = 0;
        img6.style.opacity = 1;
        img6.classList.add('animate'); // Add animation class to the visible image
        console.log(slidecount);
        slidecount = -1;
    }
}

// Function to go to the next slide
function nextSlide() {
    slidecount++;
    updateSlide();
}

// Initial call to show the first image and start the interval
updateSlide();
setInterval(nextSlide, 10000);




const body = document.getElementById('body');
const button = document.getElementById('menu__toggle');
const menu = document.getElementById('menu');

if (button && menu) {
    button.addEventListener('click', () => {
        menu.classList.toggle('visible');
        if (menu.classList.contains('visible')) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'scroll';
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 600 && menu.classList.contains('visible') {
                menu.classList.remove('visible');
                body.style.overflowY = 'scroll';
                button.checked = false;
            }
        });
    });
}

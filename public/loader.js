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
const body = document.getElementById('body');
const button = document.getElementById('menu__toggle');
const menu = document.getElementById('menu');
const menuLinks = document.getElementsByClassName('menu-nav-link'); // No dot

if (button && menu) {
    button.addEventListener('click', () => {
        menu.classList.toggle('visible');
        if (menu.classList.contains('visible')) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'scroll';
        }
    });

    // Convert HTMLCollection to Array and add event listener
    Array.from(menuLinks).forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('visible');
            body.style.overflowY = 'scroll'; // Ensure scrolling is re-enabled
            button.checked = false; // Ensure checkbox is unchecked if applicable
        });
    });
}

// Add resize event listener outside of click handler
window.addEventListener('resize', () => {
    if (window.innerWidth >= 600 && menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        body.style.overflowY = 'scroll'; // Ensure scrolling is re-enabled
        button.checked = false; // Ensure checkbox is unchecked if applicable
    }
});

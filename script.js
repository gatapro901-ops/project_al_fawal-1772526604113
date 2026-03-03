// Add event listener to the logo
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    // Add animation to the logo
    logo.classList.add('animate');
    // Remove animation after 2 seconds
    setTimeout(() => {
        logo.classList.remove('animate');
    }, 2000);
});

// Add animation to the menu items
const menuItems = document.querySelectorAll('.menu li');
menuItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('animate');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('animate');
    });
});
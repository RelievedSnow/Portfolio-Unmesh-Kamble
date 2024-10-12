const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menuLinks = document.querySelectorAll('.dropdown-menu a');  // Select all the links in the dropdown


toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    // Toggle the icon class
    if (isOpen) {
        toggleBtnIcon.classList.remove('bi-list');
        toggleBtnIcon.classList.add('bi-x');
    } else {
        toggleBtnIcon.classList.remove('bi-x');
        toggleBtnIcon.classList.add('bi-list');
    }

    // Debugging outputs
    console.log("Menu is now " + (isOpen ? "open" : "closed"));
    console.log("Icon class is now: " + toggleBtnIcon.className);
};

// Close the dropdown menu when any link is clicked
menuLinks.forEach(link => {
    link.onclick = function () {
        dropdownMenu.classList.remove('open');
        toggleBtnIcon.classList.remove('bi-x');
        toggleBtnIcon.classList.add('bi-list');

        // Debugging outputs
        console.log("Link clicked: " + link.textContent);
        console.log("Menu is now closed");
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
            const activeSlide = slides.querySelector("[data-active]");
            const slidesArray = Array.from(slides.children);
            let newIndex = slidesArray.indexOf(activeSlide) + offset;

            if (newIndex < 0) newIndex = slidesArray.length - 1;
            if (newIndex >= slidesArray.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;

            // Apply the transform to shift the slides accordingly
            slides.style.transform = `translateX(-${newIndex * 100}%)`;
        });
    });
});


document.querySelectorAll('.column-gallery img').forEach( image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src')
    }
})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }
});





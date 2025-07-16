let navItem = document.querySelectorAll(".portfolio-navbar .item");
let galleryBoxes = document.querySelectorAll(".portfolio__inner .gallery .card");

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
        for (let j = 0; j < navItem.length; j++) {
            navItem[j].classList.remove("active");
        }
        this.classList.add("active");

        let galleryFilter = this.getAttribute("gallery-filter");

        for (let k = 0; k < galleryBoxes.length; k++) {
            galleryBoxes[k].classList.remove("active");
            galleryBoxes[k].classList.add("hide");

            if (galleryBoxes[k].getAttribute("gallery-box") == galleryFilter || galleryFilter == "all") {
                galleryBoxes[k].classList.remove("hide");
                galleryBoxes[k].classList.add("active");
            }
        }
    });
}

let sidebarItems = document.querySelectorAll(".fixed__navbar .item");

for (let i = 0; i < sidebarItems.length; i++) {
    sidebarItems[i].addEventListener("click", function () {
        for (let j = 0; j < sidebarItems.length; j++) {
            sidebarItems[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}

const sections = document.querySelectorAll(".main__index .sections");
const navLinks = document.querySelectorAll(".fixed__navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(current)) {
            link.classList.add("active");
        }
    });
});

const themeChanger = document.querySelector(".themeChanger");

themeChanger.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

const themeChangerIcons = document.querySelectorAll(".themeChanger .item");

for (let i = 0; i < themeChangerIcons.length; i++) {
    themeChangerIcons[i].addEventListener("click", function () {
        for (let j = 0; j < themeChangerIcons.length; j++) {
            themeChangerIcons[j].classList.add("active");
        }
        this.classList.remove("active");
    });
}

// Plugins

var swiper = new Swiper(".feedback__inner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        921: {
            slidesPerView: 2,
        },
    },
});

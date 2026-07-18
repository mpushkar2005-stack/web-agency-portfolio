// ============================
// Sticky Navbar
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

const featuredImage = document.getElementById("featuredDishImage");

const defaultImage = "assets/images/pasta.jpg";

const dishes = document.querySelectorAll(".dish-info");

dishes.forEach((dish) => {

    dish.addEventListener("mouseenter", () => {

        // Highlight active dish
        dishes.forEach(item => item.classList.remove("active"));
        dish.classList.add("active");

        const newImage = dish.dataset.image;

        // Animate image out
        featuredImage.classList.add("changing");

        setTimeout(() => {

            featuredImage.src = newImage;

            // Wait until the image has loaded
            featuredImage.onload = () => {

                featuredImage.classList.remove("changing");

            };

        },250);

    });

});

document.querySelector(".featured-list").addEventListener("mouseleave", () => {

    dishes.forEach(item => item.classList.remove("active"));
    dishes[0].classList.add("active");

    featuredImage.classList.add("changing");

    setTimeout(() => {

        featuredImage.src = defaultImage;

        featuredImage.onload = () => {

            featuredImage.classList.remove("changing");

        };

    },250);

});

dishes[0].classList.add("active");


// ============================
// Timeline Scroll Animation
// ============================

const timelineCards = document.querySelectorAll(".timeline-content");

const timelineObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            timeline.classList.add("animate");

            const dot = entry.target.parentElement.querySelector(".timeline-dot");

            dot.classList.add("show");

        }

    });

},{
    threshold:0.2
});

timelineCards.forEach((card)=>{

    timelineObserver.observe(card);

});


const timeline = document.querySelector(".timeline");
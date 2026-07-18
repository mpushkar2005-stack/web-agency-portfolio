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


// ============================
// Testimonials
// ============================

const testimonials = [

    {

        text:"An unforgettable evening filled with incredible flavours, elegant ambience and hospitality beyond expectations.",

        name:"Sarah Johnson",

        role:"Business Executive",

        stars:"★★★★★",

        image:"assets/images/customer1.jpg"

    },

    {

        text:"The finest dining experience I've ever had. Every detail felt luxurious and thoughtfully crafted.",

        name:"David Miller",

        role:"Food Blogger",

        stars:"★★★★★",

        image:"assets/images/customer2.jpg"

    },

    {

        text:"Outstanding food, warm hospitality and an atmosphere that makes every celebration memorable.",

        name:"Emma Wilson",

        role:"Entrepreneur",

        stars:"★★★★★",

        image:"assets/images/customer3.jpg"

    }

];

let current = 0;

const text = document.getElementById("testimonialText");
const name = document.getElementById("testimonialName");
const role = document.getElementById("testimonialRole");
const stars = document.getElementById("testimonialStars");
const image = document.getElementById("testimonialImage");

const dots = document.querySelectorAll(".dot");

function showTestimonial(index){

    text.classList.add("fade-out");
    image.classList.add("fade-out");

    setTimeout(()=>{

        text.textContent = testimonials[index].text;

        name.textContent = testimonials[index].name;

        role.textContent = testimonials[index].role;

        stars.textContent = testimonials[index].stars;

        image.src = testimonials[index].image;

        dots.forEach(dot=>dot.classList.remove("active"));

        dots[index].classList.add("active");

        text.classList.remove("fade-out");
        image.classList.remove("fade-out");

        text.classList.add("fade-in");
        image.classList.add("fade-in");

        setTimeout(()=>{

            text.classList.remove("fade-in");
            image.classList.remove("fade-in");

        },450);

    },250);

}

document
.getElementById("nextTestimonial")
.addEventListener("click",()=>{

    current++;

    if(current>=testimonials.length){

        current=0;

    }

    showTestimonial(current);

});

document
.getElementById("prevTestimonial")
.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=testimonials.length-1;

    }

    showTestimonial(current);

});

let testimonialInterval = setInterval(nextSlide,6000);

function nextSlide(){

    current++;

    if(current>=testimonials.length){

        current=0;

    }

    showTestimonial(current);

}

const testimonialSection =
document.querySelector(".testimonials");

testimonialSection.addEventListener("mouseenter",()=>{

    clearInterval(testimonialInterval);

});

testimonialSection.addEventListener("mouseleave",()=>{

    testimonialInterval =
    setInterval(nextSlide,6000);

});

showTestimonial(0);

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showTestimonial(current);

    });

});
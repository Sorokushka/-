let cartCount = 0;
let cartTotal = 0;

const cartCountElement = document.getElementById("cartCount");
const cartTotalCount = document.getElementById("cartTotalCount");
const cartTotalElement = document.getElementById("cartTotal");

const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const price = Number(button.dataset.price);

        cartCount++;
        cartTotal += price;

        cartCountElement.textContent = cartCount;
        cartTotalCount.textContent = cartCount;
        cartTotalElement.textContent = cartTotal + " ₽";

        button.textContent = "Добавлено ✓";

        setTimeout(function() {
            button.textContent = "В корзину";
        }, 1000);

    });

});


document.getElementById("clearCart").addEventListener("click", function() {

    cartCount = 0;
    cartTotal = 0;

    cartCountElement.textContent = cartCount;
    cartTotalCount.textContent = cartCount;
    cartTotalElement.textContent = cartTotal + " ₽";

});


const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});


const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const slidesContainer = document.querySelector(".slides");

    slidesContainer.style.transform =
        "translateX(-" + currentSlide * 100 + "%)";

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");
}


document.getElementById("next").addEventListener("click", function() {
    showSlide(currentSlide + 1);
});


document.getElementById("prev").addEventListener("click", function() {
    showSlide(currentSlide - 1);
});


dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {
        showSlide(index);
    });

});


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Спасибо! Мы получили твою заявку 🍏";

    contactForm.reset();

});
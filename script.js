// Countdown Timer
const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-05-05T10:00:00");

function updateCountdown() {
    const now = new Date();
    const timeLeft = weddingDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdown.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    } else {
        countdown.textContent = "Today is the big day!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Photo Upload Form
const photoForm = document.getElementById("photo-upload-form");
photoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const files = document.getElementById("photo").files;
    if (files.length > 0) {
        alert(`Uploading ${files.length} photo(s).`);
        // Add logic to upload photos to Google Drive or any storage service.
    } else {
        alert("Please select at least one photo.");
    }
});

// Reminder Form
const reminderForm = document.getElementById("reminder-form");
reminderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name && phone) {
        alert(`Thanks, ${name}! We'll remind you at ${phone}${email ? ` and ${email}` : ""}. Don't forget to mark your calendar!`);
        // Add logic to schedule reminders via SMS or email.
    } else {
        alert("Please fill in your name and phone number to receive a reminder.");
    }
});

// Map Embedding
const mapContainer = document.createElement("div");
mapContainer.id = "map";
mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19461.836195529007!2d74.454449!3d17.2816907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1664f0e3cc985%3A0x75e181a1e7a9c9ec!2sPanchfula%20Mangal%20Karyalay!5e0!3m2!1sen!2sin!4v1690131841595!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
document.querySelector(".container").appendChild(mapContainer);


document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            index = images.length - 1; // Loop to last image
        } else if (index >= images.length) {
            index = 0; // Loop to first image
        }
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener("click", function () {
        showImage(currentIndex - 1); // Show previous image
    });

    nextBtn.addEventListener("click", function () {
        showImage(currentIndex + 1); // Show next image
    });

    // Auto-cycle the images every 5 seconds
    setInterval(function () {
        showImage(currentIndex + 1);
    }, 5000);

    // Initialize the carousel to show the first image
    showImage(currentIndex);
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next-btn').addEventListener('click', () => showSlide(currentIndex + 1));
document.querySelector('.prev-btn').addEventListener('click', () => showSlide(currentIndex - 1));

// Initialize carousel
showSlide(currentIndex);

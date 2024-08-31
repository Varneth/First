// Digital Clock JavaScript
function startClock() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        document.getElementById('clock').textContent = timeString;
    }
    
    updateClock(); // initial call to set the clock immediately
    setInterval(updateClock, 1000); // update every second
}

// Start the clock when the page loads
window.onload = startClock;

// Umbrella Carousel
const images1 = ['Pictures/Umbrella.jpeg', 'Pictures/Umbrella2.jpeg', 'Pictures/Umbrella3.jpeg'];
let currentIndex1 = 0;

function updateUmbrellaImage() {
    const carouselImage1 = document.getElementById('carouselImage1');
    carouselImage1.src = images1[currentIndex1];
}

function prevUmbrella() {
    currentIndex1 = (currentIndex1 === 0) ? images1.length - 1 : currentIndex1 - 1;
    updateUmbrellaImage();
}

function nextUmbrella() {
    currentIndex1 = (currentIndex1 === images1.length - 1) ? 0 : currentIndex1 + 1;
    updateUmbrellaImage();
}

// Raincoat Carousel
const images2 = ['Pictures/RainCoat.jpeg', 'Pictures/RainCoat2.jpeg', 'Pictures/RainCoat3.jpeg'];
let currentIndex2 = 0;

function updateRaincoatImage() {
    const carouselImage2 = document.getElementById('carouselImage2');
    carouselImage2.src = images2[currentIndex2];
}

function prevRaincoat() {
    currentIndex2 = (currentIndex2 === 0) ? images2.length - 1 : currentIndex2 - 1;
    updateRaincoatImage();
}

function nextRaincoat() {
    currentIndex2 = (currentIndex2 === images2.length - 1) ? 0 : currentIndex2 + 1;
    updateRaincoatImage();
}

// Bagcover Carousel
const images3 = ['Pictures/Bagcover.jpeg', 'Pictures/Bagcover2.jpeg', 'Pictures/Bagcover3.jpeg'];
let currentIndex3 = 0;

function updateBagcoverImage() {
    const carouselImage3 = document.getElementById('carouselImage3');
    carouselImage3.src = images3[currentIndex3];
}

function prevBagcover() {
    currentIndex3 = (currentIndex3 === 0) ? images3.length - 1 : currentIndex3 - 1;
    updateBagcoverImage();
}

function nextBagcover() {
    currentIndex3 = (currentIndex3 === images3.length - 1) ? 0 : currentIndex3 + 1;
    updateBagcoverImage();
}

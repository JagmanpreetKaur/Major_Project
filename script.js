let changingWords = ['Style', 'Elegance', 'Minimalism', 'Comfort'];
let wordIndex = 0;
function changeWord() {
    document.getElementById('changing-word').textContent = changingWords[wordIndex];
    wordIndex = (wordIndex + 1) % changingWords.length;
}
setInterval(changeWord, 3000);
let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const descriptions = [
    'Safe and Long-lasting.',
    'Stability on Any Terrain.',
    'Ride with Confidence.',
    'Raw and Practical.'
   ];
const descriptionBox = document.querySelector('.description-box .description');

function showNextItem() {
 carouselItems.forEach(item => item.style.transform = `translateX(-${carouselIndex * 100}%)`); 
descriptionBox.textContent = descriptions[carouselIndex];
carouselIndex = (carouselIndex + 1) % carouselItems.length;
}
setInterval(showNextItem, 5000);
showNextItem();

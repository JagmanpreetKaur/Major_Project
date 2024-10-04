document.addEventListener('DOMContentLoaded', () => {
    let changingWords = ['Style', 'Elegance', 'Minimalism', 'Comfort'];
    let wordIndex = 0;

    function changeWord() {
        document.getElementById('changing-word').textContent = changingWords[wordIndex];
        wordIndex = (wordIndex + 1) % changingWords.length;
    }
    setInterval(changeWord, 3000);

    const carouselItems = document.querySelector('.carousel');
    const itemCount = carouselItems.children.length;
    let carouselIndex = 0;
    
    function showNextItem() {
        carouselIndex = (carouselIndex + 1) % itemCount; 
        carouselItems.style.transform = `translateX(-${carouselIndex * (100 / itemCount)}%)`;
    }

    setInterval(showNextItem, 5000);
    showNextItem();
});

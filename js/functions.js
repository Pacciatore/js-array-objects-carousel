// Functions
// Obsoleta
function createImageArray(numImages) {

    const images = [];
    for (let i = 1; i <= numImages; i++) {
        const fileName = i < 10 ? `0${i}` : i;

        const url = `img/${fileName}.jpg`;
        images.push(url)
    }

    return images;

}


function buildCarousel(images, activeIndex) {

    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    let content = '';

    for (let i = 0; i < images.length; i++) {
        const url = images[i].url;
        const imageClass = i === activeIndex ? 'tr-carousel-img active' : 'tr-carousel-img';
        // Composizione elemento html img
        content += `<img class="${imageClass}" src="${url}" alt="${url}" />`
    }

    // Composizione elemento html contenitore immagini carosello
    carouselImages.innerHTML = content;
    carouselThumbs.innerHTML = content;
    // console.log({ content })

}


function nextCarouselImage() {
    clearInterval(idInterval);

    // se l'indice si trova infondo allora lo riposiziono all'inizio dell'array
    activeIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    buildCarousel(images, activeIndex);

    idInterval = setInterval(autoCarouselMove, CHANGE_IMAGE_DELAY * 1000);
}


function previousCarouselImage() {
    clearInterval(idInterval);

    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    buildCarousel(images, activeIndex);

    idInterval = setInterval(autoCarouselMove, CHANGE_IMAGE_DELAY * 1000);
}


function revertAutoCarousel() {
    directionRight === true ? directionRight = false : directionRight = true;

    directionRight === true ? console.log({ directionRight }, 'right') : console.log({ directionRight }, 'left');
}


function autoCarouselMove() {

    if (directionRight === true) {
        nextCarouselImage();
    } else {
        previousCarouselImage();
    }

}
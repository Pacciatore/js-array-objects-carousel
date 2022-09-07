console.log('JS OK!')

/*
creare un carousel di immagini
le immagini sono in un array (di string)
pulsanti avanti indietro
aggiungere le thumb (la thumb attiva sarà distinguibile dalle altre)
dopo 5 sec la slide avanza automaticamente

*/

// settings
const NUM_IMAGES = 5;
const CHANGE_IMAGE_DELAY = 2;


const images = createImageArray(NUM_IMAGES);
console.log(images);

let activeIndex = 0;

buildCarousel(images, activeIndex);

// Intervallo per il cambio automatica all'immagine successiva
let idInterval = setInterval(nextCarouselImage, CHANGE_IMAGE_DELAY * 1000);



const leftButton = document.getElementById('left-arrow');
const rightButton = document.getElementById('right-arrow');


// Event listeners

leftButton.addEventListener('click', previousCarouselImage);

rightButton.addEventListener('click', nextCarouselImage);


// Functions

function createImageArray(numImages) {

    const images = [];
    for (let i = 1; i <= numImages; i++) {
        const fileName = i < 10 ? `0${i}` : i;

        const url = `img/${fileName}.jpg`;
        images.push(url)
    }

    return images;

}


function buildCarousel(urls, activeIndex) {

    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    let content = '';

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
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

    idInterval = setInterval(nextCarouselImage, CHANGE_IMAGE_DELAY * 1000);
}


function previousCarouselImage() {
    clearInterval(idInterval);

    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    buildCarousel(images, activeIndex);

    idInterval = setInterval(nextCarouselImage, CHANGE_IMAGE_DELAY * 1000);
}
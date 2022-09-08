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


// Array di immagini con url web
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
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

    idInterval = setInterval(nextCarouselImage, CHANGE_IMAGE_DELAY * 1000);
}


function previousCarouselImage() {
    clearInterval(idInterval);

    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    buildCarousel(images, activeIndex);

    idInterval = setInterval(nextCarouselImage, CHANGE_IMAGE_DELAY * 1000);
}
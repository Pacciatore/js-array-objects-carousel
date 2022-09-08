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

//#region Costanti

// Array di immagini con url web
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'La Svezia è un paese scandinavo che comprende migliaia di isole lungo la costa e laghi nell\'entroterra, oltre a vaste foreste boreali e rilievi glaciali.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Il Perù è una nazione sudamericana che ospita una parte della Foresta Amazzonica e Machu Picchu, l\'antica città inca situata sulla catena delle Ande.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Il Cile è un paese lungo e stretto che si estende lungo il confine occidentale del Sud America, con più di 6000 km di costa affacciata sull\'Oceano Pacifico.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'L\'Argentina è uno stato sudamericano molto esteso con un territorio che comprende la cordigliera delle Ande, laghi glaciali e le pianure della Pampa, il tradizionale terreno di pascolo dei famosi bovini da carne.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'La Colombia è un paese che si trova sulla punta nord del Sud America. Il suo paesaggio è caratterizzato da foreste tropicali, dalla catena montuosa delle Ande e da numerose piantagioni di caffè.'
    },
];
console.log(images);

const leftButton = document.getElementById('left-arrow');
const rightButton = document.getElementById('right-arrow');
const reverseButton = document.getElementById('reverse-button');
//#endregion Costanti

//#region Variabili let
let directionRight = true;
let activeIndex = 0;
// Intervallo per il cambio automatica all'immagine successiva
let idInterval = setInterval(autoCarouselMove, CHANGE_IMAGE_DELAY * 1000);
//#endregion Variabili let

buildCarousel(images, activeIndex);

// Event listeners

leftButton.addEventListener('click', previousCarouselImage);

rightButton.addEventListener('click', nextCarouselImage);

reverseButton.addEventListener('click', revertAutoCarousel);

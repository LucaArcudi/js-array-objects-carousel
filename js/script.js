const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

const slideWrapper = document.querySelector("div.carousel-image");
const thumbnailWrapper = document.querySelector('div.carousel-thumbnails');
let activeIndex = 0;

images.forEach((slide) => {
   slideWrapper.innerHTML += `
   <div class="my_carousel-item">
      <img src="${slide.image}" alt="${slide.title} image">
      <h1>${slide.title}</h1>
      <p>${slide.text}</p>
   </div>
   `
   thumbnailWrapper.innerHTML += `
   <div class="my_thumbnail-item">
      <img class="img-fluid" src="${slide.image}" alt="${slide.title} image">
   </div>
   `

   /** TODO
    * create div el 
    * add my_thumbnail-item class
    * add forEach index as a custom attribute to created el (setAttribute)
    * add eventListener "click" in order to change slide by using the custom attribute above created (getAttribute)
    * append to his parent (thumbnailwrapper)
    */


});

document.getElementsByClassName("my_carousel-item")[activeIndex].classList.add("active");
document.getElementsByClassName('my_thumbnail-item')[activeIndex].classList.add("active");

const prevButton = document.querySelector("div.button.previous");
prevButton.addEventListener("click", function () {
   if (activeIndex <= 0) {
      activeIndex = 4;
   } else {
      activeIndex--;
   }
   changeSlide(activeIndex);
});

const nextButton = document.querySelector("div.button.next");
nextButton.addEventListener("click", function () {
   if (activeIndex >= 4) {
      activeIndex = 0;
   } else {
      activeIndex++;
   }
   changeSlide(activeIndex);
});

const thumbnailsList = document.querySelectorAll('.my_thumbnail-item');
thumbnailsList.forEach((thumbnail, index) => {
   thumbnail.addEventListener('click', function () {
      activeIndex = index;
      changeSlide(activeIndex);
   });
});

// AUTOPLAY
const carouselWrapper = document.querySelector('.carousel-wrapper');

const autoPlay = setInterval(function () {
   if (activeIndex >= 4) {
      activeIndex = 0;
   } else {
      activeIndex++;
   }
   changeSlide(activeIndex);
}, 2500);

carouselWrapper.addEventListener('mouseenter', function () {
   clearInterval(autoPlay);
})

carouselWrapper.addEventListener('mouseleave', function () {
   const autoPlay = setInterval(function () {
      if (activeIndex >= 4) {
         activeIndex = 0;
      } else {
         activeIndex++;
      }
      changeSlide(activeIndex);
   }, 2500);
   carouselWrapper.addEventListener('mouseenter', function () {
      clearInterval(autoPlay);
   })
})

// CUSTOM FUNCTIONS
function changeSlide(currentActiveIndex) {
   document.querySelector("div.my_carousel-item.active").classList.remove("active");
   document.querySelector("div.my_thumbnail-item.active").classList.remove("active");
   document.getElementsByClassName("my_carousel-item")[currentActiveIndex].classList.add("active");
   document.getElementsByClassName("my_thumbnail-item")[currentActiveIndex].classList.add("active");
}
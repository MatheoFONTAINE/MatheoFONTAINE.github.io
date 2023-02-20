import BlazeSlider from "../modules/blaze-slider.min.js"
import data from '../../data.js';

const mainSlider = {
    init: function () {
        this.fillSlider();
        this.startSlider();

        console.log('Main slider OK')
    },
    fillSlider: function () {
        const template = document.querySelector('#slider-card-template');
        const slider = document.querySelector('#main-slider .blaze-track');
        let slidesCounter = 0;

        data.projects.forEach((project, index) => {
            if (project.isDisplayedInSlider) {
                //? Creating new node
                const newSlide = template.content.cloneNode(true);
    
                //? Filling new node

                // Picture
                newSlide.querySelector('img').src = 'image/' + project.pictures[0];
    
                // Title
                newSlide.querySelector('h3').textContent = project.name;
                
                //? Inserting item
                slider.appendChild(newSlide);

                // Dataset
                slider.querySelector('article:last-child').dataset.index = index;

                slidesCounter++;
            }
        });

        if (slidesCounter === 1) {
            document.querySelector('#main-slider .controls').style.display = 'none';
        }
    },
    startSlider: function () {
        // @see https://blaze-slider.dev/docs/demos/
        const el = document.querySelector('section#main-slider')
        new BlazeSlider(el, {
            all: {
                slidesToShow: 1,
                loop: true,
                draggable: false,

                // autoplay
                enableAutoplay: true,
                stopAutoplayOnInteraction: true,
                autoplayInterval: 8000,
                autoplayDirection: 'to left',

                // pagination
                enablePagination: true,

                // transition
                transitionDuration: 500,
                transitionTimingFunction: 'ease',
            },
        })
    }
}

export default mainSlider;
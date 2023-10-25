import BlazeSlider from "../modules/blaze-slider.min.js"
import data from '../../data.js';

const mainSlider = {
    init: function () {
        this.fillSlider();
        this.startSlider();

        window.addEventListener('resize', this.resizeHandler);

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
                newSlide.querySelector('h3[lang=fr]').textContent = project.name.fr ?? project.name;
                newSlide.querySelector('h3[lang=en]').textContent = project.name.en ?? project.name;
                
                //? Inserting item
                slider.appendChild(newSlide);

                const newSlideElm = slider.querySelector('article:last-child');

                // Dataset
                newSlideElm.dataset.index = index;

                // Title position
                newSlideElm.querySelector('img').addEventListener('load', () => {newSlideElm.querySelector('h3[lang=fr]').style.marginRight = (newSlideElm.offsetWidth - newSlideElm.querySelector('img').width)/2 + 'px';});
                newSlideElm.querySelector('img').addEventListener('load', () => {newSlideElm.querySelector('h3[lang=en]').style.marginRight = (newSlideElm.offsetWidth - newSlideElm.querySelector('img').width)/2 + 'px';});

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
    },
    resizeHandler: function () {
        document.querySelectorAll('.slider-card').forEach(slideElm => {
            slideElm.querySelector('h3[lang=fr]').style.marginRight = (slideElm.offsetWidth - slideElm.querySelector('img').width)/2 + 'px';
            slideElm.querySelector('h3[lang=en]').style.marginRight = (slideElm.offsetWidth - slideElm.querySelector('img').width)/2 + 'px';
        });
        
    },
    refreshLanguage: function () {
        document.querySelectorAll('.slider-card').forEach(slideElm => {
            slideElm.setAttribute('aria-label', document.querySelector('html').getAttribute('lang') === 'fr' ? 'Ouvrir le projet' : 'Open project');
            slideElm.setAttribute('title',      document.querySelector('html').getAttribute('lang') === 'fr' ? 'Ouvrir le projet' : 'Open project');
        });
    },
}

export default mainSlider;
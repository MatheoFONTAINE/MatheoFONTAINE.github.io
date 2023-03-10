import BlazeSlider from "../modules/blaze-slider.min.js"
import data from '../../data.js';
import modalScrollbar from "./modalScrollbar.js";

const projectModal = {
    init: function () {
        // Slides
        document.querySelectorAll('.slider-card').forEach(pictureWrapperElm => {
            pictureWrapperElm.addEventListener('click', this.openModal);
            pictureWrapperElm.addEventListener('keydown', (event) =>{
                if (event.code !== 'Space' && event.code !== 'Enter') return;
                this.openModal(event);
            });
        });

        // Projects card
        document.querySelectorAll('.project-list article').forEach(projectElm => {
            projectElm.addEventListener('click', this.openModal);
            projectElm.addEventListener('keydown', (event) =>{
                if (event.code !== 'Space' && event.code !== 'Enter') return;
                this.openModal(event);
            });
        });

        console.log('Project modal OK')
    },
    openModal: function (event) {
        projectModal.createModal(event.currentTarget.dataset.index);
        projectModal.startSlider();
        projectModal.bindEventListeners();
        projectModal.defineCSSVariables();
        modalScrollbar.init();
        
        document.querySelector('.project-modal').focus();
    },
    closeModal: function () {
        window.removeEventListener('resize', projectModal.defineCSSVariables);
        modalScrollbar.close();

        document.querySelector('.modal-wrapper').remove();
    },
    bindEventListeners: function () {
        const modalWrapperElm = document.querySelector('.modal-wrapper');

        // Window resize
        window.addEventListener('resize', projectModal.defineCSSVariables);

        // Close button
        modalWrapperElm.querySelector('.close-button').addEventListener('click', projectModal.closeModal);
        modalWrapperElm.addEventListener('keydown', (event) =>{
            if (event.code !== 'Escape') return;
            projectModal.closeModal();
        });

        // Clicking outside the modal
        modalWrapperElm.addEventListener('click', function (event) {
            if (event.target !== modalWrapperElm) return;
            projectModal.closeModal();
        });
    },
    defineCSSVariables: function () {
        const modalElm = document.querySelector('.project-modal');

        document.documentElement.style.setProperty('--modal-height', modalElm.offsetHeight + 'px');
    },
    createModal: function (projetKey) {
        const template = document.querySelector('#project-modal-template');
        const project = data.projects[projetKey];

        //? Creating new node
        const modalElm = template.content.cloneNode(true);
        const sliderElm = modalElm.querySelector('.blaze-track');
    
        //? Filling new node
        // Common elements
        modalElm.querySelector('h3')                    .textContent = project.name;
        modalElm.querySelector('.engine')               .textContent = project.gameEngine;
        modalElm.querySelector('.language')             .textContent = project.language;
        modalElm.querySelector('.platform')             .textContent = project.platform;
        modalElm.querySelector('.description-wrapper p').innerHTML  += project.description;
        modalElm.querySelector('.role-wrapper p')       .innerHTML  += project.role;
        modalElm.querySelector('.team-wrapper p')       .innerHTML  += project.team;
        modalElm.querySelector('.link-wrapper a')       .textContent += project.link;
        modalElm.querySelector('.link-wrapper a')       .href        = project.link;
        const dateArray = project.date.split('-'); // Dates are stored as YYYY-MM format
        modalElm.querySelector('.date-wrapper p')       .textContent += `${dateArray[1]}/${dateArray[0]} - ${project.duration}`;

        // Picture slider
        project.pictures.forEach(picture => {
            const newSlide = document.createElement('div');
            const newImg = document.createElement('img');
            newImg.src = 'image/' + picture;
            newImg.alt = 'Game picture';

            newSlide.appendChild(newImg);
            sliderElm.appendChild(newSlide);
        });

        // Video
        if (null !== project.video) {
            modalElm.querySelector('.video-wrapper iframe').src += /watch\?v=(.+)/.exec(project.video)[1];
        } else {
            modalElm.querySelector('.video-wrapper').remove();
        }

        if (project.pictures.length === 1) {
            modalElm.querySelector('.picture-slider .controls').style.display = 'none';
            modalElm.querySelector('.picture-slider .blaze-track').style.cursor = 'default';
        }

        //? Inserting item
        document.body.prepend(modalElm);
    },
    startSlider: function () {
        // @see https://blaze-slider.dev/docs/demos/
        const el = document.querySelector('.picture-slider')
        new BlazeSlider(el, {
            all: {
                slidesToShow: 1,
                loop: true,
                draggable: true,

                // autoplay
                enableAutoplay: true,
                stopAutoplayOnInteraction: true,
                autoplayInterval: 3000,
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

export default projectModal;
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
    blazeSlider: null,
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
        modalElm.querySelector('h3[lang=fr]')                    .textContent = project.name.fr ?? project.name;
        modalElm.querySelector('h3[lang=en]')                    .textContent = project.name.en ?? project.name;
        modalElm.querySelector('.engine')                        .textContent = project.gameEngine;
        modalElm.querySelector('.language')                      .textContent = project.language;
        modalElm.querySelector('.description-wrapper p[lang=fr]').textContent += project.description.fr;
        modalElm.querySelector('.description-wrapper p[lang=en]').textContent += project.description.en;
        modalElm.querySelector('.role-wrapper p[lang=fr]')       .textContent += project.role.fr;
        modalElm.querySelector('.role-wrapper p[lang=en]')       .textContent += project.role.en;
        modalElm.querySelector('.team-wrapper p[lang=fr]')       .textContent += project.team.fr ?? project.team;
        modalElm.querySelector('.team-wrapper p[lang=en]')       .textContent += project.team.en ?? project.team;
        modalElm.querySelector('.link-wrapper p[lang=fr] a')     .textContent += project.link;
        modalElm.querySelector('.link-wrapper p[lang=fr] a')     .href        = project.link;
        modalElm.querySelector('.link-wrapper p[lang=en] a')     .textContent += project.link;
        modalElm.querySelector('.link-wrapper p[lang=en] a')     .href        = project.link;
        const dateArray = project.date.split('-'); // Dates are stored as YYYY-MM format
        modalElm.querySelector('.date-wrapper p[lang=fr] time')  .textContent += `${dateArray[1]}/${dateArray[0]}`;
        modalElm.querySelector('.date-wrapper p[lang=fr] time')  .setAttribute('datetime', project.date);
        modalElm.querySelector('.date-wrapper p[lang=fr]')       .innerHTML   += `${project.duration.fr}`; // Using innerHTML since <p> element contains a <time> element
        modalElm.querySelector('.date-wrapper p[lang=en] time')  .textContent += `${dateArray[1]}/${dateArray[0]}`;
        modalElm.querySelector('.date-wrapper p[lang=en] time')  .setAttribute('datetime', project.date);
        modalElm.querySelector('.date-wrapper p[lang=en]')       .innerHTML   += `${project.duration.en}`; // Using innerHTML since <p> element contains a <time> element

        // Engine picture
        if (data.images[project.gameEngine] === undefined || data.images[project.gameEngine] !== null) {
            const imgElm = document.createElement('img');

            imgElm.src = './image/icon/' + (data.images[project.gameEngine] === undefined ? project.gameEngine+'.svg' : data.images[project.gameEngine]);
            imgElm.alt = `${project.gameEngine} icon`
            modalElm.querySelector('.engine').prepend(imgElm);
        }

        // Language picture
        if (data.images[project.language] === undefined || data.images[project.language] !== null) {
            const imgElm = document.createElement('img');

            imgElm.src = './image/icon/' + (data.images[project.language] === undefined ? project.language+'.svg' : data.images[project.language]);
            imgElm.alt = `${project.language} icon`
            modalElm.querySelector('.language').prepend(imgElm);
        }

        // Platforms
        project.platforms.forEach(platform => {
            const pElm = document.createElement('p');
            const imgElm = document.createElement('img');

            pElm.classList.add('tag', 'platform')
            pElm.textContent = platform;

            imgElm.src = './image/icon/' + (data.images[platform] === undefined ? platform+'.svg' : data.images[platform]);
            imgElm.alt = `${platform} icon`

            pElm.prepend(imgElm);

            modalElm.querySelector('.language').after(pElm);
        });

        // Picture slider
        project.pictures.forEach(picture => {
            const newSlide = document.createElement('div');
            const newImg = document.createElement('img');
            newImg.src = 'image/' + picture;
            newImg.alt = document.querySelector('html').getAttribute('lang') === 'fr' ? 'Image du jeu' : 'Game picture';

            newSlide.appendChild(newImg);
            sliderElm.appendChild(newSlide);
        });

        // Video
        if (null !== project.video) {
            modalElm.querySelector('.video-wrapper iframe').src += /watch\?v=(.+)/.exec(project.video)[1];

            modalElm.querySelector('.video-wrapper iframe').addEventListener('load', () => {
                let iframeInterval = setInterval(() => {
                    if (document.activeElement instanceof HTMLIFrameElement) {
                        projectModal.blazeSlider.stopAutoplay();
    
                        clearInterval(iframeInterval);
                        iframeInterval = null;
                    }
                }, 200);
            })
        } else {
            modalElm.querySelector('.video-wrapper').remove();
        }

        if (project.pictures.length === 1 && null === project.video) {
            modalElm.querySelector('.picture-slider .controls').style.display = 'none';
            modalElm.querySelector('.picture-slider .blaze-track').style.cursor = 'default';
        }

        //? Inserting item
        document.body.prepend(modalElm);
    },
    startSlider: function () {
        // @see https://blaze-slider.dev/docs/demos/
        const el = document.querySelector('.picture-slider')
        projectModal.blazeSlider = new BlazeSlider(el, {
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
    },
    refreshLanguage: function () {
        if (document.querySelector('.modal-wrapper') === null) return;

        document.querySelectorAll('.modal-wrapper .blaze-track img').forEach(imgElm => {
            imgElm.alt = document.querySelector('html').getAttribute('lang') === 'fr' ? 'Image du jeu' : 'Game picture';
        });
        if (document.querySelector('html').getAttribute('lang') === 'en') {
            document.querySelector('.modal-wrapper .close-button').setAttribute('aria-label', 'Close');
            document.querySelector('.modal-wrapper .close-button').setAttribute('title', 'Close');
        } else {
            document.querySelector('.modal-wrapper .close-button').setAttribute('aria-label', 'Fermer');
            document.querySelector('.modal-wrapper .close-button').setAttribute('title', 'Fermer');
        }
    },
}

export default projectModal;
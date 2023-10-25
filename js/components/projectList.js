import data from '../../data.js';

const projectList = {
    init: function () {
        this.fillProjectList();

        console.log('Project list OK')
    },
    fillProjectList: function () {
        const template = document.querySelector('#project-card-template');
        const projectList = document.querySelector('.project-list');

        data.projects.forEach((project, index) => {
            //? Creating new node
            const newProject = template.content.cloneNode(true);

            //? Filling new node

            // Picture
            newProject.querySelector('img').src = 'image/' + project.pictures[0];

            // Title
            newProject.querySelector('h3[lang=fr]').textContent = project.name.fr ?? project.name;
            newProject.querySelector('h3[lang=en]').textContent = project.name.en ?? project.name;

            // Engine
            newProject.querySelector('.engine').textContent = project.gameEngine;
            if (data.images[project.gameEngine] === undefined || data.images[project.gameEngine] !== null) {
                const imgElm = document.createElement('img');

                imgElm.src = './image/icon/' + (data.images[project.gameEngine] === undefined ? project.gameEngine+'.svg' : data.images[project.gameEngine]);
                imgElm.alt = `${project.gameEngine} icon`
                imgElm.title = project.gameEngine;

                newProject.querySelector('.engine').prepend(imgElm);
            }

            // Language
            newProject.querySelector('.language').textContent = project.language;
            if (data.images[project.language] === undefined || data.images[project.language] !== null) {
                const imgElm = document.createElement('img');

                imgElm.src = './image/icon/' + (data.images[project.language] === undefined ? project.language+'.svg' : data.images[project.language]);
                imgElm.alt = `${project.language} icon`
                imgElm.title = project.language;

                newProject.querySelector('.language').prepend(imgElm);
            }

            // Platforms
            project.platforms.forEach(platform => {
                const pElm = document.createElement('p');
                const imgElm = document.createElement('img');

                pElm.textContent = platform;
                pElm.classList.add('tag', 'platform')

                imgElm.src = './image/icon/' + (data.images[platform] === undefined ? platform+'.svg' : data.images[platform]);
                imgElm.alt = `${platform} icon`
                imgElm.title = platform;

                pElm.prepend(imgElm);
                
                newProject.querySelector('.language').after(pElm);
            });
            
            //? Inserting item
            projectList.appendChild(newProject);
            
            // Dataset
            projectList.querySelector('article:last-child').dataset.index = index;
            projectList.querySelector('article:last-child').dataset.engine = project.gameEngine.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z]/g, '');
            projectList.querySelector('article:last-child').dataset.language = project.language.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z]/g, '');
            projectList.querySelector('article:last-child').dataset.platforms = project.platforms.map(platform => platform.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z]/g, ''));
        });
    },
    refreshLanguage: function () {
        document.querySelectorAll('.project-list article').forEach(articleElm => {
            articleElm.setAttribute('aria-label', document.querySelector('html').getAttribute('lang') === 'fr' ? 'Ouvrir le projet' : 'Open project');
        });
    },
}

export default projectList;
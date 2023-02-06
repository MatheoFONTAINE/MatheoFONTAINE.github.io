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
            newProject.querySelector('h3').textContent = project.name;
            
            //? Inserting item
            projectList.appendChild(newProject);
            
            // Dataset
            projectList.querySelector('article:last-child').dataset.index = index;
            projectList.querySelector('article:last-child').dataset.engine = project.gameEngine;
            projectList.querySelector('article:last-child').dataset.language = project.language;
            projectList.querySelector('article:last-child').dataset.platform = project.platform;
        });
    }
}

export default projectList;
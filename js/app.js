import about from "./components/about.js";
import contactForm from "./components/contactForm.js";
import dataLoader from "./components/dataLoader.js";
import filterSystem from "./components/filterSystem.js";
import mainSlider from "./components/mainSlider.js";
import projectList from "./components/projectList.js";
import projectModal from "./components/projectModal.js";
import ribbon from "./components/ribbon.js";

const app = {
    init: function () {
        dataLoader.init();
        
        mainSlider.init();
        filterSystem.init();
        projectList.init();
        about.init();
        contactForm.init();
        ribbon.init();
        projectModal.init();

        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);

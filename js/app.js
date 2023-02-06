import about from "./components/about.js";
import contactForm from "./components/contactForm.js";
import dataLoader from "./components/dataLoader.js";
import filterSystem from "./components/filterSystem.js";
import mainSlider from "./components/mainSlider.js";
import projectList from "./components/projectList.js";
import scrollSnapFixer from "./components/scrollSnapFixer.js";

const app = {
    init: function () {
        dataLoader.init();

        scrollSnapFixer.init();
        
        mainSlider.init();
        filterSystem.init();
        projectList.init();
        about.init();
        contactForm.init();

        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);

import about from "./components/about.js";
import changeLanguageButton from "./components/changeLanguageButton.js";
import contactForm from "./components/contactForm.js";
import dataLoader from "./components/dataLoader.js";
import filterSystem from "./components/filterSystem.js";
import followingCursor from "./components/followingCursor.js";
import goTopLink from "./components/goTopLink.js";
import mainSlider from "./components/mainSlider.js";
import projectList from "./components/projectList.js";
import projectModal from "./components/projectModal.js";
import ribbon from "./components/ribbon.js";

const app = {
    init: function () {
        dataLoader.init();
        
        changeLanguageButton.init();
        mainSlider.init();
        filterSystem.init();
        projectList.init();
        about.init();
        contactForm.init();
        ribbon.init();
        goTopLink.init();
        projectModal.init();

        followingCursor.init();

        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);

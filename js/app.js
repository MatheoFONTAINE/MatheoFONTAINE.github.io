import dataLoader from "./components/dataLoader.js";
import mainSlider from "./components/mainSlider.js";

const app = {
    init: function () {
        dataLoader.init();
        
        mainSlider.init()

        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);

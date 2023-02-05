import dataLoader from "./components/dataLoader.js";

const app = {
    init: function () {
        dataLoader.init();
        
        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);

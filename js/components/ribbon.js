import data from '../../data.js';

const ribbon = {
    init: function () {
        if (data.ribbon.display) this.createRibbon();

        console.log('Ribbon OK')
    },
    createRibbon: function () {
        const asideElm = document.createElement('aside');
        let textElm;
        asideElm.classList.add('ribbon');
        
        if (null === data.ribbon.link) {
            textElm = document.createElement('p');
        } else {
            textElm = document.createElement('a');
            
            textElm.href = data.ribbon.link;
        }

        textElm.textContent = data.ribbon.text;
        
        asideElm.appendChild(textElm);
        document.querySelector('main').prepend(asideElm);
    }
}

export default ribbon;
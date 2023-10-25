import data from '../../data.js';

const ribbon = {
    init: function () {
        if (data.ribbon.display) this.createRibbon();

        console.log('Ribbon OK')
    },
    createRibbon: function () {
        const asideElm = document.createElement('aside');
        asideElm.classList.add('ribbon');

        let frenchTextElm, englishTextElm;
        if (null === data.ribbon.link) {
            frenchTextElm = document.createElement('p');
            englishTextElm = document.createElement('p');
        } else {
            frenchTextElm = document.createElement('a');
            englishTextElm = document.createElement('a');
            
            frenchTextElm.href = data.ribbon.link;
            frenchTextElm.setAttribute('lang', 'fr');
            englishTextElm.href = data.ribbon.link;
            englishTextElm.setAttribute('lang', 'en')
        }

        frenchTextElm.textContent = data.ribbon.text.fr;
        englishTextElm.textContent = data.ribbon.text.en;
        
        asideElm.append(frenchTextElm, englishTextElm);
        document.querySelector('main').prepend(asideElm);
    },
}

export default ribbon;
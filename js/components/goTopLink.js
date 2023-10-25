const goTopLink = {
    init: function () {
        document.querySelector('button.up').addEventListener('click', this.handleClick);
        document.querySelector('.main-wrapper').addEventListener('scroll', this.handleScroll);

        console.log('Top link OK')
    },
    handleClick: function () {
        document.querySelector('.main-wrapper').scrollTo(0, 0);
    },
    handleScroll: function () {
        document.querySelector('button.up').classList.add('active');
        
        if (document.querySelector('.main-wrapper').scrollTop === 0) document.querySelector('button.up').classList.remove('active');
    },
    refreshLanguage: function () {
        if (document.querySelector('html').getAttribute('lang') === 'en') {
            document.querySelector('button.up').setAttribute('aria-label', 'Go to top');
            document.querySelector('button.up').setAttribute('title', 'Go to top');
        } else {
            document.querySelector('button.up').setAttribute('aria-label', 'Retour en haut de la page');
            document.querySelector('button.up').setAttribute('title', 'Retour en haut de la page');
        }
    },
}

export default goTopLink;
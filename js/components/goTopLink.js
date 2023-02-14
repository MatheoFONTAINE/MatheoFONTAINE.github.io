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
    }
}

export default goTopLink;
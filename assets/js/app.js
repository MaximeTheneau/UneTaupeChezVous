
//! module app 
const app = {
    /**
     * init()
     */
    init: function(){
        bulma.bulmaJs();
        navbar.navbarElt();
    }
};

document.addEventListener('DOMContentLoaded', app.init);
const navbar = {
    navbarElt: function(){
        window.addEventListener("scroll", navbar.stickyHandlerNavbar);
    },
    stickyHandlerNavbar: function()
    {
        const navbarElt = document.querySelector(".navbar");
        const sticky = navbarElt.offsetTop;
        if (window.scrollY >= sticky) {
            navbarElt.classList.add("is-fixed-top")
          } else if (window.scrollX >= sticky) {
            navbarElt.classList.remove('is-fixed-top');
          }
    }
}
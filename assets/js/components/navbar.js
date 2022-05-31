const navbar = {
    navbarElt: function(){
        window.addEventListener("scroll", navbar.stickyHandlerNavbar);
    },
    stickyHandlerNavbar: function()
    {
        const navbarElt = document.querySelector(".navbar");
        const headerImg = document.querySelector(".headerImg");
        const sticky = navbarElt.offsetTop;
        if (window.scrollY >= sticky) {
            navbarElt.classList.add("is-fixed-top");
            headerImg.classList.add("none");
          } else if (window.scrollX >= sticky) {
            navbarElt.classList.remove('is-fixed-top');
            headerImg.classList.remove("none");

          }
    }
}
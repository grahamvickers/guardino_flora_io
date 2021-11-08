(()=> {
    "use strict"
    const arrowButton = document.querySelector("#iconArrow");
    let menuButton = document.querySelector("#navIcon");
    let navMobile = document.querySelector("nav");


    arrowButton.addEventListener("click", backToTop);
    menuButton.addEventListener("click", menuButtonClick);


    
    function backToTop() {
        gsap.to(window, {duration: 0.5, scrollTo: "#navContainer"})
    }


    function menuButtonClick() {


        navMobile.classList.toggle("navMobile");

    }
    


})();
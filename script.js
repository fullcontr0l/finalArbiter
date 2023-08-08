/*  Navbar Toggle */

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
;}

/* End of Navbar Toggle */

/* Scroll Reveal */
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});

/* End Scroll Reveal */

/* Auto type */

var typed = new Typed(".auto-type", {
    strings: ["Matches", "Games", "Teams"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
/* End of Auto type */
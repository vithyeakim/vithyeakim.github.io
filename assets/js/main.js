
/*===== Scroll Animation =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*Scroll to Home*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*Scroll to About Me*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*Scroll to Projects*/
sr.reveal('.projects_img', { interval: 200 });

/*Scroll to Contact*/
sr.reveal('.contact__input', { interval: 200 }); 
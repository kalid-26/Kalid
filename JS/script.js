// cursor animation
function cursorAnim(){
    let cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (det) => {
        gsap.to(cursor, {
            opacity: 1,
            x: det.clientX,
            y: det.clientY,
            duration: 1
        });
    });

    document.addEventListener("mouseleave", (det) => {
        gsap.to(cursor, {
            opacity: 0,
            duration: 1
        });
    });
};
cursorAnim();

// hero section animation 
function heroSectionAim(){
    t1 = gsap.timeline()


    t1.from(".hero small", {
        opacity: 0,
        y: -50,
        duration: 0.5
    });

    t1.from(".hero h1", {
        opacity: 0,
        y: -40,
        durration: 1,
        stagger: 0.5,

    });

    t1.from(".hero p", {
        opacity: 0,
        y: -20,
        durration: 1,
        stagger: 0.5,

    });

    t1.from(".social-links small a", {
        opacity: 0,
        x: 50,
        duration: 0.5,
        stagger: 0.3,
    });
};

heroSectionAim();


// nav links animation 
function navLinkAnim(){
    t2 = gsap.timeline({paused:true});

    t1.from(".navbar-nav li a", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 5,
        stagger: 0.3
    });
};
// navLinkAnim();



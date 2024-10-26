// cursor animation 
const cursor = document.getElementsByClassName("cursor");

document.addEventListener("mousemove", (movement)=> {
    gsap.to(cursor,  {
        opacity: 1,
        duration: 1,
        x: movement.clientX,
        y: movement.clientY,
    });
});

document.addEventListener("mouseleave", ()=> {
    gsap.to(cursor,  {
        opacity: 0,
        duration: 1,
    });
});

// end of cursor animation 

function menuToggler(){
 
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeMenu");
    const navigationLinks = document.querySelectorAll(".navigation-links ul li a");
    const imgContent = document.getElementsByClassName("img-content");
    const sections = document.querySelectorAll('.section');

    let t1 = gsap.timeline({paused: true});

    t1.to(".navigation-links", {
        top: 0,
        opacity: 1,
        duration: 1.5,
        onStart: ()=>{
            document.querySelector(".navigation-links").classList.add("open");
            document.querySelector(".navigation-links").style.zIndex = 1000;
            document.querySelector(".navigation-links").style.pointerEvents = 'auto';
        }
    });

    t1.from(imgContent, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.2,
    });

    t1.from(".navigation-links .logo-link", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
    });

    t1.from(".navigation-links ul li", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
    });

    t1.from(".social-links small", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
    });

    function sectionView(targetSection){
        sections.forEach(section => {
            gsap.to(section, {
                top: "120%",
                opacity: 0,
                duration: 1.5,
                zIndex: 1,   
            });
            section.classList.remove('active');
        });

        gsap.to(targetSection, {
            top: 0,
            opacity: 1,
            duration: 1.5,
            zIndex: 1000,
            
        });

        targetSection.classList.add('active');

    };

    navigationLinks.forEach(links =>{
        links.addEventListener("click", (e)=>{
            e.preventDefault();
            const targetSection = document.querySelector(links.getAttribute('href'));

            sectionView(targetSection);

            gsap.to(".navigation-links", {
                opacity: 1,  
                duration: 1,
                zIndex: 1000, 
                pointerEvents: 'auto'
            });
            
        });
    });

    menuIcon.addEventListener("click", ()=>{
        t1.play();
        document.querySelector('.navigation-links').style.pointerEvents = "auto";
    });
     
    closeIcon.addEventListener("click", ()=>{
        t1.reverse().eventCallback('onReverseComplete', ()=> {
            document.querySelector(".navigation-links").classList.remove("open");
        });
    });
};

menuToggler();

// hero section  and loader animation
function heroAnim(){

    let t2 = gsap.timeline();
    
    t2.from(".preloader h1",{
        y: 50,
        duration: 0.5,
        opacity: 0,
        delay: 0.3,

        onStart: ()=>{
            let timer = document.querySelector(".timer"); 
            let timeCounter = document.querySelector(".timer span");
            timer.style.display = "block";

            timeIncreaser = 0;
            setInterval(()=>{
                if(timeIncreaser<100){
                    timeIncreaser++;
                    timeCounter.innerHTML = timeIncreaser++;
                }else{
                    timeCounter.innerHTML = timeIncreaser;
                }
            },35);
        },
    });

    t2.to(".preloader", {
        delay: 4,
        opacity: 0,
        display: "none",
    })

    t2.from("header", {
        y: -800,
        duration: 1.5,
        ease: "power4.out",
        backgroundColor: "#000",
    });

    t2.from(".navs", {
        y: -20,
        duration: 0.2,
        opacity: 0,
    });

    t2.from(".hero-section .hero-txt", {
        y: 5,
        duration: 1,
        stagger: 0.5,
        opacity: 0,
    });

    let heroSectionTitle = document.querySelector(".hero-section h1");
    
    heroSectionTitle.addEventListener("mouseenter", ()=>{
        gsap.to(cursor, {
            scale: 10,
            duration: 1,
        });

        gsap.to(heroSectionTitle,{
            color: "#5A34A4",
            duration: 1,
        });
    });

    heroSectionTitle.addEventListener("mouseleave", ()=>{
        gsap.to(cursor, {
            scale: 1,
            duration: 1,
        });

        gsap.to(heroSectionTitle,{
            color: "#EDEDED",
            duration: 1,
        });
    });

};

heroAnim();

// about section animation
function aboutAnim(){
    const aboutClose = document.getElementById("about-close");
    const getInTouch = document.getElementsByClassName("touch");

    let t3 = gsap.timeline();

    t3.to(getInTouch, {
        y: -50,
        delay: 5,
        duration: 5,
    });

    aboutClose.addEventListener("click", ()=> {
        gsap.to(".about", {
            top: "-300%",
            duration: 4,
        });
    });
};

aboutAnim();

// project section animation 
function projectAnim(){
    const projectClose = document.getElementById("project-close");

    projectClose.addEventListener("click", ()=> {
        gsap.to(".projects", {
            top: "-120%",
            duration: 2,
            // onComplete: () => {
            //     document.querySelector('.navigation-links').style.pointerEvents = "auto";
            // }
        });
    });
};

projectAnim();

// service section animation
function serviceAnim(){
    const serviceClose = document.getElementById("service-close");
    const service = document.querySelectorAll(".service");
    // const serviceBox = document.querySelectorAll(".box");

    service.forEach((services)=>{
        let rotate = 0;
        let deffrot = 0;

        services.addEventListener("mousemove", (dets) => {
            let deff = dets.clientY - services.getBoundingClientRect().top;
            deffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(services.querySelector("img"), {
                // duration: 1,
                opacity: 1,
                top: deff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, deffrot),
            });
        });
        services.addEventListener("mouseleave", ()=>{
            gsap.to(services.querySelector("img"), {
                opacity: 0,
                // duration: 1,
            });
        });
    });
    

    serviceClose.addEventListener("click", ()=> {
        gsap.to(".services", {
            top: "-120%",
            duration: 2,
        });
    });
};

serviceAnim();

// contact section animation
function contactAnim(){
    const contactClose = document.getElementById("contact-close");

    contactClose.addEventListener("click", ()=> {
        gsap.to(".contact", {
            top: "-120%",
            duration: 2,
            // onComplete: () => {
            //     document.querySelector('.navigation-links').style.pointerEvents = "auto";
            // }
        });
    });
};

contactAnim();

// funfact section animation
function funfactAnim(){
    const funfactClose = document.getElementById("funfact-close");

    funfactClose.addEventListener("click", ()=> {
        gsap.to(".funfact", {
            top: "-120%",
            duration: 2,
            // onComplete: () => {
            //     document.querySelector('.navigation-links').style.pointerEvents = "auto";
            // }
        });
    });
};

funfactAnim();
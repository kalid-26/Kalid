const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-page'),
    smooth: true
});








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
    // const navigationLinks = document.querySelectorAll(".navigation-links ul li a");
    const imgContent = document.getElementsByClassName("img-content");

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
    
    // t2.from(".preloader h1",{
    //     y: 50,
    //     duration: 0.5,
    //     opacity: 0,
    //     delay: 0.3,

    //     onStart: ()=>{
    //         let timer = document.querySelector(".timer"); 
    //         let timeCounter = document.querySelector(".timer span");
    //         timer.style.display = "block";

    //         timeIncreaser = 0;
    //         setInterval(()=>{
    //             if(timeIncreaser<100){
    //                 timeIncreaser++;
    //                 timeCounter.innerHTML = timeIncreaser++;
    //             }else{
    //                 timeCounter.innerHTML = timeIncreaser;
    //             }
    //         },35);
    //     },
    // });

    // t2.to(".preloader", {
    //     delay: 4,
    //     opacity: 0,
    //     display: "none",
    // })

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

    t2.from(".hero-section .hero-txt p", {
        y: 10,
        duration: 1,
        stagger: 0.5,
        opacity: 0,
    });
    t2.from(".hero-section .hero-txt h1", {
        y: 10,
        duration: 0.5,
        stagger: 0.5,
        opacity: 0,
    });

    let heroSectionTitle = document.querySelector(".hero-section .hero-txt");
    
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
// function aboutAnim(){
// //    
// };

// aboutAnim();

// project section animation 
// function projectAnim(){
//     const projectClose = document.getElementById("project-close");

//     projectClose.addEventListener("click", ()=> {
//         gsap.to(".projects", {
//             top: "-120%",
//             duration: 2,
            
//         });
//     });
// };

// projectAnim();

// service section animation
// function serviceAnim(){
   
// };

// serviceAnim();

// contact section animation
// function contactAnim(){
  
// };

// contactAnim();

// funfact section animation
// function funfactAnim(){
    
// };

// funfactAnim();
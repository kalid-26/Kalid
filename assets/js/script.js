// Smoth Scroll using Locomotive and gsap ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main-page"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main-page", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 

  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main-page").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// end of smooth scroll 

//////////////////////////////////////////////////////////////////////////

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

// menu toggler 
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

// menuToggler();
// end of menu toggler 



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

// heroAnim();

// about section animation
// function aboutAnim(){
// //    
// };

// aboutAnim();

// project section animation 
function projectAnim(){
    const projectSection = document.querySelector(".projects");

   gsap.from(projectSection, {
        duration: 0.8,
        // backgroundColor: "#5A34A4",
        y: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".projects .title h1",
            scroller: ".main-page",
            marker: true,
            scrub: 20,
            start: "top 30%",
            end: "end 5%",
            pin: true,
        }
   });
};

// projectAnim();

// service section animation
function serviceAnim(){
    
    document.querySelectorAll(".service").forEach((elem)=> {

        let rotate = 0;
        let diffrot = 0;

        elem.addEventListener("mousemove", (dets)=>{
            let diff = dets.clientY - elem.getBoundingClientRect().top;

            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;

            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: "power3",
                top: dets.diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 1)
            });
        })

        elem.addEventListener("mouseleave", (dets)=> {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
            });
        })
    });
    

};

serviceAnim();

// contact section animation
// function contactAnim(){
  
// };

// contactAnim();

// funfact section animation
// function funfactAnim(){
    
// };

// funfactAnim();
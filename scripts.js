var tl2 = gsap.timeline();

// Animate the line
tl2.fromTo(".line",3, { x: 400, opacity: 1 }, { x: -760, opacity: 1, backgroundColor: "black", ease: "power4.easeOut" });

// Adjust the clip-path to reveal the text from left to right as the line moves
tl2.to(".text-section p", 2.5, { clipPath: "inset(0 0% 0 0%)",  ease: "power1.easeIn" }, "-=2.5");
tl2.to(".text-section h1", 1.9, { clipPath: "inset(0 0% 0 0%)", ease: "power1.easeIn" }, "-=1.7");

gsap.fromTo("#M, #B, #U", 
    { autoAlpha: 0, y: -50 },  // Starting properties
    { 
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        stagger: {
            each: 0.5,
            from: "end"
        },
        }  // This will create a 0.5-second delay between each path's animation
);

var tl1 = gsap.timeline();

tl1.fromTo(".about-white-overlay", {y:"-100%" }, { y:"0%", delay: 0.3});

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container"
  });


gsap.from(".business-content > *", {
    x: -200, 
    duration: 1.5, 
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".orange",
} 
  });
  gsap.fromTo(".white-overlay", {y:"-100%" }, { y:"0%", delay: 0.3, scrollTrigger: {trigger: ".orange",}});

    // Animation for the red panel (background colour change)
    gsap.from(".charity", {
        x: 500,
        duration: 1,
        scrollTrigger: {
            trigger: "#charity",
        }
    });

    // Animation for the blue yoyo panel (yoyo effect)
    gsap.from(".contact", {
        x: -500,
        duration: 1,
        scrollTrigger: {
            trigger: ".yoyo",
            // scrub: true
        }
    });

var container = document.querySelector('.container');
var scrollbarWidth = container.offsetWidth - container.clientWidth;
var header = document.querySelector('header');
header.style.right = scrollbarWidth + 'px';

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const container = document.querySelector('.container');
    let clicked = false;

    function updateActiveLink() {
        if (clicked) return; // If a link was clicked, don't update on scroll

        let currentActiveId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - container.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (container.scrollTop + container.clientHeight / 2 >= sectionTop && container.scrollTop + container.clientHeight / 2 <= sectionBottom) {
                currentActiveId = section.id;
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === currentActiveId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Hover effect for the underline
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            if (!clicked) {
                navLinks.forEach(l => l.classList.remove('active', 'hovered'));
                this.classList.add('hovered');
            }
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
            if (!clicked) {
                updateActiveLink();
            }
        });

        link.addEventListener('click', function(event) {
            event.preventDefault();
            clicked = true;
            navLinks.forEach(l => l.classList.remove('active', 'hovered'));
            this.classList.add('active');
            const target = this.getAttribute('href');
            container.scrollTo({
                top: document.querySelector(target).offsetTop - container.offsetTop,
                behavior: 'smooth'
            });
            // Reset clicked after a delay to allow scroll event to update the active link
            setTimeout(() => {
                clicked = false;
            }, 500);
        });
    });

    container.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call once on page load to set the initial state
});




const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    hamburger.addEventListener('click', function() {
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'block';
        }
    });

    // Close the mobile menu when a menu item is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
        });
    });


    const sectionsToAnimate = ["#business .black-overlay", "#charity .black-overlay", "#contact .black-overlay"];

    sectionsToAnimate.forEach(selector => {
      gsap.fromTo(selector, 
        { y: "0%", opacity: 1 }, // starting state (at the bottom with full opacity)
        {
          y: "-100%", // ending state (moved up out of view)
          opacity: 0, // fade out
          scrollTrigger: {
            trigger: selector,
            start: "top bottom", // starts when the top of the overlay reaches the bottom of the viewport
            end: "top top", // ends when the top of the section reaches the top of the viewport
            scrub: true
          }
        }
      );
    });


    var container = document.querySelector('.container');
    var header = document.querySelector('header');
    
    container.addEventListener('scroll', function() {
        if (header) {
            if (container.scrollTop > 0) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        }
    });


    // create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 768px)", () => {

    // do something when the viewport is 800px wide or wider
    gsap.fromTo(".image-section", {opacity:0},{duration: 3, opacity:1, delay:1});
    
  
});

let linkedIn = document.querySelector('.linkedin');
let linkedHover = document.querySelector('.linkedin-hover');
linkedHover.addEventListener('mouseover', () => {
    linkedIn.classList.add('linkedin-rotate');
}); 

linkedHover.addEventListener('mouseout', () => {
    linkedIn.classList.remove('linkedin-rotate');
});
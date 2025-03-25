
  // Preloader Hide
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = 0;
    setTimeout(() => { preloader.style.display = "none"; }, 500);
  });
  
  // Custom Cursor
  const cursor = document.getElementById("custom-cursor");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { duration: 0.1, x: e.clientX, y: e.clientY });
  });
  document.querySelectorAll("a, button, .project-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 2, backgroundColor: "var(--accent-hover)", duration: 0.2 });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "var(--accent)", duration: 0.2 });
    });
  });
  
  // Scroll Progress Bar & Back-to-Top Visibility
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
    
    // Show back-to-top button when scrolled down
    document.getElementById("back-to-top").style.display = scrollTop > 300 ? "block" : "none";
  });
  
  // Back-to-Top Button Scroll
  document.getElementById("back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Hamburger Menu Toggle for Mobile
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
  
  // Initialize Particles.js in the hero section
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 400, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": false, "distance": 150, "color": "#007acc", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "repulse": { "distance": 100 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
  
  // GSAP ScrollTrigger Animations for Sections
  gsap.utils.toArray(".section-content").forEach((elem) => {
    gsap.to(elem, {
      scrollTrigger: { trigger: elem, start: "top 80%" },
      opacity: 1,
      skewY: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
  // Animate code blocks separately
  gsap.utils.toArray("code").forEach((codeBlock) => {
    gsap.to(codeBlock, {
      scrollTrigger: { trigger: codeBlock, start: "top 80%" },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2
    });
  });
  
  // Footer Year
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // Terminal Typing Effect
  const textToType = 
`Hello, I'm Rohan Garg! I'm based out of UAE
Senior Ruby on Rails Developer | 6+ years of code.
Building scalable apps and crushing bugs.`;
  const typedTextEl = document.getElementById("typed-text");
  let index = 0;
  function typeChar() {
    if (index < textToType.length) {
      typedTextEl.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeChar, 30);
    }
  }
  setTimeout(typeChar, 500);
  
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    const body = document.body;
    if (body.getAttribute("data-theme") === "dark") {
      body.setAttribute("data-theme", "light");
      themeToggle.textContent = "🌙";
    } else {
      body.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️";
    }
  });
  
  // Basic Contact Form Validation
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
    // Simulate sending message (integrate with backend/email API as needed)
    alert("Message sent! Thank you for reaching out.");
    contactForm.reset();
  });

  document.addEventListener("DOMContentLoaded", function () {
      const loadingContainer = document.getElementById("loading-container");
      const jsonContainer = document.getElementById("json-container");
      const progressBar = document.querySelector(".progress");
      const aboutSection = document.getElementById("about");

      // Intersection Observer to detect when the About section is visible
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Start loading animation
                  setTimeout(() => {
                    progressBar.style.width = "200%"; 

                    setTimeout(() => {
                        loadingContainer.style.display = "none"; 
                        jsonContainer.classList.remove("hidden"); 
                    }, 1100);
                  }, 400);

                  observer.unobserve(aboutSection); // Stop observing after triggering once
              }
          });
      }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

      observer.observe(aboutSection);
  });

  var glideMulti = new Glide('.glide-multi', {
    type: 'carousel',
    // autoplay: 3000,
    focusAt: 'center',
    perView: 2, // Show 3 at a time
    gap: 50, // Adds spacing between slides
    animationDuration: 800, // Smooth transition
  }).mount();

  function randomizeColor() {
    var all = document.getElementsByTagName("*");
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function changeColor() { 
    let a = x ;
      window.setInterval(function(){
        a.style.backgroundColor = getRandomColor();
        a.style.color = getRandomColor();
      }, 150);
    }
    for (var i=0, max=all.length; i < max; i++) {
      var x = all[i];
        changeColor();
    }
  }

  const walker = document.getElementById("walker");
  const speed = 4; // Pixels per frame
  let isWalking = true;
  let currentGif = "gifs/walk.gif";
  let stopGif = "gifs/dance.gif";

  // Define the path corners
  const path = [
    { x: window.innerWidth - walker.width, y: window.innerHeight - walker.height }, // Bottom-right
    { x: 0, y: window.innerHeight - walker.height }, // Bottom-left
    { x: 0, y: 0 }, // Top-left
    { x: window.innerWidth - walker.width, y: 0 } // Top-right
  ];

  let currentIndex = 0;
  let nextIndex = 1;
  let posX = path[currentIndex].x;
  let posY = path[currentIndex].y;

  walker.style.left = `${posX}px`;
  walker.style.top = `${posY}px`;

  function moveWalker() {
    if (!isWalking) return;

    const targetX = path[nextIndex].x;
    const targetY = path[nextIndex].y;
    const dx = targetX - posX;
    const dy = targetY - posY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < speed) {
      // Snap to the target position
      posX = targetX;
      posY = targetY;
      currentIndex = nextIndex;
      nextIndex = (nextIndex + 1) % path.length;
    } else {
      // Move towards the target
      posX += (dx / distance) * speed;
      posY += (dy / distance) * speed;
    }

    walker.style.left = `${posX}px`;
    walker.style.top = `${posY}px`;

    // Calculate angle of movement
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Determine scaleX for flipping
    const scaleX = Math.abs(angle) === 90 ? 1 : dx > 0 ? 1 : -1;

    // Apply rotation and flipping
    walker.style.transform = `rotate(${angle}deg) rotateX(${-180}deg)`;

    requestAnimationFrame(moveWalker);
  }

  walker.addEventListener("click", () => {
    isWalking = !isWalking;
    walker.src = isWalking ? currentGif : stopGif;
    randomizeColor();
    if (isWalking) moveWalker();
  });

  moveWalker();
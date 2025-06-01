// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
  });
  
  // Swiper Sliders
  new Swiper('.product-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });
  
  new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination', clickable: true },
  });
  
  // Email Validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  // Newsletter Form
  document.getElementById('newsletter-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(validateEmail(email) ? 'Subscribed!' : 'Invalid email.');
    if (validateEmail(email)) e.target.reset();
  });
  
  // Contact Form
  document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent!');
    e.target.reset();
  });
  
  // Cart Functionality
  let cartCount = 0;
  document.addEventListener('click', e => {
    if (e.target.classList.contains('add-to-cart')) {
      cartCount++;
      document.querySelector('.cart-count').textContent = cartCount;
      alert(`${e.target.closest('.product-card').querySelector('h3').textContent} added to cart.`);
    }
  });
  
  // Smooth scroll implementation
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            // Calculate position
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            // Smooth scroll to target
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update active state in navigation
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Handle active state on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Throttle scroll event for better performance
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                setActiveLink();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Initial check for active section
    setActiveLink();
  });

  // Add scroll-based animations for performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
  }, {
    threshold: 0.1
  });

  // Observe all sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor Effect
    const cursorGlow = document.getElementById('cursor-glow');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    // Only show cursor on desktop
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursorGlow.style.left = cursorX - 10 + 'px';
            cursorGlow.style.top = cursorY - 10 + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    } else {
        // Show default cursor on mobile
        document.body.style.cursor = 'auto';
        if (cursorGlow) {
            cursorGlow.style.display = 'none';
        }
    }

    // Enhanced Typing Effect with Real Professional Roles
    const roles = [
        "STEM Innovation Engineer",
        "Product Developer", 
        "Embedded Systems Expert",
        "IoT Solutions Architect",
        "Arduino Specialist",
        "Web Developer",
        "R&D Leader",
        "Technical Trainer",
        "Electronics Engineer",
        "Innovation Catalyst",
        "Hardware Designer",
        "Education Technology Pioneer"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseTime = 2000;

    function typeWriter() {
        if (!typingElement) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeWriter, 300);
                return;
            }
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeWriter, pauseTime);
                return;
            }
        }
        
        setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }

    // Scroll Reveal Animation with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when skills section becomes visible
            if (entry.target.classList.contains('skills-section')) {
                setTimeout(() => {
                    animateSkillBars();
                }, 500);
            }
            
            // Animate progress bars when education section becomes visible
            if (entry.target.classList.contains('education-section')) {
                setTimeout(() => {
                    animateProgressBar();
                }, 1000);
            }
        }
    });
}, observerOptions);

    // Observe all scroll reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Skill Bar Animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, index * 200); // Stagger animation
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Profile Picture Upload Functionality
    const profilePic = document.getElementById('profile-pic');
    const profileOverlay = document.querySelector('.profile-overlay');
    
    if (profileOverlay && profilePic) {
    profileOverlay.addEventListener('click', () => {
        // Upload functionality removed
    });
}

    // Enhanced Form Submission with Validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
            const message = contactForm.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Add loading state
            const submitBtn = contactForm.querySelector('.btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #4ecdc4, #44a08d)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 2000);
        });
    }

    // Dynamic Header Background on Scroll
    const header = document.querySelector('.glass-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 10, 15, 0.95)';
                header.style.backdropFilter = 'blur(25px)';
            } else {
                header.style.background = 'rgba(10, 10, 15, 0.8)';
                header.style.backdropFilter = 'blur(20px)';
            }
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profile-pic');
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    
    if (profileImg) {
        profileImg.addEventListener('load', function() {
            console.log('Profile image loaded successfully');
            this.style.display = 'block';
            if (profilePlaceholder) {
                profilePlaceholder.style.display = 'none';
            }
        });
        
        profileImg.addEventListener('error', function() {
            console.log('Profile image failed to load, showing placeholder');
            this.style.display = 'none';
            if (profilePlaceholder) {
                profilePlaceholder.style.display = 'flex';
            }
        });
    }
});

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    function animateProgressBar() {
    const progressBars = document.querySelectorAll('.progress-fill[data-progress]');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 800);
    });
}
    // Ripple Effect for Buttons
    function addRippleEffect(element) {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Apply ripple effect to all buttons
    document.querySelectorAll('.btn').forEach(addRippleEffect);

    // Enhanced Card Hover Effects
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 0 40px rgba(0, 245, 255, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Parallax Effect for Hero Section
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-section');
            if (hero) {
                const rate = scrolled * -0.3;
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Loading Screen Effect
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Initialize typing effect after load
        setTimeout(() => {
            typeWriter();
        }, 500);
    });

    // Keyboard Navigation Support
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

    // Dynamic Theme Detection (if user prefers reduced motion)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-duration', '0s');
    }

    // Performance Monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 1000);
        });
    }

    // Service Worker Registration (for PWA capabilities)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Error Handling for Images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.log('Image failed to load:', this.src);
        });
    });

    // Dynamic Copyright Year
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-content p');
    if (copyrightElement && copyrightElement.textContent.includes('2025')) {
        copyrightElement.textContent = copyrightElement.textContent.replace('2025', currentYear);
    }

    // Console Message for Developers
    console.log(`
    🚀 Welcome to Atif Ziya's Portfolio!
    =====================================
    
    This website showcases:
    • Modern Web Technologies
    • Glass Morphism Design
    • Responsive Layout
    • Smooth Animations
    • Professional Portfolio
    
    Built with ❤️ by Atif Ziya
    STEM Innovation Engineer & Product Developer
    
    Contact: ec.atif.ziya@hotmail.com
    LinkedIn: linkedin.com/in/atif-ziya
    `);
});

// Utility Functions
const utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Format phone number
    formatPhone: function(phone) {
        const cleaned = ('' + phone).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
        if (match) {
            return '+' + match[1] + ' ' + match[2] + ' ' + match[3];
        }
        return phone;
    }
};

// Export utils for use in other scripts if needed
window.portfolioUtils = utils;

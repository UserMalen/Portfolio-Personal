"use strict";
        // Add some interactivity to the particles
        document.addEventListener('DOMContentLoaded', function() {
            const particles = document.querySelectorAll('.particle');
            
            // Change particle color on hover over section
            const homeSection = document.getElementById('home');
            
            homeSection.addEventListener('mouseenter', function() {
                particles.forEach(particle => {
                    particle.style.backgroundColor = 'rgba(236, 72, 153, 0.7)';
                    particle.style.boxShadow = '0 0 10px rgba(236, 72, 153, 0.8)';
                });
            });
            
            homeSection.addEventListener('mouseleave', function() {
                particles.forEach(particle => {
                    particle.style.backgroundColor = 'rgba(59, 130, 246, 0.7)';
                    particle.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.8)';
                });
            });
        });

        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (menu.classList.contains('hidden')) {
                icon.className = 'fa-solid fa-bars text-2xl';
            } else {
                icon.className = 'fa-solid fa-xmark text-2xl';
            }
        });
        
        // Close menu when clicking on a link (optional)
        const menuLinks = document.querySelectorAll('#mobile-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
                document.getElementById('mobile-menu-button').querySelector('i').className = 'fa-solid fa-bars text-2xl';
            });
        });
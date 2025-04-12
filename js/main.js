document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
  
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
  
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 64, 
            behavior: 'smooth'
          });
        }
      });
    });

    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
      document.getElementById('theme-toggle-dark-icon').classList.add('hidden');
      document.getElementById('theme-toggle-light-icon-mobile').classList.remove('hidden');
      document.getElementById('theme-toggle-dark-icon-mobile').classList.add('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
      document.getElementById('theme-toggle-light-icon').classList.add('hidden');
      document.getElementById('theme-toggle-dark-icon-mobile').classList.remove('hidden');
      document.getElementById('theme-toggle-light-icon-mobile').classList.add('hidden');
    }

    function toggleTheme() {

      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
        document.getElementById('theme-toggle-light-icon').classList.add('hidden');
        document.getElementById('theme-toggle-dark-icon-mobile').classList.remove('hidden');
        document.getElementById('theme-toggle-light-icon-mobile').classList.add('hidden');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
        document.getElementById('theme-toggle-dark-icon').classList.add('hidden');
        document.getElementById('theme-toggle-light-icon-mobile').classList.remove('hidden');
        document.getElementById('theme-toggle-dark-icon-mobile').classList.add('hidden');
      }
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    
    themeToggleBtn.addEventListener('click', toggleTheme);
    themeToggleBtnMobile.addEventListener('click', toggleTheme);
  });
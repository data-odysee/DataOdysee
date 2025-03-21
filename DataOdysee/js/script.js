document.addEventListener('DOMContentLoaded', function() {
    const moduleHeadings = document.querySelectorAll('.module h3');
    moduleHeadings.forEach(heading => {
      heading.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  
    const siteTitle = document.querySelector('header h1');
    
    function triggerGlitch() {
      siteTitle.classList.remove('glitch-active');
      void siteTitle.offsetWidth;
      siteTitle.classList.add('glitch-active');
      setTimeout(() => {
        siteTitle.classList.remove('glitch-active');
      }, 1000);
    }
    
    setTimeout(triggerGlitch, 1000);
    
    setInterval(() => {
      if (Math.random() > 0.5) {
        triggerGlitch();
      }
    }, 15000);
    
    siteTitle.addEventListener('click', triggerGlitch);
  });
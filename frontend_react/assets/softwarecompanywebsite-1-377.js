(function(){
  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if(id && id.length>1){
        const el = document.querySelector(id);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

  // Video play (placeholder)
  document.querySelectorAll('.video-play').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      // In a real implementation, replace image with video player
      btn.closest('.video')?.classList.add('playing');
      btn.setAttribute('aria-label', 'Pause video');
    });
  });
})();

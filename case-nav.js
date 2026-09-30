(() => {
 const links=[...document.querySelectorAll('.case-nav-links a')];
 const sections=links.map(link=>document.querySelector(link.hash));
 let queued=false;
 function update(){queued=false;let current=0;const edge=document.querySelector('.case-nav').getBoundingClientRect().bottom+40;sections.forEach((section,i)=>{if(section.getBoundingClientRect().top<=edge)current=i;});if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-5)current=sections.length-1;links.forEach((link,i)=>{if(i===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
 window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});window.addEventListener('resize',update);update();
})();

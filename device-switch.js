(() => {
 document.querySelectorAll('[data-device-preview]').forEach(figure=>{
  const buttons=[...figure.querySelectorAll('[data-device]')],opener=figure.querySelector('[data-image]'),img=opener.querySelector('img');
  buttons.forEach(button=>button.addEventListener('click',()=>{
   buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   figure.classList.toggle('show-mobile',button.dataset.device==='mobile');
   opener.dataset.image=button.dataset.src;opener.dataset.caption=button.dataset.caption;
   opener.setAttribute('aria-label','Explore '+button.dataset.caption);
   img.src=button.dataset.src;img.alt=button.dataset.caption;
   const title=figure.querySelector('[data-preview-title]');
   if(title) title.textContent=button.dataset.caption.replace(/^[^·]+·\s*/, '');
   else figure.querySelector('figcaption').textContent=button.dataset.caption;
  }));
 });
})();

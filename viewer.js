(() => {
const items=[...document.querySelectorAll('[data-image]')];
const dialog=document.querySelector('#screen-viewer'), img=document.querySelector('#viewer-image'), caption=document.querySelector('#viewer-caption'), zoom=document.querySelector('#viewer-zoom'), scroller=document.querySelector('.viewer-scroll');
let index=0,opener;
function size(){img.style.width=zoom.value==='fit'?'100%':`${img.naturalWidth*Number(zoom.value)}px`;}
function show(i){index=(i+items.length)%items.length;img.src=items[index].dataset.image;img.alt=items[index].dataset.caption;caption.textContent=img.alt;scroller.scrollTo(0,0);}
img.addEventListener('load',size);zoom.addEventListener('change',size);
items.forEach((button,i)=>button.addEventListener('click',()=>{opener=button;zoom.value='fit';show(i);dialog.showModal();}));
document.querySelector('#viewer-prev').addEventListener('click',()=>show(index-1));
document.querySelector('#viewer-next').addEventListener('click',()=>show(index+1));
document.querySelector('#viewer-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>opener?.focus());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
dialog.addEventListener('keydown',e=>{if(e.target.tagName==='SELECT')return;if(e.key==='ArrowLeft'){e.preventDefault();show(index-1);}if(e.key==='ArrowRight'){e.preventDefault();show(index+1);}});
})();

(() => {
 const links=[...document.querySelectorAll('.case-nav-links a')];
 const sections=links.map(link=>document.querySelector(link.hash));
 let queued=false;
 function update(){queued=false;let current=0;const edge=document.querySelector('.case-nav').getBoundingClientRect().bottom+40;sections.forEach((section,i)=>{if(section.getBoundingClientRect().top<=edge)current=i;});if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-5)current=sections.length-1;links.forEach((link,i)=>{if(i===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
 window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});window.addEventListener('resize',update);update();
})();

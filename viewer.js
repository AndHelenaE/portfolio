(() => {
const items=[...document.querySelectorAll('[data-image]')];
const dialog=document.querySelector('#screen-viewer'), img=document.querySelector('#viewer-image'), caption=document.querySelector('#viewer-caption'), zoom=document.querySelector('#viewer-zoom'), scroller=document.querySelector('.viewer-scroll');
let index=0,opener,resetFrame;
// Every newly opened image starts at the top, including cached images.
scroller.style.overflowAnchor='none';
scroller.style.scrollBehavior='auto';
function resetScroll(){scroller.scrollTo({top:0,left:0,behavior:'instant'});}
function resetAfterLayout(){
 resetScroll();
 cancelAnimationFrame(resetFrame);
 resetFrame=requestAnimationFrame(()=>{if(dialog.open)resetScroll();});
}
function size(){img.style.width=zoom.value==='fit'?'100%':`${img.naturalWidth*Number(zoom.value)}px`;}
function show(i){
 index=(i+items.length)%items.length;
 img.src=items[index].dataset.image;
 img.alt=items[index].dataset.caption;
 caption.textContent=img.alt;
 if(img.complete && img.naturalWidth)size();
 resetAfterLayout();
}
img.addEventListener('load',()=>{size();resetAfterLayout();});
zoom.addEventListener('change',size);
items.forEach((button,i)=>button.addEventListener('click',()=>{opener=button;zoom.value='fit';dialog.showModal();show(i);}));
document.querySelector('#viewer-prev').addEventListener('click',()=>show(index-1));
document.querySelector('#viewer-next').addEventListener('click',()=>show(index+1));
document.querySelector('#viewer-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{cancelAnimationFrame(resetFrame);opener?.focus({preventScroll:true});});
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

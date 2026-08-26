
(function(){
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if(btn && menu){btn.addEventListener('click', ()=>{const open=menu.classList.toggle('is-open');btn.setAttribute('aria-expanded', open?'true':'false');});}
  const topBtn = document.querySelector('.to-top');
  if(topBtn){topBtn.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));}
  document.querySelectorAll('.lang-current').forEach(btn=>{
    btn.addEventListener('click', function(e){e.stopPropagation(); this.parentElement.classList.toggle('is-open');});
  });
  document.addEventListener('click', ()=> document.querySelectorAll('.lang-switch').forEach(el=>el.classList.remove('is-open')) );
})();

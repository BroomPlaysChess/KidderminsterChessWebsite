
// Nav scroll state
var nav=document.querySelector('.nav');
window.addEventListener('scroll',function(){
  if(window.scrollY>40){nav.classList.add('scrolled');}else{nav.classList.remove('scrolled');}
});
// Mobile menu
var toggle=document.querySelector('.nav-toggle');
var mobile=document.querySelector('.nav-mobile');
if(toggle){toggle.addEventListener('click',function(){
  mobile.style.display=mobile.style.display==='block'?'none':'block';
});}
// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click',function(){
    var a=q.nextElementSibling;
    var open=q.classList.contains('open');
    document.querySelectorAll('.faq-q').forEach(function(o){o.classList.remove('open');o.setAttribute('aria-expanded','false');o.nextElementSibling.style.maxHeight=null;});
    if(!open){q.classList.add('open');q.setAttribute('aria-expanded','true');a.style.maxHeight=a.scrollHeight+'px';}
  });
});

// League rows (clickable tabs that reveal the live-table link)
document.querySelectorAll('.league-bar').forEach(function(b){
  b.addEventListener('click',function(){
    var drawer=b.nextElementSibling;
    var isOpen=b.classList.contains('open');
    if(isOpen){b.classList.remove('open');b.setAttribute('aria-expanded','false');drawer.style.maxHeight=null;}
    else{b.classList.add('open');b.setAttribute('aria-expanded','true');drawer.style.maxHeight=drawer.scrollHeight+'px';}
  });
});

// Reveal on scroll
var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:0.2});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

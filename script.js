const t=document.querySelector('.tg'),n=document.querySelector('nav');
t&&t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
const f=document.getElementById('f');
f&&f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('ok').style.display='block';f.reset()});
const bt=document.querySelectorAll('.tgl button');
bt.forEach(b=>b.addEventListener('click',()=>{bt.forEach(x=>x.classList.remove('on'));b.classList.add('on');const a=b.dataset.m==='a';
document.querySelectorAll('[data-m]').forEach(e=>{if(e.tagName!=='BUTTON')e.textContent=a?e.dataset.a:e.dataset.mo});}));

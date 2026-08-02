const root=document.documentElement;
const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu-toggle');
const lang=document.querySelector('.lang');
const header=document.querySelector('.header');
function setLanguage(value){root.dataset.lang=value;root.lang=value==='pt'?'pt-BR':'en';document.querySelectorAll('[data-pt][data-en]').forEach(el=>el.textContent=el.dataset[value]);localStorage.setItem('goldenax-lang',value)}
setLanguage(localStorage.getItem('goldenax-lang')||'pt');
if(lang)lang.addEventListener('click',()=>setLanguage(root.dataset.lang==='pt'?'en':'pt'));
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
if(header)window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>8),{passive:true});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');
if(!reduce&&'IntersectionObserver'in window){const observer=new IntersectionObserver((entries,o)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.08});reveals.forEach(el=>observer.observe(el))}else reveals.forEach(el=>el.classList.add('visible'));
const form=document.querySelector('#contact-form');
if(form)form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const pt=root.dataset.lang==='pt';const company=data.get('company')|| (pt?'Não informado':'Not provided');const text=pt?`Olá, GoldenAx!\n\nMeu nome é ${data.get('name')}.\nEmpresa: ${company}\nMeu contato: ${data.get('contact')}\n\nComo preciso de ajuda:\n${data.get('message')}`:`Hello, GoldenAx!\n\nMy name is ${data.get('name')}.\nCompany: ${company}\nMy contact: ${data.get('contact')}\n\nHow I need help:\n${data.get('message')}`;const whatsappUrl=`https://wa.me/14076978921?text=${encodeURIComponent(text)}`;const popup=window.open(whatsappUrl,'_blank','noopener,noreferrer');if(!popup)window.location.href=whatsappUrl});
const year=document.querySelector('#current-year');if(year)year.textContent=new Date().getFullYear();

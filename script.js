const root=document.documentElement;
const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu-toggle');
const header=document.querySelector('.header');

if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
  }));
}

if(header)window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>8),{passive:true});

const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');
if(!reduce&&'IntersectionObserver'in window){
  const observer=new IntersectionObserver((entries,o)=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}
  }),{threshold:.08});
  reveals.forEach(el=>observer.observe(el));
}else reveals.forEach(el=>el.classList.add('visible'));

const translations=new Map([
  ['Pular para o conteúdo','Skip to content'],
  ['Serviços','Services'],
  ['Sobre','About'],
  ['Contato','Contact'],
  ['Solicitar orçamento','Request a quote'],
  ['Tecnologia que mantém sua empresa em movimento','Technology that keeps your business moving'],
  ['Quando a tecnologia funciona,','When technology works,'],
  ['seu negócio pode crescer.','your business can grow.'],
  ['A GoldenAx ajuda pequenas empresas a resolver problemas de computadores, redes e presença digital com atendimento próximo, explicações claras e soluções adequadas ao seu negócio.','GoldenAx helps small businesses solve computer, network and digital presence problems with personal service, clear explanations and solutions suited to their business.'],
  ['Falar no WhatsApp','Talk on WhatsApp'],
  ['Atendimento Rápido','Fast Response'],
  ['Suporte Humano','Human Support'],
  ['Anos de Experiência','Years of Experience'],
  ['Atendimento Bilíngue','Bilingual Support'],
  ['Atendimento humano','Human support'],
  ['Tecnologia é importante. Pessoas fazem a diferença.','Technology matters. People make the difference.'],
  ['Soluções de TI para pequenas empresas','IT solutions for small businesses'],
  ['Como podemos ajudar sua empresa','How we can help your business'],
  ['Serviços essenciais para manter sua empresa produtiva, conectada e bem apresentada.','Essential services to keep your business productive, connected and professionally presented.'],
  ['Suporte de TI','IT Support'],
  ['Atendimento remoto e presencial, quando necessário, para resolver problemas de computadores, sistemas e configurações.','Remote and on-site support, when needed, to solve computer, software and configuration issues.'],
  ['Manutenção de computadores','Computer Maintenance'],
  ['Diagnóstico, limpeza lógica, atualizações e recomendações para computadores e notebooks.','Diagnostics, software cleanup, updates and recommendations for desktops and laptops.'],
  ['Redes e Wi-Fi','Networks and Wi-Fi'],
  ['Instalação, configuração e suporte para redes estáveis e Wi-Fi de qualidade.','Installation, setup and support for stable networks and reliable Wi-Fi.'],
  ['Sites institucionais','Business Websites'],
  ['Sites rápidos e responsivos, desenvolvidos com apoio de IA para apresentar sua empresa com profissionalismo.','Fast, responsive websites developed with AI support to present your business professionally.'],
  ['Mais de duas décadas de tecnologia a serviço de pequenas empresas.','More than two decades of technology serving small businesses.'],
  ['Experiência, processos e soluções que geram resultados reais.','Experience, processes and solutions that deliver real results.'],
  ['Uma empresa organizada desde o início com processos apoiados por IA.','A company organized from the beginning with AI-supported processes.'],
  ['Eficiência, qualidade e melhoria contínua em tudo que fazemos.','Efficiency, quality and continuous improvement in everything we do.'],
  ['Vamos conversar?','Let’s talk'],
  ['Conte o que está acontecendo. A gente começa por aí.','Tell us what is happening. We start there.'],
  ['Entrar em contato','Get in touch'],
  ['Perguntas frequentes','Frequently asked questions'],
  ['Respostas simples antes do primeiro contato.','Simple answers before the first contact.'],
  ['Vocês atendem empresas de qualquer tamanho?','Do you serve businesses of any size?'],
  ['O foco inicial são pequenas empresas, mas cada necessidade pode ser avaliada individualmente.','Our initial focus is small businesses, but each need can be evaluated individually.'],
  ['O atendimento é remoto ou presencial?','Is support remote or on-site?'],
  ['Os dois formatos são possíveis, dependendo da necessidade e da segurança do atendimento.','Both formats are available, depending on the need and the safest way to provide support.'],
  ['Qual o tempo médio de resposta?','What is the average response time?'],
  ['O retorno inicial é feito o mais rápido possível, de acordo com a urgência e a disponibilidade.','The initial response is provided as quickly as possible, according to urgency and availability.'],
  ['Como funciona o orçamento?','How does the quote process work?'],
  ['Primeiro entendemos o problema. Depois apresentamos a recomendação e o escopo para aprovação.','First we understand the problem. Then we present the recommendation and scope for approval.'],
  ['Tecnologia confiável. Atendimento humano.','Reliable technology. Human support.'],
  ['Privacidade','Privacy'],
  ['Termos','Terms'],
  ['Todos os direitos reservados.','All rights reserved.']
]);

function normalizeText(value){return value.replace(/\s+/g,' ').trim()}

function detectBrowserLanguage(){
  const saved=localStorage.getItem('goldenax-language');
  if(saved==='pt'||saved==='en')return saved;
  const languages=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en'];
  return languages.some(language=>String(language).toLowerCase().startsWith('pt'))?'pt':'en';
}

function translateTextNodes(language){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{
    acceptNode(node){
      const parent=node.parentElement;
      if(!parent||['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName))return NodeFilter.FILTER_REJECT;
      return normalizeText(node.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
    }
  });
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(!node.parentElement.dataset.originalText)node.parentElement.dataset.originalText=normalizeText(node.nodeValue);
    const original=node.parentElement.dataset.originalText;
    const translated=translations.get(original);
    if(language==='en'&&translated)node.nodeValue=node.nodeValue.replace(original,translated);
    if(language==='pt'&&translated)node.nodeValue=node.nodeValue.replace(normalizeText(node.nodeValue),original);
  });
}

function applyLanguage(language,save=false){
  root.dataset.lang=language;
  root.lang=language==='pt'?'pt-BR':'en';
  if(save)localStorage.setItem('goldenax-language',language);

  document.querySelectorAll('[data-pt][data-en]').forEach(el=>{
    el.textContent=language==='pt'?el.dataset.pt:el.dataset.en;
  });
  document.querySelectorAll('[data-pt-html][data-en-html]').forEach(el=>{
    el.innerHTML=language==='pt'?el.dataset.ptHtml:el.dataset.enHtml;
  });
  document.querySelectorAll('[data-pt-placeholder][data-en-placeholder]').forEach(el=>{
    el.placeholder=language==='pt'?el.dataset.ptPlaceholder:el.dataset.enPlaceholder;
  });

  translateTextNodes(language);

  document.querySelectorAll('.language-switcher button').forEach(button=>{
    const active=button.dataset.language===language;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}

function installLanguageSwitcher(){
  const style=document.createElement('style');
  style.textContent='.language-switcher{display:flex;align-items:center;gap:5px;margin-left:auto;padding-left:14px}.language-switcher button{border:0;background:transparent;color:#c8c8c8;font:700 12px/1 Arial,sans-serif;letter-spacing:.08em;padding:7px 5px;cursor:pointer;transition:color .2s ease}.language-switcher button:hover,.language-switcher button.active{color:#e8bd55}.language-switcher .divider{color:#5f6368;font-size:11px}.language-switcher.mobile{display:none}@media(max-width:960px){.language-switcher.desktop{display:none}.language-switcher.mobile{display:flex;justify-content:center;margin:4px 0 2px;padding:10px 0;border-top:1px solid #e5e3dc;border-bottom:1px solid #e5e3dc}.language-switcher.mobile button{min-width:64px;color:#454b53;font-size:13px;padding:10px}.language-switcher.mobile button:hover,.language-switcher.mobile button.active{color:#986906;background:#f6f5f1;border-radius:5px}.language-switcher.mobile .divider{color:#9a9da2}}';
  document.head.appendChild(style);

  let utilityInner=document.querySelector('.utility-inner');
  if(!utilityInner){
    const bar=document.createElement('div');
    bar.className='utility-bar';
    bar.innerHTML='<div class="utility-inner"><div class="utility-contact"><a href="mailto:contato@goldenax.us">✉ contato@goldenax.us</a><a href="https://wa.me/14076978921" target="_blank" rel="noopener">☎ +1 (407) 697-8921</a><span>⌖ Orlando &amp; Winter Garden, FL</span></div></div>';
    document.body.insertBefore(bar,document.querySelector('.header'));
    utilityInner=bar.querySelector('.utility-inner');
  }

  function createSwitcher(location){
    const switcher=document.createElement('div');
    switcher.className=`language-switcher ${location}`;
    switcher.setAttribute('aria-label','Selecionar idioma / Select language');
    switcher.innerHTML='<button type="button" data-language="pt" aria-label="Selecionar português">Português</button><span class="divider" aria-hidden="true">|</span><button type="button" data-language="en" aria-label="Select English">English</button>';
    switcher.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.language,true)));
    return switcher;
  }

  utilityInner.appendChild(createSwitcher('desktop'));
  if(nav)nav.insertBefore(createSwitcher('mobile'),nav.querySelector('.quote'));
}

installLanguageSwitcher();
applyLanguage(detectBrowserLanguage());

const form=document.querySelector('#contact-form');
if(form)form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const pt=root.dataset.lang==='pt';
  const company=data.get('company')||(pt?'Não informado':'Not provided');
  const text=pt?`Olá, GoldenAx!\n\nMeu nome é ${data.get('name')}.\nEmpresa: ${company}\nMeu contato: ${data.get('contact')}\n\nComo preciso de ajuda:\n${data.get('message')}`:`Hello, GoldenAx!\n\nMy name is ${data.get('name')}.\nCompany: ${company}\nMy contact: ${data.get('contact')}\n\nHow I need help:\n${data.get('message')}`;
  const whatsappUrl=`https://wa.me/14076978921?text=${encodeURIComponent(text)}`;
  const popup=window.open(whatsappUrl,'_blank','noopener,noreferrer');
  if(!popup)window.location.href=whatsappUrl;
});

const year=document.querySelector('#current-year');
if(year)year.textContent=new Date().getFullYear();

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
  ['Atendimento Trilíngue','Trilingual Support'],
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

const spanishTranslations=new Map([
  ['Pular para o conteúdo','Saltar al contenido'],
  ['Serviços','Servicios'],
  ['Sobre','Nosotros'],
  ['Contato','Contacto'],
  ['Solicitar orçamento','Solicitar presupuesto'],
  ['Tecnologia que mantém sua empresa em movimento','Tecnología que mantiene su empresa en movimiento'],
  ['Quando a tecnologia funciona,','Cuando la tecnología funciona,'],
  ['seu negócio pode crescer.','su negocio puede crecer.'],
  ['A GoldenAx ajuda pequenas empresas a resolver problemas de computadores, redes e presença digital com atendimento próximo, explicações claras e soluções adequadas ao seu negócio.','GoldenAx ayuda a pequeñas empresas a resolver problemas de computadoras, redes y presencia digital con atención cercana, explicaciones claras y soluciones adecuadas para su negocio.'],
  ['Falar no WhatsApp','Hablar por WhatsApp'],
  ['Atendimento Rápido','Atención Rápida'],
  ['Suporte Humano','Soporte Humano'],
  ['Anos de Experiência','Años de Experiencia'],
  ['Atendimento Trilíngue','Atención Trilingüe'],
  ['Atendimento humano','Atención humana'],
  ['Tecnologia é importante. Pessoas fazem a diferença.','La tecnología es importante. Las personas marcan la diferencia.'],
  ['Soluções de TI para pequenas empresas','Soluciones de TI para pequeñas empresas'],
  ['Como podemos ajudar sua empresa','Cómo podemos ayudar a su empresa'],
  ['Serviços essenciais para manter sua empresa produtiva, conectada e bem apresentada.','Servicios esenciales para mantener su empresa productiva, conectada y bien presentada.'],
  ['Suporte de TI','Soporte de TI'],
  ['Atendimento remoto e presencial, quando necessário, para resolver problemas de computadores, sistemas e configurações.','Atención remota y presencial, cuando sea necesario, para resolver problemas de computadoras, sistemas y configuraciones.'],
  ['Manutenção de computadores','Mantenimiento de computadoras'],
  ['Diagnóstico, limpeza lógica, atualizações e recomendações para computadores e notebooks.','Diagnóstico, limpieza de software, actualizaciones y recomendaciones para computadoras y portátiles.'],
  ['Redes e Wi-Fi','Redes y Wi-Fi'],
  ['Instalação, configuração e suporte para redes estáveis e Wi-Fi de qualidade.','Instalación, configuración y soporte para redes estables y Wi-Fi de calidad.'],
  ['Sites institucionais','Sitios web empresariales'],
  ['Sites rápidos e responsivos, desenvolvidos com apoio de IA para apresentar sua empresa com profissionalismo.','Sitios rápidos y adaptables, desarrollados con apoyo de IA para presentar su empresa profesionalmente.'],
  ['Mais de duas décadas de tecnologia a serviço de pequenas empresas.','Más de dos décadas de tecnología al servicio de pequeñas empresas.'],
  ['Experiência, processos e soluções que geram resultados reais.','Experiencia, procesos y soluciones que generan resultados reales.'],
  ['Uma empresa organizada desde o início com processos apoiados por IA.','Una empresa organizada desde el inicio con procesos apoyados por IA.'],
  ['Eficiência, qualidade e melhoria contínua em tudo que fazemos.','Eficiencia, calidad y mejora continua en todo lo que hacemos.'],
  ['Vamos conversar?','¿Hablamos?'],
  ['Conte o que está acontecendo. A gente começa por aí.','Cuéntenos qué está pasando. Empezamos por ahí.'],
  ['Entrar em contato','Contactar'],
  ['Perguntas frequentes','Preguntas frecuentes'],
  ['Respostas simples antes do primeiro contato.','Respuestas sencillas antes del primer contacto.'],
  ['Vocês atendem empresas de qualquer tamanho?','¿Atienden empresas de cualquier tamaño?'],
  ['O foco inicial são pequenas empresas, mas cada necessidade pode ser avaliada individualmente.','Nuestro enfoque inicial son las pequeñas empresas, pero cada necesidad puede evaluarse individualmente.'],
  ['O atendimento é remoto ou presencial?','¿La atención es remota o presencial?'],
  ['Os dois formatos são possíveis, dependendo da necessidade e da segurança do atendimento.','Ambas modalidades son posibles, según la necesidad y la seguridad de la atención.'],
  ['Qual o tempo médio de resposta?','¿Cuál es el tiempo medio de respuesta?'],
  ['O retorno inicial é feito o mais rápido possível, de acordo com a urgência e a disponibilidade.','La respuesta inicial se realiza lo antes posible, según la urgencia y la disponibilidad.'],
  ['Como funciona o orçamento?','¿Cómo funciona el presupuesto?'],
  ['Primeiro entendemos o problema. Depois apresentamos a recomendação e o escopo para aprovação.','Primero entendemos el problema. Después presentamos la recomendación y el alcance para su aprobación.'],
  ['Tecnologia confiável. Atendimento humano.','Tecnología confiable. Atención humana.'],
  ['Privacidade','Privacidad'],
  ['Termos','Términos'],
  ['Todos os direitos reservados.','Todos los derechos reservados.'],
  ['Serviços GoldenAx','Servicios GoldenAx'],
  ['Tecnologia que resolve problemas reais.','Tecnología que resuelve problemas reales.'],
  ['Cada serviço começa com uma conversa para entender o impacto no negócio e evitar soluções desnecessárias.','Cada servicio comienza con una conversación para entender el impacto en el negocio y evitar soluciones innecesarias.'],
  ['Suporte','Soporte'],
  ['Suporte remoto e presencial','Soporte remoto y presencial'],
  ['Atendimento para problemas de computadores, sistemas, contas, impressoras, configurações e desempenho.','Atención para problemas de computadoras, sistemas, cuentas, impresoras, configuraciones y rendimiento.'],
  ['Diagnóstico inicial','Diagnóstico inicial'],
  ['Configuração e correção','Configuración y solución de problemas'],
  ['Orientação ao usuário','Orientación al usuario'],
  ['Acompanhamento após o atendimento','Seguimiento después del servicio'],
  ['Conectividade','Conectividad'],
  ['Avaliação e organização da conectividade para reduzir lentidão, quedas e áreas sem cobertura.','Evaluación y organización de la conectividad para reducir lentitud, interrupciones y áreas sin cobertura.'],
  ['Avaliação de cobertura','Evaluación de cobertura'],
  ['Configuração de roteadores e pontos de acesso','Configuración de enrutadores y puntos de acceso'],
  ['Organização básica da rede','Organización básica de la red'],
  ['Orientação para crescimento','Orientación para el crecimiento'],
  ['Equipamentos','Equipos'],
  ['Manutenção de computadores e notebooks','Mantenimiento de computadoras y portátiles'],
  ['Diagnóstico, limpeza lógica, atualizações e recomendações para reduzir falhas e prolongar a vida útil.','Diagnóstico, limpieza de software, actualizaciones y recomendaciones para reducir fallas y prolongar la vida útil.'],
  ['Análise de desempenho','Análisis de rendimiento'],
  ['Atualizações e configurações','Actualizaciones y configuraciones'],
  ['Planejamento de substituição','Planificación de reemplazo'],
  ['Relatório do atendimento','Informe del servicio'],
  ['Presença digital','Presencia digital'],
  ['Sites rápidos, responsivos e objetivos para apresentar a empresa com profissionalismo e facilitar contatos.','Sitios rápidos, adaptables y objetivos para presentar la empresa profesionalmente y facilitar el contacto.'],
  ['Design alinhado à marca','Diseño alineado con la marca'],
  ['Versão para celular','Versión para dispositivos móviles'],
  ['SEO inicial','SEO inicial'],
  ['Publicação e orientação','Publicación y orientación'],
  ['Não encontrou exatamente o que precisa?','¿No encontró exactamente lo que necesita?'],
  ['Conte o problema. Nós avaliamos e indicamos o próximo passo.','Cuéntenos el problema. Lo evaluaremos e indicaremos el siguiente paso.'],
  ['Solicitar avaliação','Solicitar evaluación'],
  ['Sobre a GoldenAx','Acerca de GoldenAx'],
  ['Uma empresa criada para tornar a tecnologia mais simples e confiável.','Una empresa creada para hacer que la tecnología sea más sencilla y confiable.'],
  ['A GoldenAx nasceu de uma ideia simples.','GoldenAx nació de una idea sencilla.'],
  ['Muitas pequenas empresas não precisam de uma estrutura enorme de tecnologia. Elas precisam de alguém confiável para ouvir, orientar e resolver.','Muchas pequeñas empresas no necesitan una enorme estructura tecnológica. Necesitan a alguien confiable que escuche, oriente y resuelva.'],
  ['Depois de mais de vinte anos trabalhando com sistemas, dados, suporte, controle de acesso e ambientes corporativos, George Machado decidiu criar a GoldenAx para aproximar essa experiência das empresas locais.','Después de más de veinte años trabajando con sistemas, datos, soporte, control de acceso y entornos corporativos, George Machado decidió crear GoldenAx para acercar esa experiencia a las empresas locales.'],
  ['O que acreditamos','En qué creemos'],
  ['Qualidade técnica só tem valor quando melhora a vida do cliente.','La calidad técnica solo tiene valor cuando mejora la vida del cliente.'],
  ['Clareza','Claridad'],
  ['Explicar de forma simples, sem esconder decisões atrás de palavras técnicas.','Explicar de forma sencilla, sin ocultar decisiones detrás de términos técnicos.'],
  ['Confiança','Confianza'],
  ['Cumprir o combinado e tratar a tecnologia do cliente com responsabilidade.','Cumplir lo acordado y tratar la tecnología del cliente con responsabilidad.'],
  ['Proximidade','Cercanía'],
  ['Ouvir o contexto do negócio antes de indicar qualquer solução.','Escuchar el contexto del negocio antes de recomendar cualquier solución.'],
  ['Qualidade','Calidad'],
  ['Entregar algo que funcione bem, seja organizado e possa crescer.','Entregar algo que funcione bien, esté organizado y pueda crecer.'],
  ['Trajetória','Trayectoria'],
  ['Experiência construída ao longo do tempo.','Experiencia construida a lo largo del tiempo.'],
  ['Empreendedorismo e desenvolvimento','Emprendimiento y desarrollo'],
  ['Projetos de sistemas e consultoria para empresas no Brasil.','Proyectos de sistemas y consultoría para empresas en Brasil.'],
  ['Telecomunicações e software','Telecomunicaciones y software'],
  ['Atuação em suporte, sistemas e desenvolvimento corporativo.','Trabajo en soporte, sistemas y desarrollo corporativo.'],
  ['Ambientes de missão crítica','Entornos de misión crítica'],
  ['Mais de treze anos em sistemas, acessos, dados, produção e processos corporativos.','Más de trece años en sistemas, accesos, datos, producción y procesos corporativos.'],
  ['Nascimento da GoldenAx','Nacimiento de GoldenAx'],
  ['Experiência direcionada a pequenas empresas na Flórida.','Experiencia orientada a pequeñas empresas en Florida.'],
  ['Founder da GoldenAx','Fundador de GoldenAx'],
  ['Quem está por trás da GoldenAx','Quién está detrás de GoldenAx'],
  ['Founder • Tecnologia com experiência e proximidade.','Fundador • Tecnología con experiencia y cercanía.'],
  ['Experiência técnica com visão de negócio.','Experiencia técnica con visión empresarial.'],
  ['George reúne mais de vinte anos de experiência em tecnologia, passando por desenvolvimento de software, suporte, redes, dados, Power BI, bancos de dados, integrações, controle de acesso e implantação de sistemas.','George reúne más de veinte años de experiencia en tecnología, incluyendo desarrollo de software, soporte, redes, datos, Power BI, bases de datos, integraciones, control de acceso e implementación de sistemas.'],
  ['Durante mais de treze anos em uma grande empresa de seguros, trabalhou com operações críticas, acessos, incidentes de produção e entregas corporativas. Essa experiência formou a disciplina e o padrão de qualidade que agora orientam a GoldenAx.','Durante más de trece años en una gran aseguradora, trabajó con operaciones críticas, accesos, incidentes de producción y entregas corporativas. Esa experiencia formó la disciplina y el estándar de calidad que hoy orientan a GoldenAx.'],
  ['Criei a GoldenAx para que pequenas empresas possam contar com tecnologia bem cuidada e com alguém que explique tudo de forma simples.','Creé GoldenAx para que las pequeñas empresas puedan contar con tecnología bien cuidada y con alguien que explique todo de forma sencilla.'],
  ['Princípios do Founder','Principios del fundador'],
  ['Ouvir antes de recomendar','Escuchar antes de recomendar'],
  ['Explicar antes de executar','Explicar antes de ejecutar'],
  ['Não vender o que o cliente não precisa','No vender lo que el cliente no necesita'],
  ['Qualidade em cada entrega','Calidad en cada entrega'],
  ['Contato','Contacto'],
  ['Conte o que está acontecendo. Nós começamos por aí.','Cuéntenos qué está pasando. Empezamos por ahí.'],
  ['Sem compromisso e sem linguagem complicada.','Sin compromiso y sin lenguaje complicado.'],
  ['Fale com a GoldenAx','Hable con GoldenAx'],
  ['Descreva brevemente o problema, a urgência e a melhor forma de retorno.','Describa brevemente el problema, la urgencia y la mejor forma de contacto.'],
  ['Telefone e WhatsApp','Teléfono y WhatsApp'],
  ['Área inicial de atendimento','Área inicial de atención'],
  ['Idiomas','Idiomas'],
  ['Português • English • Español','Português • English • Español'],
  ['Seu nome','Su nombre'],
  ['Empresa','Empresa'],
  ['E-mail ou telefone','Correo electrónico o teléfono'],
  ['Informe um e-mail válido ou telefone com código de área.','Ingrese un correo electrónico válido o un teléfono con código de área.'],
  ['Como podemos ajudar?','¿Cómo podemos ayudar?'],
  ['Enviar pelo WhatsApp →','Enviar por WhatsApp →'],
  ['Ao enviar, o WhatsApp será aberto com sua mensagem pronta para confirmação.','Al enviar, WhatsApp se abrirá con su mensaje listo para confirmar.'],
  ['A forma como a GoldenAx deve trabalhar.','La forma en que GoldenAx debe trabajar.'],
  ['Uma empresa organizada com apoio de IA — sem abrir mão do controle humano.','Una empresa organizada con apoyo de IA, sin renunciar al control humano.'],
  ['O GoldenAx OS é o conjunto de governança, processos, agentes, checklists e indicadores usados para construir e operar a GoldenAx de forma documentada e auditável.','GoldenAx OS es el conjunto de gobierno, procesos, agentes, listas de verificación e indicadores utilizados para construir y operar GoldenAx de forma documentada y auditable.'],
  ['IA como equipe de apoio. Founder como autoridade final.','IA como equipo de apoyo. El fundador como autoridad final.'],
  ['CEO IA','CEO IA'],
  ['Apoia planejamento, prioridades, riscos e acompanhamento das decisões.','Apoya la planificación, las prioridades, los riesgos y el seguimiento de las decisiones.'],
  ['Comercial IA','Comercial IA'],
  ['Organiza leads, prepara propostas e acompanha oportunidades.','Organiza prospectos, prepara propuestas y hace seguimiento de oportunidades.'],
  ['Atendimento IA','Atención IA'],
  ['Recebe informações, classifica solicitações e prepara o próximo passo.','Recibe información, clasifica solicitudes y prepara el siguiente paso.'],
  ['Operações IA','Operaciones IA'],
  ['Acompanha chamados, tarefas, checklists e relatórios.','Da seguimiento a solicitudes, tareas, listas de verificación e informes.'],
  ['Financeiro IA','Finanzas IA'],
  ['Organiza registros e indicadores, sem autoridade para movimentar dinheiro.','Organiza registros e indicadores, sin autoridad para mover dinero.'],
  ['Marketing IA','Marketing IA'],
  ['Produz conteúdo, analisa comunicação e apoia campanhas.','Produce contenido, analiza la comunicación y apoya campañas.'],
  ['Estrutura inicial','Estructura inicial'],
  ['Estado atual','Estado actual'],
  ['O GoldenAx OS está em construção e será desenvolvido junto com a operação real da empresa. Ele não substitui aconselhamento jurídico, contábil ou financeiro profissional.','GoldenAx OS está en construcción y se desarrollará junto con la operación real de la empresa. No sustituye el asesoramiento jurídico, contable o financiero profesional.'],
  ['Nenhuma IA pode realizar compras, pagamentos, contratações, compromissos financeiros ou decisões estratégicas críticas sem aprovação expressa do Founder.','Ninguna IA puede realizar compras, pagos, contrataciones, compromisos financieros o decisiones estratégicas críticas sin la aprobación expresa del fundador.'],
  ['Os agentes podem pesquisar, analisar, preparar documentos, organizar informações, sugerir decisões e executar tarefas operacionais autorizadas.','Los agentes pueden investigar, analizar, preparar documentos, organizar información, sugerir decisiones y ejecutar tareas operativas autorizadas.'],
  ['Política de Privacidade','Política de Privacidad'],
  ['Última atualização:','Última actualización:'],
  ['31 de julho de 2026.','31 de julio de 2026.'],
  ['O site da GoldenAx apresenta informações institucionais e oferece formas de contato. O formulário desta versão prepara a mensagem e abre o WhatsApp do visitante para confirmação; as informações digitadas não são armazenadas pelo site.','El sitio de GoldenAx presenta información institucional y ofrece formas de contacto. El formulario de esta versión prepara el mensaje y abre el WhatsApp del visitante para su confirmación; la información ingresada no se almacena en el sitio.'],
  ['Informações de contato','Información de contacto'],
  ['Quando você envia um e-mail para a GoldenAx, as informações fornecidas são usadas para responder à solicitação e acompanhar o atendimento.','Cuando envía un correo electrónico a GoldenAx, la información proporcionada se utiliza para responder a la solicitud y dar seguimiento al servicio.'],
  ['Cookies e análise','Cookies y análisis'],
  ['Esta versão do site não utiliza cookies de publicidade nem ferramentas de análise comportamental.','Esta versión del sitio no utiliza cookies publicitarias ni herramientas de análisis de comportamiento.'],
  ['Compartilhamento','Uso compartido'],
  ['A GoldenAx não vende informações pessoais. Dados poderão ser compartilhados apenas quando necessário para cumprir obrigações legais ou prestar um serviço solicitado.','GoldenAx no vende información personal. Los datos solo podrán compartirse cuando sea necesario para cumplir obligaciones legales o prestar un servicio solicitado.'],
  ['Dúvidas:','Consultas:'],
  ['Dúvidas podem ser enviadas para','Las consultas pueden enviarse a'],
  ['Termos de Uso','Términos de Uso'],
  ['Este site apresenta informações institucionais da GoldenAx. O conteúdo não constitui proposta contratual automática, garantia de disponibilidade ou aconselhamento jurídico, contábil ou financeiro.','Este sitio presenta información institucional de GoldenAx. El contenido no constituye una propuesta contractual automática, garantía de disponibilidad ni asesoramiento jurídico, contable o financiero.'],
  ['Serviços, escopo, prazos e valores serão definidos por comunicação ou proposta específica e dependerão de aprovação das partes.','Los servicios, el alcance, los plazos y los valores se definirán mediante comunicación o propuesta específica y dependerán de la aprobación de las partes.'],
  ['Voltar ao site','Volver al sitio'],
  ['Esta página não foi encontrada.','No se encontró esta página.'],
  ['O endereço pode ter mudado ou não estar mais disponível.','La dirección puede haber cambiado o ya no estar disponible.'],
  ['Voltar para a Home','Volver al inicio'],
  ['A gente começa por aí.','Empezamos por ahí.'],
  ['Agentes especializados, processos claros e responsabilidade definida.','Agentes especializados, procesos claros y responsabilidad definida.'],
  ['Anos de','Años de'],
  ['Atendimento','Atención'],
  ['Conte o que está acontecendo.','Cuéntenos qué está pasando.'],
  ['Experiência','Experiencia'],
  ['George Machado','George Machado'],
  ['Humano','Humano'],
  ['Mais de duas décadas de tecnologia','Más de dos décadas de tecnología'],
  ['PT/EN/ES','PT/EN/ES'],
  ['Rápido','Rápida'],
  ['Solicitar avaliação →','Solicitar evaluación →'],
  ['Trilíngue','Trilingüe'],
  ['Uma empresa organizada desde o início','Una empresa organizada desde el inicio'],
  ['a serviço de pequenas empresas.','al servicio de pequeñas empresas.'],
  ['com processos apoiados por IA.','con procesos apoyados por IA.']
]);

function normalizeText(value){return value.replace(/\s+/g,' ').trim()}

function getSavedLanguage(){
  const saved=localStorage.getItem('goldenax-language');
  return ['pt','en','es'].includes(saved)?saved:null;
}

function detectBrowserLanguage(){
  const languages=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en'];
  if(languages.some(language=>String(language).toLowerCase().startsWith('pt')))return 'pt';
  return languages.some(language=>String(language).toLowerCase().startsWith('es'))?'es':'en';
}

async function detectCountryLanguage(){
  const spanishCountries=new Set(['AR','BO','CL','CO','CR','CU','DO','EC','SV','GQ','GT','HN','MX','NI','PA','PY','PE','PR','UY','VE']);
  try{
    const response=await fetch('/cdn-cgi/trace',{cache:'no-store'});
    if(!response.ok)return null;
    const country=(await response.text()).match(/^loc=([A-Z]{2})$/m)?.[1];
    if(country==='BR')return 'pt';
    if(country==='US')return 'en';
    if(country==='ES'||spanishCountries.has(country))return 'es';
  }catch(error){
    console.info('Country detection unavailable; using browser language.');
  }
  return null;
}

async function selectInitialLanguage(){
  const saved=getSavedLanguage();
  if(saved)return saved;
  const countryLanguage=await detectCountryLanguage();
  return getSavedLanguage()||countryLanguage||detectBrowserLanguage();
}

const originalTextNodes=new WeakMap();

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
    if(!originalTextNodes.has(node))originalTextNodes.set(node,normalizeText(node.nodeValue));
    const original=originalTextNodes.get(node);
    const translated=language==='es'?spanishTranslations.get(original):translations.get(original);
    if(language!=='pt'&&translated)node.nodeValue=node.nodeValue.replace(normalizeText(node.nodeValue),translated);
    if(language==='pt'&&(translations.has(original)||spanishTranslations.has(original)))node.nodeValue=node.nodeValue.replace(normalizeText(node.nodeValue),original);
  });
}

function applyLanguage(language,save=false){
  root.dataset.lang=language;
  root.lang=language==='pt'?'pt-BR':language;
  if(save)localStorage.setItem('goldenax-language',language);

  document.querySelectorAll('[data-pt][data-en]').forEach(el=>{
    el.textContent=language==='pt'?el.dataset.pt:language==='es'?(el.dataset.es||spanishTranslations.get(el.dataset.pt)||el.dataset.pt):el.dataset.en;
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
  style.textContent='.language-switcher{display:flex;flex:0 0 auto;align-items:center;gap:4px;margin-left:auto;padding-left:12px;white-space:nowrap}.language-switcher button{display:grid;place-items:center;min-width:34px;border:0;border-radius:5px;background:transparent;padding:6px 5px;cursor:pointer;transition:background-color .2s ease,box-shadow .2s ease}.language-switcher .flag-icon{display:block;width:24px;height:16px;border-radius:2px;box-shadow:0 0 0 1px rgba(255,255,255,.28);overflow:hidden}.language-switcher button:hover,.language-switcher button.active{background:rgba(232,189,85,.14);box-shadow:inset 0 -2px #e8bd55}.language-switcher .divider{color:#5f6368;font-size:11px}.language-switcher.mobile{display:none}@media(max-width:960px){.language-switcher.desktop{display:none}.language-switcher.mobile{display:flex;justify-content:center;margin:4px 0 2px;padding:10px 0;border-top:1px solid #e5e3dc;border-bottom:1px solid #e5e3dc}.language-switcher.mobile button{min-width:54px;padding:10px}.language-switcher.mobile .flag-icon{width:28px;height:auto}.language-switcher.mobile button:hover,.language-switcher.mobile button.active{background:#f6f5f1;box-shadow:inset 0 -2px #986906}.language-switcher.mobile .divider{color:#9a9da2}}';
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
    switcher.setAttribute('aria-label','Selecionar idioma / Select language / Seleccionar idioma');
    switcher.innerHTML='<button type="button" data-language="pt" aria-label="Selecionar português" title="Português"><svg class="flag-icon" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#009b3a"/><path d="M15 2.5 27 10 15 17.5 3 10Z" fill="#ffdf00"/><circle cx="15" cy="10" r="4.3" fill="#002776"/><path d="M11.2 8.5c2.8-.8 5.6-.3 7.7 1.2" fill="none" stroke="#fff" stroke-width=".7"/></svg></button><span class="divider" aria-hidden="true">|</span><button type="button" data-language="en" aria-label="Select English" title="English"><svg class="flag-icon" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#fff"/><path d="M0 0h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30V7.7H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30V20H0z" fill="#b22234"/><rect width="13" height="10.78" fill="#3c3b6e"/><g fill="#fff"><circle cx="2" cy="2" r=".45"/><circle cx="5" cy="2" r=".45"/><circle cx="8" cy="2" r=".45"/><circle cx="11" cy="2" r=".45"/><circle cx="3.5" cy="4" r=".45"/><circle cx="6.5" cy="4" r=".45"/><circle cx="9.5" cy="4" r=".45"/><circle cx="2" cy="6" r=".45"/><circle cx="5" cy="6" r=".45"/><circle cx="8" cy="6" r=".45"/><circle cx="11" cy="6" r=".45"/><circle cx="3.5" cy="8" r=".45"/><circle cx="6.5" cy="8" r=".45"/><circle cx="9.5" cy="8" r=".45"/></g></svg></button><span class="divider" aria-hidden="true">|</span><button type="button" data-language="es" aria-label="Seleccionar español" title="Español"><svg class="flag-icon" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#aa151b"/><rect y="5" width="30" height="10" fill="#f1bf00"/><g transform="translate(8 7)"><rect width="1.1" height="5.8" rx=".3" fill="#aa151b"/><path d="M-.5.7h2.1v.8H-.5zM-.3 5.2h1.7v.7H-.3z" fill="#aa151b"/><path d="M2.2 1.2h2.5v3.7H2.2z" fill="#aa151b"/><path d="M2.65 1.65h1.6v1.1h-1.6z" fill="#f1bf00"/></g></svg></button>';
    switcher.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.language,true)));
    return switcher;
  }

  utilityInner.appendChild(createSwitcher('desktop'));
  if(nav)nav.insertBefore(createSwitcher('mobile'),nav.querySelector('.quote'));
}

installLanguageSwitcher();
selectInitialLanguage().then(language=>applyLanguage(language));

const form=document.querySelector('#contact-form');
if(form)form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const language=root.dataset.lang;
  const company=data.get('company')||(language==='pt'?'Não informado':language==='es'?'No informado':'Not provided');
  const messages={
    pt:`Olá, GoldenAx!\n\nMeu nome é ${data.get('name')}.\nEmpresa: ${company}\nMeu contato: ${data.get('contact')}\n\nComo preciso de ajuda:\n${data.get('message')}`,
    en:`Hello, GoldenAx!\n\nMy name is ${data.get('name')}.\nCompany: ${company}\nMy contact: ${data.get('contact')}\n\nHow I need help:\n${data.get('message')}`,
    es:`¡Hola, GoldenAx!\n\nMi nombre es ${data.get('name')}.\nEmpresa: ${company}\nMi contacto: ${data.get('contact')}\n\nCómo necesito ayuda:\n${data.get('message')}`
  };
  const text=messages[language]||messages.en;
  const whatsappUrl=`https://wa.me/14076978921?text=${encodeURIComponent(text)}`;
  const popup=window.open(whatsappUrl,'_blank','noopener,noreferrer');
  if(!popup)window.location.href=whatsappUrl;
});

const year=document.querySelector('#current-year');
if(year)year.textContent=new Date().getFullYear();

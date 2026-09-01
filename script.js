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
  ['Soluções','Solutions'],
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
  ['Soluções','Soluciones'],
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

/* Complete translations used by internal pages and newer site sections. */
const englishSupplement=new Map([
  ['Serviços GoldenAx','GoldenAx Services'],
  ['Tecnologia que resolve problemas reais.','Technology that solves real problems.'],
  ['Cada serviço começa com uma conversa para entender o impacto no negócio e evitar soluções desnecessárias.','Every service starts with a conversation to understand the business impact and avoid unnecessary solutions.'],
  ['Suporte','Support'],
  ['Suporte remoto e presencial','Remote and on-site support'],
  ['Atendimento para problemas de computadores, sistemas, contas, impressoras, configurações e desempenho.','Support for computer, system, account, printer, configuration and performance issues.'],
  ['Diagnóstico inicial','Initial diagnosis'],
  ['Configuração e correção','Setup and troubleshooting'],
  ['Orientação ao usuário','User guidance'],
  ['Acompanhamento após o atendimento','Post-service follow-up'],
  ['Conectividade','Connectivity'],
  ['Avaliação e organização da conectividade para reduzir lentidão, quedas e áreas sem cobertura.','Connectivity assessment and organization to reduce slowdowns, outages and coverage gaps.'],
  ['Avaliação de cobertura','Coverage assessment'],
  ['Configuração de roteadores e pontos de acesso','Router and access point setup'],
  ['Organização básica da rede','Basic network organization'],
  ['Orientação para crescimento','Growth guidance'],
  ['Equipamentos','Equipment'],
  ['Manutenção de computadores e notebooks','Desktop and laptop maintenance'],
  ['Diagnóstico, limpeza lógica, atualizações e recomendações para reduzir falhas e prolongar a vida útil.','Diagnostics, software cleanup, updates and recommendations to reduce failures and extend equipment life.'],
  ['Análise de desempenho','Performance analysis'],
  ['Atualizações e configurações','Updates and configuration'],
  ['Planejamento de substituição','Replacement planning'],
  ['Relatório do atendimento','Service report'],
  ['Presença digital','Digital presence'],
  ['Sites rápidos, responsivos e objetivos para apresentar a empresa com profissionalismo e facilitar contatos.','Fast, responsive and focused websites that present the business professionally and make contact easier.'],
  ['Design alinhado à marca','Brand-aligned design'],
  ['Versão para celular','Mobile version'],
  ['SEO inicial','Initial SEO'],
  ['Publicação e orientação','Publishing and guidance'],
  ['Não encontrou exatamente o que precisa?','Did not find exactly what you need?'],
  ['Conte o problema. Nós avaliamos e indicamos o próximo passo.','Tell us the problem. We will assess it and recommend the next step.'],
  ['Solicitar avaliação','Request an assessment'],
  ['Sobre a GoldenAx','About GoldenAx'],
  ['Uma empresa criada para tornar a tecnologia mais simples e confiável.','A company created to make technology simpler and more reliable.'],
  ['A GoldenAx nasceu de uma ideia simples.','GoldenAx was born from a simple idea.'],
  ['Muitas pequenas empresas não precisam de uma estrutura enorme de tecnologia. Elas precisam de alguém confiável para ouvir, orientar e resolver.','Many small businesses do not need a huge technology operation. They need someone reliable to listen, guide and solve problems.'],
  ['Depois de mais de vinte anos trabalhando com sistemas, dados, suporte, controle de acesso e ambientes corporativos, George Machado decidiu criar a GoldenAx para aproximar essa experiência das empresas locais.','After more than twenty years working with systems, data, support, access control and corporate environments, George Machado created GoldenAx to bring that experience closer to local businesses.'],
  ['O que acreditamos','What we believe'],
  ['Qualidade técnica só tem valor quando melhora a vida do cliente.','Technical quality only matters when it improves the customer’s life.'],
  ['Clareza','Clarity'],
  ['Explicar de forma simples, sem esconder decisões atrás de palavras técnicas.','Explain things simply, without hiding decisions behind technical language.'],
  ['Confiança','Trust'],
  ['Cumprir o combinado e tratar a tecnologia do cliente com responsabilidade.','Honor commitments and handle the customer’s technology responsibly.'],
  ['Proximidade','Personal service'],
  ['Ouvir o contexto do negócio antes de indicar qualquer solução.','Understand the business context before recommending any solution.'],
  ['Qualidade','Quality'],
  ['Entregar algo que funcione bem, seja organizado e possa crescer.','Deliver something that works well, is organized and can grow.'],
  ['Trajetória','Journey'],
  ['Experiência construída ao longo do tempo.','Experience built over time.'],
  ['Empreendedorismo e desenvolvimento','Entrepreneurship and development'],
  ['Projetos de sistemas e consultoria para empresas no Brasil.','Systems projects and consulting for businesses in Brazil.'],
  ['Telecomunicações e software','Telecommunications and software'],
  ['Atuação em suporte, sistemas e desenvolvimento corporativo.','Work in support, systems and corporate development.'],
  ['Ambientes de missão crítica','Mission-critical environments'],
  ['Mais de treze anos em sistemas, acessos, dados, produção e processos corporativos.','More than thirteen years in systems, access, data, production and corporate processes.'],
  ['Nascimento da GoldenAx','Birth of GoldenAx'],
  ['Experiência direcionada a pequenas empresas na Flórida.','Experience focused on small businesses in Florida.'],
  ['Founder da GoldenAx','GoldenAx Founder'],
  ['Quem está por trás da GoldenAx','Who is behind GoldenAx'],
  ['Founder • Tecnologia com experiência e proximidade.','Founder • Technology with experience and personal service.'],
  ['Experiência técnica com visão de negócio.','Technical experience with a business perspective.'],
  ['George reúne mais de vinte anos de experiência em tecnologia, passando por desenvolvimento de software, suporte, redes, dados, Power BI, bancos de dados, integrações, controle de acesso e implantação de sistemas.','George has more than twenty years of technology experience across software development, support, networks, data, Power BI, databases, integrations, access control and system implementation.'],
  ['Durante mais de treze anos em uma grande empresa de seguros, trabalhou com operações críticas, acessos, incidentes de produção e entregas corporativas. Essa experiência formou a disciplina e o padrão de qualidade que agora orientam a GoldenAx.','For more than thirteen years at a major insurance company, he worked with critical operations, access, production incidents and corporate delivery. That experience shaped the discipline and quality standard that now guide GoldenAx.'],
  ['Criei a GoldenAx para que pequenas empresas possam contar com tecnologia bem cuidada e com alguém que explique tudo de forma simples.','I created GoldenAx so small businesses can rely on well-managed technology and someone who explains everything simply.'],
  ['Princípios do Founder','Founder principles'],
  ['Ouvir antes de recomendar','Listen before recommending'],
  ['Explicar antes de executar','Explain before acting'],
  ['Não vender o que o cliente não precisa','Do not sell what the customer does not need'],
  ['Qualidade em cada entrega','Quality in every delivery'],
  ['Conte o que está acontecendo. Nós começamos por aí.','Tell us what is happening. We start there.'],
  ['Sem compromisso e sem linguagem complicada.','No obligation and no complicated language.'],
  ['Fale com a GoldenAx','Talk to GoldenAx'],
  ['Descreva brevemente o problema, a urgência e a melhor forma de retorno.','Briefly describe the problem, urgency and best way to contact you.'],
  ['Telefone e WhatsApp','Phone and WhatsApp'],
  ['Área inicial de atendimento','Initial service area'],
  ['Idiomas','Languages'],
  ['Português • English • Español','Português • English • Español'],
  ['Seu nome','Your name'],
  ['Empresa','Company'],
  ['E-mail ou telefone','Email or phone'],
  ['Informe um e-mail válido ou telefone com código de área.','Enter a valid email address or phone number with area code.'],
  ['Como podemos ajudar?','How can we help?'],
  ['Enviar pelo WhatsApp →','Send via WhatsApp →'],
  ['Ao enviar, o WhatsApp será aberto com sua mensagem pronta para confirmação.','When you send, WhatsApp will open with your message ready for confirmation.'],
  ['A forma como a GoldenAx deve trabalhar.','How GoldenAx should operate.'],
  ['Uma empresa organizada com apoio de IA — sem abrir mão do controle humano.','An organized company supported by AI—without giving up human control.'],
  ['O GoldenAx OS é o conjunto de governança, processos, agentes, checklists e indicadores usados para construir e operar a GoldenAx de forma documentada e auditável.','GoldenAx OS is the set of governance, processes, agents, checklists and indicators used to build and operate GoldenAx in a documented and auditable way.'],
  ['IA como equipe de apoio. Founder como autoridade final.','AI as a support team. Founder as the final authority.'],
  ['CEO IA','AI CEO'],
  ['Apoia planejamento, prioridades, riscos e acompanhamento das decisões.','Supports planning, priorities, risks and decision follow-up.'],
  ['Comercial IA','AI Sales'],
  ['Organiza leads, prepara propostas e acompanha oportunidades.','Organizes leads, prepares proposals and follows opportunities.'],
  ['Atendimento IA','AI Customer Service'],
  ['Recebe informações, classifica solicitações e prepara o próximo passo.','Receives information, classifies requests and prepares the next step.'],
  ['Operações IA','AI Operations'],
  ['Acompanha chamados, tarefas, checklists e relatórios.','Tracks tickets, tasks, checklists and reports.'],
  ['Financeiro IA','AI Finance'],
  ['Organiza registros e indicadores, sem autoridade para movimentar dinheiro.','Organizes records and indicators, without authority to move money.'],
  ['Marketing IA','AI Marketing'],
  ['Produz conteúdo, analisa comunicação e apoia campanhas.','Produces content, analyzes communication and supports campaigns.'],
  ['Estrutura inicial','Initial structure'],
  ['Estado atual','Current status'],
  ['O GoldenAx OS está em construção e será desenvolvido junto com a operação real da empresa. Ele não substitui aconselhamento jurídico, contábil ou financeiro profissional.','GoldenAx OS is under construction and will evolve alongside the company’s real operations. It does not replace professional legal, accounting or financial advice.'],
  ['Nenhuma IA pode realizar compras, pagamentos, contratações, compromissos financeiros ou decisões estratégicas críticas sem aprovação expressa do Founder.','No AI may make purchases, payments, hires, financial commitments or critical strategic decisions without the Founder’s express approval.'],
  ['Os agentes podem pesquisar, analisar, preparar documentos, organizar informações, sugerir decisões e executar tarefas operacionais autorizadas.','Agents may research, analyze, prepare documents, organize information, suggest decisions and execute authorized operational tasks.'],
  ['Política de Privacidade','Privacy Policy'],
  ['Última atualização:','Last updated:'],
  ['31 de julho de 2026.','July 31, 2026.'],
  ['O site da GoldenAx apresenta informações institucionais e oferece formas de contato. O formulário desta versão prepara a mensagem e abre o WhatsApp do visitante para confirmação; as informações digitadas não são armazenadas pelo site.','The GoldenAx website provides company information and contact options. This version’s form prepares a message and opens the visitor’s WhatsApp for confirmation; information entered is not stored by the website.'],
  ['Informações de contato','Contact information'],
  ['Quando você envia um e-mail para a GoldenAx, as informações fornecidas são usadas para responder à solicitação e acompanhar o atendimento.','When you email GoldenAx, the information provided is used to respond to the request and follow up on service.'],
  ['Cookies e análise','Cookies and analytics'],
  ['Esta versão do site não utiliza cookies de publicidade nem ferramentas de análise comportamental.','This version of the website does not use advertising cookies or behavioral analytics tools.'],
  ['Compartilhamento','Sharing'],
  ['A GoldenAx não vende informações pessoais. Dados poderão ser compartilhados apenas quando necessário para cumprir obrigações legais ou prestar um serviço solicitado.','GoldenAx does not sell personal information. Data may be shared only when necessary to comply with legal obligations or provide a requested service.'],
  ['Dúvidas:','Questions:'],
  ['Dúvidas podem ser enviadas para','Questions can be sent to'],
  ['Termos de Uso','Terms of Use'],
  ['Este site apresenta informações institucionais da GoldenAx. O conteúdo não constitui proposta contratual automática, garantia de disponibilidade ou aconselhamento jurídico, contábil ou financeiro.','This website provides institutional information about GoldenAx. Its content does not constitute an automatic contractual proposal, guarantee of availability, or legal, accounting or financial advice.'],
  ['Serviços, escopo, prazos e valores serão definidos por comunicação ou proposta específica e dependerão de aprovação das partes.','Services, scope, deadlines and pricing will be defined through specific communication or proposals and will depend on approval by the parties.'],
  ['Voltar ao site','Back to the website'],
  ['Esta página não foi encontrada.','This page was not found.'],
  ['O endereço pode ter mudado ou não estar mais disponível.','The address may have changed or may no longer be available.'],
  ['Voltar para a Home','Back to Home'],
  ['A gente começa por aí.','We start there.'],
  ['Agentes especializados, processos claros e responsabilidade definida.','Specialized agents, clear processes and defined responsibility.'],
  ['Anos de','Years of'],
  ['Atendimento','Service'],
  ['Conte o que está acontecendo.','Tell us what is happening.'],
  ['Experiência','Experience'],
  ['Humano','Human'],
  ['Mais de duas décadas de tecnologia','More than two decades of technology'],
  ['Rápido','Fast'],
  ['Solicitar avaliação →','Request an assessment →'],
  ['Trilíngue','Trilingual'],
  ['Uma empresa organizada desde o início','A company organized from the beginning'],
  ['a serviço de pequenas empresas.','serving small businesses.'],
  ['com processos apoiados por IA.','with AI-supported processes.']
]);

englishSupplement.forEach((value,key)=>translations.set(key,value));

const bilingualSupplement=[
  ['GoldenAx — início','GoldenAx — home','GoldenAx — inicio'],
  ['Informe um e-mail válido ou um telefone com pelo menos 7 dígitos.','Enter a valid email address or a phone number with at least 7 digits.','Ingrese un correo electrónico válido o un teléfono con al menos 7 dígitos.'],
  ['GoldenAx Solution','GoldenAx Solution','GoldenAx Solution'],
  ['Solução GoldenAx','GoldenAx Solution','Solución GoldenAx'],
  ['Controle de acesso centralizado.','Centralized access control.','Control de acceso centralizado.'],
  ['O AccessControlSaaS é um produto em evolução para organizar usuários, perfis, permissões e auditoria de acessos em um único ambiente.','AccessControlSaaS is an evolving product for organizing users, profiles, permissions and access auditing in a single environment.','AccessControlSaaS es un producto en evolución para organizar usuarios, perfiles, permisos y auditoría de accesos en un solo entorno.'],
  ['Gestão de usuários','User management','Gestión de usuarios'],
  ['Perfis e permissões','Profiles and permissions','Perfiles y permisos'],
  ['Controle de acessos','Access control','Control de accesos'],
  ['Registros de auditoria','Audit records','Registros de auditoría'],
  ['Administração centralizada','Centralized administration','Administración centralizada'],
  ['Projeto separado da operação interna GoldenAx','Project separate from GoldenAx internal operations','Proyecto separado de la operación interna de GoldenAx'],
  ['Conhecer o AccessControlSaaS','Learn about AccessControlSaaS','Conocer AccessControlSaaS'],
  ['Acessar o sistema','Access the system','Acceder al sistema'],
  ['Desenvolvimento de sistemas personalizados para automatizar processos, integrar informações e atender às necessidades específicas de cada empresa.','Custom system development to automate processes, integrate information and meet each company’s specific needs.','Desarrollo de sistemas personalizados para automatizar procesos, integrar información y atender las necesidades específicas de cada empresa.'],
  ['Automação de processos e fluxos de trabalho','Process and workflow automation','Automatización de procesos y flujos de trabajo'],
  ['Modernização, manutenção e soluções com IA','Modernization, maintenance and AI solutions','Modernización, mantenimiento y soluciones con IA'],
  ['Uma solução em evolução para centralizar a administração de acessos, usuários, perfis, permissões e registros de auditoria em um único ambiente.','An evolving solution that centralizes access, users, profiles, permissions and audit records in one environment.','Una solución en evolución para centralizar la administración de accesos, usuarios, perfiles, permisos y registros de auditoría en un solo entorno.'],
  ['Falar com a GoldenAx','Talk to GoldenAx','Hablar con GoldenAx'],
  ['Controle centralizado','Centralized control','Control centralizado'],
  ['Organize quem pode acessar o quê.','Organize who can access what.','Organice quién puede acceder a qué.'],
  ['A proposta do AccessControlSaaS é reduzir a dispersão de controles e oferecer uma visão mais clara sobre acessos e responsabilidades.','AccessControlSaaS reduces scattered controls and provides a clearer view of access and responsibilities.','AccessControlSaaS reduce la dispersión de controles y ofrece una visión más clara de los accesos y responsabilidades.'],
  ['Usuários','Users','Usuarios'],
  ['Centralização das identidades que precisam ser administradas no ambiente.','Centralization of the identities that need to be managed in the environment.','Centralización de las identidades que deben administrarse en el entorno.'],
  ['Organização das regras de acesso de acordo com funções e necessidades.','Organization of access rules according to roles and needs.','Organización de las reglas de acceso según funciones y necesidades.'],
  ['Auditoria','Audit','Auditoría'],
  ['Registro de eventos e histórico para apoiar rastreabilidade e acompanhamento.','Event and history records to support traceability and follow-up.','Registro de eventos e historial para facilitar la trazabilidad y el seguimiento.'],
  ['Estado do produto','Product status','Estado del producto'],
  ['O AccessControlSaaS é um produto separado da administração interna da GoldenAx e permanece em desenvolvimento e validação técnica. Esta página apresenta a solução sem prometer funcionalidades comerciais ainda não formalizadas.','AccessControlSaaS is separate from GoldenAx’s internal administration and remains under development and technical validation. This page presents the solution without promising commercial features that have not yet been formalized.','AccessControlSaaS es un producto separado de la administración interna de GoldenAx y permanece en desarrollo y validación técnica. Esta página presenta la solución sin prometer funciones comerciales que aún no se han formalizado.'],
  ['Conheça o AccessControlSaaS','Discover AccessControlSaaS','Conozca AccessControlSaaS'],
  ['Acesse o ambiente atual ou entre em contato com a GoldenAx para informações sobre a solução.','Access the current environment or contact GoldenAx for information about the solution.','Acceda al entorno actual o comuníquese con GoldenAx para obtener información sobre la solución.'],
  ['Entrar em contato','Get in touch','Contactar'],
  ['O GoldenAx OS reúne governança, processos, agentes, checklists e indicadores usados para construir e operar a GoldenAx de forma documentada e auditável.','GoldenAx OS brings together the governance, processes, agents, checklists and indicators used to build and operate GoldenAx in a documented and auditable way.','GoldenAx OS reúne la gobernanza, los procesos, los agentes, las listas de verificación y los indicadores utilizados para construir y operar GoldenAx de forma documentada y auditable.'],
  ['Agent Command Center','Agent Command Center','Centro de Comando de Agentes'],
  ['Quem está atuando, no que está trabalhando e o que vem depois.','Who is active, what they are working on and what comes next.','Quién está activo, en qué trabaja y qué viene después.'],
  ['Visão operacional dos agentes atualmente necessários à GoldenAx. Estados refletem somente trabalho real.','Operational view of the agents currently needed by GoldenAx. Statuses reflect real work only.','Vista operativa de los agentes que GoldenAx necesita actualmente. Los estados reflejan solo trabajo real.'],
  ['Agentes mapeados','Mapped agents','Agentes mapeados'],
  ['Em atividade','Active','Activos'],
  ['Aguardando Founder','Awaiting Founder','Esperando al fundador'],
  ['Planejado / sem atividade','Planned / inactive','Planificado / sin actividad'],
  ['Trabalhando','Working','Trabajando'],
  ['Planejado','Planned','Planificado'],
  ['Sem atividade','Inactive','Sin actividad'],
  ['Bloqueado','Blocked','Bloqueado'],
  ['Coordenação','Coordination','Coordinación'],
  ['CEO / PMO IA','AI CEO / PMO','CEO / PMO IA'],
  ['Trabalho atual','Current work','Trabajo actual'],
  ['Organização da abertura da GoldenAx, cronograma, prioridades e governança.','Organizing GoldenAx’s launch, schedule, priorities and governance.','Organización del lanzamiento de GoldenAx, cronograma, prioridades y gobernanza.'],
  ['Concluído','Completed','Completado'],
  ['Serviços iniciais, cliente ideal, posicionamento, site institucional e estrutura operacional inicial.','Initial services, ideal customer, positioning, institutional website and initial operating structure.','Servicios iniciales, cliente ideal, posicionamiento, sitio institucional y estructura operativa inicial.'],
  ['Pendente','Pending','Pendiente'],
  ['Manter o dashboard executivo atualizado e acompanhar os próximos marcos da abertura.','Keep the executive dashboard updated and track the next launch milestones.','Mantener actualizado el panel ejecutivo y seguir los próximos hitos del lanzamiento.'],
  ['Dependência do Founder','Founder dependency','Dependencia del fundador'],
  ['Decisões estratégicas, jurídicas e financeiras.','Strategic, legal and financial decisions.','Decisiones estratégicas, legales y financieras.'],
  ['Custo','Cost','Costo'],
  ['US$ 0 nesta atividade.','US$ 0 for this activity.','US$ 0 en esta actividad.'],
  ['Tecnologia','Technology','Tecnología'],
  ['Website IA','AI Website','Sitio web IA'],
  ['Manutenção do site institucional e integração pública do AccessControlSaaS como solução GoldenAx.','Maintenance of the institutional website and public integration of AccessControlSaaS as a GoldenAx solution.','Mantenimiento del sitio institucional e integración pública de AccessControlSaaS como solución GoldenAx.'],
  ['Agent Command Center, área Soluções na Home e página pública do AccessControlSaaS.','Agent Command Center, Solutions area on the Home page and public AccessControlSaaS page.','Centro de Comando de Agentes, área de Soluciones en Inicio y página pública de AccessControlSaaS.'],
  ['Separação formal dos ambientes de homologação e produção.','Formal separation of staging and production environments.','Separación formal de los entornos de prueba y producción.'],
  ['Somente para qualquer gasto futuro ou mudança estratégica.','Only for any future expense or strategic change.','Solo para cualquier gasto futuro o cambio estratégico.'],
  ['Produto e Segurança','Product and Security','Producto y Seguridad'],
  ['AccessControlSaaS Developer','AccessControlSaaS Developer','Desarrollador de AccessControlSaaS'],
  ['Fase atual','Current phase','Fase actual'],
  ['Conclusão técnica do AccessControlSaaS conforme a especificação oficial.','Technical completion of AccessControlSaaS according to the official specification.','Finalización técnica de AccessControlSaaS según la especificación oficial.'],
  ['Etapa atual','Current step','Etapa actual'],
  ['Frontend em produção com identidade GoldenAx e publicação automática pela main.','Frontend in production with GoldenAx identity and automatic deployment from main.','Frontend en producción con identidad GoldenAx y publicación automática desde main.'],
  ['PRs #8 a #13 integrados: segurança, Filiais, identidade visual e pipeline automático do frontend. Produção validada no endereço principal.','PRs #8 through #13 merged: security, Branches, visual identity and automatic frontend pipeline. Production validated at the primary address.','PRs #8 a #13 integrados: seguridad, Sucursales, identidad visual y pipeline automático del frontend. Producción validada en la dirección principal.'],
  ['Funcionalidades, associações de permissões, sessões administrativas, SSO/MFA, internacionalização, testes ampliados e publicação compatível do backend.','Features, permission associations, administrative sessions, SSO/MFA, internationalization, expanded tests and compatible backend deployment.','Funcionalidades, asociaciones de permisos, sesiones administrativas, SSO/MFA, internacionalización, pruebas ampliadas y publicación compatible del backend.'],
  ['Merge, publicação em produção, migrações e qualquer gasto.','Merge, production deployment, migrations and any expense.','Merge, publicación en producción, migraciones y cualquier gasto.'],
  ['US$ 0 nesta etapa.','US$ 0 for this step.','US$ 0 en esta etapa.'],
  ['Marketing','Marketing','Marketing'],
  ['Aguardando validação da campanha e dos panfletos com gancho para porta em português e inglês.','Awaiting validation of the campaign and door-hanger flyers in Portuguese and English.','Esperando la validación de la campaña y los volantes para puerta en portugués e inglés.'],
  ['Estratégia “Tecnologia sem complicação”, público, cinco mensagens, roteiro sem spam e versões alinhadas do door hanger em português e inglês, com chamadas curtas equivalentes, suporte de TI, criação de sites, cartões de visita, identidade visual e publicações para redes sociais.','“Technology without complications” strategy, audience, five messages, a no-spam script and aligned Portuguese and English door-hanger versions, with equivalent short calls, IT support, website creation, business cards, visual identity and social media posts.','Estrategia “Tecnología sin complicaciones”, público, cinco mensajes, guion sin spam y versiones alineadas del volante para puerta en portugués e inglés, con llamadas breves equivalentes, soporte de TI, creación de sitios, tarjetas de presentación, identidad visual y publicaciones para redes sociales.'],
  ['Aprovação final das duas artes e definição sobre preparação dos arquivos de impressão.','Final approval of both designs and decision on preparing the print files.','Aprobación final de ambos diseños y decisión sobre la preparación de los archivos de impresión.'],
  ['Aprovação da arte e aprovação expressa de qualquer gasto de impressão ou mídia.','Design approval and express approval of any printing or media expense.','Aprobación del diseño y aprobación expresa de cualquier gasto de impresión o medios.'],
  ['Governança','Governance','Gobernanza'],
  ['Governança IA','AI Governance','Gobernanza IA'],
  ['Registro de regras, responsabilidades, riscos e critérios de aprovação.','Record of rules, responsibilities, risks and approval criteria.','Registro de reglas, responsabilidades, riesgos y criterios de aprobación.'],
  ['Regras de autoridade do Founder, limites financeiros dos agentes e atualização obrigatória do dashboard ao final de cada atividade relevante.','Founder authority rules, agents’ financial limits and mandatory dashboard updates at the end of every relevant activity.','Reglas de autoridad del fundador, límites financieros de los agentes y actualización obligatoria del panel al final de cada actividad relevante.'],
  ['Atualizar controles somente quando novos processos forem realmente necessários.','Update controls only when new processes are truly needed.','Actualizar los controles solo cuando sean realmente necesarios nuevos procesos.'],
  ['Aprovação de decisões e mudanças estruturais.','Approval of decisions and structural changes.','Aprobación de decisiones y cambios estructurales.'],
  ['Comercial','Sales','Comercial'],
  ['Nenhum trabalho ativo neste momento.','No active work at this time.','No hay trabajo activo en este momento.'],
  ['Estrutura prevista para propostas, orçamentos e acompanhamento de oportunidades.','Planned structure for proposals, quotes and opportunity tracking.','Estructura prevista para propuestas, presupuestos y seguimiento de oportunidades.'],
  ['Ativar somente quando houver demanda comercial real.','Activate only when there is real commercial demand.','Activar solo cuando exista una demanda comercial real.'],
  ['Definição de condições comerciais e valores.','Definition of commercial terms and pricing.','Definición de condiciones comerciales y precios.'],
  ['AccessControlSaaS — execução','AccessControlSaaS — execution','AccessControlSaaS — ejecución'],
  ['Onde o agente está agora.','Where the agent is now.','Dónde está el agente ahora.'],
  ['Visão pública do avanço técnico. Informações sensíveis, vulnerabilidades detalhadas e credenciais não são exibidas.','Public view of technical progress. Sensitive information, detailed vulnerabilities and credentials are not displayed.','Vista pública del progreso técnico. No se muestran información sensible, vulnerabilidades detalladas ni credenciales.'],
  ['Fundação segura e cadastros essenciais','Secure foundation and essential records','Base segura y registros esenciales'],
  ['Em execução','In progress','En ejecución'],
  ['Especificação auditada','Specification audited','Especificación auditada'],
  ['Tenant, empresa e segurança','Tenant, company and security','Tenant, empresa y seguridad'],
  ['Concluído na main','Completed on main','Completado en main'],
  ['CRUDs e associações','CRUDs and associations','CRUD y asociaciones'],
  ['Filiais na main; Funcionalidades pendente','Branches on main; Features pending','Sucursales en main; Funcionalidades pendientes'],
  ['Autenticação, SSO e i18n','Authentication, SSO and i18n','Autenticación, SSO e i18n'],
  ['Testes, CI/CD e observabilidade','Tests, CI/CD and observability','Pruebas, CI/CD y observabilidad'],
  ['Produção validada','Production validated','Producción validada'],
  ['Próxima ação técnica','Next technical action','Próxima acción técnica'],
  ['Iniciar o CRUD vertical de Funcionalidades.','Start the vertical Features CRUD.','Iniciar el CRUD vertical de Funcionalidades.'],
  ['Frontend','Frontend','Frontend'],
  ['main conectada à produção; CI e deploy aprovados','main connected to production; CI and deployment approved','main conectada a producción; CI y despliegue aprobados'],
  ['Produção','Production','Producción'],
  ['frontend atualizado; backend permanece separado','frontend updated; backend remains separate','frontend actualizado; el backend permanece separado'],
  ['Custo da etapa','Step cost','Costo de la etapa'],
  ['Regra de atualização do Dashboard','Dashboard update rule','Regla de actualización del panel'],
  ['Ao final de toda atividade relevante da GoldenAx, o Dashboard deve refletir a fase, etapa, agentes, tarefas concluídas e pendentes, bloqueios, dependências do Founder, custos e próxima ação. A atividade somente é considerada encerrada após essa atualização.','At the end of every relevant GoldenAx activity, the Dashboard must reflect the phase, step, agents, completed and pending tasks, blockers, Founder dependencies, costs and next action. The activity is considered complete only after this update.','Al final de cada actividad relevante de GoldenAx, el panel debe reflejar la fase, etapa, agentes, tareas completadas y pendientes, bloqueos, dependencias del fundador, costos y próxima acción. La actividad solo se considera cerrada después de esta actualización.'],
  ['Governança operacional','Operational governance','Gobernanza operativa'],
  ['A IA pode pesquisar, analisar, planejar, preparar documentos e executar atividades técnicas autorizadas. Não pode comprar, contratar, pagar, assinar, assumir obrigações financeiras ou representar legalmente a GoldenAx.','AI may research, analyze, plan, prepare documents and execute authorized technical activities. It may not buy, hire, pay, sign, assume financial obligations or legally represent GoldenAx.','La IA puede investigar, analizar, planificar, preparar documentos y ejecutar actividades técnicas autorizadas. No puede comprar, contratar, pagar, firmar, asumir obligaciones financieras ni representar legalmente a GoldenAx.'],
  ['Fase: divulgação inicial da GoldenAx. Etapa: campanha para usuários comuns no WhatsApp e material de distribuição local. Concluído nesta atividade: estratégia da campanha, cinco mensagens, roteiro orgânico e artes do panfleto com gancho para porta em português e inglês. Custo desta implementação: US$ 0. Próxima ação operacional: aprovação do Founder para preparar os arquivos de impressão e iniciar a divulgação orgânica.','Phase: initial GoldenAx promotion. Step: campaign for everyday WhatsApp users and local distribution material. Completed in this activity: campaign strategy, five messages, organic script and Portuguese and English door-hanger flyer designs. Implementation cost: US$ 0. Next operational action: Founder approval to prepare print files and begin organic promotion.','Fase: promoción inicial de GoldenAx. Etapa: campaña para usuarios comunes de WhatsApp y material de distribución local. Completado en esta actividad: estrategia de campaña, cinco mensajes, guion orgánico y diseños del volante para puerta en portugués e inglés. Costo de implementación: US$ 0. Próxima acción operativa: aprobación del fundador para preparar los archivos de impresión e iniciar la promoción orgánica.']
];

bilingualSupplement.forEach(([key,en,es])=>{
  translations.set(key,en);
  spanishTranslations.set(key,es);
});

const pageMetadata={
  'index.html':{
    pt:['GoldenAx | Tecnologia confiável para pequenas empresas','Suporte de TI, redes, manutenção de computadores, sites e soluções digitais para pequenas empresas em Orlando, Winter Garden e região.'],
    en:['GoldenAx | Reliable technology for small businesses','IT support, networks, computer maintenance, websites and digital solutions for small businesses in Orlando, Winter Garden and the surrounding area.'],
    es:['GoldenAx | Tecnología confiable para pequeñas empresas','Soporte de TI, redes, mantenimiento de computadoras, sitios web y soluciones digitales para pequeñas empresas en Orlando, Winter Garden y alrededores.']
  },
  'services.html':{
    pt:['Serviços | GoldenAx','Suporte de TI, redes, manutenção de computadores e sites institucionais para pequenas empresas.'],
    en:['Services | GoldenAx','IT support, networks, computer maintenance and business websites for small businesses.'],
    es:['Servicios | GoldenAx','Soporte de TI, redes, mantenimiento de computadoras y sitios empresariales para pequeñas empresas.']
  },
  'accesscontrolsaas.html':{
    pt:['AccessControlSaaS | Solução GoldenAx','Conheça o AccessControlSaaS, solução GoldenAx para administração centralizada de usuários, perfis, permissões e auditoria de acessos.'],
    en:['AccessControlSaaS | GoldenAx Solution','Discover AccessControlSaaS, GoldenAx’s solution for centralized management of users, profiles, permissions and access auditing.'],
    es:['AccessControlSaaS | Solución GoldenAx','Conozca AccessControlSaaS, la solución de GoldenAx para la administración centralizada de usuarios, perfiles, permisos y auditoría de accesos.']
  },
  'about.html':{
    pt:['Sobre a GoldenAx','Conheça a origem, os valores e a proposta da GoldenAx.'],
    en:['About GoldenAx','Learn about GoldenAx’s origins, values and purpose.'],
    es:['Acerca de GoldenAx','Conozca el origen, los valores y la propuesta de GoldenAx.']
  },
  'founder.html':{
    pt:['Founder | GoldenAx','Conheça George Machado, Founder da GoldenAx.'],
    en:['Founder | GoldenAx','Meet George Machado, Founder of GoldenAx.'],
    es:['Fundador | GoldenAx','Conozca a George Machado, fundador de GoldenAx.']
  },
  'goldenax-os.html':{
    pt:['GoldenAx OS | Empresa administrada com apoio de IA','Conheça o GoldenAx OS, a estrutura de governança, processos e agentes de IA da GoldenAx.'],
    en:['GoldenAx OS | AI-supported company operations','Discover GoldenAx OS, GoldenAx’s governance, process and AI-agent structure.'],
    es:['GoldenAx OS | Operación empresarial con apoyo de IA','Conozca GoldenAx OS, la estructura de gobernanza, procesos y agentes de IA de GoldenAx.']
  },
  'contact.html':{
    pt:['Contato | GoldenAx','Fale com a GoldenAx sobre suporte de TI, redes, computadores e presença digital.'],
    en:['Contact | GoldenAx','Talk to GoldenAx about IT support, networks, computers and digital presence.'],
    es:['Contacto | GoldenAx','Hable con GoldenAx sobre soporte de TI, redes, computadoras y presencia digital.']
  },
  'privacy.html':{
    pt:['Política de Privacidade | GoldenAx','Política de privacidade do site GoldenAx.'],
    en:['Privacy Policy | GoldenAx','GoldenAx website privacy policy.'],
    es:['Política de Privacidad | GoldenAx','Política de privacidad del sitio GoldenAx.']
  },
  'terms.html':{
    pt:['Termos de Uso | GoldenAx','Termos de uso do site GoldenAx.'],
    en:['Terms of Use | GoldenAx','GoldenAx website terms of use.'],
    es:['Términos de Uso | GoldenAx','Términos de uso del sitio GoldenAx.']
  },
  '404.html':{
    pt:['Página não encontrada | GoldenAx','A página solicitada não foi encontrada.'],
    en:['Page not found | GoldenAx','The requested page was not found.'],
    es:['Página no encontrada | GoldenAx','No se encontró la página solicitada.']
  }
};

function normalizeText(value){return value.replace(/\s+/g,' ').trim()}

const navigationTranslations={
  pt:{
    'index.html':'Home',
    'services.html':'Serviços',
    'accesscontrolsaas.html':'Soluções',
    'about.html':'Sobre',
    'founder.html':'Founder',
    'goldenax-os.html':'GoldenAx OS',
    'contact.html':'Contato',
    quote:'Solicitar orçamento'
  },
  en:{
    'index.html':'Home',
    'services.html':'Services',
    'accesscontrolsaas.html':'Solutions',
    'about.html':'About',
    'founder.html':'Founder',
    'goldenax-os.html':'GoldenAx OS',
    'contact.html':'Contact',
    quote:'Request a quote'
  },
  es:{
    'index.html':'Inicio',
    'services.html':'Servicios',
    'accesscontrolsaas.html':'Soluciones',
    'about.html':'Nosotros',
    'founder.html':'Fundador',
    'goldenax-os.html':'GoldenAx OS',
    'contact.html':'Contacto',
    quote:'Solicitar presupuesto'
  }
};

function translateNavigation(language){
  const labels=navigationTranslations[language]||navigationTranslations.en;
  nav?.querySelectorAll('a').forEach(link=>{
    const page=new URL(link.getAttribute('href'),window.location.href).pathname.split('/').pop()||'index.html';
    const key=link.classList.contains('quote')?'quote':page;
    if(labels[key])link.textContent=labels[key];
  });
  nav?.setAttribute('aria-label',language==='pt'?'Navegação principal':language==='es'?'Navegación principal':'Main navigation');
  if(menu)menu.setAttribute('aria-label',language==='pt'?'Abrir menu':language==='es'?'Abrir menú':'Open menu');
}

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

const originalAttributes=new WeakMap();

function translateAttributes(language){
  document.querySelectorAll('[aria-label],[title],[placeholder]').forEach(el=>{
    if(!originalAttributes.has(el))originalAttributes.set(el,{});
    const originals=originalAttributes.get(el);
    ['aria-label','title','placeholder'].forEach(attribute=>{
      if(!el.hasAttribute(attribute))return;
      if(!originals[attribute])originals[attribute]=el.getAttribute(attribute);
      const original=originals[attribute];
      const translated=language==='es'?spanishTranslations.get(original):translations.get(original);
      el.setAttribute(attribute,language==='pt'?original:(translated||original));
    });
  });
}

function translateMetadata(language){
  const pathName=window.location.pathname.split('/').pop();
  const page=!pathName?'index.html':pathName.includes('.')?pathName:`${pathName}.html`;
  const metadata=pageMetadata[page]?.[language]||pageMetadata[page]?.en;
  if(!metadata)return;
  document.title=metadata[0];
  const description=document.querySelector('meta[name="description"]');
  if(description)description.setAttribute('content',metadata[1]);
  const openGraphTitle=document.querySelector('meta[property="og:title"]');
  if(openGraphTitle)openGraphTitle.setAttribute('content',metadata[0]);
  const openGraphDescription=document.querySelector('meta[property="og:description"]');
  if(openGraphDescription)openGraphDescription.setAttribute('content',metadata[1]);
}

function applyLanguage(language,save=false){
  root.dataset.lang=language;
  root.lang=language==='pt'?'pt-BR':language;
  if(save)localStorage.setItem('goldenax-language',language);

  document.querySelectorAll('[data-pt][data-en]').forEach(el=>{
    el.textContent=language==='pt'?el.dataset.pt:language==='es'?(el.dataset.es||spanishTranslations.get(el.dataset.pt)||el.dataset.pt):el.dataset.en;
  });
  document.querySelectorAll('[data-pt-html][data-en-html]').forEach(el=>{
    el.innerHTML=language==='pt'?el.dataset.ptHtml:language==='es'?(el.dataset.esHtml||el.dataset.enHtml):el.dataset.enHtml;
  });
  document.querySelectorAll('[data-pt-placeholder][data-en-placeholder]').forEach(el=>{
    el.placeholder=language==='pt'?el.dataset.ptPlaceholder:language==='es'?(el.dataset.esPlaceholder||spanishTranslations.get(el.dataset.ptPlaceholder)||el.dataset.enPlaceholder):el.dataset.enPlaceholder;
  });

  translateTextNodes(language);
  translateAttributes(language);
  translateNavigation(language);
  translateMetadata(language);

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
    document.body.insertBefore(bar,document.querySelector('.header')||document.body.firstChild);
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

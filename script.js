/* ===== Dados (edite aqui o conteúdo) ===== */
const I = p => `<span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg></span>`;
const SVC = [
 ["Sites institucionais","Presença profissional que passa confiança e leva o visitante a entrar em contato.",'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>'],
 ["Landing pages de conversão","Páginas focadas em uma ação, testadas para transformar anúncios em leads.",'<path d="M4 20 20 4M9 4h11v11"/>'],
 ["E-commerce","Lojas rápidas, seguras e fáceis de comprar, com pagamento e frete integrados.",'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l3 12h11l2-8H6"/>'],
 ["Sistemas web sob medida","Painéis, áreas de cliente e automações feitos para o seu processo.",'<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>'],
 ["SEO e performance","Sites leves que carregam rápido e aparecem melhor no Google.",'<circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/>'],
 ["Manutenção e suporte","Atualizações, backups e ajustes com atendimento humano e ágil.",'<path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-3-1-1-3z"/>']];
const DIF = [
 ["Foco em resultado","Cada decisão de design parte de uma meta de negócio.",'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>'],
 ["Prazo combinado e cumprido","Cronograma claro desde o início, com entregas parciais.",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'],
 ["Velocidade de verdade","Páginas leves que passam nos testes do Google.",'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'],
 ["Código seu, sem amarras","Você é dono de tudo, sem mensalidade escondida.",'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0"/>'],
 ["Atendimento direto","Você fala com quem faz, sem intermediários.",'<path d="M21 12a8 8 0 0 1-12 7l-5 2 2-5a8 8 0 1 1 15-4z"/>'],
 ["Pronto para crescer","Estrutura que acompanha o seu negócio.",'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>']];
const DEP = [
 ["Marina Costa","Lumen Clínica","Em dois meses, o site passou a gerar mais agendamentos que todas as nossas outras fontes juntas."],
 ["Rafael Duarte","Atlas Log","Entregaram o sistema no prazo e explicaram cada passo. Nossa operação ficou muito mais organizada."],
 ["Camila Prado","Verde Vivo","A loja nova carrega rápido e vende bem no celular. As vendas subiram já no primeiro mês."]];
const FAQ = [
 ["Quanto custa um site?","Depende do escopo. Landing pages começam em valores acessíveis e projetos maiores têm proposta sob medida. Você recebe o orçamento detalhado em até 1 dia útil."],
 ["Qual o prazo de entrega?","Landing pages ficam prontas em cerca de 2 semanas. Sites institucionais levam de 4 a 6 semanas e lojas virtuais, de 6 a 10."],
 ["Vou conseguir editar o conteúdo sozinho?","Sim. Entregamos com treinamento e um guia em vídeo para você atualizar textos e imagens com segurança."],
 ["O site vai aparecer no Google?","Aplicamos as boas práticas de SEO técnico em todos os projetos. Resultados orgânicos levam tempo, e também oferecemos acompanhamento mensal."],
 ["Vocês cuidam de hospedagem e domínio?","Podemos configurar tudo em seu nome, para que você mantenha o controle total, ou indicar as melhores opções."],
 ["Existe garantia?","Sim. Corrigimos qualquer erro encontrado em até 60 dias após a entrega, sem custo."]];
const $=s=>document.querySelector(s);
$("#svc").innerHTML=SVC.map(([t,d,p])=>`<article class="card rv">${I(p)}<h3>${t}</h3><p>${d}</p></article>`).join("");
$("#dif").innerHTML=DIF.map(([t,d,p])=>`<article class="card rv">${I(p)}<h3>${t}</h3><p>${d}</p></article>`).join("");
$("#dep").innerHTML=DEP.map(([n,e,t])=>`<article class="card rv"><div class="stars" aria-label="5 estrelas">★★★★★</div><p class="testimonial">“${t}”</p><div class="who"><span class="av" aria-hidden="true">${n[0]}</span><div><b>${n}</b><small>${e}</small></div></div></article>`).join("");
$("#faq").innerHTML=FAQ.map(([q,a])=>`<details class="rv"><summary>${q}</summary><p>${a}</p></details>`).join("");
$("#ano").textContent=new Date().getFullYear();

/* ===== Menu mobile ===== */
const bg=$(".burger"),nav=$("#menu");
bg.onclick=()=>{const o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nav.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open");bg.setAttribute("aria-expanded",false)}});

/* ===== Revelação ao rolar + contadores ===== */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
  const el=e.target,n=+el.dataset.n,s=el.dataset.s,t0=performance.now();
  const f=t=>{const k=Math.min((t-t0)/1400,1);el.textContent=(k<1?Math.round(n*k):n)+s;if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
document.querySelectorAll("[data-n]").forEach(el=>co.observe(el));

/* ===== Formulário: valida e abre o WhatsApp com os dados ===== */
$("#lead").addEventListener("submit",e=>{
  e.preventDefault();const f=new FormData(e.target),m=$("#msg");
  if(!f.get("nome").trim()||!/^\S+@\S+\.\S+$/.test(f.get("email"))||f.get("tel").replace(/\D/g,"").length<10){m.textContent="Confira nome, e-mail e WhatsApp com DDD.";return}
  const txt=`Olá! Sou ${f.get("nome")} e quero um orçamento de: ${f.get("tipo")}. E-mail: ${f.get("email")}. WhatsApp: ${f.get("tel")}.`;
  m.textContent="Pronto! Abrindo o WhatsApp para finalizar.";
  window.open("https://wa.me/5511999999999?text="+encodeURIComponent(txt),"_blank","noopener");
});

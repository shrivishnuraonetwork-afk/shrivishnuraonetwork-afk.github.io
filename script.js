const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const progress = document.getElementById('progress');
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%';}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const details={
portfolio:['EQUITY RESEARCH / PORTFOLIO ANALYSIS','Value Fund Portfolio & Equity Research','A 25-stock US equity portfolio using a bottom-up value-investing approach. The work covered DCF valuation, EV/EBITDA, sensitivity analysis, target prices and Bloomberg portfolio analytics. Keep any reported return figures only if they accurately reflect the academic portfolio and measurement period.'],
ma:['M&A / VALUATION','M&A Valuation & Deal Analysis','Academic transaction case studies including CNH–AGCO and Tyson Foods–Lamb Weston. Work covered DCF, comparable-company analysis, Sources & Uses, synergy assumptions, debt financing and accretion/dilution.'],
ark:['DIGITAL INFRASTRUCTURE / INVESTMENT ANALYSIS','Ark Data Centres','An investment case examining a potential £150–250m acquisition opportunity, including financing structure, operating drivers, leverage and targeted leveraged returns. Label academic or simulated analysis clearly.'],
property:['REAL ESTATE / VALUATION','London Property Valuation & Mortgage Analysis','A property-finance case built around a £795k London property, examining valuation assumptions and financing scenarios at 80–85% loan-to-value.']};
const dialog=document.getElementById('dialog');
document.querySelectorAll('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{const d=details[btn.dataset.project];document.getElementById('dialogLabel').textContent=d[0];document.getElementById('dialogTitle').textContent=d[1];document.getElementById('dialogText').textContent=d[2];dialog.showModal();}));
document.getElementById('close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.getElementById('year').textContent=new Date().getFullYear();
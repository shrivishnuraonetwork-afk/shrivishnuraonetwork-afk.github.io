(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var R=[["Diamondback Energy","FANG","Energy",190.21,256.66,35,"Diamondback_Energy"],["Energy Transfer","ET","Energy",20.23,29.43,46,"Energy_Transfer"],["UnitedHealth Group","UNH","Healthcare",439.11,573.46,31,"United_Health_Group"],["Pfizer","PFE","Healthcare",24.30,32.25,33,"PFIZER"],["FedEx","FDX","Industrials",316.44,386.92,22,"FedEx_Equity_Research_Report"],["UPS","UPS","Industrials",113.49,144.66,27,"UPS"],["AT&T","T","Telecom",21.52,36.31,69,"AT_T"],["Ford Motor","F","Autos",14.18,17.04,20,"Ford_Equity_Research_Report"],["General Mills","GIS","Consumer",38.53,49.20,28,"General_Mills"],["Target","TGT","Retail",133.97,147.93,10,"Target"]];
var cats=["All"].concat(R.map(function(r){return r[2]}).filter(function(v,i,a){return a.indexOf(v)===i}));
var F=document.getElementById('filters'),G=document.getElementById('reps');
function draw(c){G.innerHTML=R.filter(function(r){return c==="All"||r[2]===c}).map(function(r){return '<div class="card rep rv in"><img class="project-cover" src="project-covers/'+r[6]+'.jpg" alt="'+r[0]+' equity research report cover"><div class="top"><div><h4>'+r[0]+'</h4><span class="tk">NYSE: '+r[1]+' · '+r[2]+'</span></div><span class="buy">BUY</span></div><div class="px"><div>Price<b>$'+r[3].toFixed(2)+'</b></div><div style="text-align:right">Target<b>$'+r[4].toFixed(2)+'</b></div></div><div class="bar"><i data-w="'+Math.min(r[5],70)/70*100+'"></i></div><div class="up">+'+r[5]+'% implied upside</div><a class="view" href="reports/'+r[6]+'.pdf" target="_blank" rel="noopener">View full report ↗</a></div>'}).join('');
setTimeout(function(){G.querySelectorAll('.bar i').forEach(function(b){b.style.width=b.dataset.w+'%'})},60)}
cats.forEach(function(c,i){var b=document.createElement('button');b.textContent=c;if(!i)b.className='on';b.onclick=function(){F.querySelectorAll('button').forEach(function(x){x.className=''});b.className='on';draw(c)};F.appendChild(b)});
draw("All");
var C=[["BMC","Bloomberg Market Concepts","Bloomberg for Education"],["ESG","ESG Certification","Bloomberg for Education"],["XL","Spreadsheet Analysis","Bloomberg for Education"],["FF","Finance Fundamentals","Bloomberg for Education"],["IB","Banking Pathway","AmplifyME · May 2026"],["MK","Markets Pathway","AmplifyME · May 2026"],["HPC","High Potential Candidate","AmplifyME · May 2026"],["IBO","Certified Investment Banking Operations Professional","Asset Mgmt, Risk, Trade Life Cycle"],["XL","Business Analytics with Excel","SkillUP by Simplilearn · Jan 2023"],["TB","Tableau Training","SkillUP by Simplilearn · Jan 2023"],["FB","Facebook Marketing & Advertising","SkillUP by Simplilearn · Jan 2023"]];
document.getElementById('certgrid').innerHTML=C.map(function(c){return '<div class="card cert"><img src="certificates/'+c[0]+'.jpg" alt="'+c[1]+' certificate"><div><h4>'+c[1]+'</h4><small>'+c[2]+'</small></div></div>'}).join('');
var c=document.getElementById('bg'),x=c.getContext('2d'),P=[],W,H,m={x:-999,y:-999};
function size(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;var n=Math.min(90,Math.floor(W*H/14000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,r:Math.random()*1.8+.6})}
function draw2(){x.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var p=P[i];if(!rm){p.x+=p.vx;p.y+=p.vy}if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fillStyle='rgba(212,175,55,.8)';x.fill();for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle='rgba(212,175,55,'+.25*(1-d/120)+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}var dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<150){x.strokeStyle='rgba(240,215,122,'+.5*(1-dm/150)+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}}if(!rm)requestAnimationFrame(draw2)}
size();draw2();addEventListener('resize',size);
var h=document.getElementById('home');function mv(e){var t=e.touches?e.touches[0]:e,r=c.getBoundingClientRect();m.x=t.clientX-r.left;m.y=t.clientY-r.top}
h.addEventListener('mousemove',mv);h.addEventListener('touchmove',mv,{passive:true});
var T=document.getElementById('type');
if(!rm){var words=["MSc Investment Banking, Queen Mary University of London","Mergers & Acquisitions","Equity Research & Valuation","Asset Management","Advisory"],wi=0,ci=0,del=false;
function tick(){var w=words[wi];T.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(tick,55)}else if(!del){del=true;setTimeout(tick,1800)}else if(ci>0){ci--;setTimeout(tick,25)}else{del=false;wi=(wi+1)%words.length;setTimeout(tick,300)}}
T.textContent='';tick()}
var els=document.querySelectorAll('.card:not(.rep),.stat,.job,h2.title,h3.sec,blockquote');
els.forEach(function(e){e.classList.add('rv')});
var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
els.forEach(function(e){io.observe(e)});
var co=new IntersectionObserver(function(en){en.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,end=+el.dataset.count,s=el.dataset.suf||'',d=+el.dataset.dec||0,t0=null;co.unobserve(el);if(rm)return;function st(t){if(!t0)t0=t;var k=Math.min((t-t0)/1500,1);el.textContent=(end*(1-Math.pow(1-k,3))).toFixed(d)+s;if(k<1)requestAnimationFrame(st)}requestAnimationFrame(st)})},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(function(e){co.observe(e)});
})();

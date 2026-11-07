// Usage : node tools/audit_qualite.js [fr|en|ar] [examen 1-5]
// Mesure, pour les QCM d'un examen : réparation des réponses, biais de longueur,
// mots "absolus" dans les mauvaises réponses, doublons quasi-identiques.
const fs=require('fs'),vm=require('vm'),path=require('path');
const lang=process.argv[2]||'fr', exam=process.argv[3]?+process.argv[3]:null;
const root=path.join(__dirname,'..','js'), store={};
const ctx={console,localStorage:{getItem:k=>k in store?store[k]:null,setItem:(k,v)=>{store[k]=v}},getLang:()=>lang,document:{},window:{}};
vm.createContext(ctx);
vm.runInContext(['data.js','data_visual.js','storage.js'].map(f=>fs.readFileSync(path.join(root,f),'utf8')).join('\n;\n')+'\n;globalThis.Store=Store;',ctx);
const all=ctx.Store.getAllQuestions().filter(q=>q.category==='Exam'&&q.type==='single_choice'&&(!exam||q.examen===exam));
const abs={fr:/\b(toujours|jamais|systématiquement|complètement|totalement|uniquement|seulement|tous les|aucun|immédiatement|ignorer|automatiquement)\b/i,
 en:/\b(always|never|only|completely|entirely|all |none|immediately|ignore|automatically)\b/i,ar:/(دائما|أبدا|فقط|تماما|تجاهل|فورا)/};
let longest=0,ratios=[],ans={},da=0,dt=0,hi=[];
all.forEach(q=>{const ks=Object.keys(q.options),c=q.options[q.answer].length,o=ks.filter(k=>k!==q.answer).map(k=>q.options[k].length);
 const r=c/(o.reduce((a,b)=>a+b)/o.length);ratios.push(r);if(c>=Math.max(...o))longest++;if(r>=1.15)hi.push(q.id);
 ans[q.answer]=(ans[q.answer]||0)+1;ks.forEach(k=>{if(k!==q.answer){dt++;if(abs[lang].test(q.options[k]))da++}})});
ratios.sort((a,b)=>a-b);
const norm=s=>String(s||'').toLowerCase().replace(/[^\p{L}0-9 ]/gu,' ').split(/\s+/).filter(w=>w.length>3);
const sets=all.map(q=>new Set(norm((q.scenario||'')+' '+(q.question||q.text))));let dups=[];
for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++){let n=0;sets[i].forEach(w=>{if(sets[j].has(w))n++});if(n/(sets[i].size+sets[j].size-n)>=0.6)dups.push(all[i].id+'~'+all[j].id)}
console.log(`Langue ${lang} | examen ${exam||'tous'} | QCM ${all.length}`);
console.log('Réponses :',JSON.stringify(ans));
console.log('Longueur bonne/mauvaises : médiane',ratios[ratios.length>>1].toFixed(2),'p90',ratios[Math.floor(ratios.length*.9)].toFixed(2),'(exemple de référence : 1,04)');
console.log('Bonne réponse la plus longue :',longest,'('+(100*longest/all.length).toFixed(0)+' %)  | ratio ≥ 1,15 :',hi.length);
console.log('Mots absolus dans les mauvaises réponses :',(100*da/dt).toFixed(0)+' % (référence : 5 %)');
console.log('Paires quasi-identiques (≥ 60 %) :',dups.length,dups.slice(0,8).join(' '));
if(hi.length)console.log('À égaliser :',hi.join(','));

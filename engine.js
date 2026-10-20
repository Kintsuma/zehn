/* Pure game rules. No interface or storage dependencies. */
(function(root){
 'use strict';
 const brainIds=['math','memory','logic','sequence','attention','digits','colors','pattern'];const IDS=[...brainIds,...(root.ZehnLanguages?.games||[]).map(g=>g.id)];
 const quizIds=['math','logic','sequence','attention','colors',...(root.ZehnLanguages?.games||[]).map(g=>g.id)];
 const colors=[{name:'Ko‘k',hex:'#4f83ff'},{name:'Qizil',hex:'#ed6479'},{name:'Yashil',hex:'#17a782'},{name:'Sariq',hex:'#b58b00'}];
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function rng(seed){let s=2166136261;for(const c of String(seed))s=Math.imul(s^c.charCodeAt(0),16777619);return ()=>{s+=0x6D2B79F5;let t=s;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
 function int(r,a,b){return Math.floor(r()*(b-a+1))+a}
 function shuffle(a,r=Math.random){a=[...a];for(let i=a.length-1;i>0;i--){const j=int(r,0,i);[a[i],a[j]]=[a[j],a[i]]}return a}
 function numeric(q,answer,why,r,hint,extras=[]){let set=new Set([answer,...extras.filter(x=>Number.isFinite(x)&&x!==answer)]);while(set.size<4)set.add(answer+int(r,-10,15));let options=shuffle([...set].slice(0,4),r).map(String);return{q,options,answer:options.indexOf(String(answer)),why,hint}}
 function verbal(q,correct,others,why,hint,r){const options=shuffle([correct,...others],r);return{q,options,answer:options.indexOf(correct),why,hint}}
 function question(id,level=0,index=0,r=Math.random){
  if(id.startsWith('lang_')){const [,locale,topic]=id.split('_');return root.ZehnLanguages.question(locale,topic,index,r)}level=clamp(level,0,2);let a,b,c,answer,why;
  if(id==='math'){
   const type=int(r,0,level===0?1:level===1?3:5),max=[20,75,150][level];a=int(r,2,max);b=int(r,2,max);
   if(type===0)return numeric(`${a} + ${b} = ?`,a+b,`${a} + ${b} = ${a+b}.`,r,'O‘nliklarni, keyin birliklarni qo‘shing.');
   if(type===1){if(a<b)[a,b]=[b,a];return numeric(`${a} − ${b} = ?`,a-b,`${a} − ${b} = ${a-b}.`,r,'Katta sondan kichigini ayiring.')}
   if(type===2){a=int(r,2,level===1?12:25);b=int(r,2,12);return numeric(`${a} × ${b} = ?`,a*b,`${a} ni ${b} marta olamiz: ${a*b}.`,r,'Ko‘paytirishni qulay bo‘laklarga ajrating.')}
   if(type===3){a=int(r,2,15);b=int(r,2,12);return numeric(`${a*b} ÷ ${b} = ?`,a,`${b} × ${a} = ${a*b}.`,r,'Qaysi sonni bo‘luvchiga ko‘paytirganda bo‘linuvchi chiqadi?')}
   if(type===4){a=int(r,2,15)*20;b=[10,20,25,50][int(r,0,3)];return numeric(`${a} ning ${b}% i nechchi?`,a*b/100,`${a} × ${b} ÷ 100 = ${a*b/100}.`,r,'Foizni 100 ga bo‘lib, songa ko‘paytiring.')}
   a=int(r,2,12);b=int(r,2,12);c=int(r,2,20);return numeric(`${c} + ${a} × ${b} = ?`,c+a*b,`Avval ${a} × ${b} = ${a*b}, so‘ng ${c} qo‘shiladi: ${c+a*b}.`,r,'Amallar tartibiga e’tibor bering: ko‘paytirish birinchi.');
  }
  if(id==='sequence'){
   a=int(r,1,8);b=int(r,2,7);const type=int(r,0,level===0?1:level===1?3:5);let arr;
   if(type===0){arr=Array.from({length:4},(_,i)=>a+i*b);answer=a+4*b;why=`Har qadamda ${b} qo‘shiladi.`}
   if(type===1){arr=Array.from({length:4},(_,i)=>a+(4-i)*b);answer=a;why=`Har qadamda ${b} ayiriladi.`}
   if(type===2){b=int(r,2,3);arr=Array.from({length:4},(_,i)=>a*b**i);answer=a*b**4;why=`Har bir son ${b} ga ko‘payadi.`}
   if(type===3){arr=[a,a+1,a+3,a+6];answer=a+10;why='Farqlar: +1, +2, +3; keyingisi +4.'}
   if(type===4){arr=[a,a+1,2*a+1,3*a+2,5*a+3];answer=8*a+5;why='Har bir yangi son oldingi ikki sonning yig‘indisi.'}
   if(type===5){arr=[a,a+10,a+2,a+12,a+4];answer=a+14;why='Toq va juft o‘rinlarda alohida ketma-ketliklar bor. Ikkalasida ham qadam +2.'}
   return numeric(arr.join(' · ')+' · ?',answer,why,r,'Qo‘shni sonlarning farqi yoki nisbatini tekshiring.');
  }
  if(id==='logic'){
   const type=index%7;
   if(type===0){a=int(r,2,level===0?5:12);b=int(r,2,8);return numeric(`${a} ta daftar ${a*b} ming so‘m. ${a+2} ta daftar qancha turadi? (ming so‘m)`,(a+2)*b,`Bitta daftar ${b} ming. ${a+2} × ${b} = ${(a+2)*b}.`,r,'Avval bitta daftar narxini toping.')}
   if(type===1){const names=['Ali','Vali','Sardor','Jasur','Aziz','Behruz'];const [x,y,z]=shuffle(names,r);return verbal(`${x} ${y}dan tezroq. ${y} ${z}dan tezroq. Kim eng tez?`,x,[y,z,'Aniqlab bo‘lmaydi'],`${x} > ${y} > ${z}. Shuning uchun ${x} eng tez.`,'Ma’lumotlarni tartib bilan qatorga qo‘ying.',r)}
   if(type===2&&level>0){a=int(r,2,4);return numeric(`Qutida ${a} xil rangdagi sharlar bor, har rangdan kamida 2 ta. Qaramasdan bir xil rangli 2 sharni kafolatlash uchun kamida nechta olish kerak?`,a+1,`${a} ta shar turli rangda chiqishi mumkin. ${a+1}-shar oldingi ranglardan birini takrorlaydi.`,r,'Avval eng noqulay holatni o‘ylab ko‘ring.')}
   if(type===3){a=int(r,1,10);b=int(r,2,5);c=int(r,1,15);return numeric(`Bir sonni ${b} ga ko‘paytirib, ${c} qo‘shilsa ${a*b+c} chiqadi. Bu qaysi son?`,a,`(${a*b+c} − ${c}) ÷ ${b} = ${a}.`,r,'Amallarni teskari tartibda bajaring.')}
   if(type===4&&level>0){a=int(r,2,8);b=int(r,2,8);return numeric(`${a} ta printer ${a} ta sahifani ${b} daqiqada chiqaradi. ${a*2} ta printer ${a*2} ta sahifani necha daqiqada chiqaradi?`,b,`Har bir printer 1 sahifani ${b} daqiqada chiqaradi. Printer ham, sahifa ham ikki baravar: vaqt o‘zgarmaydi.`,r,'Bitta printerning ishini alohida ko‘ring.')}
   const bank=root.ZehnLogicBank?.[level]||[];const q=bank[int(r,0,bank.length-1)];if(!q)throw Error('Savollar bazasi topilmadi');let options=shuffle(q.options,r);return{...q,options,answer:options.indexOf(q.options[q.answer]),hint:'Shartlarni diqqat bilan o‘qing. Faqat berilgan ma’lumotdan xulosa chiqaring.'};
  }
  if(id==='attention'){
   const pair=shuffle([['O','0'],['B','8'],['S','5'],['I','1'],['Z','2'],['E','F'],['P','R']],r)[0],count=[5,7,9][level],row=int(r,0,3),col=int(r,0,count-1);
   return{q:`“${pair[1]}” belgisi qaysi qatorda?`,rows:Array.from({length:4},(_,y)=>Array.from({length:count},(_,x)=>y===row&&x===col?pair[1]:pair[0]).join(' ')),options:['1-qator','2-qator','3-qator','4-qator'],answer:row,why:`Farqli belgi ${row+1}-qatorning ${col+1}-o‘rnida.`,hint:'Har bir qatorni chapdan o‘ngga alohida tekshiring.'};
  }
  if(id==='colors'){
   const ink=int(r,0,3),word=level===0&&r()<.4?ink:(ink+int(r,1,3))%4,meaning=level===2&&index%2===1;return{q:meaning?'Bu safar SO‘ZNING MA’NOSINI tanlang.':'So‘zga emas, uning RANGIGA qarang.',word:colors[word].name.toUpperCase(),ink:colors[ink].hex,options:colors.map(c=>c.name),answer:meaning?word:ink,why:meaning?`Bu bosqichda rang emas, yozilgan so‘z so‘raldi: ${colors[word].name}.`:`So‘z “${colors[word].name}”, yozuv rangi — ${colors[ink].name.toLowerCase()}.`,hint:meaning?'Bu safar yozuv rangini e’tiborsiz qoldiring.':'Yozilgan so‘zning ma’nosini e’tiborsiz qoldiring.'};
  }
  throw Error('Noma’lum mashq');
 }
 function dayKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
 function validDate(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T12:00:00');return Number.isFinite(+d)&&dayKey(d)===s}
 function previous(k){const d=new Date(k+'T12:00:00');d.setDate(d.getDate()-1);return dayKey(d)}
 function streak(history,today=dayKey()){const days=new Set(history.filter(x=>x.total>0||x.legacy).map(x=>x.date));let k=days.has(today)?today:previous(today),n=0;while(days.has(k)){n++;k=previous(k)}return n}
 function recommendation(history,id){if(id.startsWith('lang_'))return 0;const recent=history.filter(h=>h.game===id&&!['review','daily'].includes(h.mode)).slice(-5);if(recent.length<2)return 0;const avg=recent.reduce((s,h)=>s+h.accuracy,0)/recent.length;const last=recent.at(-1).difficulty;return clamp(last+(avg>=85?1:avg<50?-1:0),0,2)}
 function suggested(history){history=history.filter(h=>!['daily','review'].includes(h.mode));const seen=new Set(history.map(h=>h.game));const unplayed=IDS.find(id=>!seen.has(id));if(unplayed)return unplayed;return [...IDS].sort((a,b)=>{const avg=id=>{const h=history.filter(x=>x.game===id).slice(-5);return h.reduce((s,x)=>s+x.accuracy,0)/h.length};return avg(a)-avg(b)})[0]}
 function makeDigits(level,round,r=Math.random){const n=[3,4,5][level]+Math.floor(round/2);return Array.from({length:n},()=>int(r,0,9)).join('')}
 function makePattern(level,round,r=Math.random){const size=level===2?4:3,length=[3,4,5][level]+Math.floor(round/2);return{size,cells:shuffle(Array.from({length:size*size},(_,i)=>i),r).slice(0,length)}}
 function points(level,correct,streakCount=0,hinted=false){if(!correct)return 0;return Math.round((20*(level+1)+(streakCount>=3?5:0))*(hinted?.5:1))}
 function safeQuestion(q){if(!q||typeof q.q!=='string'||q.q.length>600||!Array.isArray(q.options)||q.options.length!==4||q.options.some(x=>typeof x!=='string'||x.length>150)||!Number.isInteger(q.answer)||q.answer<0||q.answer>3||typeof q.why!=='string')return null;return{q:q.q,options:q.options,answer:q.answer,why:q.why.slice(0,600),hint:String(q.hint||'Shartlarni yana bir bor tekshiring.').slice(0,300),...(['en','ru','uz'].includes(q.locale)?{locale:q.locale}:{}),...(Array.isArray(q.order)&&q.order.length===3&&q.order.every(x=>typeof x==='string'&&x.length<70)?{order:q.order}:{}),...(Array.isArray(q.rows)&&q.rows.length===4&&q.rows.every(x=>typeof x==='string'&&x.length<100)?{rows:q.rows}:{}),...(colors.some(c=>c.hex===q.ink)&&typeof q.word==='string'?{ink:q.ink,word:q.word.slice(0,40)}:{})}}
 function validName(value){if(typeof value!=='string')return false;const name=value.normalize('NFC').trim().replace(/\s+/g,' ');return name.length<=50&&(name.match(/\p{L}/gu)||[]).length>=2&&/^[\p{L}\p{M}]+(?:[ '’‘ʻʼ-][\p{L}\p{M}]+)*$/u.test(name)}
 function validProfile(profile){return !!profile&&validName(profile.firstName)&&validName(profile.lastName)}
 function sanitize(raw){const defaults={version:2,history:[],mistakes:[],settings:{theme:'light',goal:3,language:'en'},profile:null,favorites:[]};if(!raw||typeof raw!=='object')return defaults;
  if(validProfile(raw.profile))defaults.profile={firstName:raw.profile.firstName.normalize('NFC').trim().replace(/\s+/g,' '),lastName:raw.profile.lastName.normalize('NFC').trim().replace(/\s+/g,' ')};defaults.settings.language=['en','ru','uz'].includes(raw.settings?.language)?raw.settings.language:'en';
  defaults.settings.theme=['light','dark','system'].includes(raw.settings?.theme)?raw.settings.theme:'light';defaults.settings.goal=[1,3,5].includes(raw.settings?.goal)?raw.settings.goal:3;
  defaults.favorites=Array.isArray(raw.favorites)?[...new Set(raw.favorites.filter(id=>IDS.includes(id)))]:[];
  if(Array.isArray(raw.history))defaults.history=raw.history.filter(h=>h&&IDS.includes(h.game||h.id)&&validDate(h.date)&&Number.isFinite(h.score)&&h.score>=0&&h.score<=100000&&Number.isFinite(h.accuracy)&&h.accuracy>=0&&h.accuracy<=100).slice(-500).map((h,i)=>({uid:typeof h.uid==='string'&&/^[a-zA-Z0-9_-]{1,80}$/.test(h.uid)?h.uid:`legacy_${i}_${h.date}`,game:h.game||h.id,date:h.date,score:Math.round(h.score),accuracy:Math.round(h.accuracy),difficulty:clamp(Math.floor(Number(h.difficulty??h.level)||0),0,2),seconds:clamp(Math.round(Number(h.seconds)||0),0,86400),total:clamp(Math.floor(Number(h.total)||0),0,1000),correct:clamp(Math.floor(Number(h.correct)||0),0,1000),mode:['classic','sprint','daily','review'].includes(h.mode)?h.mode:h.daily?'daily':'classic',legacy:!h.game||h.legacy===true,bonus:clamp(Number(h.bonus)||0,0,50)}));
  if(Array.isArray(raw.mistakes))defaults.mistakes=raw.mistakes.filter(m=>m&&quizIds.includes(m.game)&&safeQuestion(m.question)).slice(-100).map((m,i)=>({uid:typeof m.uid==='string'&&/^[\w-]{1,80}$/.test(m.uid)?m.uid:'mistake_'+i,game:m.game,question:safeQuestion(m.question),level:clamp(Math.floor(Number(m.level)||0),0,2)}));return defaults;
 }
 const api={IDS,brainIds,validName,validProfile,quizIds,colors,clamp,rng,int,shuffle,question,dayKey,validDate,previous,streak,recommendation,suggested,makeDigits,makePattern,points,safeQuestion,sanitize};root.ZehnEngine=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);

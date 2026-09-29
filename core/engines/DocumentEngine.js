export function cleanText(text=''){return String(text).replace(/\u00a0/g,' ').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();}
export function structureText(text=''){
 const clean=cleanText(text),lines=clean.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),sentences=clean.split(/(?<=[.!?])\s+/).filter(Boolean);
 const headings=lines.filter(x=>x.length<90&&(/^[A-Z0-9][A-Z0-9 .:&()\-]{3,}$/.test(x)||/^\d+(?:\.\d+)*[.)]?\s+/.test(x)));
 const bullets=lines.filter(x=>/^[-*•▪]/.test(x));
 const actions=lines.filter(x=>/\b(todo|action|submit|prepare|complete|deadline|due|must|should|need to)\b/i.test(x));
 return {title:lines[0]||'Untitled document',wordCount:clean?clean.split(/\s+/).length:0,headings,bullets,keyPoints:sentences.slice(0,8),actions:actions.slice(0,12),sections:lines.slice(1).map((line,i)=>({heading:`Point ${i+1}`,content:line}))};
}
export function correctEnglish(text=''){let s=String(text).replace(/[ \t]+/g,' ').replace(/\s+([,.!?;:])/g,'$1').replace(/([,.!?;:])([A-Za-z])/g,'$1 $2').trim();s=s.replace(/\bi\b/g,'I').replace(/\bdont\b/gi,"don't").replace(/\bdoesnt\b/gi,"doesn't").replace(/\bcant\b/gi,"can't").replace(/\bwont\b/gi,"won't").replace(/\bim\b/gi,"I'm");return s.replace(/(^|[.!?]\s+)([a-z])/g,(_,a,b)=>a+b.toUpperCase());}
export const DocumentEngine={name:'Document Engine',structureText,cleanText,correctEnglish};

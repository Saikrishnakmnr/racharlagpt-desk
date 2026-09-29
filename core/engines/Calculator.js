const precedence={'+':1,'-':1,'*':2,'/':2,'%':2,'^':3};
export function calculate(expression){
  const s=String(expression).replace(/\s+/g,'');
  if(!/^[0-9+\-*/%.()^]+$/.test(s)) throw Error('Only numbers and + - * / % ^ parentheses are supported.');
  const tokens=[]; let i=0;
  while(i<s.length){ if(/[0-9.]/.test(s[i])){let j=i+1;while(j<s.length&&/[0-9.]/.test(s[j]))j++;const n=Number(s.slice(i,j));if(!Number.isFinite(n))throw Error('Invalid number');tokens.push(n);i=j;}else tokens.push(s[i++]); }
  const out=[],ops=[];
  for(const t of tokens){
    if(typeof t==='number'){out.push(t);continue;}
    if(t==='('){ops.push(t);continue;}
    if(t===')'){while(ops.length&&ops.at(-1)!=='(')out.push(ops.pop());if(ops.pop()!=='(')throw Error('Mismatched parentheses');continue;}
    while(ops.length&&ops.at(-1)!=='('&&precedence[ops.at(-1)]>=precedence[t])out.push(ops.pop());ops.push(t);
  }
  while(ops.length){if(ops.at(-1)==='(')throw Error('Mismatched parentheses');out.push(ops.pop());}
  const stack=[];
  for(const t of out){if(typeof t==='number')stack.push(t);else{const b=stack.pop(),a=stack.pop();if(a===undefined||b===undefined)throw Error('Invalid expression');stack.push(t==='+'?a+b:t==='-'?a-b:t==='*'?a*b:t==='/'?a/b:t==='%'?a%b:a**b);}}
  if(stack.length!==1||!Number.isFinite(stack[0]))throw Error('Invalid result');return stack[0];
}
export const Calculator={name:'Calculator',calculate,add:(a,b)=>Number(a)+Number(b),sum:v=>v.reduce((a,x)=>a+Number(x||0),0),difference:(a,b)=>Number(a)-Number(b),multiply:(a,b)=>Number(a)*Number(b)};

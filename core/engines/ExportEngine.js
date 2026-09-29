export function downloadBlob(blob,filename){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(url);a.remove()},800)}
export function downloadText(text,filename,type='text/plain'){downloadBlob(new Blob([text],{type}),filename)}
export const ExportEngine={name:'Export Engine',downloadBlob,downloadText};

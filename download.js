module.exports=function(e,t,o,i){var n=new Blob(void 0!==i?[i,e]:[e],{type:o||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var d=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(n):window.webkitURL.createObjectURL(n),a=document.createElement("a");a.style.display="none",a.href=d,a.setAttribute("download",t),void 0===a.download&&a.setAttribute("target","_blank"),document.body.appendChild(a),a.click(),setTimeout(function(){document.body.removeChild(a),window.URL.revokeObjectURL(d)},0)}};

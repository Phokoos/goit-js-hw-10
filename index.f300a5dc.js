!function(){"use strict";var n,t,o;n="Ukraine".toLowerCase(),(t=n,o="https://restcountries.com/v3.1/name/".concat(t,"?fields=name,capital,population,flags,languages"),fetch("".concat(o)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){console.log(n[0].name.official)}))}();
//# sourceMappingURL=index.f300a5dc.js.map

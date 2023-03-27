var e,a;e="Ukraine".toLowerCase(),(a=e,fetch(`https://restcountries.com/v3.1/name/${a}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{console.log(e[0].name.official)}));
//# sourceMappingURL=index.bb517687.js.map

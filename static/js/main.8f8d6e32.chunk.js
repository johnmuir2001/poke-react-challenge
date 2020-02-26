(this["webpackJsonppoke-react-challenge"]=this["webpackJsonppoke-react-challenge"]||[]).push([[0],{159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(43),c=n.n(s),l=n(4),o=n.n(l),u=n(17),i=n(44),m=n(45),p=n(49),d=n(46),h=n(50),g=(n(57),n(58),n(59),function(e){return r.a.createElement("div",{className:"drop-down"},e.suggested?e.suggested.map((function(t,n){return r.a.createElement("h3",{className:t.active,key:n,onClick:function(){return e.handleInputClick(n)}},t.name)})):r.a.createElement("h1",null,"Loading..."))}),k=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui"},r.a.createElement("input",{onChange:e.handleChange,value:e.userValue,placeholder:"Search for Pok\xe9mon Data",onKeyUp:e.press})),e.suggested.length>0?r.a.createElement(g,{suggested:e.suggested,handleInputClick:e.handleInputClick,selected:e.selected}):null)},f=(n(60),function(e){var t=e.pokemonData.name.charAt(0).toUpperCase()+e.pokemonData.name.slice(1);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"pics"},r.a.createElement("img",{className:"poke",src:e.pokemonData.sprites.front_default,alt:"pokemon character"}),r.a.createElement("img",{className:"deleteIcon",onClick:function(){return e.click(e.label)},src:"https://img.icons8.com/cotton/64/000000/delete-sign--v1.png",alt:"delete"})),r.a.createElement("div",{className:"info"},r.a.createElement("h3",null,"Name: ",r.a.createElement("span",null,t)),r.a.createElement("h3",null,"Height: ",r.a.createElement("span",null,e.pokemonData.height)),r.a.createElement("h3",{className:"subTitle"},"Abiltities"),e.pokemonData.abilities.map((function(e,t){return r.a.createElement("p",{key:t},e.ability.name)})),r.a.createElement("h3",{className:"subTitle"},"Stats: "),e.pokemonData.stats.map((function(e,t){return r.a.createElement("p",{key:t},e.stat.name,": ",e.base_stat)}))))}),v=n(47),E=n.n(v),b=n(48),C=n.n(b),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={allPokemon:null,userValue:"",selectedIndex:null,pokemonSelected:[],suggested:[],index:-1},n.handleChange=function(e){var t=n.state.allPokemon,a=e.target.value,r=null;e.target.value.length>0?((r=t.filter((function(e){return e.name.toLowerCase().slice(0,a.length).indexOf(a.toLowerCase())>-1}))).map((function(e){return e.active="inactive"})),n.setState({userValue:e.target.value,suggested:r})):n.setState({userValue:e.target.value,suggested:[]})},n.handleInputClick=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.state.suggested[t].url);case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,s=n.state.pokemonSelected,n.state.pokemonSelected.length<4&&s.push(r),n.setState({userValue:"",selectedIndex:t,suggested:[]});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleKeyPress=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,s,c,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.state.suggested,r=t.keyCode,s=n.state.index,e.t0=!0,e.next=e.t0===(38===r)?6:e.t0===(40===r)?8:e.t0===(13===r)?10:21;break;case 6:return s--,e.abrupt("break",22);case 8:return s++,e.abrupt("break",22);case 10:return e.next=12,fetch(n.state.suggested[s].url);case 12:return c=e.sent,e.next=15,c.json();case 15:return l=e.sent,u=n.state.pokemonSelected,n.state.pokemonSelected.length<4&&u.push(l),a=[],n.setState({userValue:""}),e.abrupt("break",22);case 21:console.log("other input detected");case 22:s>a.length-1?s=a.length-1:s<0&&(s=0),s>=0&&a.length>0&&(a.map((function(e){return e.active="inactive"})),a[s].active="active"),console.log(s),n.setState({suggested:a,index:s});case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.remove=function(e){var t=n.state.pokemonSelected;t.splice(e,1),n.setState({pokemonSelected:t})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=151");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=E()(n.results,"name"),this.setState({allPokemon:a}),e.next=10,a.map((function(e){return{name:e.name.charAt(0).toUpperCase()+e.name.slice(1),url:e.url}}));case 10:r=e.sent,this.setState({allPokemon:r});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.allPokemon,a=t.userValue,s=t.pokemonSelected,c=t.suggested;return r.a.createElement("div",{className:"main"},r.a.createElement("img",{className:"logo",src:C.a,alt:"poke logo"}),r.a.createElement(k,{data:n,userValue:a,suggested:c,selected:s,handleChange:this.handleChange,handleInputClick:this.handleInputClick,click:this.nameClicker,press:this.handleKeyPress}),r.a.createElement("div",{className:"card-container"},s.map((function(t,a){return r.a.createElement("div",null,r.a.createElement(f,{click:function(){return e.remove(a)},key:a,pokemonData:t,pokemonName:n}))}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,n){e.exports=n.p+"static/media/pokemon.49255cb2.png"},51:function(e,t,n){e.exports=n(159)},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.8f8d6e32.chunk.js.map
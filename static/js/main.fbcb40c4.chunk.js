(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),l=n.n(o),c=(n(25),n(8)),i=n(7),s=n(11),u=n(9),m=n(10);n(26);function d(e){var t=e.selected===e.alt;return r.a.createElement("li",{className:t?"selected":""},r.a.createElement("img",{src:e.link,alt:e.alt,onClick:function(t){return e.onClick(t)}}),r.a.createElement("span",null,e.alt))}n(27);var h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderFoodItem",value:function(e,t,n){return r.a.createElement(d,{key:e.key,link:e.image,alt:e.key,onClick:t,selected:n})}},{key:"render",value:function(e){var t=this,n=this.props.foods.map(function(e){return t.renderFoodItem(e,t.props.onClick,t.props.selected)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Selected food:")," ",this.props.selected),r.a.createElement("section",{className:"FoodsContainer"},r.a.createElement("ul",null,n)))}}]),t}(a.Component),p=n(3),f=n.n(p),g=n(34),y=n(37),k=n(35),b=n(36),E=(n(28),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).colors=["green","red","blue","orange"],n.markers={green:f.a.icon({iconUrl:"iconGreen.png",iconSize:[20,20]}),red:f.a.icon({iconUrl:"iconRed.png",iconSize:[20,20]}),blue:f.a.icon({iconUrl:"iconBlue.png",iconSize:[20,20]}),orange:f.a.icon({iconUrl:"iconOrange.png",iconSize:[20,20]})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderMarker",value:function(e,t){var n=[e.lat,e.lng];return r.a.createElement(g.a,{key:n[0]+n[1],position:n,icon:this.markers[t]},r.a.createElement(y.a,null,e.name," ",r.a.createElement("br",null)," ",e.synonyms))}},{key:"render",value:function(e){var t=this,n={},a=0,o=this.props.places.map(function(e){var r,o=!0,l=!1,c=void 0;try{for(var i,s=e.synonyms[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;n.hasOwnProperty(u)?r=n[u]:(n[u]=t.colors[a],r=n[u],a+=1)}}catch(m){l=!0,c=m}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}return t.renderMarker(e,r)}),l=[40.73061,-73.935242];return r.a.createElement(k.a,{center:l,zoom:3},r.a.createElement(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),o)}}]),t}(a.Component)),v=(n(31),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.setState({loading:!0}),n.data.all=n.readJson(n.jsonPath).then(function(e){n.data.all=e,console.log("original data",n.data.all),n.data.all.sort(n.comparePlaceFrequency),console.log("after sort",n.data.all),n.data.images=e.map(function(e){return{key:e.key,image:e.image}}),console.log("The data was loaded",n.data.all,n.data.images),n.setState({loading:!1})})},n.handleClick=function(e){n.setState({selectedFood:e.currentTarget.alt,places:n.data.all.find(function(t){return t.key===e.currentTarget.alt}).places})},n.data={images:[],all:{}},n.state={selectedFood:"almond",places:[],loading:!0},n.jsonPath="distribution.json",n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"comparePlaceFrequency",value:function(e,t){return e.places.length>t.places.length?-1:1}},{key:"compareSynonymFrequency",value:function(e,t){var n=[],a=[];n.concat(e.places.map(function(e){return e.synonyms})),a.concat(t.places.map(function(e){return e.synonyms}));var r=n.filter(function(e,t,n){return n.indexOf(e)===t}),o=a.filter(function(e,t,n){return n.indexOf(e)===t});return console.log(r),console.log(o),r.length>o.length?1:-1}},{key:"readJson",value:function(e){return fetch(e).then(function(e){if(!e.ok)throw new Error("HTTP error "+e.status);return e.json()}).catch(function(){throw new Error("File not available")})}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Food language variety visualization")),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(h,{foods:this.data.images,onClick:this.handleClick,selected:this.state.selectedFood})),r.a.createElement(E,{places:this.state.places})),r.a.createElement("footer",null,r.a.createElement("p",null,"Made with ",r.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc96")," by ",r.a.createElement("a",{href:"https://github.com/nmicht/"},"@nmicht")," and ",r.a.createElement("a",{href:"https://github.com/jbrew/"},"@jbrew")," at NYC"),r.a.createElement("p",null,"Data obtained from Wikipedia. Project licensed under MIT."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/nmicht/food-language-variety"},"Fork from github"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.fbcb40c4.chunk.js.map
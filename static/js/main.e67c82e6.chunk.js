(this.webpackJsonparmamentum=this.webpackJsonparmamentum||[]).push([[0],{194:function(e,t,n){e.exports=n.p+"static/media/logo_black.3b2238ac.png"},195:function(e,t,n){e.exports=n.p+"static/media/loading.58607b10.gif"},196:function(e,t,n){e.exports=n.p+"static/media/logo.0d338a54.png"},197:function(e,t,n){e.exports=n.p+"static/media/nytlogo.9348e128.png"},198:function(e,t,n){e.exports=n.p+"static/media/guardianlogo.d9a0b4ad.png"},201:function(e,t,n){e.exports=n(444)},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},238:function(e,t){},240:function(e,t){},250:function(e,t){},252:function(e,t){},277:function(e,t){},279:function(e,t){},280:function(e,t){},286:function(e,t){},288:function(e,t){},306:function(e,t){},308:function(e,t){},320:function(e,t){},323:function(e,t){},328:function(e,t){},330:function(e,t){},353:function(e,t){},444:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(193),i=n.n(o),c=n(20),l=function(){var e=Object(c.b)().loginWithRedirect;return r.a.createElement("div",{id:"login-button",onClick:function(){return e()}},"Login")},s=(n(209),n(194)),u=n.n(s),m=n(8),d=n(9),h=n(11),p=n(10),f=n(195),g=n.n(f),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"loading-box"},r.a.createElement("img",{src:g.a,alt:"loading_gif",style:{height:"200px"}}))}}]),n}(a.Component),b=n(60),E=(n(210),n(211),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=(new Date).getHours();return r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"welcome"},e<12?"Good Morning":e<16?"Good Afternoon":e<21?"Good Evening":"Good Night","!"))}}]),n}(a.Component)),w=n(196),y=n.n(w),k=n(46),j=n.n(k),O=n(72),S=n(45),x=n(200),L=(n(213),n(109)),N=n.n(L),C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).inputHandler=function(t,n,a){var r=Object(x.a)(e.state.notes);r[n][a]=t.target.value,e.setState({notes:r})},e.createHandler=function(){var t={title:e.state.newnotetitle,body:e.state.newnotebody,email:e.props.user.email};(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(n){fetch("https://armamentum.herokuapp.com/notes/postnote",{method:"POST",headers:{"Content-type":"application/json",userjwt:e.state.rawuserjwt,email:e.props.user.email,Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(t){return fetch("https://armamentum.herokuapp.com/notes",{headers:{Authorization:"Bearer ".concat(t),userjwt:e.state.rawuserjwt,email:e.props.user.email}}).then((function(e){return e.json()})).then((function(t){var n=[];t.forEach((function(e,t){n[t]=""})),e.setState({notes:t,isLoading:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:n})}))}))}))}))},e.openbox=function(){e.setState({showcreatenewnotebox:!e.state.showcreatenewnotebox})},e.createnoteinputHandler=function(t){e.setState(Object(S.a)({},t.target.name,t.target.value))},e.updateHandler=function(t,n){var a=e.props.auth0.getAccessTokenSilently,r=e.state.updateStatus;r[n]="Updating...",e.setState({isUpdating:!0,updateStatus:r});var o={title:e.state.notes[n][2],body:e.state.notes[n][1],email:e.props.user.email};a({audience:"https://armamentum-notes"}).then((function(a){fetch("https://armamentum.herokuapp.com/notes/updatenote/"+t,{method:"PUT",headers:{"Content-type":"application/json",userjwt:e.state.rawuserjwt,email:e.props.user.email,Authorization:"Bearer ".concat(a)},body:JSON.stringify(o)}).then((function(){r[n]="Updated!",e.setState({isUpdating:!1,updateStatus:r})}))}))},e.deleteHandler=function(t){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(n){fetch("https://armamentum.herokuapp.com/notes/deletenote/"+t,{method:"DELETE",headers:{userjwt:e.state.rawuserjwt,email:e.props.user.email,Authorization:"Bearer ".concat(n)}}).then((function(){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(t){return fetch("https://armamentum.herokuapp.com/notes",{headers:{userjwt:e.state.rawuserjwt,Authorization:"Bearer ".concat(t),email:e.props.user.email}}).then((function(e){return e.json()})).then((function(t){e.setState({notes:t,isLoading:!1,showcreatenewnotebox:!1})}))}))}))}))},e.state={notes:[],isLoading:!0,isUpdating:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:[],rawuserjwt:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(j.a.mark((function e(){var t,n,a,r=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.auth0,n=t.getAccessTokenSilently,a=t.getIdTokenClaims,e.next=3,a().then((function(e){r.setState({rawuserjwt:e.__raw})}));case 3:n({audience:"https://armamentum-notes"}).then((function(e){return fetch("https://armamentum.herokuapp.com/notes",{headers:{userjwt:r.state.rawuserjwt,Authorization:"Bearer ".concat(e),email:r.props.user.email}}).then((function(e){return e.json()})).then((function(e){r.setState({notes:e,isLoading:!1})})).catch((function(e){console.log(e)}))}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){N()(document.querySelectorAll(".note-title")),N()(document.querySelectorAll(".note-textarea"))}},{key:"render",value:function(){var e=this;return!0===this.state.isLoading?r.a.createElement("div",{id:"loading"},"Loading your \ud83d\uddd2\ufe0fnotes..."):r.a.createElement("div",{id:"notes"},r.a.createElement("div",{id:"create-new-note",onClick:function(){return e.openbox()}},"Create a new note"),this.state.showcreatenewnotebox&&r.a.createElement("div",{id:"create-new-note-box"},r.a.createElement("textarea",{className:"note-title",name:"newnotetitle",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note title",value:this.state.newnotetitle,rows:1}),r.a.createElement("div",{className:"note-body"},r.a.createElement("textarea",{className:"note-textarea",name:"newnotebody",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note body",value:this.state.newnotebody,rows:1})),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{id:"create-note-button",onClick:function(){return e.createHandler()}},"Create"))),this.state.notes.map((function(t,n){return r.a.createElement("div",{className:"note",key:t[4]["@ref"].id},r.a.createElement("textarea",{className:"note-title",name:"title",onChange:function(t){return e.inputHandler(t,n,2)},defaultValue:t[2],rows:1}),r.a.createElement("div",{className:"note-body"},r.a.createElement("textarea",{className:"note-textarea",name:"body",onChange:function(t){return e.inputHandler(t,n,1)},defaultValue:t[1],rows:1})),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"update-status"},e.state.updateStatus[n]),r.a.createElement("div",{className:"delete-button",onClick:function(){return e.deleteHandler(t[4]["@ref"].id)}},"Delete"),r.a.createElement("div",{className:"save-button",onClick:function(){return e.updateHandler(t[4]["@ref"].id,n)}},"Save")))})))}}]),n}(a.PureComponent),H=Object(c.c)(C),A=(n(214),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={quote:"",author:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(t){e.setState({quote:t.content,author:t.author})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"quote"},r.a.createElement("span",{id:"content"},this.state.quote),""!==this.state.quote&&r.a.createElement("div",{id:"line"}),r.a.createElement("span",{id:"author"},this.state.author))}}]),n}(a.Component)),M=(n(215),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={weather:{temp:{value:void 0}},isLoading:!0,url:"",enableLocation:!1},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition((function(e){t.setState({url:"https://armamentum.herokuapp.com/weather/"+e.coords.latitude+"&"+e.coords.longitude,enableLocation:!0})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this;""!==this.state.url&&!0===this.state.isLoading&&fetch(this.state.url).then((function(e){return e.json()})).then((function(t){"API rate limit exceeded"===t.message?e.setState({weather:{temp:{value:void 0}},isLoading:!1}):e.setState({weather:t,isLoading:!1})})).catch((function(t){console.log(t),e.setState({isLoading:!1})}))}},{key:"render",value:function(){return!1===this.state.isLoading&&void 0!==this.state.weather.temp.value?r.a.createElement("div",{id:"weather"},r.a.createElement("div",{id:"city"},"Current temperature in your location"),r.a.createElement("span",{id:"temperature"},Math.round(this.state.weather.temp.value)+"\xb0C")):r.a.createElement("div",{id:"weather"},r.a.createElement("span",null,!0===this.state.isLoading&&!0===this.state.enableLocation?"Loading...":!1===this.state.enableLocation?"Please provide location access!":"Sorry! Some error occurred! Please try again!"))}}]),n}(a.PureComponent)),V=(n(216),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={picgeneratorlinks:["https://picsum.photos/1920/1080?random=1","https://picsum.photos/1920/1080?random=2","https://picsum.photos/1920/1080?random=3","https://picsum.photos/1920/1080?random=4"],picurl:[],isLoading:!0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=[];this.state.picgeneratorlinks.map((function(e,n){return t[n]=fetch(e)})),Promise.all(t).then((function(t){var n=[];t.map((function(e,t){return n[t]=e.url})),e.setState({isLoading:!1,picurl:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"pictures-box"},r.a.createElement("span",{id:"title"},"Photos for you"),!1===this.state.isLoading?this.state.picurl.map((function(e,t){return r.a.createElement("a",{href:e,key:t,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"img-holder",src:e,alt:"random_photo"}))})):r.a.createElement("span",{style:{marginBottom:"20px"}},"\ud83d\udcf7Loading images..."))}}]),n}(a.PureComponent)),z=(n(217),n(218),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).inputHandler=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.searchHandler=function(e){e.preventDefault(),a.setState({isLoading:!0,error:!1}),fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+a.state.word).then((function(e){return e.json()})).then((function(e){console.log(e),e.title&&"No Definitions Found"===e.title&&a.setState({error:!0,isLoading:!1}),a.setState({word:"",result:e,isLoading:!1})})).catch((function(e){console.log("inside error"),console.log(e),a.setState({error:!0,isLoading:!1})}))},a.state={word:"",isLoading:!1,error:!1,result:[]},a}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"dictionary"},"Dictionary",r.a.createElement("div",{id:"search"},r.a.createElement("form",{method:"POST",onSubmit:this.searchHandler},r.a.createElement("input",{type:"text",name:"word",placeholder:"Enter the word to search...",value:this.state.word,autoComplete:"off",onChange:this.inputHandler}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{id:"search-button",type:"submit"},"Search")))),!1===this.state.error&&(this.state.isLoading||this.state.result.length>0)?r.a.createElement("div",{id:"search"},!0===this.state.isLoading?"Searching...":this.state.result.length>0?r.a.createElement("div",{id:"search-results"},r.a.createElement("div",{id:"top"},r.a.createElement("span",{id:"word"},this.state.result[0].word)),this.state.result.map((function(e,t){return r.a.createElement("div",{className:"def-box",key:t},e.meanings.map((function(e,t){return r.a.createElement("div",{className:"result",key:t},e.partOfSpeech&&r.a.createElement("span",{className:"type"},e.partOfSpeech),e.definitions.map((function(e,t){return r.a.createElement("div",{className:"defn",key:t},r.a.createElement("span",{className:"definition"},e.definition),(e.example||e.synonyms)&&r.a.createElement("div",{className:"other"},e.example&&r.a.createElement("span",{className:"example"},r.a.createElement("b",null,"Example: "),e.example),e.synonyms&&r.a.createElement("div",{className:"synonyms"},r.a.createElement("b",null,"Synonyms: "),e.synonyms.join(", "))))})))})))}))):null):null,!0===this.state.error&&r.a.createElement("div",{id:"no-def"},"Sorry! No definition found for the given word!"))}}]),n}(a.Component)),B=(n(219),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={isLoading:!0,fact:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/fact").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,fact:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return!1===this.state.isLoading?r.a.createElement("div",{id:"fact-box"},"Fact about number "+this.state.fact.number,r.a.createElement("span",{id:"fact"},this.state.fact.text)):r.a.createElement("div",{id:"fact-box-loading"},"Fetching a \ud83c\udf1ffact for you...")}}]),n}(a.PureComponent)),I=(n(220),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).toggleBox=function(){a.setState({toggleLinkBox:!a.state.toggleLinkBox})},a.inputHandler=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.setLink=function(e){var t=a.state.links;if(0!==a.state.title.length&&0!==a.state.url.length){for(var n=0;n<t.length;n++)if(t[n].title===e)return void alert("This title already exists! Please enter a new title!");t.push({title:a.state.title,url:a.state.url}),localStorage.setItem("quick-links",JSON.stringify(t)),a.setState({links:JSON.parse(localStorage.getItem("quick-links")),title:"",url:"",toggleLinkBox:!1})}else alert("Please fill in all the fields!")},a.deleteLink=function(e){var t=a.state.links;t=t.filter((function(t){return t.title!==e})),localStorage.setItem("quick-links",JSON.stringify(t)),a.setState({links:JSON.parse(localStorage.getItem("quick-links")),title:"",url:"",toggleLinkBox:!1})},a.state={links:localStorage.hasOwnProperty("quick-links")?JSON.parse(localStorage.getItem("quick-links")):[],toggleLinkBox:!1,title:"",url:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"quick-links"},r.a.createElement("div",{id:"add-link",onClick:this.toggleBox},"+ Add a new link"),this.state.toggleLinkBox&&r.a.createElement("div",{id:"add-link-box"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Enter the title",value:this.state.title,maxLength:"50",autoComplete:"off",onChange:this.inputHandler}),r.a.createElement("input",{type:"text",name:"url",placeholder:"Enter the url",value:this.state.url,autoComplete:"off",onChange:this.inputHandler}),r.a.createElement("div",{id:"create-link",onClick:function(){return e.setLink(e.state.title)}},"Create Link")),this.state.links.map((function(t,n){var a=t.title,o=t.url;return r.a.createElement("div",{key:n,className:"link-box"},r.a.createElement("span",{className:"link-title",onClick:function(){window.open(o,"_blank")}},a),r.a.createElement("div",{className:"icons",onClick:function(){return e.deleteLink(a)}},r.a.createElement("svg",{className:"icons-2",width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",fill:"#E74C3C",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))))})))}}]),n}(a.PureComponent)),P=(n(221),n(197)),T=n.n(P),D=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).dateformat=function(e){var t=e.split("T")[0].split("-");return t[2]+"/"+t[1]+"/"+t[0]},a.state={result:[],isLoading:!0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/news/nytnews").then((function(e){return e.json()})).then((function(t){e.setState({result:t.results,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"news-box-nyt"},this.state.isLoading?r.a.createElement("div",{style:{padding:"10px"}},"Loading news..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:T.a,id:"nyt-logo",alt:"nyt-logo"}),this.state.result.slice(0,10).map((function(t,n){return r.a.createElement("div",{key:n,className:"news-list-item-nyt",onClick:function(){window.open(t.url,"_blank")}},r.a.createElement("img",{className:"nyt-img-holder",src:t.multimedia[1].url,alt:"thumbnail"}),r.a.createElement("div",{className:"other-data"},r.a.createElement("span",{className:"nyt-title",title:t.title},t.title),r.a.createElement("div",{className:"pubdateandsubsection"},r.a.createElement("div",{className:"pubdate"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-calendar2-minus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginRight:"5px"}},r.a.createElement("path",{fillRule:"evenodd",d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),r.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"})),e.dateformat(t.published_date)),r.a.createElement("span",{className:"category"},t.subsection))))}))))}}]),n}(a.Component),q=(n(222),n(198)),U=n.n(q),_=n(199),J=new(n.n(_).a)("8125dc9a-3498-4272-bd7c-4568c525f5e3",!0),R=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).dateformat=function(e){var t=e.split("T")[0].split("-");return t[2]+"/"+t[1]+"/"+t[0]},a.state={news:[],isLoading:!0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;J.content.search("world",{"order-by":"newest"}).then((function(t){var n=JSON.parse(t.body);e.setState({news:n.response.results,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"news-box-guardian"},this.state.isLoading?r.a.createElement("div",{style:{padding:"20px"}},"Loading news..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:U.a,id:"guardian-logo",alt:"guardian-logo"}),this.state.news.map((function(t,n){return r.a.createElement("div",{className:"news-list-item-guardian",onClick:function(){return window.open(t.webUrl,"_blank")},key:n},r.a.createElement("span",{className:"title"},t.webTitle),r.a.createElement("div",{className:"other-data"},r.a.createElement("div",{className:"pubdate"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-calendar2-minus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginRight:"5px"}},r.a.createElement("path",{fillRule:"evenodd",d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),r.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"})),e.dateformat(t.webPublicationDate)),r.a.createElement("span",{className:"category"},t.sectionName)))}))))}}]),n}(a.Component),F=function(){var e=Object(c.b)().logout;return r.a.createElement("div",{id:"logout-button",onClick:function(){return e({returnTo:window.location.href})}},"Logout")},G=function(e){var t=Object(a.useState)((new Date).toLocaleTimeString()),n=Object(b.a)(t,2),o=n[0],i=n[1],l=Object(a.useState)(!1),s=Object(b.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)(!1),h=Object(b.a)(d,2),p=h[0],f=h[1];localStorage.hasOwnProperty("bg-type")||localStorage.setItem("bg-type","wallpaper");var g=Object(a.useState)(localStorage.getItem("bg-type")),w=Object(b.a)(g,2),k=w[0],j=w[1];Object(a.useEffect)((function(){"wallpaper"===k?fetch("https://picsum.photos/1920/1080?random=6").then((function(e){document.body.style.backgroundImage='linear-gradient(to top, rgba(23, 32, 42, 0.20), rgba(0, 0, 0, 0.80)), url("'+e.url+'")',f(!0)})):(document.body.style.backgroundImage="none",document.body.style.backgroundColor="#050505")}),[k]);var O=function(){i((new Date).toLocaleTimeString())};Object(a.useEffect)((function(){setInterval(O,1e3)}));var S=Object(c.b)().user;return p||"none"===k?r.a.createElement("div",{id:"bg"},r.a.createElement("div",{id:"titleandlogo"},r.a.createElement("img",{src:y.a,alt:"logo",id:"logo"}),r.a.createElement("span",{id:"title"},"ARMAMENTUM"),r.a.createElement("div",{id:"time"},r.a.createElement("h2",null,o)),r.a.createElement("div",{id:"options-box"},r.a.createElement("img",{src:S.picture,alt:"profile_picture",onClick:function(){var e=document.getElementById("options-list");u?e.style.display="none":(e.style.animation="slide-down 0.25s cubic-bezier(.08,.5,.66,1) forwards",e.style.display="block"),m(!u)}}))),r.a.createElement("div",{id:"holder"},r.a.createElement("div",{id:"options-list"},r.a.createElement("div",{onClick:function(){"wallpaper"===k?(localStorage.setItem("bg-type","none"),j("none")):(localStorage.setItem("bg-type","wallpaper"),j("wallpaper"))}},"wallpaper"===k?"No Wallpaper":"Random Wallpaper"),r.a.createElement("div",null,r.a.createElement(F,null)))),r.a.createElement("div",{id:"body"},r.a.createElement(E,null),r.a.createElement(A,null),r.a.createElement("div",{id:"widget-grid"},r.a.createElement("div",{id:"left-1"},r.a.createElement(M,null),r.a.createElement(I,null),r.a.createElement(z,null),r.a.createElement(R,null),r.a.createElement(V,null)),r.a.createElement("div",{id:"right-1"},r.a.createElement(B,null),r.a.createElement(H,{user:S}),r.a.createElement(D,null))))):r.a.createElement(v,null)},W=function(e){var t=Object(c.b)(),n=t.isLoading,a=t.isAuthenticated;return n?r.a.createElement(v,null):a?r.a.createElement(G,null):r.a.createElement("div",{id:"login-box"},r.a.createElement("img",{id:"logo",src:u.a,alt:"Armamentum_logo"}),"Welcome to Armamentum!",r.a.createElement(l,null),r.a.createElement("span",{id:"details"},"Armamentum is a custom new tab made by Indrajit. It's one of his dream personal projects. ",r.a.createElement("a",{href:"https://thisisindrajit.github.io/portfolio",target:"_blank",rel:"noopener noreferrer"},"Click here")," to view his portfolio!"))};i.a.render(r.a.createElement(c.a,{domain:"dev-crg4pmj4.us.auth0.com",clientId:"KPXUmwO2B80UKf3AQIJqcUvCFrZ0pomS",redirectUri:window.location.href,useRefreshTokens:"true",audience:"https://armamentum-notes"},r.a.createElement(W,null)),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.e67c82e6.chunk.js.map
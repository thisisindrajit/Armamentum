(this.webpackJsonparmamentum=this.webpackJsonparmamentum||[]).push([[0],{193:function(e,t,n){e.exports=n.p+"static/media/logo_black.3b2238ac.png"},194:function(e,t,n){e.exports=n.p+"static/media/loading.58607b10.gif"},195:function(e,t,n){e.exports=n.p+"static/media/logo.0d338a54.png"},197:function(e,t,n){e.exports=n.p+"static/media/guardianlogo.d9a0b4ad.png"},200:function(e,t,n){e.exports=n(443)},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},237:function(e,t){},239:function(e,t){},249:function(e,t){},251:function(e,t){},276:function(e,t){},278:function(e,t){},279:function(e,t){},285:function(e,t){},287:function(e,t){},305:function(e,t){},307:function(e,t){},319:function(e,t){},322:function(e,t){},327:function(e,t){},329:function(e,t){},352:function(e,t){},443:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(192),r=n.n(i),c=n(20),l=function(){var e=Object(c.b)().loginWithRedirect;return o.a.createElement("div",{id:"login-button",onClick:function(){return e()}},"Login")},s=(n(208),n(193)),u=n.n(s),d=n(8),m=n(9),h=n(11),p=n(10),f=n(194),g=n.n(f),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"loading-box"},o.a.createElement("img",{src:g.a,alt:"loading_gif",style:{height:"200px"}}))}}]),n}(a.Component),b=n(59),E=(n(209),n(210),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=(new Date).getHours();return o.a.createElement("div",{id:"content"},o.a.createElement("div",{id:"welcome"},e<12?"Good Morning":e<16?"Good Afternoon":e<21?"Good Evening":"Good Night","!"))}}]),n}(a.Component)),y=n(195),k=n.n(y),w=n(45),O=n(199),j=(n(211),n(107)),S=n.n(j),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).inputHandler=function(t,n,a){var o=Object(O.a)(e.state.notes);o[n][a]=t.target.value,e.setState({notes:o})},e.createHandler=function(){var t={title:e.state.newnotetitle,body:e.state.newnotebody,email:e.props.user.email};(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(n){fetch("https://armamentum.herokuapp.com/notes/postnote",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(t){return fetch("https://armamentum.herokuapp.com/notes",{headers:{Authorization:"Bearer ".concat(t),email:e.props.user.email}}).then((function(e){return e.json()})).then((function(t){var n=[];t.forEach((function(e,t){n[t]=""})),e.setState({notes:t,isLoading:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:n})}))}))}))}))},e.openbox=function(){e.setState({showcreatenewnotebox:!e.state.showcreatenewnotebox})},e.createnoteinputHandler=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.updateHandler=function(t,n){var a=e.props.auth0.getAccessTokenSilently,o=e.state.updateStatus;o[n]="Updating...",e.setState({isUpdating:!0,updateStatus:o});var i={title:e.state.notes[n][2],body:e.state.notes[n][1],email:e.props.user.email};a({audience:"https://armamentum-notes"}).then((function(a){fetch("https://armamentum.herokuapp.com/notes/updatenote/"+t,{method:"PUT",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(i)}).then((function(){o[n]="Updated!",e.setState({isUpdating:!1,updateStatus:o})}))}))},e.deleteHandler=function(t){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(n){fetch("https://armamentum.herokuapp.com/notes/deletenote/"+t,{method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}}).then((function(){(0,e.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(t){return fetch("https://armamentum.herokuapp.com/notes",{headers:{Authorization:"Bearer ".concat(t),email:e.props.user.email}}).then((function(e){return e.json()})).then((function(t){e.setState({notes:t,isLoading:!1,showcreatenewnotebox:!1})}))}))}))}))},e.state={notes:[],isLoading:!0,isUpdating:!1,newnotetitle:"",newnotebody:"",showcreatenewnotebox:!1,updateStatus:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.auth0.getAccessTokenSilently)({audience:"https://armamentum-notes"}).then((function(t){return fetch("https://armamentum.herokuapp.com/notes",{headers:{Authorization:"Bearer ".concat(t),email:e.props.user.email}}).then((function(e){return e.json()})).then((function(t){e.setState({notes:t,isLoading:!1})})).catch((function(e){console.log(e)}))}))}},{key:"componentDidUpdate",value:function(){S()(document.querySelectorAll(".note-title")),S()(document.querySelectorAll(".note-textarea"))}},{key:"render",value:function(){var e=this;return!0===this.state.isLoading?o.a.createElement("div",{id:"loading"},"Loading your \ud83d\uddd2\ufe0fnotes..."):o.a.createElement("div",{id:"notes"},o.a.createElement("div",{id:"create-new-note",onClick:function(){return e.openbox()}},"Create a new note"),this.state.showcreatenewnotebox&&o.a.createElement("div",{id:"create-new-note-box"},o.a.createElement("textarea",{className:"note-title",name:"newnotetitle",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note title",value:this.state.newnotetitle,rows:1}),o.a.createElement("div",{className:"note-body"},o.a.createElement("textarea",{className:"note-textarea",name:"newnotebody",onChange:function(t){return e.createnoteinputHandler(t)},placeholder:"Note body",value:this.state.newnotebody,rows:1})),o.a.createElement("div",{className:"buttons"},o.a.createElement("div",{id:"create-note-button",onClick:function(){return e.createHandler()}},"Create"))),this.state.notes.map((function(t,n){return o.a.createElement("div",{className:"note",key:t[4]["@ref"].id},o.a.createElement("textarea",{className:"note-title",name:"title",onChange:function(t){return e.inputHandler(t,n,2)},defaultValue:t[2],rows:1}),o.a.createElement("div",{className:"note-body"},o.a.createElement("textarea",{className:"note-textarea",name:"body",onChange:function(t){return e.inputHandler(t,n,1)},defaultValue:t[1],rows:1})),o.a.createElement("div",{className:"buttons"},o.a.createElement("div",{className:"update-status"},e.state.updateStatus[n]),o.a.createElement("div",{className:"delete-button",onClick:function(){return e.deleteHandler(t[4]["@ref"].id)}},"Delete"),o.a.createElement("div",{className:"save-button",onClick:function(){return e.updateHandler(t[4]["@ref"].id,n)}},"Save")))})))}}]),n}(a.PureComponent),L=Object(c.c)(x),N=(n(212),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={quote:"",author:""},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(t){e.setState({quote:t.content,author:t.author})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"quote"},o.a.createElement("span",{id:"content"},this.state.quote),""!==this.state.quote&&o.a.createElement("div",{id:"line"}),o.a.createElement("span",{id:"author"},this.state.author))}}]),n}(a.Component)),C=n(108),H=n.n(C),A=n(196),B=(n(214),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={weather:{temp:{value:void 0}},isLoading:!0,url:"",enableLocation:!1},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(A.a)(H.a.mark((function e(){var t=this;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition((function(e){t.setState({url:"https://api.climacell.co/v3/weather/realtime?lat="+e.coords.latitude+"&lon="+e.coords.longitude+"&unit_system=si&fields=temp&apikey=wnyk8nvno3fgvSgIuM8Y9h490KONwYyW",enableLocation:!0})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this;""!==this.state.url&&!0===this.state.isLoading&&fetch(this.state.url).then((function(e){return e.json()})).then((function(t){"API rate limit exceeded"===t.message?e.setState({weather:{temp:{value:void 0}},isLoading:!1}):e.setState({weather:t,isLoading:!1})})).catch((function(t){console.log(t),e.setState({isLoading:!1})}))}},{key:"render",value:function(){return!1===this.state.isLoading&&void 0!==this.state.weather.temp.value?o.a.createElement("div",{id:"weather"},o.a.createElement("div",{id:"city"},"Current temperature in your location"),o.a.createElement("span",{id:"temperature"},Math.round(this.state.weather.temp.value)+"\xb0C")):o.a.createElement("div",{id:"weather"},o.a.createElement("span",null,!0===this.state.isLoading&&!0===this.state.enableLocation?"Loading...":!1===this.state.enableLocation?"Please provide location access!":"Sorry! Some error occurred! Please try again!"))}}]),n}(a.PureComponent)),I=(n(215),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={picgeneratorlinks:["https://picsum.photos/1920/1080?random=1","https://picsum.photos/1920/1080?random=2","https://picsum.photos/1920/1080?random=3","https://picsum.photos/1920/1080?random=4"],picurl:[],isLoading:!0},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=[];this.state.picgeneratorlinks.map((function(e,n){return t[n]=fetch(e)})),Promise.all(t).then((function(t){var n=[];t.map((function(e,t){return n[t]=e.url})),e.setState({isLoading:!1,picurl:n})}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"pictures-box"},o.a.createElement("span",{id:"title"},"Photos for you"),!1===this.state.isLoading?this.state.picurl.map((function(e,t){return o.a.createElement("a",{href:e,key:t,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("img",{className:"img-holder",src:e,alt:"random_photo"}))})):o.a.createElement("span",{style:{marginBottom:"20px"}},"\ud83d\udcf7Loading images..."))}}]),n}(a.PureComponent)),M=(n(216),n(217),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).inputHandler=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.searchHandler=function(e){e.preventDefault(),a.setState({isLoading:!0,error:!1}),fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+a.state.word).then((function(e){return e.json()})).then((function(e){console.log(e),e.title&&"No Definitions Found"===e.title&&a.setState({error:!0,isLoading:!1}),a.setState({word:"",result:e,isLoading:!1})})).catch((function(e){console.log("inside error"),console.log(e),a.setState({error:!0,isLoading:!1})}))},a.state={word:"",isLoading:!1,error:!1,result:[]},a}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"dictionary"},"Dictionary",o.a.createElement("div",{id:"search"},o.a.createElement("form",{method:"POST",onSubmit:this.searchHandler},o.a.createElement("input",{type:"text",name:"word",placeholder:"Enter the word to search...",value:this.state.word,autoComplete:"off",onChange:this.inputHandler}),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{id:"search-button",type:"submit"},"Search")))),!1===this.state.error&&(this.state.isLoading||this.state.result.length>0)?o.a.createElement("div",{id:"search"},!0===this.state.isLoading?"Searching...":this.state.result.length>0?o.a.createElement("div",{id:"search-results"},o.a.createElement("div",{id:"top"},o.a.createElement("span",{id:"word"},this.state.result[0].word)),this.state.result.map((function(e,t){return o.a.createElement("div",{className:"def-box",key:t},e.meanings.map((function(e,t){return o.a.createElement("div",{className:"result",key:t},e.partOfSpeech&&o.a.createElement("span",{className:"type"},e.partOfSpeech),e.definitions.map((function(e,t){return o.a.createElement("div",{className:"defn",key:t},o.a.createElement("span",{className:"definition"},e.definition),(e.example||e.synonyms)&&o.a.createElement("div",{className:"other"},e.example&&o.a.createElement("span",{className:"example"},o.a.createElement("b",null,"Example: "),e.example),e.synonyms&&o.a.createElement("div",{className:"synonyms"},o.a.createElement("b",null,"Synonyms: "),e.synonyms.join(", "))))})))})))}))):null):null,!0===this.state.error&&o.a.createElement("div",{id:"no-def"},"Sorry! No definition found for the given word!"))}}]),n}(a.Component)),P=(n(218),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoading:!0,fact:{}},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://armamentum.herokuapp.com/fact").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,fact:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return!1===this.state.isLoading?o.a.createElement("div",{id:"fact-box"},"Fact about number "+this.state.fact.number,o.a.createElement("span",{id:"fact"},this.state.fact.text)):o.a.createElement("div",{id:"fact-box-loading"},"Fetching a \ud83c\udf1ffact for you...")}}]),n}(a.PureComponent)),T=(n(219),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).toggleBox=function(){a.setState({toggleLinkBox:!a.state.toggleLinkBox})},a.inputHandler=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.setLink=function(e){var t=a.state.links;if(0!==a.state.title.length&&0!==a.state.url.length){for(var n=0;n<t.length;n++)if(t[n].title===e)return void alert("This title already exists! Please enter a new title!");t.push({title:a.state.title,url:a.state.url}),localStorage.setItem("quick-links",JSON.stringify(t)),a.setState({links:JSON.parse(localStorage.getItem("quick-links")),title:"",url:"",toggleLinkBox:!1})}else alert("Please fill in all the fields!")},a.deleteLink=function(e){var t=a.state.links;t=t.filter((function(t){return t.title!==e})),localStorage.setItem("quick-links",JSON.stringify(t)),a.setState({links:JSON.parse(localStorage.getItem("quick-links")),title:"",url:"",toggleLinkBox:!1})},a.state={links:localStorage.hasOwnProperty("quick-links")?JSON.parse(localStorage.getItem("quick-links")):[],toggleLinkBox:!1,title:"",url:""},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"quick-links"},o.a.createElement("div",{id:"add-link",onClick:this.toggleBox},"+ Add a new link"),this.state.toggleLinkBox&&o.a.createElement("div",{id:"add-link-box"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Enter the title",value:this.state.title,maxLength:"50",autoComplete:"off",onChange:this.inputHandler}),o.a.createElement("input",{type:"text",name:"url",placeholder:"Enter the url",value:this.state.url,autoComplete:"off",onChange:this.inputHandler}),o.a.createElement("div",{id:"create-link",onClick:function(){return e.setLink(e.state.title)}},"Create Link")),this.state.links.map((function(t,n){var a=t.title,i=t.url;return o.a.createElement("div",{key:n,className:"link-box"},o.a.createElement("span",{className:"link-title",onClick:function(){window.open(i,"_blank")}},a),o.a.createElement("div",{className:"icons",onClick:function(){return e.deleteLink(a)}},o.a.createElement("svg",{className:"icons-2",width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",fill:"#E74C3C",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))))})))}}]),n}(a.PureComponent)),z=(n(220),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"news-box-nyt"},"This is the New York Times Component")}}]),n}(a.Component)),D=(n(221),n(197)),V=n.n(D),q=n(198),U=new(n.n(q).a)("8125dc9a-3498-4272-bd7c-4568c525f5e3",!0),J=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).dateformat=function(e){var t=e.split("T")[0].split("-");return t[2]+"/"+t[1]+"/"+t[0]},a.state={news:[],isLoading:!0},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;U.content.search("world",{"order-by":"newest"}).then((function(t){var n=JSON.parse(t.body);e.setState({news:n.response.results,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"news-box-guardian"},this.state.isLoading?o.a.createElement("div",{style:{padding:"20px"}},"Loading news..."):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:V.a,id:"guardian-logo",alt:"guardian-logo"}),this.state.news.map((function(t,n){return o.a.createElement("div",{className:"news-list-item-guardian",onClick:function(){return window.open(t.webUrl,"_blank")},key:n},o.a.createElement("span",{className:"title"},t.webTitle),o.a.createElement("div",{className:"other-data"},o.a.createElement("div",{className:"pubdate"},o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-calendar2-minus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginRight:"5px"}},o.a.createElement("path",{fillRule:"evenodd",d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),o.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"})),e.dateformat(t.webPublicationDate)),o.a.createElement("span",{className:"category"},t.sectionName)))}))))}}]),n}(a.Component),_=function(){var e=Object(c.b)().logout;return o.a.createElement("div",{id:"logout-button",onClick:function(){return e({returnTo:window.location.href})}},"Logout")},R=function(e){var t=Object(a.useState)((new Date).toLocaleTimeString()),n=Object(b.a)(t,2),i=n[0],r=n[1],l=Object(a.useState)(!1),s=Object(b.a)(l,2),u=s[0],d=s[1],m=Object(a.useState)(!1),h=Object(b.a)(m,2),p=h[0],f=h[1];localStorage.hasOwnProperty("bg-type")||localStorage.setItem("bg-type","wallpaper");var g=Object(a.useState)(localStorage.getItem("bg-type")),y=Object(b.a)(g,2),w=y[0],O=y[1];Object(a.useEffect)((function(){"wallpaper"===w?fetch("https://picsum.photos/1920/1080?random=6").then((function(e){document.body.style.backgroundImage='linear-gradient(to top, rgba(23, 32, 42, 0.20), rgba(0, 0, 0, 0.80)), url("'+e.url+'")',f(!0)})):(document.body.style.backgroundImage="none",document.body.style.backgroundColor="#050505")}),[w]);var j=function(){r((new Date).toLocaleTimeString())};Object(a.useEffect)((function(){setInterval(j,1e3)}));var S=Object(c.b)().user;return p||"none"===w?o.a.createElement("div",{id:"bg"},o.a.createElement("div",{id:"titleandlogo"},o.a.createElement("img",{src:k.a,alt:"logo",id:"logo"}),o.a.createElement("span",{id:"title"},"ARMAMENTUM"),o.a.createElement("div",{id:"time"},o.a.createElement("h2",null,i)),o.a.createElement("div",{id:"options-box"},o.a.createElement("img",{src:S.picture,alt:"profile_picture",onClick:function(){var e=document.getElementById("options-list");u?e.style.display="none":(e.style.animation="slide-down 0.25s cubic-bezier(.08,.5,.66,1) forwards",e.style.display="block"),d(!u)}}))),o.a.createElement("div",{id:"holder"},o.a.createElement("div",{id:"options-list"},o.a.createElement("div",{onClick:function(){"wallpaper"===w?(localStorage.setItem("bg-type","none"),O("none")):(localStorage.setItem("bg-type","wallpaper"),O("wallpaper"))}},"wallpaper"===w?"No Wallpaper":"Random Wallpaper"),o.a.createElement("div",null,o.a.createElement(_,null)))),o.a.createElement("div",{id:"body"},o.a.createElement(E,null),o.a.createElement(N,null),o.a.createElement("div",{id:"widget-grid"},o.a.createElement("div",{id:"left-1"},o.a.createElement(B,null),o.a.createElement(T,null),o.a.createElement(M,null),o.a.createElement(J,null),o.a.createElement(I,null)),o.a.createElement("div",{id:"right-1"},o.a.createElement(P,null),o.a.createElement(z,null),o.a.createElement(L,{user:S}))))):o.a.createElement(v,null)},F=function(e){var t=Object(c.b)(),n=t.isLoading,a=t.isAuthenticated;return n?o.a.createElement(v,null):a?o.a.createElement(R,null):o.a.createElement("div",{id:"login-box"},o.a.createElement("img",{id:"logo",src:u.a,alt:"Armamentum_logo"}),"Welcome to Armamentum!",o.a.createElement(l,null),o.a.createElement("span",{id:"details"},"Armamentum is a custom new tab made by Indrajit. It's one of his dream personal projects. ",o.a.createElement("a",{href:"https://thisisindrajit.github.io/portfolio",target:"_blank",rel:"noopener noreferrer"},"Click here")," to view his portfolio!"))};r.a.render(o.a.createElement(c.a,{domain:"dev-crg4pmj4.us.auth0.com",clientId:"KPXUmwO2B80UKf3AQIJqcUvCFrZ0pomS",redirectUri:window.location.href,audience:"https://armamentum-notes"},o.a.createElement(F,null)),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.74562ce3.chunk.js.map
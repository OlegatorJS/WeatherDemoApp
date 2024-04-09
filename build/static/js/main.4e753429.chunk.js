(this.webpackJsonpWeatherDemoApp=this.webpackJsonpWeatherDemoApp||[]).push([[0],{401:function(e,t,a){},409:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);a(221),a(231);var n=a(0),r=a.n(n),c=a(62),s=a(106),o=a.n(s),i=(a(401),a(11)),u=a(86),l=a(21),d=a(16);var b=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"404 - Not Found"}),Object(d.jsx)("h3",{children:"The page you're looking for doesn't exist."}),Object(d.jsx)(u.b,{to:"/",children:"Go To Home Page"})]})},p=a(219),j=a(35),f=a.n(j);function O(e){return Math.round(e)}var h,m,x=a(3),v=Object(i.a)({margin:0,fontSize:"80px",borderTopColor:"white",fontFamily:"'Fjalla One', sans-serif"}),g=function(e){var t=e.value;return Object(x.a)("h1",{css:v,children:"".concat(O(t),"\xb0")})},y=Object(i.a)({display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}),w=function(e){var t=e.color,a=e.type,n=e.size,r=e.resizeClear,c=e.className,s=e.temperature;return Object(x.b)("div",{css:y,children:[Object(x.a)(f.a,{className:c,color:t,type:a,size:n,resizeClear:r}),Object(x.a)(g,{value:s})]})};w.defaultProps={className:"",resizeClear:!0},(m=h||(h={}))[m.Clear=j.SkyconsType.CLEAR_DAY]="Clear",m[m.Clouds=j.SkyconsType.CLOUDY]="Clouds",m[m.Tornado=j.SkyconsType.WIND]="Tornado",m[m.Thunderstorm=j.SkyconsType.RAIN]="Thunderstorm",m[m.Rain=j.SkyconsType.RAIN]="Rain",m[m.Drizzle=j.SkyconsType.SLEET]="Drizzle",m[m.Snow=j.SkyconsType.SNOW]="Snow",m[m.Smoke=j.SkyconsType.FOG]="Smoke",m[m.Haze=j.SkyconsType.FOG]="Haze",m[m.Dust=j.SkyconsType.FOG]="Dust",m[m.Fog=j.SkyconsType.FOG]="Fog";var T=r.a.memo(w);function S(e){var t="";return e>=35?t="hot":e>=20&&e<35?t="warm":e>=5&&e<20?t="moderate":e<5&&(t="cold"),t}function C(e){var t="wi wi-small-craft-advisory";return e>=30&&e<=88?t="wi wi-gale-warning":e>=89&&e<=102?t="wi wi-storm-warning":e>102&&(t="wi wi-hurricane-warning"),t}var k=Object(i.a)({fontSize:30}),N=function(e){var t=e.name;return Object(x.a)("i",{className:t,css:k})},D=r.a.memo(N),L=Object(i.a)({display:"flex",alignItems:"center"}),A=Object(i.a)({fontSize:"36px",fontFamily:"'Fjalla One', sans-serif",marginLeft:"10px",display:"flex",alignItems:"center",gap:"10px"}),z=Object(i.a)({fontSize:"16px"}),E=function(e){var t=e.value,a=e.unit,n=e.icon,r=e.label;return Object(x.b)("div",{css:L,children:[Object(x.a)(D,{name:n}),Object(x.b)("div",{css:A,children:[Object(x.a)("span",{css:z,children:r}),O(t),Object(x.a)("span",{css:z,children:a})]})]})},F=Object(i.a)({display:"flex",justifyContent:"center",marginTop:"10px"}),R=Object(i.a)({borderTop:"1px solid white",display:"flex",flexDirection:"column",justifyContent:"center",minWidth:"200px"}),I=new Date,P=I.getDate(),_=I.getMonth()+1,B=I.getFullYear(),G=function(e){var t=e.humidity,a=e.windSpeed,n=e.pressure,r=3.6*a;return Object(x.a)("div",{css:F,children:Object(x.b)("div",{css:R,children:[Object(x.a)(E,{value:t,unit:"%",icon:"wi wi-raindrop",label:"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c:"}),Object(x.a)(E,{value:r,unit:"\u043c/\u0441",icon:C(r),label:"\u0412\u0456\u0442\u0435\u0440:"}),Object(x.a)(E,{value:n,unit:"\u0433/\u041f\u0430",icon:"wi wi-alien",label:"\u0422\u0438\u0441\u043a:"}),Object(x.b)("span",{children:["\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e \u043d\u0430 ","".concat(P,".").concat(_,".").concat(B)]})]})})},W=Object(i.a)({color:"white"}),H=Object(i.a)({margin:0,marginBottom:"10px",fontFamily:"'Share Tech Mono', monospace",fontSize:"2em"}),U=function(e){var t=e.weatherData;return t&&Object(x.b)("div",{css:W,children:[Object(x.a)("h1",{css:H,children:t.name.toUpperCase()}),Object(x.a)(T,{color:"white",type:h[t.weather[0].main],temperature:t.main.temp,size:220}),Object(x.a)(G,{humidity:t.main.humidity,windSpeed:t.wind.speed,pressure:t.main.pressure})]})},M=Object(i.a)({paddingTop:"8px",paddingBottom:"8px",border:"1px solid",borderColor:"gray",borderRadius:"4px",boxShadow:"0 2px 4px 0px gray",cursor:"pointer","&:disabled":{cursor:"not-allowed"}}),J=function(e){var t=e.className,a=e.disabled,n=e.text,r=e.onClick;return Object(x.a)("button",{css:M,type:"submit",className:t,onClick:r,disabled:a,children:n})};J.defaultProps={className:"",disabled:!1};var Y=J,q=Object(i.a)({paddingTop:"8px",paddingBottom:"8px"}),Q=function(e){var t=e.className,a=e.type,n=e.placeholder,r=e.value,c=e.disabled,s=e.onChange;return Object(x.a)("input",{className:t,css:q,type:a,placeholder:n,value:r,disabled:c,onChange:s})};Q.defaultProps={type:"text",disabled:!1,className:""};var Z=Q,K=Object(i.a)({paddingTop:"20px",marginBottom:"5%",searchBarMediaQuery:"\n  @media only screen and (min-width: 600px) {\n    margin-bottom: 2%;\n  }\n"}),V=Object(i.a)({marginLeft:"10px",marginTop:"4px"}),X=function(e){var t=e.className,a=e.searchText,n=e.placeholder,r=e.onSearchTextChange,c=e.buttonText,s=e.onButtonClick;return Object(x.b)("div",{css:K,className:t,children:[Object(x.a)(Z,{placeholder:n,value:a,onChange:r}),Object(x.a)(Y,{text:c,css:V,disabled:!a,onClick:s})]})};X.defaultProps={className:""};var $,ee=X,te=a(217),ae=Object(i.a)({display:"flex",alignItems:"center",justifyContent:"center"}),ne=Object(i.b)($||($=Object(te.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),re=Object(i.a)({animation:"".concat(ne," 1s linear infinite"),transform:"translateZ(0)",border:"8px solid gray",borderLeft:"8px solid skyblue",background:"transparent",width:"100px",height:"100px",borderRadius:"50%"}),ce=function(e){var t=e.containerClassName,a=e.className;return e.isLoading?Object(x.b)("div",{css:ae,className:t,children:[Object(x.a)("div",{css:re,className:a}),";"]}):null};ce.defaultProps={containerClassName:"",className:""};var se=ce,oe=function(e){return e.error&&Object(d.jsx)("h2",{children:"An Error Occurred. Please try again."})},ie="weather",ue="".concat(ie,"/GET_WEATHER_DATA"),le="".concat(ie,"/GET_WEATHER_DATA_SUCCESS"),de="".concat(ie,"/GET_WEATHER_DATA_FAILURE"),be=function(e){return{type:le,payload:e}},pe=function(){return{type:de}},je=(a(409),Object(i.a)({height:"100%",overflowY:"scroll"})),fe=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],s=Object(l.g)(),o=Object(l.f)(),i=Object(c.c)((function(e){return e.weather.data})),u=Object(c.c)((function(e){return e.weather.isLoading})),d=Object(c.c)((function(e){return e.weather.error})),b=Object(c.b)();Object(n.useEffect)((function(){var e=new URLSearchParams(s.search).get("city");b(function(e){return{type:ue,payload:e}}(e))}),[s,b]);return Object(x.b)("div",{css:je,className:i&&S(i.main.temp),children:[Object(x.a)(ee,{searchText:a,buttonText:"\u041f\u043e\u0448\u0443\u043a",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e",onSearchTextChange:function(e){r(e.target.value)},onButtonClick:function(){o.push("?city=".concat(a))}}),Object(x.a)(se,{isLoading:u}),Object(x.a)(oe,{error:d}),Object(x.a)(U,{weatherData:i})]})},Oe=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:fe}),Object(d.jsx)(l.a,{component:b})]})})},he=Object(i.a)({textAlign:"center",position:"fixed",padding:0,margin:0,top:0,left:0,width:"100%",height:"100%"});var me=function(){return Object(x.a)("div",{css:he,children:Object(x.a)(Oe,{})})},xe=a(48),ve=a(220),ge=a(42),ye={data:null,isLoading:!0,error:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(ge.a)({},ye);case le:return Object(ge.a)(Object(ge.a)({},e),{},{data:t.payload,error:!1,isLoading:!1});case de:return Object(ge.a)(Object(ge.a)({},e),{},{data:null,error:!0,isLoading:!1});default:return e}},Te=Object(xe.c)({weather:we}),Se=a(22),Ce=a.n(Se),ke=a(23),Ne=a(141),De=a(218),Le=a.n(De).a.create({baseURL:"https://api.openweathermap.org/data/2.5/weather",params:{appid:"751192ddfcb19ba8f5244d4803b1f995"}}),Ae=function(){var e=Object(Ne.a)(Ce.a.mark((function e(t){var a,n;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="?q=".concat(t,"&units=metric"),e.next=4,Le.get(a);case 4:return n=e.sent,e.abrupt("return",Object(ge.a)(Object(ge.a)({},n),{},{success:n&&n.status>=200&&n.status<300}));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(Ne.a)(Ce.a.mark((function e(t,a){var n,r;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="?lat=".concat(t,"&lon=").concat(a,"&units=metric"),e.next=4,Le.get(n);case 4:return r=e.sent,e.abrupt("return",Object(ge.a)(Object(ge.a)({},r),{},{success:r&&r.status>=200&&r.status<300}));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}();var Ee={saveData:function(e,t){try{return localStorage.setItem(e.toLowerCase(),t),{success:!0}}catch(a){return{success:!1,error:a}}},loadData:function(e){try{return{cachedData:localStorage.getItem(e.toLowerCase()),success:!0}}catch(t){return{success:!1,error:t}}},removeData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e6;try{return setTimeout((function(){localStorage.removeItem(e.toLowerCase())}),t),{success:!0}}catch(a){return{success:!1,error:a}}}},Fe=Ee,Re={getCurrentLocation:function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){return e(t.coords)}),(function(e){return t(e)}))}))}},Ie=Ce.a.mark(We),Pe=Ce.a.mark(He),_e=Ce.a.mark(Ue),Be=Ce.a.mark(Me),Ge=Ce.a.mark(Je);function We(){var e,t,a;return Ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ke.b)(Re.getCurrentLocation);case 2:return e=n.sent,t=e.latitude,a=e.longitude,n.abrupt("return",{latitude:t,longitude:a});case 6:case"end":return n.stop()}}),Ie)}function He(e){return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.success){t.next=4;break}return t.next=3,Object(ke.c)(pe());case 3:return t.abrupt("return");case 4:return t.next=6,Object(ke.c)(be(e.data));case 6:return t.next=8,Object(ke.b)(Fe.saveData,e.data.name,JSON.stringify(e.data));case 8:return t.next=10,Object(ke.b)(Fe.removeData,e.data.name);case 10:case"end":return t.stop()}}),Pe)}function Ue(){var e,t,a,n;return Ce.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(ke.b)(We);case 3:return e=r.sent,t=e.latitude,a=e.longitude,r.next=8,Object(ke.b)(ze,t,a);case 8:return n=r.sent,r.next=11,Object(ke.b)(He,n);case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,Object(ke.c)(pe());case 17:case"end":return r.stop()}}),_e,null,[[0,13]])}function Me(e){var t,a,n;return Ce.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.payload){r.next=4;break}return r.next=3,Object(ke.b)(Ue);case 3:case 11:return r.abrupt("return");case 4:return r.next=6,Object(ke.b)(Fe.loadData,e.payload);case 6:if(t=r.sent,!(a=t.cachedData)){r.next=12;break}return r.next=11,Object(ke.c)(be(JSON.parse(a)));case 12:return r.next=14,Object(ke.b)(Ae,e.payload);case 14:return n=r.sent,r.next=17,Object(ke.b)(He,n);case 17:case"end":return r.stop()}}),Be)}function Je(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.d)(ue,Me);case 2:case"end":return e.stop()}}),Ge)}var Ye=Ce.a.mark(qe);function qe(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.a)([Je()]);case 2:case"end":return e.stop()}}),Ye)}var Qe=Object(ve.a)(),Ze=Object(xe.e)(Te,Object(xe.a)(Qe));Qe.run(qe);var Ke=Ze;o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(c.a,{store:Ke,children:Object(d.jsx)(me,{})})}),document.getElementById("root"))}},[[429,1,2]]]);
//# sourceMappingURL=main.4e753429.chunk.js.map
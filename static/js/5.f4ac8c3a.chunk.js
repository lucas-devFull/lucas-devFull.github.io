(this.webpackJsonplogic_advanced=this.webpackJsonplogic_advanced||[]).push([[5],{40:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));var n=t(9),r=t(7),o=t.n(r),l=t(0),i=t.n(l);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function f(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return a=e,(a-=0)===a?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,a){return a?a.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var a}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,a){var t,n=a.indexOf(":"),r=b(a.slice(0,n)),o=a.slice(n+1).trim();return r.startsWith("webkit")?e[(t=r,t.charAt(0).toUpperCase()+t.slice(1))]=o:e[r]=o,e}),{})}var g=!1;try{g=!0}catch(N){}function v(e){return null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?s({},e,a):{}}function y(e){var a=e.forwardedRef,t=d(e,["forwardedRef"]),r=t.icon,o=t.mask,l=t.symbol,i=t.className,c=t.title,m=v(r),b=h("classes",[].concat(f(function(e){var a,t=e.spin,n=e.pulse,r=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,c=e.flip,m=e.size,u=e.rotation,d=e.pull,f=(s(a={"fa-spin":t,"fa-pulse":n,"fa-fw":r,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(m),"undefined"!==typeof m&&null!==m),s(a,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),s(a,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),s(a,"fa-swap-opacity",e.swapOpacity),a);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(t)),f(i.split(" ")))),p=h("transform","string"===typeof t.transform?n.c.transform(t.transform):t.transform),N=h("mask",v(o)),O=Object(n.a)(m,u({},b,{},p,{},N,{symbol:l,title:c}));if(!O)return function(){var e;!g&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var k=O.abstract,j={ref:a};return Object.keys(t).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(j[e]=t[e])})),E(k[0],j)}y.displayName="FontAwesomeIcon",y.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(a,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t)return t;var r=(t.children||[]).map((function(t){return e(a,t)})),o=Object.keys(t.attributes||{}).reduce((function(e,a){var n=t.attributes[a];switch(a){case"class":e.attrs.className=n,delete t.attributes.class;break;case"style":e.attrs.style=p(n);break;default:0===a.indexOf("aria-")||0===a.indexOf("data-")?e.attrs[a.toLowerCase()]=n:e.attrs[b(a)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=d(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},i),a.apply(void 0,[t.tag,u({},o.attrs,{},c)].concat(f(r)))}.bind(null,i.a.createElement)},41:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(38),r=t(39),o=t(55),l=t.n(o),i=(t(47),function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"alertMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){},c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};l()({title:e,text:a,icon:t,className:n,buttons:r,onConfirm:function(){return o}}).then((function(e){"Sim"!=e&&"Ok"!=e||i(c)}))}}]),e}())},42:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(38),r=t(39),o=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"setStorage",value:function(e){localStorage.setItem(btoa("statusUser"),btoa(e.status)),localStorage.setItem(btoa("dataUser"),btoa(JSON.stringify(e.dados)))}},{key:"getStorage",value:function(){var e=atob(localStorage.getItem(btoa("dataUser")));return JSON.parse(e)}},{key:"clearStorage",value:function(){localStorage.clear()}}]),e}()},45:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(38),r=t(39),o=t(42),l=function(){function e(a){Object(n.a)(this,e),this.token=void 0==a||null==a,this.baseURL="https://b1085189c6b5.ngrok.io",this.token&&(this.dataUserLogged=o.a.getStorage())}return Object(r.a)(e,[{key:"getHeaders",value:function(){var e=new Headers;return this.token&&e.append("Authorization","".concat(this.dataUserLogged.token)),e}},{key:"get",value:function(e){var a={method:"GET",headers:this.getHeaders()};return fetch("".concat(this.baseURL,"/").concat(e),a)}},{key:"post",value:function(e,a){var t={method:"POST",headers:this.getHeaders(),body:a};return fetch("".concat(this.baseURL,"/").concat(e),t)}},{key:"delete",value:function(e){var a={method:"DELETE",headers:this.getHeaders()};return fetch("".concat(this.baseURL,"/").concat(e),a)}}]),e}()},46:function(e,a,t){"use strict";var n=t(38),r=t(39),o=t(44),l=t(43),i=(t(48),t(0)),c=t.n(i),s=t(42),m=t(40),u=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},c.a.createElement(m.a,{icon:"users"}),"\xa0Professores")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},c.a.createElement(m.a,{icon:"list-ul"}),"\xa0Exerc\xedcos Complementares")))},d=t(14),f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/teacher"},c.a.createElement(m.a,{icon:"user-edit"}),"\xa0Gerenciar Professores")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"modulos"},c.a.createElement(m.a,{icon:"user-edit"}),"\xa0Gerenciar Modulos")))},b=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"alunos"},c.a.createElement(m.a,{icon:"user-graduate"}),"\xa0Alunos")),"0"===e.props.tipo?c.a.createElement(f,null):"",c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/materias"},c.a.createElement(m.a,{icon:"user-edit"}),"\xa0Gerenciar Materias")))},p=t(1),g=t(49),v=t.n(g),h=(t(50),t(45)),y=(t(41),function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={valoresEdicao:{}},r.dataUserLogged=s.a.getStorage(),r.requestExecutor=new h.a,r}return Object(r.a)(t,[{key:"trocaImagem",value:function(e){return console.log(e),document.getElementsByClassName(".imagem_usuario"),console.log(document.querySelectorAll(".imagem_perfil")[0].setAttribute("src",e.name))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"modal fade",id:"modalPerfil","data-backdrop":"static","data-keyboard":"false",tabIndex:-1,"aria-labelledby":"modalPerfilLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg",id:"modal_perfil","data-id":this.dataUserLogged.id,"data-id-tipo-usuario":this.dataUserLogged.tipo},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"modalPerfilLabel"},"Perfil Usu\xe1rio"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},c.a.createElement(m.a,{icon:"times"})))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group formata_imagem"},c.a.createElement("div",{className:"margin"},c.a.createElement("div",{className:"panel panel-default"},c.a.createElement("div",{className:"imagem_usuario"},c.a.createElement("img",{className:"imagem_perfil",src:"data:image/png;base64,"+this.dataUserLogged.imagem,alt:" Perfil Usu\xe1rio"})),c.a.createElement("div",{className:"input_imagem_usuario"},c.a.createElement("span",{className:"file_imagem"},c.a.createElement(m.a,{icon:"camera"})),c.a.createElement("input",{type:"file",name:"",id:"img_usuario",accept:"image/*",onChange:function(a){return e.trocaImagem(a.target.files[0])}}))))),c.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12"},c.a.createElement("input",{type:"text",value:this.dataUserLogged.descricao_usuario||"",className:"modalPerfil form-control",name:"descricao_usuario",placeholder:"Nome Completo",onChange:function(e){}}),c.a.createElement("input",{type:"text",value:this.dataUserLogged.nick_usuario||"",className:"modalPerfil form-control",name:"nick_usuario",placeholder:"Apelido",onChange:function(e){}}),c.a.createElement("input",{type:"email",value:this.dataUserLogged.email_usuario||"",className:"modalPerfil form-control",name:"email_usuario",placeholder:"Email",onChange:function(e){}}),c.a.createElement("input",{type:"password",value:this.dataUserLogged.senha_usuario||"",className:"modalPerfil form-control",name:"senha_usuario",placeholder:"Digite uma senha",onChange:function(e){}}))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Fechar"),c.a.createElement("button",{type:"button",className:"btn btn-success"},"Salvar Altera\xe7\xf5es"))))))}}]),t}(i.Component)),E=Object(p.g)(y),N=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).imagem=null,r}return Object(r.a)(t,[{key:"logout",value:function(){this.props.history.push("/"),s.a.clearStorage()}},{key:"componentDidMount",value:function(){var e=s.a.getStorage("dataUser");return this.imagem=e.imagem,"1"===e.tipo||"0"===e.tipo?c.a.createElement(b,{props:e}):c.a.createElement(u,null)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{imagem:this.imagem}),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark nav-bg"},c.a.createElement("a",{className:"navbar-brand ml-3",href:"#"},"Logic Advanced"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{to:"/dashboard",className:"nav-link"},c.a.createElement(m.a,{icon:"home"}),"\xa0Home")),this.componentDidMount()),c.a.createElement("div",{className:"botoes_sair_perfil"},c.a.createElement("div",{className:"div_img_header"},c.a.createElement("img",{className:"img_header","data-toggle":"modal","data-target":"#modalPerfil",src:""!=this.imagem?"data:image/png;base64,"+this.imagem:v.a,alt:""})),c.a.createElement("button",{className:"btn btn-danger my-2 my-sm-0",type:"button",onClick:this.logout.bind(this)},"Sair")))))}}]),t}(i.Component);a.a=Object(p.g)(N)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){e.exports=t.p+"static/media/user.2751f7b9.jpg"},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return d}));t(52);var n=t(0),r=t.n(n),o=t(40);var l=function(e){var a=e.content,t=e.id_modal,n=e.imagem,l=e.ClickList,i=e.ClickDelete,c=e.dataTarget,s=e.dataToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-auto col_padrao"},r.a.createElement("div",{className:"btn_delete_card",onClick:i},r.a.createElement(o.a,{icon:"trash-alt"})),r.a.createElement("div",{onClick:function(e){return a=t,n=l,document.querySelectorAll("#modal")[0].setAttribute("data-id",a),void n();var a,n},"data-id":t,className:"component_card card_modal","data-toggle":s,"data-target":c},r.a.createElement("div",{className:"div_img_card"},null!=n?r.a.createElement("img",{src:"data:image/png;base64,"+n,className:"img_card img-responsive",alt:"Card image cap"}):r.a.createElement("i",{className:"iconDash"},r.a.createElement(o.a,{icon:"portrait"}))),r.a.createElement("div",{className:"descricao_card"},r.a.createElement("h3",null," ",a)))))},i=(t(41),t(38)),c=t(39),s=t(44),m=t(43),u=(t(53),t(45)),d=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).executeRequestor=new u.a,n}return Object(c.a)(t,[{key:"setNullValoresInput",value:function(){document.querySelectorAll(".elementos").forEach((function(e){e.value=""})),document.querySelectorAll("#modal")[0].setAttribute("data-id","")}},{key:"handleSubmit",value:function(){var e=this.props.getDadosForm();console.log(e)}},{key:"render",value:function(){var e=this.props,a=e.btnName,t=e.title;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-light","data-toggle":"modal","data-target":"#staticBackdrop",onClick:this.setNullValoresInput.bind()},a),r.a.createElement("div",{className:"modal fade",id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabIndex:-1,"aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-lg",id:"modal","data-id":""},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"staticBackdropLabel"},t),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},r.a.createElement(o.a,{icon:"times"})))),r.a.createElement("div",{className:"modal-body"},this.props.children),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Fechar"),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.handleSubmit.bind(this)},"Cadastar"))))))}}]),t}(n.Component);t(46)},69:function(e,a,t){},70:function(e,a){},83:function(e,a,t){"use strict";t.r(a);var n=t(38),r=t(39),o=t(44),l=t(43),i=t(0),c=t.n(i),s=(t(69),t(51),t(1)),m=t(46),u=t(54),d=t(40),f=t(70),b=t.n(f),p=t(41),g=t(45),v=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={list:[]},r.requestExecutor=new g.a,r}return Object(r.a)(t,[{key:"listMaterias",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.requestExecutor.get("materias".concat(!1===a?"":"?id_materia=".concat(a))).then((function(e){return e.json()})).then((function(t){t.status&&(a?console.log(t):e.setState({list:t.dados}))})).catch((function(e){return console.log("error",e)}))}},{key:"setMateria",value:function(e){b.a.setMateria(this.dataUserLogged.token,e)}},{key:"deleteMateria",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e>0?p.a.alertMessage("Aten\xe7\xe3o!","Voce deseja realmente excluir estes registros?","warning","",{"N\xe3o":{closeModal:!0,className:"button_red"},Sim:{closeModal:!1,className:"button_info"}},{},(function(a){a.requestExecutor.delete("materias".concat(!1===e?"":"?id_materia=".concat(e))).then((function(e){return e.json()})).then((function(e){e.status&&(p.a.alertMessage("Sucesso !",e.msg,"success","",{Ok:{className:"button_info"}}),a.listMaterias())}))}),this):p.a.alertMessage("Erro !","ErroaAo deletar registro","warning")}},{key:"_bodyModal",value:function(){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("input",{type:"text",className:"elementos form-control mt-3",name:"descricao_modulo",placeholder:"Descricao Modulo"})),c.a.createElement("div",{className:"col-md-4  my-1 d-flex align-items-end"},c.a.createElement("div",{className:"custom-control custom-checkbox mr-sm-2"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input elementos",id:"customControlAutosizing"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customControlAutosizing"},"Modulo Inicial")))))}},{key:"componentDidMount",value:function(){this.listMaterias()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container__body"},c.a.createElement(m.a,null),c.a.createElement("div",{className:"p-4 d-flex justify-content-end "},c.a.createElement(u.b,{btnName:c.a.createElement(d.a,{icon:"user-plus",size:"2x"}),title:"Cadastro de Materias",body:this._bodyModal(),url:"Materias"})),c.a.createElement("div",{className:"row row_card"},this.state.list.map((function(a){return c.a.createElement(u.a,{content:a.descricao_materia,id:a.id_materia,key:a.id_materia,dataTarget:"#staticBackdrop",dataToggle:"modal",ClickDelete:e.deleteMateria.bind(e,a.id_materia),ClickList:e.listMaterias.bind(e,a.id_materia)})}))))}}]),t}(i.Component);a.default=Object(s.g)(v)}}]);
//# sourceMappingURL=5.f4ac8c3a.chunk.js.map
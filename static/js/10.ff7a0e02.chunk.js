(this.webpackJsonplogic_advanced=this.webpackJsonplogic_advanced||[]).push([[10],{41:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(38),r=a(39),o=a(55),s=a.n(o),i=(a(47),function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"alertMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){},c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};s()({title:e,text:t,icon:a,className:n,buttons:r,onConfirm:function(){return o}}).then((function(e){"Sim"!=e&&"Ok"!=e||i(c)}))}}]),e}())},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(38),r=a(39),o=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"setStorage",value:function(e){localStorage.setItem(btoa("statusUser"),btoa(e.status)),localStorage.setItem(btoa("dataUser"),btoa(JSON.stringify(e.dados)))}},{key:"getStorage",value:function(){var e=atob(localStorage.getItem(btoa("dataUser")));return JSON.parse(e)}},{key:"clearStorage",value:function(){localStorage.clear()}}]),e}()},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(38),r=a(39),o=a(42),s=function(){function e(t){Object(n.a)(this,e),this.token=void 0==t||null==t,this.baseURL="https://b1085189c6b5.ngrok.io",this.token&&(this.dataUserLogged=o.a.getStorage())}return Object(r.a)(e,[{key:"getHeaders",value:function(){var e=new Headers;return this.token&&e.append("Authorization","".concat(this.dataUserLogged.token)),e}},{key:"get",value:function(e){var t={method:"GET",headers:this.getHeaders()};return fetch("".concat(this.baseURL,"/").concat(e),t)}},{key:"post",value:function(e,t){var a={method:"POST",headers:this.getHeaders(),body:t};return fetch("".concat(this.baseURL,"/").concat(e),a)}},{key:"delete",value:function(e){var t={method:"DELETE",headers:this.getHeaders()};return fetch("".concat(this.baseURL,"/").concat(e),t)}}]),e}()},47:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/logo.8ab4c88e.png"},62:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(38),r=a(39),o=a(44),s=a(43),i=(a(62),a(51),a(0)),c=a.n(i),u=a(14),l=a(41),d=a(57),h=a.n(d),m=a(45),g=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={name:"",userName:"",email:"",password:"",cpassword:""},r.requestExecutor=new m.a(!1),r}return Object(r.a)(a,[{key:"onKeyDown",value:function(e){"Enter"===e.key&&this.submitData()}},{key:"submitData",value:function(){var e=this,t=this.state,a=t.name,n=t.userName,r=t.email,o=t.password,s=t.cpassword,i=!0;if(a&&n&&r&&o&&s||(i=!1,l.a.alertMessage("Erro!","Preencha todos os campos","error")),-1===r.indexOf("@")&&(i=!1,l.a.alertMessage("Erro!","E-mail inv\xe1lido","error")),o!==s&&(i=!1,l.a.alertMessage("Erro!","Senhas n\xe3o conferem","error")),i){var c=new FormData;c.append("email_usuario",r),c.append("senha_usuario",o),c.append("nick_usuario",n),c.append("descricao_usuario",a),this.requestExecutor.post("usuario",c).then((function(e){return e.json()})).then((function(t){1==t.status?l.a.alertMessage("Sucesso!","Cadastro realizado","success",e.props.history.push("/")):l.a.alertMessage("Erro!",t.msg,"warning")})).catch((function(e){return console.log("error",e)}))}}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"box container__body "},c.a.createElement("div",{className:"box__left"},c.a.createElement("img",{src:h.a,alt:"Logo do sistema"})),c.a.createElement("div",{className:"box__right"},c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"input__register",type:"text",placeholder:"Nome completo",onKeyUp:this.onKeyDown.bind(this),onChange:function(t){return e.setState({name:t.target.value})}}),c.a.createElement("input",{className:"input__register",type:"text",placeholder:"Nome de usu\xe1rio(Apelido)",onKeyUp:this.onKeyDown.bind(this),onChange:function(t){return e.setState({userName:t.target.value})}}),c.a.createElement("input",{className:"input__register",type:"email",placeholder:"E-mail",onKeyUp:this.onKeyDown.bind(this),onChange:function(t){return e.setState({email:t.target.value})}}),c.a.createElement("input",{className:"input__register",type:"password",placeholder:"Digite sua senha",onKeyUp:this.onKeyDown.bind(this),onChange:function(t){return e.setState({password:t.target.value})}}),c.a.createElement("input",{className:"input__register",type:"password",placeholder:"Confirmar senha",onKeyUp:this.onKeyDown.bind(this),onChange:function(t){return e.setState({cpassword:t.target.value})}}),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{type:"button",className:"button__register",onClick:this.submitData.bind(this)},"Cadastrar"),c.a.createElement(u.b,{to:"/"},c.a.createElement("button",{type:"button",className:"button__register"},"Cancelar")))))))}}]),a}(c.a.Component)}}]);
//# sourceMappingURL=10.ff7a0e02.chunk.js.map
(this["webpackJsonptutorial-react"]=this["webpackJsonptutorial-react"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(7),o=r.n(a),s=(r(14),r(9)),i=r(2),c=r(3),l=r(5),j=r(4),b=r(0),u=function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Nombre"}),Object(b.jsx)("th",{children:"Apellido"})]})})},d=function(e){var t=e.datosPersonas.map((function(t,r){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.nombre}),Object(b.jsx)("td",{children:t.apellido}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return e.eliminarPersona(r)},children:"Eliminar"})})]},r)}));return Object(b.jsx)("tbody",{children:t})},m=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=this.props,t=e.datosPersonas,r=e.eliminarPersona;return Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)(u,{}),Object(b.jsx)(d,{datosPersonas:t,eliminarPersona:r})]})}}]),r}(n.Component),h=r(8),p=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={nombre:"",apellido:""},e.enviarFormulario=function(){e.props.enviarFormulario(e.state),e.setState({nombre:"",apellido:""})},e.gestionarCambio=function(t){var r=t.target,n=r.name,a=r.value;e.setState(Object(h.a)({},n,a))},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this.state,t=e.nombre,r=e.apellido;return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(b.jsx)("input",{type:"text",name:"nombre",id:"nombre",className:"form-control",value:t,onChange:this.gestionarCambio})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"apellido",children:"Apellido"}),Object(b.jsx)("input",{type:"text",name:"apellido",id:"apellido",className:"form-control",value:r,onChange:this.gestionarCambio})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"button",value:"Enviar",onClick:this.enviarFormulario})})]})}}]),r}(n.Component),O=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={personas:[]},e.enviarFormulario=function(t){e.setState({personas:[].concat(Object(s.a)(e.state.personas),[t])})},e.eliminarPersona=function(t){var r=e.state.personas;e.setState({personas:r.filter((function(e,r){return r!==t}))})},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this.state.personas;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Tutorial de React de Neoguias!"}),Object(b.jsx)(m,{datosPersonas:e,eliminarPersona:this.eliminarPersona}),Object(b.jsx)(p,{enviarFormulario:this.enviarFormulario}),"}"]})}}]),r}(n.Component);o.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f9abb2a2.chunk.js.map
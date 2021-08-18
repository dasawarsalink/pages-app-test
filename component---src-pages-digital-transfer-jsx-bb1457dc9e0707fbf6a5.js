"use strict";(self.webpackChunkmainapp=self.webpackChunkmainapp||[]).push([[8660],{9904:function(e,r,a){var t=a(3782),n=a(5773),l=a(7378),o=a(8037),i=a(710),s=a(5415),d=a(582),c=l.forwardRef((function(e,r){var a=e.children,d=e.classes,c=e.className,m=e.component,u=void 0===m?"p":m,p=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,(0,t.Z)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),f=(0,s.Z)(),Z=(0,i.Z)({props:e,muiFormControl:f,states:["variant","margin","disabled","error","filled","focused","required"]});return l.createElement(u,(0,n.Z)({className:(0,o.Z)(d.root,("filled"===Z.variant||"outlined"===Z.variant)&&d.contained,c,Z.disabled&&d.disabled,Z.error&&d.error,Z.filled&&d.filled,Z.focused&&d.focused,Z.required&&d.required,"dense"===Z.margin&&d.marginDense),ref:r},p)," "===a?l.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):a)}));r.Z=(0,d.Z)((function(e){return{root:(0,n.Z)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(c)},1126:function(e,r,a){a.d(r,{Z:function(){return k}});var t=a(5773),n=a(3782),l=a(7378),o=a(8037),i=a(4698),s=a(9861),d=a(9877),c=a(710),m=a(5415),u=a(582),p=a(7405),f=l.forwardRef((function(e,r){var a=e.children,i=e.classes,s=e.className,d=(e.color,e.component),u=void 0===d?"label":d,f=(e.disabled,e.error,e.filled,e.focused,e.required,(0,n.Z)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),Z=(0,m.Z)(),v=(0,c.Z)({props:e,muiFormControl:Z,states:["color","required","focused","disabled","error","filled"]});return l.createElement(u,(0,t.Z)({className:(0,o.Z)(i.root,i["color".concat((0,p.Z)(v.color||"primary"))],s,v.disabled&&i.disabled,v.error&&i.error,v.filled&&i.filled,v.focused&&i.focused,v.required&&i.required),ref:r},f),a,v.required&&l.createElement("span",{"aria-hidden":!0,className:(0,o.Z)(i.asterisk,v.error&&i.error)}," ","*"))})),Z=(0,u.Z)((function(e){return{root:(0,t.Z)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(f),v=l.forwardRef((function(e,r){var a=e.classes,i=e.className,s=e.disableAnimation,d=void 0!==s&&s,u=(e.margin,e.shrink),p=(e.variant,(0,n.Z)(e,["classes","className","disableAnimation","margin","shrink","variant"])),f=(0,m.Z)(),v=u;void 0===v&&f&&(v=f.filled||f.focused||f.adornedStart);var b=(0,c.Z)({props:e,muiFormControl:f,states:["margin","variant"]});return l.createElement(Z,(0,t.Z)({"data-shrink":v,className:(0,o.Z)(a.root,i,f&&a.formControl,!d&&a.animated,v&&a.shrink,"dense"===b.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[b.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:r},p))})),b=(0,u.Z)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(v),h=a(4738),x=a(9904),E=a(6158),g={standard:i.Z,filled:s.Z,outlined:d.Z},y=l.forwardRef((function(e,r){var a=e.autoComplete,i=e.autoFocus,s=void 0!==i&&i,d=e.children,c=e.classes,m=e.className,u=e.color,p=void 0===u?"primary":u,f=e.defaultValue,Z=e.disabled,v=void 0!==Z&&Z,y=e.error,k=void 0!==y&&y,q=e.FormHelperTextProps,w=e.fullWidth,F=void 0!==w&&w,N=e.helperText,P=e.hiddenLabel,R=e.id,C=e.InputLabelProps,I=e.inputProps,T=e.InputProps,$=e.inputRef,D=e.label,L=e.multiline,M=void 0!==L&&L,W=e.name,S=e.onBlur,H=e.onChange,B=e.onFocus,A=e.placeholder,O=e.required,V=void 0!==O&&O,z=e.rows,_=e.rowsMax,j=e.maxRows,G=e.minRows,J=e.select,K=void 0!==J&&J,Q=e.SelectProps,U=e.type,X=e.value,Y=e.variant,ee=void 0===Y?"standard":Y,re=(0,n.Z)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var ae={};if("outlined"===ee&&(C&&void 0!==C.shrink&&(ae.notched=C.shrink),D)){var te,ne=null!==(te=null==C?void 0:C.required)&&void 0!==te?te:V;ae.label=l.createElement(l.Fragment,null,D,ne&&" *")}K&&(Q&&Q.native||(ae.id=void 0),ae["aria-describedby"]=void 0);var le=N&&R?"".concat(R,"-helper-text"):void 0,oe=D&&R?"".concat(R,"-label"):void 0,ie=g[ee],se=l.createElement(ie,(0,t.Z)({"aria-describedby":le,autoComplete:a,autoFocus:s,defaultValue:f,fullWidth:F,multiline:M,name:W,rows:z,rowsMax:_,maxRows:j,minRows:G,type:U,value:X,id:R,inputRef:$,onBlur:S,onChange:H,onFocus:B,placeholder:A,inputProps:I},ae,T));return l.createElement(h.Z,(0,t.Z)({className:(0,o.Z)(c.root,m),disabled:v,error:k,fullWidth:F,hiddenLabel:P,ref:r,required:V,color:p,variant:ee},re),D&&l.createElement(b,(0,t.Z)({htmlFor:R,id:oe},C),D),K?l.createElement(E.Z,(0,t.Z)({"aria-describedby":le,id:R,labelId:oe,value:X,input:se},Q),d):se,N&&l.createElement(x.Z,(0,t.Z)({id:le},q),N))})),k=(0,u.Z)({root:{}},{name:"MuiTextField"})(y)},5524:function(e,r,a){a.r(r);var t=a(8639),n=a(1447),l=a(4800),o=a(3959),i=a(7318),s=a(1126),d=a(1777),c=a(7378),m=a(9771),u=a(3018),p=a(5213),f=a(4140);r.default=function(){var e=(0,m.P)();return c.createElement(u.Z,{data:e},(function(){return c.createElement("div",null,c.createElement(p.Z,null),c.createElement("div",{style:{padding:"1em"}},c.createElement(t.Z,null,c.createElement(n.Z,{expandIcon:c.createElement(f.Z,null)},c.createElement(l.Z,null,"Sesama Dasawarsa")),c.createElement(o.Z,{style:{flexDirection:"column"}},c.createElement("form",null,c.createElement(i.Z,{container:!0,spacing:2},c.createElement(i.Z,{item:!0,xs:12},c.createElement(s.Z,{name:"account",label:"Nomor ponsel",variant:"filled",fullWidth:!0})),c.createElement(i.Z,{item:!0,xs:12},c.createElement(s.Z,{name:"amount",label:"Nominal Transfer",type:"number",variant:"filled",fullWidth:!0})),c.createElement(i.Z,{item:!0,xs:12},c.createElement(s.Z,{name:"note",label:"Pesan (opsional)",variant:"filled",fullWidth:!0})),c.createElement(i.Z,{item:!0,xs:12},c.createElement(d.Z,{variant:"contained",color:"primary"},"Transfer")))))),c.createElement(t.Z,null,c.createElement(n.Z,{expandIcon:c.createElement(f.Z,null)},c.createElement(l.Z,null,"Transfer Bank")),c.createElement(o.Z,{style:{flexDirection:"column"}},c.createElement(l.Z,null,"WIP")))))}))}}}]);
//# sourceMappingURL=component---src-pages-digital-transfer-jsx-bb1457dc9e0707fbf6a5.js.map
(self.webpackChunkmainserv=self.webpackChunkmainserv||[]).push([[8660],{8942:function(e,r,a){"use strict";var t=a(1253),o=a(2122),n=a(7294),l=a(5505),i=a(1946),s=a(8725),d=a(638),c=n.forwardRef((function(e,r){var a=e.children,d=e.classes,c=e.className,p=e.component,m=void 0===p?"p":p,u=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,(0,t.Z)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),f=(0,s.Z)(),h=(0,i.Z)({props:e,muiFormControl:f,states:["variant","margin","disabled","error","filled","focused","required"]});return n.createElement(m,(0,o.Z)({className:(0,l.Z)(d.root,("filled"===h.variant||"outlined"===h.variant)&&d.contained,c,h.disabled&&d.disabled,h.error&&d.error,h.filled&&d.filled,h.focused&&d.focused,h.required&&d.required,"dense"===h.margin&&d.marginDense),ref:r},u)," "===a?n.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):a)}));r.Z=(0,d.Z)((function(e){return{root:(0,o.Z)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(c)},1218:function(e,r,a){"use strict";a.d(r,{Z:function(){return w}});var t=a(2122),o=a(1253),n=a(7294),l=a(5505),i=a(5343),s=a(5137),d=a(16),c=a(1946),p=a(8725),m=a(638),u=a(1664),f=n.forwardRef((function(e,r){var a=e.children,i=e.classes,s=e.className,d=(e.color,e.component),m=void 0===d?"label":d,f=(e.disabled,e.error,e.filled,e.focused,e.required,(0,o.Z)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),h=(0,p.Z)(),g=(0,c.Z)({props:e,muiFormControl:h,states:["color","required","focused","disabled","error","filled"]});return n.createElement(m,(0,t.Z)({className:(0,l.Z)(i.root,i["color".concat((0,u.Z)(g.color||"primary"))],s,g.disabled&&i.disabled,g.error&&i.error,g.filled&&i.filled,g.focused&&i.focused,g.required&&i.required),ref:r},f),a,g.required&&n.createElement("span",{"aria-hidden":!0,className:(0,l.Z)(i.asterisk,g.error&&i.error)}," ","*"))})),h=(0,m.Z)((function(e){return{root:(0,t.Z)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(f),g=n.forwardRef((function(e,r){var a=e.classes,i=e.className,s=e.disableAnimation,d=void 0!==s&&s,m=(e.margin,e.shrink),u=(e.variant,(0,o.Z)(e,["classes","className","disableAnimation","margin","shrink","variant"])),f=(0,p.Z)(),g=m;void 0===g&&f&&(g=f.filled||f.focused||f.adornedStart);var v=(0,c.Z)({props:e,muiFormControl:f,states:["margin","variant"]});return n.createElement(h,(0,t.Z)({"data-shrink":g,className:(0,l.Z)(a.root,i,f&&a.formControl,!d&&a.animated,g&&a.shrink,"dense"===v.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[v.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:r},u))})),v=(0,m.Z)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(g),y=a(1690),b=a(8942),Z=a(706),x={standard:i.Z,filled:s.Z,outlined:d.Z},E=n.forwardRef((function(e,r){var a=e.autoComplete,i=e.autoFocus,s=void 0!==i&&i,d=e.children,c=e.classes,p=e.className,m=e.color,u=void 0===m?"primary":m,f=e.defaultValue,h=e.disabled,g=void 0!==h&&h,E=e.error,w=void 0!==E&&E,k=e.FormHelperTextProps,q=e.fullWidth,N=void 0!==q&&q,F=e.helperText,P=e.hiddenLabel,R=e.id,T=e.InputLabelProps,C=e.inputProps,I=e.InputProps,W=e.inputRef,$=e.label,B=e.multiline,M=void 0!==B&&B,D=e.name,L=e.onBlur,S=e.onChange,A=e.onFocus,H=e.placeholder,O=e.required,V=void 0!==O&&O,z=e.rows,_=e.rowsMax,j=e.maxRows,J=e.minRows,G=e.select,K=void 0!==G&&G,Q=e.SelectProps,U=e.type,X=e.value,Y=e.variant,ee=void 0===Y?"standard":Y,re=(0,o.Z)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var ae={};if("outlined"===ee&&(T&&void 0!==T.shrink&&(ae.notched=T.shrink),$)){var te,oe=null!==(te=null==T?void 0:T.required)&&void 0!==te?te:V;ae.label=n.createElement(n.Fragment,null,$,oe&&" *")}K&&(Q&&Q.native||(ae.id=void 0),ae["aria-describedby"]=void 0);var ne=F&&R?"".concat(R,"-helper-text"):void 0,le=$&&R?"".concat(R,"-label"):void 0,ie=x[ee],se=n.createElement(ie,(0,t.Z)({"aria-describedby":ne,autoComplete:a,autoFocus:s,defaultValue:f,fullWidth:N,multiline:M,name:D,rows:z,rowsMax:_,maxRows:j,minRows:J,type:U,value:X,id:R,inputRef:W,onBlur:L,onChange:S,onFocus:A,placeholder:H,inputProps:C},ae,I));return n.createElement(y.Z,(0,t.Z)({className:(0,l.Z)(c.root,p),disabled:g,error:w,fullWidth:N,hiddenLabel:P,ref:r,required:V,color:u,variant:ee},re),$&&n.createElement(v,(0,t.Z)({htmlFor:R,id:le},T),$),K?n.createElement(Z.Z,(0,t.Z)({"aria-describedby":ne,id:R,labelId:le,value:X,input:se},Q),d):se,F&&n.createElement(b.Z,(0,t.Z)({id:ne},k),F))})),w=(0,m.Z)({root:{}},{name:"MuiTextField"})(E)},453:function(e,r,a){"use strict";var t=a(2122),o=a(1253),n=a(7294),l=a(5505),i=a(638),s=a(1664),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},c=n.forwardRef((function(e,r){var a=e.align,i=void 0===a?"inherit":a,c=e.classes,p=e.className,m=e.color,u=void 0===m?"initial":m,f=e.component,h=e.display,g=void 0===h?"initial":h,v=e.gutterBottom,y=void 0!==v&&v,b=e.noWrap,Z=void 0!==b&&b,x=e.paragraph,E=void 0!==x&&x,w=e.variant,k=void 0===w?"body1":w,q=e.variantMapping,N=void 0===q?d:q,F=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),P=f||(E?"p":N[k]||d[k])||"span";return n.createElement(P,(0,t.Z)({className:(0,l.Z)(c.root,p,"inherit"!==k&&c[k],"initial"!==u&&c["color".concat((0,s.Z)(u))],Z&&c.noWrap,y&&c.gutterBottom,E&&c.paragraph,"inherit"!==i&&c["align".concat((0,s.Z)(i))],"initial"!==g&&c["display".concat((0,s.Z)(g))]),ref:r},F))}));r.Z=(0,i.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(c)},2944:function(e,r,a){"use strict";a.r(r);var t=a(9039),o=a(5371),n=a(453),l=a(7171),i=a(838),s=a(1218),d=a(3332),c=a(7294),p=a(4171),m=a(2874),u=a(4729),f=a(7739);r.default=function(){var e=(0,p.P)();return c.createElement(m.Z,{data:e},(function(){return c.createElement("div",null,c.createElement(u.Z,null),c.createElement("div",{style:{padding:"1em"}},c.createElement(t.Z,null,c.createElement(o.Z,{expandIcon:c.createElement(f.Z,null)},c.createElement(n.Z,null,"Sesama Dasawarsa")),c.createElement(l.Z,{style:{flexDirection:"column"}},c.createElement("form",null,c.createElement(i.Z,{container:!0,spacing:2},c.createElement(i.Z,{item:!0,xs:12},c.createElement(s.Z,{name:"account",label:"Nomor ponsel",variant:"filled",fullWidth:!0})),c.createElement(i.Z,{item:!0,xs:12},c.createElement(s.Z,{name:"amount",label:"Nominal Transfer",type:"number",variant:"filled",fullWidth:!0})),c.createElement(i.Z,{item:!0,xs:12},c.createElement(s.Z,{name:"note",label:"Pesan (opsional)",variant:"filled",fullWidth:!0})),c.createElement(i.Z,{item:!0,xs:12},c.createElement(d.Z,{variant:"contained",color:"primary"},"Transfer")))))),c.createElement(t.Z,null,c.createElement(o.Z,{expandIcon:c.createElement(f.Z,null)},c.createElement(n.Z,null,"Transfer Bank")),c.createElement(l.Z,{style:{flexDirection:"column"}},c.createElement(n.Z,null,"WIP")))))}))}}}]);
//# sourceMappingURL=component---src-pages-digital-transfer-jsx-27da06f1053dbac07db6.js.map
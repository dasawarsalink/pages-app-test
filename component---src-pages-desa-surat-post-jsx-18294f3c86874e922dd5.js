"use strict";(self.webpackChunkmainagen=self.webpackChunkmainagen||[]).push([[5818],{8619:function(e,t,a){var n=a(5773),r=a(3782),o=a(7378),l=(a(5884),a(8037)),i=a(7405),c=a(2201),d=a(582);a(1777).Z.styles;var s=o.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,s=e.color,u=void 0===s?"default":s,m=e.component,p=void 0===m?"div":m,h=e.disabled,v=void 0!==h&&h,f=e.disableElevation,g=void 0!==f&&f,y=e.disableFocusRipple,Z=void 0!==y&&y,b=e.disableRipple,E=void 0!==b&&b,k=e.fullWidth,C=void 0!==k&&k,z=e.orientation,x=void 0===z?"horizontal":z,S=e.size,R=void 0===S?"medium":S,w=e.variant,L=void 0===w?"outlined":w,$=(0,r.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),B=(0,l.Z)(c.grouped,c["grouped".concat((0,i.Z)(x))],c["grouped".concat((0,i.Z)(L))],c["grouped".concat((0,i.Z)(L)).concat((0,i.Z)(x))],c["grouped".concat((0,i.Z)(L)).concat("default"!==u?(0,i.Z)(u):"")],v&&c.disabled);return o.createElement(p,(0,n.Z)({role:"group",className:(0,l.Z)(c.root,d,C&&c.fullWidth,g&&c.disableElevation,"contained"===L&&c.contained,"vertical"===x&&c.vertical),ref:t},$),o.Children.map(a,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:(0,l.Z)(B,e.props.className),color:e.props.color||u,disabled:e.props.disabled||v,disableElevation:e.props.disableElevation||g,disableFocusRipple:Z,disableRipple:E,fullWidth:C,size:e.props.size||R,variant:e.props.variant||L}):null})))}));t.Z=(0,d.Z)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:(0,c.Fq)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:(0,c.Fq)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(s)},6747:function(e,t,a){var n=a(5773),r=a(3782),o=a(7378),l=a(8037),i=a(582),c=o.forwardRef((function(e,t){var a=e.classes,i=e.className,c=(0,r.Z)(e,["classes","className"]);return o.createElement("div",(0,n.Z)({className:(0,l.Z)(a.root,i),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.Z=(0,i.Z)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},551:function(e,t,a){var n=a(5773),r=a(3782),o=a(7378),l=a(8037),i=a(582),c=a(4800),d=a(8815),s=o.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,u=e.disableTypography,m=void 0!==u&&u,p=e.inset,h=void 0!==p&&p,v=e.primary,f=e.primaryTypographyProps,g=e.secondary,y=e.secondaryTypographyProps,Z=(0,r.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),b=o.useContext(d.Z).dense,E=null!=v?v:a;null==E||E.type===c.Z||m||(E=o.createElement(c.Z,(0,n.Z)({variant:b?"body2":"body1",className:i.primary,component:"span",display:"block"},f),E));var k=g;return null==k||k.type===c.Z||m||(k=o.createElement(c.Z,(0,n.Z)({variant:"body2",className:i.secondary,color:"textSecondary",display:"block"},y),k)),o.createElement("div",(0,n.Z)({className:(0,l.Z)(i.root,s,b&&i.dense,h&&i.inset,E&&k&&i.multiline),ref:t},Z),E,k)}));t.Z=(0,i.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(s)},3159:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(5773),r=a(3782),o=a(7378),l=a(8037),i=a(8698),c=a(5296),d=(0,c.Z)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),s=(0,c.Z)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(582);var m=(0,u.Z)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return o.createElement("div",{className:(0,l.Z)(a.root,t&&a.checked)},o.createElement(d,{fontSize:n}),o.createElement(s,{fontSize:n,className:a.layer}))})),p=a(2201),h=a(7405),v=a(9122);var f=o.createContext();var g=o.createElement(m,{checked:!0}),y=o.createElement(m,null),Z=o.forwardRef((function(e,t){var a=e.checked,c=e.classes,d=e.color,s=void 0===d?"secondary":d,u=e.name,m=e.onChange,p=e.size,Z=void 0===p?"medium":p,b=(0,r.Z)(e,["checked","classes","color","name","onChange","size"]),E=o.useContext(f),k=a,C=(0,v.Z)(m,E&&E.onChange),z=u;return E&&(void 0===k&&(k=E.value===e.value),void 0===z&&(z=E.name)),o.createElement(i.Z,(0,n.Z)({color:s,type:"radio",icon:o.cloneElement(y,{fontSize:"small"===Z?"small":"medium"}),checkedIcon:o.cloneElement(g,{fontSize:"small"===Z?"small":"medium"}),classes:{root:(0,l.Z)(c.root,c["color".concat((0,h.Z)(s))]),checked:c.checked,disabled:c.disabled},name:z,checked:k,onChange:C,ref:t},b))})),b=(0,u.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(Z)},8698:function(e,t,a){var n=a(5773),r=a(4125),o=a(3782),l=a(7378),i=a(8037),c=a(6466),d=a(5415),s=a(582),u=a(7653),m=l.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,h=e.className,v=e.defaultChecked,f=e.disabled,g=e.icon,y=e.id,Z=e.inputProps,b=e.inputRef,E=e.name,k=e.onBlur,C=e.onChange,z=e.onFocus,x=e.readOnly,S=e.required,R=e.tabIndex,w=e.type,L=e.value,$=(0,o.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=(0,c.Z)({controlled:s,default:Boolean(v),name:"SwitchBase",state:"checked"}),N=(0,r.Z)(B,2),P=N[0],I=N[1],F=(0,d.Z)(),T=f;F&&void 0===T&&(T=F.disabled);var M="checkbox"===w||"radio"===w;return l.createElement(u.Z,(0,n.Z)({component:"span",className:(0,i.Z)(p.root,h,P&&p.checked,T&&p.disabled),disabled:T,tabIndex:null,role:void 0,onFocus:function(e){z&&z(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){k&&k(e),F&&F.onBlur&&F.onBlur(e)},ref:t},$),l.createElement("input",(0,n.Z)({autoFocus:a,checked:s,defaultChecked:v,className:p.input,disabled:T,id:M&&y,name:E,onChange:function(e){var t=e.target.checked;I(t),C&&C(e,t)},readOnly:x,ref:b,required:S,tabIndex:R,type:w,value:L},Z)),P?m:g)}));t.Z=(0,s.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},6926:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=l},155:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M14 7l-5 5 5 5V7z"}),"ArrowLeft");t.Z=l},192:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");t.Z=l},8993:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=l},8794:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.Z=l},8053:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place");t.Z=l},6370:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"}),"Receipt");t.Z=l},9618:function(e,t,a){var n=a(7914),r=a(1954);t.Z=void 0;var o=r(a(7378)),l=(0,n(a(545)).default)(o.createElement("path",{d:"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"}),"UnfoldMore");t.Z=l},7478:function(e,t,a){a.r(t),a.d(t,{categories:function(){return f},keyedCategories:function(){return g}});var n=a(7378),r=a(7576),o=a(6408),l=a(7808),i=a(4800),c=a(6747),d=a(1777),s=a(5213),u=a(5414),m=a(6926),p=a(6370),h=a(8794),v=a(192),f=[{type:"pernyataan",title:"Surat Pernyataan",icon:p.Z},{type:"keterangan",title:"Surat Keterangan",icon:h.Z},{type:"permohonan",title:"Surat Permohonan",icon:v.Z}],g=f.reduce((function(e,t){return e[t.type]=t,e}),{});t.default=function(){return n.createElement("div",null,n.createElement(s.Z,null),n.createElement(r.Z,null,n.createElement(o.Z,null,n.createElement(l.Z,null,n.createElement(u.Link,{color:"inherit",to:"/user/"},"Layanan Desa"),n.createElement(i.Z,{color:"textPrimary"},"Layanan Surat")),n.createElement(c.Z,null,n.createElement(d.Z,{startIcon:n.createElement(m.Z,null),onClick:function(){return(0,u.navigate)("/desa/surat/choose")},variant:"contained",color:"primary"},"Minta Surat")))))}},6694:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(7378),r=a(5773),o=a(3782),l=a(8037),i=a(582),c=a(2201),d=a(7405),s=a(8698),u=n.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.color,u=void 0===c?"secondary":c,m=e.edge,p=void 0!==m&&m,h=e.size,v=void 0===h?"medium":h,f=(0,o.Z)(e,["classes","className","color","edge","size"]),g=n.createElement("span",{className:a.thumb});return n.createElement("span",{className:(0,l.Z)(a.root,i,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===v&&a["size".concat((0,d.Z)(v))])},n.createElement(s.Z,(0,r.Z)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:(0,l.Z)(a.switchBase,a["color".concat((0,d.Z)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),n.createElement("span",{className:a.track}))})),m=(0,i.Z)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u),p=a(7576),h=a(6408),v=a(7808),f=a(4800),g=a(6747),y=a(1777),Z=a(551),b=a(4738),E=a(1126),k=a(9904),C=a(8619),z=a(5213),x=a(5414),S=a(155),R=a(9408),w=a(9374),L=a(3018),$=a(7478),B=a(9771),N=a(3945),P=function(){var e=(0,B.P)(),t=(0,R.kp)().get("id")||null,a=(0,R.kp)().get("code")||null,r=(0,w.w)(t&&"/desa/ask/"+t),o=(0,w.w)((!t||r)&&"/desa/mail/services/"+(t?r.data.code:a)),l=n.useState(null),i=l[0],c=l[1],d=n.useState({}),s=d[0],u=d[1],P=n.useState(!0),I=P[0],F=P[1];n.useEffect((function(){r?u(r.data.forms):o&&u(o.data.forms.reduce((function(e,t){return e[t.name]="",e}),{})),e&&c(e.account.address)}),[o,r]);var T=function(){};return n.createElement("div",null,n.createElement(z.Z,null),n.createElement(p.Z,null,n.createElement(h.Z,null,n.createElement(v.Z,null,n.createElement(x.Link,{color:"inherit",to:"/user/"},"Layanan Desa"),n.createElement(x.Link,{color:"inherit",to:"/desa/surat"},"Layanan Surat"),n.createElement(f.Z,{color:"textPrimary"},"Buat")),n.createElement(g.Z,null,n.createElement(y.Z,{startIcon:n.createElement(S.Z,null),onClick:function(){return(0,x.navigate)("/desa/surat/choose")},variant:"contained"},"Pilih Surat"))),n.createElement(L.Z,{data:o},(function(){return n.createElement(n.Fragment,null,n.createElement(h.Z,{divider:!0},$.keyedCategories[o.data.category]&&n.createElement($.keyedCategories[o.data.category].icon,{style:{fontSize:"2em",marginRight:15}}),n.createElement(Z.Z,{primary:o.data.title,secondary:o.data.description})),n.createElement(h.Z,null,n.createElement(Z.Z,{primary:"Pemohon"}),n.createElement(g.Z,null,n.createElement(b.Z,{fullWidth:!0,style:{minWidth:"50vw"}},n.createElement(E.Z,{fullWidth:!0,disabled:!0,value:null==e?void 0:e.nik}),n.createElement(k.Z,null,null==e?void 0:e.name)))),o.data.forms.map((function(e){return n.createElement(h.Z,{key:e.name},n.createElement(Z.Z,{primary:e.label}),n.createElement(g.Z,null,n.createElement(b.Z,{fullWidth:!0,style:{minWidth:"50vw"}},n.createElement(E.Z,{fullWidth:!0,value:s[e.name]||"",onChange:function(t){s[e.name]=t.target.value,u(Object.assign({},s))}}))))})),n.createElement(h.Z,{divider:!0}),n.createElement(h.Z,null,n.createElement(Z.Z,{primary:"Diantar?"}),n.createElement(g.Z,null,n.createElement(m,{checked:I,onChange:function(e){return F(e.target.checked)}}))),I&&n.createElement(h.Z,null,n.createElement(Z.Z,{primary:"Alamat"}),n.createElement(g.Z,null,n.createElement(N.Z,{value:i,onChange:c}))),n.createElement(h.Z,null,n.createElement(Z.Z,{primary:"Ajukan"}),n.createElement(g.Z,null,n.createElement(C.Z,null,n.createElement(y.Z,{onClick:T,variant:"contained",color:"primary"},"Ajukan Surat")))))}))))}},3945:function(e,t,a){var n=a(725),r=a(3661),o=a(2982),l=a(7576),i=a(6408),c=a(551),d=a(3159),s=a(1777),u=a(6747),m=a(7378),p=a(9374),h=a(9771),v=a(4297),f=a(3018),g=a(8993),y=a(9618),Z=a(8053),b=a(5414),E=function(e){var t=e.open,a=e.value,p=e.list,y=e.onChange,E=e.onClose;(0,v.ZE)(),(0,h.P)();return m.createElement(n.Z,{open:t,onClose:E,fullWidth:!0},m.createElement(r.Z,null,"Pilih Alamat"),m.createElement(o.Z,null,m.createElement(f.Z,{data:p},(function(){return m.createElement(l.Z,null,p.map((function(e){return m.createElement(i.Z,{key:e.id,button:!0,onClick:function(){return y(e.id)}},m.createElement(c.Z,{primary:m.createElement(m.Fragment,null,e.label,e.coordinate&&m.createElement(Z.Z,{fontSize:"small"})),secondary:m.createElement(m.Fragment,null,e.name+", "+e.district+",",m.createElement("br",null)," "+e.city+", "+e.region+", "+e.postal)}),m.createElement(d.Z,{checked:a===e.id}))})),m.createElement(i.Z,null,m.createElement(s.Z,{startIcon:m.createElement(g.Z,null),onClick:function(){return(0,b.navigate)("/user/alamat/")},variant:"contained"},"Ubah Data Alamat"),m.createElement(u.Z,null,m.createElement(s.Z,{onClick:E,variant:"contained",color:"primary"},"Tutup"))))}))))};t.Z=function(e){var t=e.value,a=e.onChange,n=(0,h.P)(),r=(0,p.w)(n&&"/market/address/"),o=m.useState(!1),l=o[0],i=o[1],c=(0,m.useMemo)((function(){return r&&r.data.reduce((function(e,t){return e[t.id]=t,e}),{})}),[r]);return m.createElement(m.Fragment,null,m.createElement(s.Z,{endIcon:m.createElement(y.Z,null),onClick:function(){return i(!0)},variant:"contained"},n&&n.features.order?c?m.createElement("div",null,t&&c[t]?c[t].label:"Pilih Alamat"):"...":m.createElement("div",{style:{fontStyle:"italic"}},"Tambahkan alamat")),m.createElement(E,{open:l,value:t,list:null==r?void 0:r.data,onChange:a,onClose:function(){return i(!1)}}))}}}]);
//# sourceMappingURL=component---src-pages-desa-surat-post-jsx-18294f3c86874e922dd5.js.map
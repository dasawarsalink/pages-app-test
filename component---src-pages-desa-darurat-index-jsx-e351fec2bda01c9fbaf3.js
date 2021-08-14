"use strict";(self.webpackChunkmainagen=self.webpackChunkmainagen||[]).push([[2444],{8619:function(e,a,n){var t=n(5773),r=n(3782),o=n(7378),l=(n(5884),n(8037)),i=n(7405),c=n(2201),d=n(582);n(1777).Z.styles;var s=o.forwardRef((function(e,a){var n=e.children,c=e.classes,d=e.className,s=e.color,u=void 0===s?"default":s,m=e.component,p=void 0===m?"div":m,v=e.disabled,h=void 0!==v&&v,f=e.disableElevation,y=void 0!==f&&f,g=e.disableFocusRipple,b=void 0!==g&&g,Z=e.disableRipple,E=void 0!==Z&&Z,k=e.fullWidth,w=void 0!==k&&k,x=e.orientation,D=void 0===x?"horizontal":x,z=e.size,R=void 0===z?"medium":z,L=e.variant,U=void 0===L?"outlined":L,C=(0,r.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),M=(0,l.Z)(c.grouped,c["grouped".concat((0,i.Z)(D))],c["grouped".concat((0,i.Z)(U))],c["grouped".concat((0,i.Z)(U)).concat((0,i.Z)(D))],c["grouped".concat((0,i.Z)(U)).concat("default"!==u?(0,i.Z)(u):"")],h&&c.disabled);return o.createElement(p,(0,t.Z)({role:"group",className:(0,l.Z)(c.root,d,w&&c.fullWidth,y&&c.disableElevation,"contained"===U&&c.contained,"vertical"===D&&c.vertical),ref:a},C),o.Children.map(n,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:(0,l.Z)(M,e.props.className),color:e.props.color||u,disabled:e.props.disabled||h,disableElevation:e.props.disableElevation||y,disableFocusRipple:b,disableRipple:E,fullWidth:w,size:e.props.size||R,variant:e.props.variant||U}):null})))}));a.Z=(0,d.Z)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:(0,c.Fq)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:(0,c.Fq)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(s)},6747:function(e,a,n){var t=n(5773),r=n(3782),o=n(7378),l=n(8037),i=n(582),c=o.forwardRef((function(e,a){var n=e.classes,i=e.className,c=(0,r.Z)(e,["classes","className"]);return o.createElement("div",(0,t.Z)({className:(0,l.Z)(n.root,i),ref:a},c))}));c.muiName="ListItemSecondaryAction",a.Z=(0,i.Z)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},551:function(e,a,n){var t=n(5773),r=n(3782),o=n(7378),l=n(8037),i=n(582),c=n(4800),d=n(8815),s=o.forwardRef((function(e,a){var n=e.children,i=e.classes,s=e.className,u=e.disableTypography,m=void 0!==u&&u,p=e.inset,v=void 0!==p&&p,h=e.primary,f=e.primaryTypographyProps,y=e.secondary,g=e.secondaryTypographyProps,b=(0,r.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),Z=o.useContext(d.Z).dense,E=null!=h?h:n;null==E||E.type===c.Z||m||(E=o.createElement(c.Z,(0,t.Z)({variant:Z?"body2":"body1",className:i.primary,component:"span",display:"block"},f),E));var k=y;return null==k||k.type===c.Z||m||(k=o.createElement(c.Z,(0,t.Z)({variant:"body2",className:i.secondary,color:"textSecondary",display:"block"},g),k)),o.createElement("div",(0,t.Z)({className:(0,l.Z)(i.root,s,Z&&i.dense,v&&i.inset,E&&k&&i.multiline),ref:a},b),E,k)}));a.Z=(0,i.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(s)},6757:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement("path",{d:"M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z"}),"AirlineSeatFlat");a.Z=l},2843:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}),"Call");a.Z=l},8899:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement("path",{d:"M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"}),"CallRounded");a.Z=l},2375:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement("path",{d:"M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2.03L9 18v-5H4V5.98L13 6v2h2V7c0-1.66-1.34-3-3-3zM5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 13.77l.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11zm-8.16.34h7.19l1.03 3h-9.25l1.03-3zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"Commute");a.Z=l},8035:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement("path",{d:"M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6h2v2h-2zM1.3 1.8L.1 3.1 2 5v16h16l3 3 1.3-1.3-21-20.9zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm2 4v-2h2l2 2h-4z"}),"DomainDisabled");a.Z=l},90:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement("path",{d:"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"}),"LocalHospital");a.Z=l},558:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"}),o.createElement("circle",{cx:"16.5",cy:"5.5",r:"2.5"})),"Pool");a.Z=l},6418:function(e,a,n){var t=n(7914),r=n(1954);a.Z=void 0;var o=r(n(7378)),l=(0,t(n(545)).default)(o.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");a.Z=l},5252:function(e,a,n){n.r(a),n.d(a,{default:function(){return J}});var t=n(5773),r=n(3782),o=n(7378),l=n(3615),i=n.n(l),c=n(3186),d=n(5466),s=n.n(d),u=n(6054),m=n(5195),p=n(1435);function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,p.Z)(),r=(0,c.Z)({theme:n,name:"MuiUseMediaQuery",props:{}});var l="function"==typeof e?e(n):e;l=l.replace(/^@media( ?)/m,"");var i="undefined"!=typeof window&&void 0!==window.matchMedia,d=(0,t.Z)({},r,a),s=d.defaultMatches,u=void 0!==s&&s,m=d.matchMedia,v=void 0===m?i?window.matchMedia:null:m,h=d.noSsr,f=void 0!==h&&h,y=d.ssrMatchMedia,g=void 0===y?null:y,b=o.useState((function(){return f&&i?v(l).matches:g?g(l).matches:u})),Z=b[0],E=b[1];return o.useEffect((function(){var e=!0;if(i){var a=v(l),n=function(){e&&E(a.matches)};return n(),a.addListener(n),function(){e=!1,a.removeListener(n)}}}),[l,v,i]),Z}var h=function(e,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?m.X.indexOf(e)<=m.X.indexOf(a):m.X.indexOf(e)<m.X.indexOf(a)},f=function(e,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?m.X.indexOf(a)<=m.X.indexOf(e):m.X.indexOf(a)<m.X.indexOf(e)},y="undefined"==typeof window?o.useEffect:o.useLayoutEffect,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(a){var n=e.withTheme,l=void 0!==n&&n,i=e.noSSR,d=void 0!==i&&i,m=e.initialWidth;function p(e){var n=(0,u.Z)(),i=e.theme||n,s=(0,c.Z)({theme:i,name:"MuiWithWidth",props:(0,t.Z)({},e)}),p=s.initialWidth,h=s.width,f=(0,r.Z)(s,["initialWidth","width"]),g=o.useState(!1),b=g[0],Z=g[1];y((function(){Z(!0)}),[]);var E=i.breakpoints.keys.slice().reverse().reduce((function(e,a){var n=v(i.breakpoints.up(a));return!e&&n?a:e}),null),k=(0,t.Z)({width:h||(b||d?E:void 0)||p||m},l?{theme:i}:{},f);return void 0===k.width?null:o.createElement(a,k)}return s()(p,a),p}};function b(e){var a=e.children,n=e.only,t=e.width,r=(0,u.Z)(),o=!0;if(n)if(Array.isArray(n))for(var l=0;l<n.length;l+=1){if(t===n[l]){o=!1;break}}else n&&t===n&&(o=!1);if(o)for(var i=0;i<r.breakpoints.keys.length;i+=1){var c=r.breakpoints.keys[i],d=e["".concat(c,"Up")],s=e["".concat(c,"Down")];if(d&&h(c,t)||s&&f(c,t)){o=!1;break}}return o?a:null}b.propTypes={children:i().node,className:i().string,implementation:i().oneOf(["js","css"]),initialWidth:i().oneOf(["xs","sm","md","lg","xl"]),lgDown:i().bool,lgUp:i().bool,mdDown:i().bool,mdUp:i().bool,only:i().oneOfType([i().oneOf(["xs","sm","md","lg","xl"]),i().arrayOf(i().oneOf(["xs","sm","md","lg","xl"]))]),smDown:i().bool,smUp:i().bool,width:i().string.isRequired,xlDown:i().bool,xlUp:i().bool,xsDown:i().bool,xsUp:i().bool};var Z=g()(b),E=n(4649),k=n(7405);var w=(0,n(582).Z)((function(e){var a={display:"none"};return e.breakpoints.keys.reduce((function(n,t){return n["only".concat((0,k.Z)(t))]=(0,E.Z)({},e.breakpoints.only(t),a),n["".concat(t,"Up")]=(0,E.Z)({},e.breakpoints.up(t),a),n["".concat(t,"Down")]=(0,E.Z)({},e.breakpoints.down(t),a),n}),{})}),{name:"PrivateHiddenCss"})((function(e){var a=e.children,n=e.classes,t=e.className,l=e.only,i=((0,r.Z)(e,["children","classes","className","only"]),(0,u.Z)()),c=[];t&&c.push(t);for(var d=0;d<i.breakpoints.keys.length;d+=1){var s=i.breakpoints.keys[d],m=e["".concat(s,"Up")],p=e["".concat(s,"Down")];m&&c.push(n["".concat(s,"Up")]),p&&c.push(n["".concat(s,"Down")])}return l&&(Array.isArray(l)?l:[l]).forEach((function(e){c.push(n["only".concat((0,k.Z)(e))])})),o.createElement("div",{className:c.join(" ")},a)}));var x=function(e){var a=e.implementation,n=void 0===a?"js":a,l=e.lgDown,i=void 0!==l&&l,c=e.lgUp,d=void 0!==c&&c,s=e.mdDown,u=void 0!==s&&s,m=e.mdUp,p=void 0!==m&&m,v=e.smDown,h=void 0!==v&&v,f=e.smUp,y=void 0!==f&&f,g=e.xlDown,b=void 0!==g&&g,E=e.xlUp,k=void 0!==E&&E,x=e.xsDown,D=void 0!==x&&x,z=e.xsUp,R=void 0!==z&&z,L=(0,r.Z)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===n?o.createElement(Z,(0,t.Z)({lgDown:i,lgUp:d,mdDown:u,mdUp:p,smDown:h,smUp:y,xlDown:b,xlUp:k,xsDown:D,xsUp:R},L)):o.createElement(w,(0,t.Z)({lgDown:i,lgUp:d,mdDown:u,mdUp:p,smDown:h,smUp:y,xlDown:b,xlUp:k,xsDown:D,xsUp:R},L))},D=n(6938),z=n(3991),R=n(7576),L=n(6408),U=n(4800),C=n(551),M=n(6747),T=n(8619),N=n(1777),H=n(7808),O=n(5414),S=n(9771),W=n(3018),V=n(5213),B=n(90),P=n(6757),A=n(2375),j=n(8035),F=n(6418),X=n(558),q=n(2843),K=n(8899),I=n(4297),$=n(9374),_=[{type:"ambulan",label:"Ambulan",desc:"Layanan untuk memanggil ambulan desa untuk keperluan antar jemput",icon:B.Z},{type:"kematian",label:"Kematian",desc:"Layanan untuk menanggapi laporan warga yang meninggal dunia",icon:P.Z},{type:"kecelakaan",label:"Kecelakaan",desc:"Layanan untuk merespon kecelakaan rumah tangga atau lalu lintas",icon:A.Z},{type:"kerusakan",label:"Kerusakan",desc:"Layanan untuk merespon kerusakan insfrasuktur publik",icon:j.Z},{type:"kejatahan",label:"Kejahatan",desc:"Layanan untuk merespon tindak kejahatan di pemukiman warga",icon:F.Z},{type:"bencana",label:"Bencana",desc:"Layanan untuk merespon bencana alam, longsor atau kebarakan",icon:X.Z}],G=function(e){return"tel:+62"+e.substr(1)},Q=function(e){return"https://wa.me/62"+e.substr(1)},Y=function(e){var a=e.inquiry,n=e.open,t=e.onClose,r=(0,S.P)(),l=(0,I.ZE)();return o.createElement(D.Z,{open:n,onClose:t},o.createElement(z.Z,{className:l.paper,elevation:5,style:{textAlign:"center"}},n&&o.createElement(R.Z,null,o.createElement(L.Z,{className:l.center},o.createElement(a.category.icon,{style:{fontSize:"2em",marginRight:15}}),o.createElement(U.Z,null,"Layanan Darurat ",a.category.label)),o.createElement(L.Z,{className:l.center},o.createElement(U.Z,null,"Perangkat Desa ",r.geolookup.kelurahan," memberikan data kontak berikut untuk penanganan layanan ",a.category.label)),a.contacts.map((function(e){return o.createElement(L.Z,{key:e.number},o.createElement(C.Z,{primary:e.name,secondary:e.number}),o.createElement(M.Z,null,o.createElement(x,{only:["xs"]},o.createElement(T.Z,null,o.createElement(N.Z,{component:"a",href:G(e.number)},o.createElement(q.Z,{style:{marginRight:10}}),"Telepon"),o.createElement(N.Z,{component:"a",disabled:!e.whatsapp,href:Q(e.number),target:"_blank"},o.createElement(K.Z,{style:{marginRight:10}}),"WhatsApp"))),o.createElement(x,{smUp:!0},o.createElement(T.Z,{orientation:"vertical"},o.createElement(N.Z,{component:"a",href:G(e.number)},o.createElement(q.Z,{style:{marginRight:10}}),"Telepon"),o.createElement(N.Z,{component:"a",disabled:!e.whatsapp,href:Q(e.number),target:"_blank"},o.createElement(K.Z,{style:{marginRight:10}}),"WhatsApp")))))})),o.createElement(L.Z,{className:l.center},o.createElement(N.Z,{onClick:t,variant:"outlined"},"Tutup")))))},J=function(){var e=(0,S.P)(),a=(0,$.w)("/desa/emergency/"),n=o.useState(null),t=n[0],r=n[1];return o.createElement("div",null,o.createElement(V.Z,null),o.createElement(R.Z,null,o.createElement(L.Z,null,o.createElement(H.Z,null,o.createElement(O.Link,{color:"inherit",to:"/user/"},"Layanan Desa"),o.createElement(U.Z,{color:"textPrimary"},"Layanan Darurat"))),o.createElement(W.Z,{data:e&&a},(function(){return e.features.emergency?o.createElement(o.Fragment,null,o.createElement(L.Z,null,o.createElement(U.Z,{variant:"h5"},"Layanan Darurat Desa ",e.geolookup.kelurahan)),_.map((function(e,n){return o.createElement(L.Z,{disabled:!a.data.some((function(a){return e.type===a.service})),key:e.type,button:!0,onClick:function(){return e=n,void r({contacts:a.data.filter((function(a){return a.service===_[e].type})),category:_[e]});var e}},o.createElement(e.icon,{style:{fontSize:"2em",marginRight:15}}),o.createElement(C.Z,{primary:e.label,secondary:e.desc}))}))):o.createElement(L.Z,null,o.createElement(C.Z,{primary:"Layanan Darurat untuk Desa "+e.geolookup.kelurahan+" Belum Tersedia"}))})),o.createElement(Y,{open:null!==t,onClose:function(){return r(null)},inquiry:t})))}}}]);
//# sourceMappingURL=component---src-pages-desa-darurat-index-jsx-e351fec2bda01c9fbaf3.js.map
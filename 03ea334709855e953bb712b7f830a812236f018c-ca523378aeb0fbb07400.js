"use strict";(self.webpackChunkmainagen=self.webpackChunkmainagen||[]).push([[6502],{7808:function(e,t,o){o.d(t,{Z:function(){return h}});var a=o(5773),n=o(7818),r=o(3782),i=o(7378),l=(o(5884),o(8037)),s=o(582),c=o(4800),d=o(2201),p=(0,o(5296).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=o(7833);var m=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,d._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,o=(0,r.Z)(e,["classes"]);return i.createElement(u.Z,(0,a.Z)({component:"li",className:t.root,focusRipple:!0},o),i.createElement(p,{className:t.icon}))}));var g=i.forwardRef((function(e,t){var o=e.children,s=e.classes,d=e.className,p=e.component,u=void 0===p?"nav":p,g=e.expandText,h=void 0===g?"Show path":g,y=e.itemsAfterCollapse,f=void 0===y?1:y,v=e.itemsBeforeCollapse,b=void 0===v?1:v,Z=e.maxItems,x=void 0===Z?8:Z,C=e.separator,N=void 0===C?"/":C,k=(0,r.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=i.useState(!1),E=w[0],B=w[1],I=i.Children.toArray(o).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return i.createElement(c.Z,(0,a.Z)({ref:t,component:u,color:"textSecondary",className:(0,l.Z)(s.root,d)},k),i.createElement("ol",{className:s.ol},function(e,t,o){return e.reduce((function(a,n,r){return r<e.length-1?a=a.concat(n,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},o)):a.push(n),a}),[])}(E||x&&I.length<=x?I:function(e){return b+f>=e.length?e:[].concat((0,n.Z)(e.slice(0,b)),[i.createElement(m,{"aria-label":h,key:"ellipsis",onClick:function(e){B(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,n.Z)(e.slice(e.length-f,e.length)))}(I),s.separator,N)))})),h=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},6408:function(e,t,o){var a=o(5773),n=o(3782),r=o(7378),i=o(8037),l=o(582),s=o(7833),c=o(7269),d=o(2799),p=o(8815),u=o(1542),m="undefined"==typeof window?r.useEffect:r.useLayoutEffect,g=r.forwardRef((function(e,t){var o=e.alignItems,l=void 0===o?"center":o,g=e.autoFocus,h=void 0!==g&&g,y=e.button,f=void 0!==y&&y,v=e.children,b=e.classes,Z=e.className,x=e.component,C=e.ContainerComponent,N=void 0===C?"li":C,k=e.ContainerProps,w=(k=void 0===k?{}:k).className,E=(0,n.Z)(k,["className"]),B=e.dense,I=void 0!==B&&B,S=e.disabled,A=void 0!==S&&S,R=e.disableGutters,M=void 0!==R&&R,T=e.divider,L=void 0!==T&&T,P=e.focusVisibleClassName,V=e.selected,z=void 0!==V&&V,W=(0,n.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=r.useContext(p.Z),$={dense:I||F.dense||!1,alignItems:l},D=r.useRef(null);m((function(){h&&D.current&&D.current.focus()}),[h]);var O=r.Children.toArray(v),j=O.length&&(0,c.Z)(O[O.length-1],["ListItemSecondaryAction"]),G=r.useCallback((function(e){D.current=u.findDOMNode(e)}),[]),q=(0,d.Z)(G,t),H=(0,a.Z)({className:(0,i.Z)(b.root,Z,$.dense&&b.dense,!M&&b.gutters,L&&b.divider,A&&b.disabled,f&&b.button,"center"!==l&&b.alignItemsFlexStart,j&&b.secondaryAction,z&&b.selected),disabled:A},W),J=x||"li";return f&&(H.component=x||"div",H.focusVisibleClassName=(0,i.Z)(b.focusVisible,P),J=s.Z),j?(J=H.component||x?J:"div","li"===N&&("li"===J?J="div":"li"===H.component&&(H.component="div")),r.createElement(p.Z.Provider,{value:$},r.createElement(N,(0,a.Z)({className:(0,i.Z)(b.container,w),ref:q},E),r.createElement(J,H,O),O.pop()))):r.createElement(p.Z.Provider,{value:$},r.createElement(J,(0,a.Z)({ref:q},H),O))}));t.Z=(0,l.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(g)},4800:function(e,t,o){var a=o(5773),n=o(3782),r=o(7378),i=o(8037),l=o(582),s=o(7405),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=r.forwardRef((function(e,t){var o=e.align,l=void 0===o?"inherit":o,d=e.classes,p=e.className,u=e.color,m=void 0===u?"initial":u,g=e.component,h=e.display,y=void 0===h?"initial":h,f=e.gutterBottom,v=void 0!==f&&f,b=e.noWrap,Z=void 0!==b&&b,x=e.paragraph,C=void 0!==x&&x,N=e.variant,k=void 0===N?"body1":N,w=e.variantMapping,E=void 0===w?c:w,B=(0,n.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=g||(C?"p":E[k]||c[k])||"span";return r.createElement(I,(0,a.Z)({className:(0,i.Z)(d.root,p,"inherit"!==k&&d[k],"initial"!==m&&d["color".concat((0,s.Z)(m))],Z&&d.noWrap,v&&d.gutterBottom,C&&d.paragraph,"inherit"!==l&&d["align".concat((0,s.Z)(l))],"initial"!==y&&d["display".concat((0,s.Z)(y))]),ref:t},B))}));t.Z=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)}}]);
//# sourceMappingURL=03ea334709855e953bb712b7f830a812236f018c-ca523378aeb0fbb07400.js.map
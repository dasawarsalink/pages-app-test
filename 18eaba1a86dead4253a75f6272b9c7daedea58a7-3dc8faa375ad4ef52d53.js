"use strict";(self.webpackChunkmainagen=self.webpackChunkmainagen||[]).push([[1166],{9988:function(t,n,e){e.d(n,{Z:function(){return j}});var i=e(5773),o=e(3782),r=e(7378),a=(e(5884),e(8037)),s=e(582),u=e(1542),l=e(8338),c=e(9376),d=e(7284),f=e(9122),p=e(6938),h=e(4125),v=e(8943),E=e(6054),m=e(639),g=e(2799);function x(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var b={entering:{opacity:1,transform:x(1)},entered:{opacity:1,transform:"none"}},y=r.forwardRef((function(t,n){var e=t.children,a=t.disableStrictModeCompat,s=void 0!==a&&a,u=t.in,l=t.onEnter,c=t.onEntered,d=t.onEntering,f=t.onExit,p=t.onExited,y=t.onExiting,C=t.style,Z=t.timeout,k=void 0===Z?"auto":Z,S=t.TransitionComponent,T=void 0===S?v.ZP:S,w=(0,o.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),D=r.useRef(),P=r.useRef(),M=(0,E.Z)(),N=M.unstable_strictMode&&!s,O=r.useRef(null),R=(0,g.Z)(e.ref,n),F=(0,g.Z)(N?O:void 0,R),I=function(t){return function(n,e){if(t){var i=N?[O.current,n]:[n,e],o=(0,h.Z)(i,2),r=o[0],a=o[1];void 0===a?t(r):t(r,a)}}},L=I(d),z=I((function(t,n){(0,m.n)(t);var e,i=(0,m.C)({style:C,timeout:k},{mode:"enter"}),o=i.duration,r=i.delay;"auto"===k?(e=M.transitions.getAutoHeightDuration(t.clientHeight),P.current=e):e=o,t.style.transition=[M.transitions.create("opacity",{duration:e,delay:r}),M.transitions.create("transform",{duration:.666*e,delay:r})].join(","),l&&l(t,n)})),H=I(c),A=I(y),K=I((function(t){var n,e=(0,m.C)({style:C,timeout:k},{mode:"exit"}),i=e.duration,o=e.delay;"auto"===k?(n=M.transitions.getAutoHeightDuration(t.clientHeight),P.current=n):n=i,t.style.transition=[M.transitions.create("opacity",{duration:n,delay:o}),M.transitions.create("transform",{duration:.666*n,delay:o||.333*n})].join(","),t.style.opacity="0",t.style.transform=x(.75),f&&f(t)})),W=I(p);return r.useEffect((function(){return function(){clearTimeout(D.current)}}),[]),r.createElement(T,(0,i.Z)({appear:!0,in:u,nodeRef:N?O:void 0,onEnter:z,onEntered:H,onEntering:L,onExit:K,onExited:W,onExiting:A,addEndListener:function(t,n){var e=N?t:n;"auto"===k&&(D.current=setTimeout(e,P.current||0))},timeout:"auto"===k?null:k},w),(function(t,n){return r.cloneElement(e,(0,i.Z)({style:(0,i.Z)({opacity:0,transform:x(.75),visibility:"exited"!==t||u?void 0:"hidden"},b[t],C,e.props.style),ref:F},n))}))}));y.muiSupportAuto=!0;var C=y,Z=e(3991);function k(t,n){var e=0;return"number"==typeof n?e=n:"center"===n?e=t.height/2:"bottom"===n&&(e=t.height),e}function S(t,n){var e=0;return"number"==typeof n?e=n:"center"===n?e=t.width/2:"right"===n&&(e=t.width),e}function T(t){return[t.horizontal,t.vertical].map((function(t){return"number"==typeof t?"".concat(t,"px"):t})).join(" ")}function w(t){return"function"==typeof t?t():t}var D=r.forwardRef((function(t,n){var e=t.action,s=t.anchorEl,h=t.anchorOrigin,v=void 0===h?{vertical:"top",horizontal:"left"}:h,E=t.anchorPosition,m=t.anchorReference,g=void 0===m?"anchorEl":m,x=t.children,b=t.classes,y=t.className,D=t.container,P=t.elevation,M=void 0===P?8:P,N=t.getContentAnchorEl,O=t.marginThreshold,R=void 0===O?16:O,F=t.onEnter,I=t.onEntered,L=t.onEntering,z=t.onExit,H=t.onExited,A=t.onExiting,K=t.open,W=t.PaperProps,j=void 0===W?{}:W,U=t.transformOrigin,X=void 0===U?{vertical:"top",horizontal:"left"}:U,B=t.TransitionComponent,G=void 0===B?C:B,V=t.transitionDuration,Y=void 0===V?"auto":V,_=t.TransitionProps,q=void 0===_?{}:_,J=(0,o.Z)(t,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),Q=r.useRef(),$=r.useCallback((function(t){if("anchorPosition"===g)return E;var n=w(s),e=(n&&1===n.nodeType?n:(0,c.Z)(Q.current).body).getBoundingClientRect(),i=0===t?v.vertical:"center";return{top:e.top+k(e,i),left:e.left+S(e,v.horizontal)}}),[s,v.horizontal,v.vertical,E,g]),tt=r.useCallback((function(t){var n=0;if(N&&"anchorEl"===g){var e=N(t);if(e&&t.contains(e)){var i=function(t,n){for(var e=n,i=0;e&&e!==t;)i+=(e=e.parentElement).scrollTop;return i}(t,e);n=e.offsetTop+e.clientHeight/2-i||0}0}return n}),[v.vertical,g,N]),nt=r.useCallback((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:k(t,X.vertical)+n,horizontal:S(t,X.horizontal)}}),[X.horizontal,X.vertical]),et=r.useCallback((function(t){var n=tt(t),e={width:t.offsetWidth,height:t.offsetHeight},i=nt(e,n);if("none"===g)return{top:null,left:null,transformOrigin:T(i)};var o=$(n),r=o.top-i.vertical,a=o.left-i.horizontal,u=r+e.height,l=a+e.width,c=(0,d.Z)(w(s)),f=c.innerHeight-R,p=c.innerWidth-R;if(r<R){var h=r-R;r-=h,i.vertical+=h}else if(u>f){var v=u-f;r-=v,i.vertical+=v}if(a<R){var E=a-R;a-=E,i.horizontal+=E}else if(l>p){var m=l-p;a-=m,i.horizontal+=m}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(a),"px"),transformOrigin:T(i)}}),[s,g,$,tt,nt,R]),it=r.useCallback((function(){var t=Q.current;if(t){var n=et(t);null!==n.top&&(t.style.top=n.top),null!==n.left&&(t.style.left=n.left),t.style.transformOrigin=n.transformOrigin}}),[et]),ot=r.useCallback((function(t){Q.current=u.findDOMNode(t)}),[]);r.useEffect((function(){K&&it()})),r.useImperativeHandle(e,(function(){return K?{updatePosition:function(){it()}}:null}),[K,it]),r.useEffect((function(){if(K){var t=(0,l.Z)((function(){it()}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}}),[K,it]);var rt=Y;"auto"!==Y||G.muiSupportAuto||(rt=void 0);var at=D||(s?(0,c.Z)(w(s)).body:void 0);return r.createElement(p.Z,(0,i.Z)({container:at,open:K,ref:n,BackdropProps:{invisible:!0},className:(0,a.Z)(b.root,y)},J),r.createElement(G,(0,i.Z)({appear:!0,in:K,onEnter:F,onEntered:I,onExit:z,onExited:H,onExiting:A,timeout:rt},q,{onEntering:(0,f.Z)((function(t,n){L&&L(t,n),it()}),q.onEntering)}),r.createElement(Z.Z,(0,i.Z)({elevation:M,ref:ot},j,{className:(0,a.Z)(b.paper,j.className)}),x)))})),P=(0,s.Z)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(D),M=e(7576),N=e(2313);function O(t,n,e){return t===n?t.firstChild:n&&n.nextElementSibling?n.nextElementSibling:e?null:t.firstChild}function R(t,n,e){return t===n?e?t.firstChild:t.lastChild:n&&n.previousElementSibling?n.previousElementSibling:e?null:t.lastChild}function F(t,n){if(void 0===n)return!0;var e=t.innerText;return void 0===e&&(e=t.textContent),0!==(e=e.trim().toLowerCase()).length&&(n.repeating?e[0]===n.keys[0]:0===e.indexOf(n.keys.join("")))}function I(t,n,e,i,o,r){for(var a=!1,s=o(t,n,!!n&&e);s;){if(s===t.firstChild){if(a)return;a=!0}var u=!i&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&F(s,r)&&!u)return void s.focus();s=o(t,s,e)}}var L="undefined"==typeof window?r.useEffect:r.useLayoutEffect,z=r.forwardRef((function(t,n){var e=t.actions,a=t.autoFocus,s=void 0!==a&&a,l=t.autoFocusItem,d=void 0!==l&&l,f=t.children,p=t.className,h=t.disabledItemsFocusable,v=void 0!==h&&h,E=t.disableListWrap,m=void 0!==E&&E,x=t.onKeyDown,b=t.variant,y=void 0===b?"selectedMenu":b,C=(0,o.Z)(t,["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),Z=r.useRef(null),k=r.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});L((function(){s&&Z.current.focus()}),[s]),r.useImperativeHandle(e,(function(){return{adjustStyleForScrollbar:function(t,n){var e=!Z.current.style.width;if(t.clientHeight<Z.current.clientHeight&&e){var i="".concat((0,N.Z)(!0),"px");Z.current.style["rtl"===n.direction?"paddingLeft":"paddingRight"]=i,Z.current.style.width="calc(100% + ".concat(i,")")}return Z.current}}}),[]);var S=r.useCallback((function(t){Z.current=u.findDOMNode(t)}),[]),T=(0,g.Z)(S,n),w=-1;r.Children.forEach(f,(function(t,n){r.isValidElement(t)&&(t.props.disabled||("selectedMenu"===y&&t.props.selected||-1===w)&&(w=n))}));var D=r.Children.map(f,(function(t,n){if(n===w){var e={};return d&&(e.autoFocus=!0),void 0===t.props.tabIndex&&"selectedMenu"===y&&(e.tabIndex=0),r.cloneElement(t,e)}return t}));return r.createElement(M.Z,(0,i.Z)({role:"menu",ref:T,className:p,onKeyDown:function(t){var n=Z.current,e=t.key,i=(0,c.Z)(n).activeElement;if("ArrowDown"===e)t.preventDefault(),I(n,i,m,v,O);else if("ArrowUp"===e)t.preventDefault(),I(n,i,m,v,R);else if("Home"===e)t.preventDefault(),I(n,null,m,v,O);else if("End"===e)t.preventDefault(),I(n,null,m,v,R);else if(1===e.length){var o=k.current,r=e.toLowerCase(),a=performance.now();o.keys.length>0&&(a-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&r!==o.keys[0]&&(o.repeating=!1)),o.lastTime=a,o.keys.push(r);var s=i&&!o.repeating&&F(i,o);o.previousKeyMatched&&(s||I(n,i,!1,v,O,o))?t.preventDefault():o.previousKeyMatched=!1}x&&x(t)},tabIndex:s?0:-1},C),D)})),H=e(8011),A={vertical:"top",horizontal:"right"},K={vertical:"top",horizontal:"left"},W=r.forwardRef((function(t,n){var e=t.autoFocus,s=void 0===e||e,l=t.children,c=t.classes,d=t.disableAutoFocusItem,f=void 0!==d&&d,p=t.MenuListProps,h=void 0===p?{}:p,v=t.onClose,m=t.onEntering,g=t.open,x=t.PaperProps,b=void 0===x?{}:x,y=t.PopoverClasses,C=t.transitionDuration,Z=void 0===C?"auto":C,k=t.TransitionProps,S=(k=void 0===k?{}:k).onEntering,T=(0,o.Z)(k,["onEntering"]),w=t.variant,D=void 0===w?"selectedMenu":w,M=(0,o.Z)(t,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","onEntering","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"]),N=(0,E.Z)(),O=s&&!f&&g,R=r.useRef(null),F=r.useRef(null),I=-1;r.Children.map(l,(function(t,n){r.isValidElement(t)&&(t.props.disabled||("menu"!==D&&t.props.selected||-1===I)&&(I=n))}));var L=r.Children.map(l,(function(t,n){return n===I?r.cloneElement(t,{ref:function(n){F.current=u.findDOMNode(n),(0,H.Z)(t.ref,n)}}):t}));return r.createElement(P,(0,i.Z)({getContentAnchorEl:function(){return F.current},classes:y,onClose:v,TransitionProps:(0,i.Z)({onEntering:function(t,n){R.current&&R.current.adjustStyleForScrollbar(t,N),m&&m(t,n),S&&S(t,n)}},T),anchorOrigin:"rtl"===N.direction?A:K,transformOrigin:"rtl"===N.direction?A:K,PaperProps:(0,i.Z)({},b,{classes:(0,i.Z)({},b.classes,{root:c.paper})}),open:g,ref:n,transitionDuration:Z},M),r.createElement(z,(0,i.Z)({onKeyDown:function(t){"Tab"===t.key&&(t.preventDefault(),v&&v(t,"tabKeyDown"))},actions:R,autoFocus:s&&(-1===I||f),autoFocusItem:O,variant:D},h,{className:(0,a.Z)(c.list,h.className)}),L))})),j=(0,s.Z)({paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},{name:"MuiMenu"})(W)},639:function(t,n,e){e.d(n,{n:function(){return i},C:function(){return o}});var i=function(t){return t.scrollTop};function o(t,n){var e=t.timeout,i=t.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"==typeof e?e:e[n.mode]||0,delay:o.transitionDelay}}},8943:function(t,n,e){e.d(n,{ZP:function(){return E}});var i=e(808),o=e(4314),r=e(7378),a=e(1542),s=!1,u=e(2291),l="unmounted",c="exited",d="entering",f="entered",p="exiting",h=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var o,r=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?r?(o=c,i.appearStatus=d):o=f:o=n.unmountOnExit||n.mountOnEnter?l:c,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:c}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==d&&e!==f&&(n=d):e!==d&&e!==f||(n=p)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!=typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[a.findDOMNode(this),i],r=o[0],u=o[1],l=this.getTimeouts(),c=i?l.appear:l.enter;!t&&!e||s?this.safeSetState({status:f},(function(){n.props.onEntered(r)})):(this.props.onEnter(r,u),this.safeSetState({status:d},(function(){n.props.onEntering(r,u),n.onTransitionEnd(c,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(r,u)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);n&&!s?(this.props.onExit(i),this.safeSetState({status:p},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],r=o[0],s=o[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(u.Z.Provider,{value:null},"function"==typeof e?e(t,o):r.cloneElement(r.Children.only(e),o))},n}(r.Component);function v(){}h.contextType=u.Z,h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},h.UNMOUNTED=l,h.EXITED=c,h.ENTERING=d,h.ENTERED=f,h.EXITING=p;var E=h}}]);
//# sourceMappingURL=18eaba1a86dead4253a75f6272b9c7daedea58a7-3dc8faa375ad4ef52d53.js.map
(self.webpackChunkmainserv=self.webpackChunkmainserv||[]).push([[631],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,n){var r=n(2858),i=n(3884),o=n(379),a=n(521);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||a()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,n){var r=n(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},494:function(t,e,n){"use strict";var r=n(2122),i=n(8481),o=n(1253),a=n(7294),s=n(1423),c=n(381),u=n(9355),l=n(9701),f=n(1291),v={entering:{opacity:1},entered:{opacity:1}},d={enter:c.x9.enteringScreen,exit:c.x9.leavingScreen},p=a.forwardRef((function(t,e){var n=t.children,c=t.disableStrictModeCompat,p=void 0!==c&&c,h=t.in,m=t.onEnter,y=t.onEntered,g=t.onEntering,x=t.onExit,b=t.onExited,w=t.onExiting,E=t.style,P=t.TransitionComponent,S=void 0===P?s.ZP:P,Z=t.timeout,I=void 0===Z?d:Z,k=(0,o.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),N=(0,u.Z)(),T=N.unstable_strictMode&&!p,M=a.useRef(null),A=(0,f.Z)(n.ref,e),C=(0,f.Z)(T?M:void 0,A),O=function(t){return function(e,n){if(t){var r=T?[M.current,e]:[e,n],o=(0,i.Z)(r,2),a=o[0],s=o[1];void 0===s?t(a):t(a,s)}}},_=O(g),B=O((function(t,e){(0,l.n)(t);var n=(0,l.C)({style:E,timeout:I},{mode:"enter"});t.style.webkitTransition=N.transitions.create("opacity",n),t.style.transition=N.transitions.create("opacity",n),m&&m(t,e)})),R=O(y),j=O(w),H=O((function(t){var e=(0,l.C)({style:E,timeout:I},{mode:"exit"});t.style.webkitTransition=N.transitions.create("opacity",e),t.style.transition=N.transitions.create("opacity",e),x&&x(t)})),U=O(b);return a.createElement(S,(0,r.Z)({appear:!0,in:h,nodeRef:T?M:void 0,onEnter:B,onEntered:R,onEntering:_,onExit:H,onExited:U,onExiting:j,timeout:I},k),(function(t,e){return a.cloneElement(n,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==t||h?void 0:"hidden"},v[t],E,n.props.style),ref:C},e))}))}));e.Z=p},199:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.Z}});var r=n(494)},2184:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.Z}});var r=n(3729)},4604:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(2122),i=n(1253),o=n(7294),a=n(3935),s=n(1510),c=n(1423),u=n(1291),l=n(9355),f=n(381),v=n(9701);function d(t,e){var n=function(t,e){var n,r=e.getBoundingClientRect();if(e.fakeTransform)n=e.fakeTransform;else{var i=window.getComputedStyle(e);n=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}var o=0,a=0;if(n&&"none"!==n&&"string"==typeof n){var s=n.split("(")[1].split(")")[0].split(",");o=parseInt(s[4],10),a=parseInt(s[5],10)}return"left"===t?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===t?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===t?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-r.top,"px)"):"translateY(-".concat(r.top+r.height-a,"px)")}(t,e);n&&(e.style.webkitTransform=n,e.style.transform=n)}var p={enter:f.x9.enteringScreen,exit:f.x9.leavingScreen},h=o.forwardRef((function(t,e){var n=t.children,f=t.direction,h=void 0===f?"down":f,m=t.in,y=t.onEnter,g=t.onEntered,x=t.onEntering,b=t.onExit,w=t.onExited,E=t.onExiting,P=t.style,S=t.timeout,Z=void 0===S?p:S,I=t.TransitionComponent,k=void 0===I?c.ZP:I,N=(0,i.Z)(t,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=(0,l.Z)(),M=o.useRef(null),A=o.useCallback((function(t){M.current=a.findDOMNode(t)}),[]),C=(0,u.Z)(n.ref,A),O=(0,u.Z)(C,e),_=function(t){return function(e){t&&(void 0===e?t(M.current):t(M.current,e))}},B=_((function(t,e){d(h,t),(0,v.n)(t),y&&y(t,e)})),R=_((function(t,e){var n=(0,v.C)({timeout:Z,style:P},{mode:"enter"});t.style.webkitTransition=T.transitions.create("-webkit-transform",(0,r.Z)({},n,{easing:T.transitions.easing.easeOut})),t.style.transition=T.transitions.create("transform",(0,r.Z)({},n,{easing:T.transitions.easing.easeOut})),t.style.webkitTransform="none",t.style.transform="none",x&&x(t,e)})),j=_(g),H=_(E),U=_((function(t){var e=(0,v.C)({timeout:Z,style:P},{mode:"exit"});t.style.webkitTransition=T.transitions.create("-webkit-transform",(0,r.Z)({},e,{easing:T.transitions.easing.sharp})),t.style.transition=T.transitions.create("transform",(0,r.Z)({},e,{easing:T.transitions.easing.sharp})),d(h,t),b&&b(t)})),F=_((function(t){t.style.webkitTransition="",t.style.transition="",w&&w(t)})),D=o.useCallback((function(){M.current&&d(h,M.current)}),[h]);return o.useEffect((function(){if(!m&&"down"!==h&&"right"!==h){var t=(0,s.Z)((function(){M.current&&d(h,M.current)}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}}),[h,m]),o.useEffect((function(){m||D()}),[m,D]),o.createElement(k,(0,r.Z)({nodeRef:M,onEnter:B,onEntered:j,onEntering:R,onExit:U,onExited:F,onExiting:H,appear:!0,in:m,timeout:Z},N),(function(t,e){return o.cloneElement(n,(0,r.Z)({ref:O,style:(0,r.Z)({visibility:"exited"!==t||m?void 0:"hidden"},P,n.props.style)},e))}))}))},3018:function(t,e,n){"use strict";n.r(e),n.d(e,{MuiThemeProvider:function(){return j.Z},ServerStyleSheets:function(){return B},StylesProvider:function(){return O.ZP},ThemeProvider:function(){return j.Z},alpha:function(){return r.Fq},createGenerateClassName:function(){return _.Z},createMuiTheme:function(){return i.A},createStyles:function(){return s},createTheme:function(){return i.Z},darken:function(){return r._j},decomposeColor:function(){return r.tB},duration:function(){return b.x9},easing:function(){return b.Ui},emphasize:function(){return r._4},fade:function(){return r.U1},getContrastRatio:function(){return r.mi},getLuminance:function(){return r.H3},hexToRgb:function(){return r.oo},hslToRgb:function(){return r.ve},jssPreset:function(){return R.Z},lighten:function(){return r.$n},makeStyles:function(){return c.Z},recomposeColor:function(){return r.wy},responsiveFontSizes:function(){return g},rgbToHex:function(){return r.vq},styled:function(){return x.Z},unstable_createMuiStrictModeTheme:function(){return a},useTheme:function(){return w.Z},withStyles:function(){return E.Z},withTheme:function(){return T}});var r=n(7595),i=n(79),o=n(7643);function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return i.Z.apply(void 0,[(0,o.Z)({unstable_strictMode:!0},t)].concat(n))}function s(t){return t}var c=n(920),u=n(2122),l=n(2192),f=n(6156);function v(t){return String(parseFloat(t)).length===String(t).length}function d(t){return parseFloat(t)}function p(t){return function(e,n){var r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return e;var i=d(e);if("px"!==r)if("em"===r)i=d(e)*d(t);else if("rem"===r)return i=d(e)*d(t),e;var o=i;if("px"!==n)if("em"===n)o=i/d(t);else{if("rem"!==n)return e;o=i/d(t)}return parseFloat(o.toFixed(5))+n}}function h(t){var e=t.size,n=t.grid,r=e-e%n,i=r+n;return e-r<i-e?r:i}function m(t){var e=t.lineHeight;return t.pixels/(e*t.htmlFontSize)}function y(t){var e=t.cssProperty,n=t.min,r=t.max,i=t.unit,o=void 0===i?"rem":i,a=t.breakpoints,s=void 0===a?[600,960,1280]:a,c=t.transform,u=void 0===c?null:c,l=(0,f.Z)({},e,"".concat(n).concat(o)),v=(r-n)/s[s.length-1];return s.forEach((function(t){var r=n+v*t;null!==u&&(r=u(r)),l["@media (min-width:".concat(t,"px)")]=(0,f.Z)({},e,"".concat(Math.round(1e4*r)/1e4).concat(o))})),l}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.breakpoints,r=void 0===n?["sm","md","lg"]:n,i=e.disableAlign,o=void 0!==i&&i,a=e.factor,s=void 0===a?2:a,c=e.variants,f=void 0===c?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:c,d=(0,u.Z)({},t);d.typography=(0,u.Z)({},d.typography);var g=d.typography,x=p(g.htmlFontSize),b=r.map((function(t){return d.breakpoints.values[t]}));return f.forEach((function(t){var e=g[t],n=parseFloat(x(e.fontSize,"rem"));if(!(n<=1)){var r=n,i=1+(r-1)/s,a=e.lineHeight;if(!v(a)&&!o)throw new Error((0,l.Z)(6));v(a)||(a=parseFloat(x(a,"rem"))/parseFloat(n));var c=null;o||(c=function(t){return h({size:t,grid:m({pixels:4,lineHeight:a,htmlFontSize:g.htmlFontSize})})}),g[t]=(0,u.Z)({},e,y({cssProperty:"fontSize",min:i,max:r,unit:"rem",breakpoints:b,transform:c}))}})),d}var x=n(519),b=n(381),w=n(9355),E=n(638),P=n(1253),S=n(7294),Z=n(5706),I=n.n(Z),k=n(4427);function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.defaultTheme,n=function(t){var n=S.forwardRef((function(n,r){var i=n.innerRef,o=(0,P.Z)(n,["innerRef"]),a=(0,k.Z)()||e;return S.createElement(t,(0,u.Z)({theme:a,ref:i||r},o))}));return I()(n,t),n};return n}N();var T=N({defaultTheme:n(4982).Z}),M=n(6610),A=n(5991),C=n(2085),O=n(8226),_=n(3334),B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,M.Z)(this,t),this.options=e}return(0,A.Z)(t,[{key:"collect",value:function(t){var e=new Map;this.sheetsRegistry=new C.xE;var n=(0,_.Z)();return S.createElement(O.ZP,(0,u.Z)({sheetsManager:e,serverGenerateClassName:n,sheetsRegistry:this.sheetsRegistry},this.options),t)}},{key:"toString",value:function(){return this.sheetsRegistry?this.sheetsRegistry.toString():""}},{key:"getStyleElement",value:function(t){return S.createElement("style",(0,u.Z)({id:"jss-server-side",key:"jss-server-side",dangerouslySetInnerHTML:{__html:this.toString()}},t))}}]),t}(),R=n(5997),j=n(7761)},519:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var r=n(2122),i=n(1253),o=n(7294),a=n(5505),s=n(5706),c=n.n(s),u=n(7627);function l(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}var f=n(4982),v=function(t){var e=function(t){return function(e){var n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=s.name,v=(0,i.Z)(s,["name"]),d=f,p="function"==typeof e?function(t){return{root:function(n){return e((0,r.Z)({theme:t},n))}}}:{root:e},h=(0,u.Z)(p,(0,r.Z)({Component:t,name:f||t.displayName,classNamePrefix:d},v));e.filterProps&&(n=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var m=o.forwardRef((function(e,s){var c=e.children,u=e.className,f=e.clone,v=e.component,d=(0,i.Z)(e,["children","className","clone","component"]),p=h(e),m=(0,a.Z)(p.root,u),y=d;if(n&&(y=l(y,n)),f)return o.cloneElement(c,(0,r.Z)({className:(0,a.Z)(c.props.className,m)},y));if("function"==typeof c)return c((0,r.Z)({className:m},y));var g=v||t;return o.createElement(g,(0,r.Z)({ref:s,className:m},y),c)}));return c()(m,t),m}}(t);return function(t,n){return e(t,(0,r.Z)({defaultTheme:f.Z},n))}}},5067:function(t,e,n){"use strict";var r=n(5318),i=n(862);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(7294)),a=(0,r(n(8786)).default)(o.createElement("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");e.default=a},3102:function(t,e,n){"use strict";var r=n(5318),i=n(862);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(7294)),a=(0,r(n(8786)).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");e.default=a},4343:function(t,e,n){"use strict";var r=n(5318),i=n(862);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(7294)),a=(0,r(n(8786)).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");e.default=a},9110:function(t,e,n){"use strict";var r=n(3038);function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t,e){e=Object.assign({},e);var n,o=function(t){var n=function(e){return"string"==typeof e?t===e:e.test(t)};return e.include?e.include.some(n):!e.exclude||!e.exclude.some(n)},a=i(function(t){var e=new Set;do{var n,r=i(Reflect.ownKeys(t));try{for(r.s();!(n=r.n()).done;){var o=n.value;e.add([t,o])}}catch(a){r.e(a)}finally{r.f()}}while((t=Reflect.getPrototypeOf(t))&&t!==Object.prototype);return e}(t.constructor.prototype));try{for(a.s();!(n=a.n()).done;){var s=r(n.value,2),c=s[0],u=s[1];if("constructor"!==u&&o(u)){var l=Reflect.getOwnPropertyDescriptor(c,u);l&&"function"==typeof l.value&&(t[u]=t[u].bind(t))}}}catch(f){a.e(f)}finally{a.f()}return t};var a=["componentWillMount","UNSAFE_componentWillMount","render","getSnapshotBeforeUpdate","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","UNSAFE_componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","setState","forceUpdate"];t.exports.react=function(e,n){return(n=Object.assign({},n)).exclude=(n.exclude||[]).concat(a),t.exports(e,n)}},7245:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(7294),a=m(o),s=m(n(199)),c=m(n(4604)),u=m(n(2184)),l=n(3018),f=m(n(9110)),v=m(n(5067)),d=m(n(3102)),p=m(n(4343)),h=n(9970);function m(t){return t&&t.__esModule?t:{default:t}}var y=function(t){return void 0!==t?{style:void 0!==t.style?t.style:{},className:void 0!==t.className?t.className:""}:{style:{},className:""}},g=function(t){var e=void 0!==t.animation?t.animation:"fade",n=void 0!==t.timeout?t.timeout:"fade"===e?500:200;return{className:void 0!==t.className?t.className:"",children:t.children?t.children:[],index:void 0!==t.index?t.index:0,strictIndexing:void 0===t.strictIndexing||t.strictIndexing,autoPlay:void 0===t.autoPlay||t.autoPlay,stopAutoPlayOnHover:void 0===t.stopAutoPlayOnHover||t.stopAutoPlayOnHover,interval:void 0!==t.interval?t.interval:4e3,animation:e,timeout:n,swipe:void 0===t.swipe||t.swipe,navButtonsAlwaysInvisible:void 0!==t.navButtonsAlwaysInvisible&&t.navButtonsAlwaysInvisible,navButtonsAlwaysVisible:void 0!==t.navButtonsAlwaysVisible&&t.navButtonsAlwaysVisible,cycleNavigation:void 0===t.cycleNavigation||t.cycleNavigation,fullHeightHover:void 0===t.fullHeightHover||t.fullHeightHover,navButtonsWrapperProps:y(t.navButtonsWrapperProps),navButtonsProps:y(t.navButtonsProps),NavButton:t.NavButton,NextIcon:void 0!==t.NextIcon?t.NextIcon:a.default.createElement(p.default,null),PrevIcon:void 0!==t.PrevIcon?t.PrevIcon:a.default.createElement(d.default,null),indicators:void 0===t.indicators||t.indicators,indicatorContainerProps:y(t.indicatorContainerProps),indicatorIconButtonProps:y(t.indicatorIconButtonProps),activeIndicatorIconButtonProps:y(t.activeIndicatorIconButtonProps),IndicatorIcon:t.IndicatorIcon,onChange:void 0!==t.onChange?t.onChange:function(){},changeOnFirstRender:void 0!==t.changeOnFirstRender&&t.changeOnFirstRender,next:void 0!==t.next?t.next:function(){},prev:void 0!==t.prev?t.prev:function(){}}},x=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return(0,f.default)(n),n.state={active:0,prevActive:0,displayed:0},n.timer=null,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"componentDidMount",value:function(){var t=g(this.props),e=t.index,n=t.changeOnFirstRender;this.setActive(e,void 0,n),this.start()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentDidUpdate",value:function(t,e){t=g(t);var n=g(this.props),r=n.autoPlay,i=n.interval,o=n.children,a=n.index;r===t.autoPlay&&i===t.interval||this.reset(),o.length!==t.children.length&&this.setActive(a),t.index!==a&&this.setActive(a)}},{key:"stop",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"start",value:function(){var t=g(this.props),e=t.autoPlay,n=t.interval;e&&(this.timer=setInterval(this.next,n))}},{key:"reset",value:function(){var t=g(this.props).autoPlay;this.stop(),t&&this.start()}},{key:"setActive",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=g(this.props),o=i.onChange,a=i.timeout,s=i.children,c=i.strictIndexing;Array.isArray(s)?(c&&t>s.length-1&&(t=s.length-1),c&&t<0&&(t=0)):t=0;var u=this.state.active;this.setState({active:t,prevActive:u,displayed:u},this.reset),setTimeout((function(){e.setState({displayed:t},(function(){r&&(n(t,u),o(t,u))}))}),a.exit?a.exit:a)}},{key:"next",value:function(t){var e=g(this.props),n=e.children,r=e.next,i=e.cycleNavigation,o=this.state.active+1>n.length-1?i?0:this.state.active:this.state.active+1;this.setActive(o,r),t&&t.stopPropagation()}},{key:"prev",value:function(t){var e=g(this.props),n=e.children,r=e.prev,i=e.cycleNavigation,o=this.state.active-1<0?i?n.length-1:this.state.active:this.state.active-1;this.setActive(o,r),t&&t.stopPropagation()}},{key:"render",value:function(){var t=this,e=g(this.props),n=e.children,r=e.className,i=e.stopAutoPlayOnHover,o=e.animation,s=e.timeout,c=e.swipe,l=e.navButtonsAlwaysInvisible,f=e.navButtonsAlwaysVisible,v=e.cycleNavigation,d=e.fullHeightHover,p=e.navButtonsProps,h=e.navButtonsWrapperProps,m=e.NavButton,y=e.NextIcon,x=e.PrevIcon,E=e.indicators,P=e.indicatorContainerProps,S=e.indicatorIconButtonProps,Z=e.activeIndicatorIconButtonProps,I=e.IndicatorIcon,k=this.props.classes,N=""+(f?k.buttonVisible:k.buttonHidden),T=k.button+" "+N+" "+(d?k.fullHeightHoverButton:"")+" "+p.className,M=k.buttonWrapper+" "+(d?k.fullHeightHoverWrapper:"")+" "+h.className,A=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!v||!(e&&t.state.active+1>n.length-1)&&!(!e&&t.state.active-1<0)};return a.default.createElement("div",{className:k.root+" "+(r||""),onMouseOver:function(){i&&t.stop()},onMouseOut:function(){i&&t.reset()}},Array.isArray(n)?n.map((function(e,r){return a.default.createElement(b,{key:"carousel-item"+r,display:r===t.state.displayed,active:r===t.state.active,isNext:(0!==t.state.active||t.state.prevActive!==n.length-1)&&(t.state.active===n.length-1&&0===t.state.prevActive||t.state.active>t.state.prevActive),child:e,animation:o,timeout:s,swipe:c,next:t.next,prev:t.prev})})):a.default.createElement(b,{key:"carousel-item0",display:!0,active:!0,child:n,animation:o,timeout:s}),!l&&A(!0)&&a.default.createElement("div",{className:M+" "+k.next,style:h.style},void 0!==m?m({onClick:this.next,className:T,style:p.style,next:!0,prev:!1}):a.default.createElement(u.default,{className:""+T,onClick:this.next,"aria-label":"Next",style:p.style},y)),!l&&A(!1)&&a.default.createElement("div",{className:M+" "+k.prev,style:h.style},void 0!==m?m({onClick:this.prev,className:T,style:p.style,next:!1,prev:!0}):a.default.createElement(u.default,{className:""+T,onClick:this.prev,"aria-label":"Previous",style:p.style},x)),E?a.default.createElement(w,{classes:k,length:n.length,active:this.state.active,press:this.setActive,indicatorContainerProps:P,indicatorIconButtonProps:S,activeIndicatorIconButtonProps:Z,IndicatorIcon:I}):null)}}]),e}(o.Component);function b(t){var e=(0,h.useSwipeable)({onSwipedLeft:function(){return t.next()},onSwipedRight:function(){return t.prev()}});return e=t.swipe?e:{},t.display?a.default.createElement("div",r({},e,{className:"CarouselItem"}),"slide"===t.animation?a.default.createElement(c.default,{direction:t.active?t.isNext?"left":"right":t.isNext?"right":"left",in:t.active,timeout:t.timeout},a.default.createElement("div",null,t.child)):a.default.createElement(s.default,{in:t.active,timeout:t.timeout},a.default.createElement("div",null,t.child))):null}function w(t){for(var e=t.classes,n=void 0!==t.IndicatorIcon?t.IndicatorIcon:a.default.createElement(v.default,{size:"small",className:e.indicatorIcon}),r=[],i=function(i){var o=i===t.active?e.indicator+" "+t.indicatorIconButtonProps.className+" "+e.active+" "+t.activeIndicatorIconButtonProps.className:e.indicator+" "+t.indicatorIconButtonProps.className,s=i===t.active?Object.assign({},t.indicatorIconButtonProps.style,t.activeIndicatorIconButtonProps.style):t.indicatorIconButtonProps.style,c=a.default.createElement(u.default,{key:i,className:o,style:s,onClick:function(){t.press(i)},size:"small"},n);r.push(c)},o=0;o<t.length;o++)i(o);var s=void 0!==t.indicatorContainerProps?t.indicatorContainerProps.style:void 0,c=void 0!==t.indicatorContainerProps?t.indicatorContainerProps.className:"";return a.default.createElement("div",{className:e.indicators+" "+c,style:s},r)}e.default=(0,l.withStyles)({root:{position:"relative",overflow:"hidden"},indicators:{width:"100%",marginTop:"10px",textAlign:"center"},indicator:{cursor:"pointer",transition:"200ms",padding:0,color:"#afafaf","&:hover":{color:"#1f1f1f"},"&:active":{color:"#1f1f1f"}},indicatorIcon:{fontSize:"15px"},active:{color:"#494949"},buttonWrapper:{position:"absolute",height:"100px",backgroundColor:"transparent",top:"calc(50% - 70px)","&:hover":{"& $button":{backgroundColor:"black",filter:"brightness(120%)",opacity:"0.4"}}},fullHeightHoverWrapper:{height:"100%",top:"0"},buttonVisible:{opacity:"1"},buttonHidden:{opacity:"0"},button:{margin:"0 10px",position:"relative",backgroundColor:"#494949",top:"calc(50% - 20px) !important",color:"white",fontSize:"30px",transition:"200ms",cursor:"pointer","&:hover":{opacity:"0.6 !important"}},next:{right:0},prev:{left:0}})(x)},3405:function(t,e,n){"use strict";var r,i=n(7245),o=(r=i)&&r.__esModule?r:{default:r};e.Z=o.default},9970:function(t,e,n){!function(t,e){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var r="Left",i="Right",o="Up",a="Down",s={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},c={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},u="mousemove",l="mouseup",f="touchend",v="touchmove",d="touchstart";function p(t,e,n,s){return t>e?n>0?i:r:s>0?a:o}function h(t,e){if(0===e)return t;var n=Math.PI/180*e;return[t[0]*Math.cos(n)+t[1]*Math.sin(n),t[1]*Math.cos(n)-t[0]*Math.sin(n)]}function m(t,e){var r=function(e){e&&"touches"in e&&e.touches.length>1||t((function(t,r){r.trackMouse&&(document.addEventListener(u,i),document.addEventListener(l,s));var o="touches"in e?e.touches[0]:e,a=h([o.clientX,o.clientY],r.rotationAngle);return n({},t,c,{initial:[].concat(a),xy:a,start:e.timeStamp||0})}))},i=function(e){t((function(t,r){if("touches"in e&&e.touches.length>1)return t;var i="touches"in e?e.touches[0]:e,o=h([i.clientX,i.clientY],r.rotationAngle),a=o[0],s=o[1],c=a-t.xy[0],u=s-t.xy[1],l=Math.abs(c),f=Math.abs(u),v=(e.timeStamp||0)-t.start,d=Math.sqrt(l*l+f*f)/(v||1),m=[c/(v||1),u/(v||1)];if(l<r.delta&&f<r.delta&&!t.swiping)return t;var y=p(l,f,c,u),g={absX:l,absY:f,deltaX:c,deltaY:u,dir:y,event:e,first:t.first,initial:t.initial,velocity:d,vxvy:m};g.first&&r.onSwipeStart&&r.onSwipeStart(g),r.onSwiping&&r.onSwiping(g);var x=!1;return(r.onSwiping||r.onSwiped||"onSwiped"+y in r)&&(x=!0),x&&r.preventDefaultTouchmoveEvent&&r.trackTouch&&e.cancelable&&e.preventDefault(),n({},t,{first:!1,eventData:g,swiping:!0})}))},o=function(e){t((function(t,r){var i;if(t.swiping&&t.eventData){i=n({},t.eventData,{event:e}),r.onSwiped&&r.onSwiped(i);var o="onSwiped"+i.dir;o in r&&r[o](i)}else r.onTap&&r.onTap({event:e});return n({},t,c,{eventData:i})}))},a=function(){document.removeEventListener(u,i),document.removeEventListener(l,s)},s=function(t){a(),o(t)},m=function(t,e){var n=function(){};if(t&&t.addEventListener){var a=[[d,r],[v,i],[f,o]];a.forEach((function(n){var r=n[0],i=n[1];return t.addEventListener(r,i,{passive:e})})),n=function(){return a.forEach((function(e){var n=e[0],r=e[1];return t.removeEventListener(n,r)}))}}return n},y={ref:function(e){null!==e&&t((function(t,r){if(t.el===e)return t;var i={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),i.cleanUpTouch=void 0),r.trackTouch&&e&&(i.cleanUpTouch=m(e,!r.preventDefaultTouchmoveEvent)),n({},t,{el:e},i)}))}};return e.trackMouse&&(y.onMouseDown=r),[y,m]}function y(t,e,r){var i={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),i.cleanUpTouch=void 0):e.trackTouch&&!t.cleanUpTouch&&t.el&&(i.cleanUpTouch=r(t.el,!e.preventDefaultTouchmoveEvent)),n({},t,i)}function g(t){var r=t.trackMouse,i=e.useRef(n({},c)),o=e.useRef(n({},s));o.current=n({},s,t);var a=e.useMemo((function(){return m((function(t){return i.current=t(i.current,o.current)}),{trackMouse:r})}),[r]),u=a[0],l=a[1];return i.current=y(i.current,o.current,l),u}t.DOWN=a,t.LEFT=r,t.RIGHT=i,t.UP=o,t.useSwipeable=g}(e,n(7294))}}]);
//# sourceMappingURL=05b89518c551404c2555bd60df8311db99125477-788b9c62bd5ae329b33d.js.map
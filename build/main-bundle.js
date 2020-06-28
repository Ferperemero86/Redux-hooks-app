module.exports=function(e){var t={},r={5:0};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.e=function(t){if(0!==r[t]){var n=require("./"+t+".main-bundle.js"),o=n.modules,u=n.ids;for(var i in o)e[i]=o[i];for(var a=0;a<u.length;a++)r[u[a]]=0}return Promise.all([])},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=15)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(17)),o=l(r(18)),u=l(r(0)),i=r(14),a=r(10);function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,l(r(8)).default)((function(t){return(0,o.default)({id:"./",load:function(){return Promise.all([r(24)("./"+t.page)]).then((function(e){return e[0]}))},path:function(){return n.default.join(e,"./"+t.page)},resolve:function(){return r(25).resolve("./"+t.page)},chunkName:function(){return""+t.page}})}));t.default=function(){return u.default.createElement("div",null,u.default.createElement("div",{className:"nav"},u.default.createElement(i.Link,{to:"/"},"Gallery"),u.default.createElement(i.Link,{to:"/about"},"About"),u.default.createElement(i.Link,{to:"/article"},"Article")),u.default.createElement(a.Switch,null,u.default.createElement(i.Route,{exact:!0,path:"/"},u.default.createElement(c,{page:"Gallery"})),u.default.createElement(i.Route,{path:"/about"},u.default.createElement(c,{page:"About"})),u.default.createElement(i.Route,{path:"/article"},u.default.createElement(c,{page:"Article"}))))}}).call(this,"/")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9);t.default=function(e){return(0,n.isWebpack)()||"string"!=typeof e?r(""+e):r(20)(""+e)}},,,,,,function(e,t,r){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.setHasBabelPlugin=t.ReportChunks=t.MODULE_IDS=t.CHUNK_NAMES=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(19);Object.defineProperty(t,"CHUNK_NAMES",{enumerable:!0,get:function(){return i.CHUNK_NAMES}}),Object.defineProperty(t,"MODULE_IDS",{enumerable:!0,get:function(){return i.MODULE_IDS}});var a=r(21);Object.defineProperty(t,"ReportChunks",{enumerable:!0,get:function(){return y(a).default}}),t.default=function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.render,a=n.loading,y=void 0===a?d.DefaultLoading:a,O=n.error,S=void 0===O?d.DefaultError:O,E=n.minDelay,j=void 0===E?0:E,P=n.alwaysDelay,w=void 0!==P&&P,k=n.testBabelPlugin,x=void 0!==k&&k,M=n.loadingTransition,A=void 0===M||M,D=b(n,["render","loading","error","minDelay","alwaysDelay","testBabelPlugin","loadingTransition"]),C=i||(0,d.createDefaultRender)(y,S),q=_||x;return D.isDynamic=q,D.usesBabelPlugin=_,D.modCache={},D.promCache={},r=t=function(t){function r(e,t){v(this,r);var n=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.update=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n._initialized&&(e.error||(e.error=null),n.handleAfter(e,t,r,o))},n.state=n.init(n.props,n.context),n.state.error=null,n}return m(r,t),u(r,[{key:"requireAsyncInner",value:function(e,t,r,n,o){var u=this;!r.mod&&A&&this.update({mod:null,props:t});var i=new Date;e(t,n).then((function(e){var r={mod:e,props:t,context:n},a=new Date-i;if(a<j)return setTimeout((function(){return u.update(r,o)}),j-a);u.update(r,o)})).catch((function(e){return u.update({error:e,props:t,context:n})}))}},{key:"handleBefore",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.props.onBefore){var n=this.props.onBefore,o={isMount:e,isSync:t,isServer:r};n(o)}}},{key:"handleAfter",value:function(e,t,n,o){var u=e.mod,i=e.error;u&&!i?((0,f.default)(r,u,{preload:!0,preloadWeak:!0}),this.props.onAfter&&(0,this.props.onAfter)({isMount:t,isSync:n,isServer:o},u)):i&&this.props.onError&&this.props.onError(i);this.setState(e)}},{key:"init",value:function(t,r){var n=(0,s.default)(e,D,t),o=n.addModule,u=n.requireSync,i=n.requireAsync,a=n.asyncOnly,l=void 0;try{l=u(t,r)}catch(e){return(0,p.__update)(t,{error:e,props:t,context:r},this._initialized)}this._asyncOnly=a;var c=o(t);return r.report&&r.report(c),l||d.isServer?(this.handleBefore(!0,!0,d.isServer),(0,p.__update)(t,{asyncOnly:a,props:t,mod:l,context:r},this._initialized,!0,!0,d.isServer)):(this.handleBefore(!0,!1),this.requireAsyncInner(i,t,{props:t,asyncOnly:a,mod:l,context:r},r,!0),{mod:l,asyncOnly:a,context:r,props:t})}}],[{key:"preload",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t||{};var o=(0,s.default)(e,D,t),u=o.requireAsync,i=o.requireSync,a=void 0;try{a=i(t,n)}catch(e){return Promise.reject(e)}return Promise.resolve().then((function(){return a||u(t,n)})).then((function(e){return(0,f.default)(r,e,{preload:!0,preloadWeak:!0}),e}))}},{key:"preloadWeak",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t||{};var o=(0,s.default)(e,D,t),u=o.requireSync,i=u(t,n);return i&&(0,f.default)(r,i,{preload:!0,preloadWeak:!0}),i}}]),u(r,[{key:"componentDidMount",value:function(){this._initialized=!0}},{key:"componentDidUpdate",value:function(t){var r=this;if(q||this._asyncOnly){var n=(0,s.default)(e,D,this.props,t),o=n.requireSync,u=n.requireAsync;if((0,n.shouldUpdate)(this.props,t)){var i=void 0;try{i=o(this.props,this.context)}catch(e){return this.update({error:e})}if(this.handleBefore(!1,!!i),!i)return this.requireAsyncInner(u,this.props,{mod:i});var a={mod:i};if(w)return A&&this.update({mod:null}),void setTimeout((function(){return r.update(a,!1,!0)}),j);this.update(a,!1,!0)}}}},{key:"componentWillUnmount",value:function(){this._initialized=!1}},{key:"render",value:function(){var e=this.props,t=e.isLoading,r=e.error,n=b(e,["isLoading","error"]),o=this.state,u=o.mod,i=o.error;return C(n,u,t,r||i)}}],[{key:"getDerivedStateFromProps",value:function(t,r){var n=(0,s.default)(e,D,t,r.props),u=n.requireSync,i=n.shouldUpdate;if(g()&&i(r.props,t)){var a=u(t,r.context);return o({},r,{mod:a})}return null}}]),r}(l.default.Component),t.contextTypes={store:c.default.object,report:c.default.func},r};var l=y(r(0)),c=y(r(12)),f=y(r(13)),s=(r(22),y(i)),d=r(9),p=r(23);function y(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var _=!1,g=function(){return e.hot&&!1};t.setHasBabelPlugin=function(){_=!0}}).call(this,r(11)(e))},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.cacheProm=t.loadFromPromiseCache=t.cacheExport=t.loadFromCache=t.callForString=t.createDefaultRender=t.createElement=t.findExport=t.resolveExport=t.tryRequire=t.DefaultError=t.DefaultLoading=t.babelInterop=t.isWebpack=t.isServer=t.isTest=void 0;var o,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),l=r(2),c=(o=l)&&o.__esModule?o:{default:o};t.isTest=!1;var f=t.isServer=!("undefined"!=typeof window&&window.document&&window.document.createElement),s=(t.isWebpack=function(){return void 0!==r},t.babelInterop=function(e){return e&&"object"===(void 0===e?"undefined":i(e))&&e.__esModule?e.default:e}),d=(t.DefaultLoading=function(){return a.createElement("div",null,"Loading...")},t.DefaultError=function(e){var t=e.error;return a.createElement("div",null,"Error: ",t&&t.message)},t.tryRequire=function(e){try{return(0,c.default)(e)}catch(e){0}return null},t.resolveExport=function(e,t,r,n,o,u,i){var a=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l=d(e,t);if(r&&e){var c="undefined"==typeof window,f={isServer:c,isSync:a};r(e,f,o,u)}return n&&l&&v(l,n,o,i),l},t.findExport=function(e,t){return"function"==typeof t?t(e):null===t?e:e&&"object"===(void 0===e?"undefined":i(e))&&t?e[t]:s(e)}),p=t.createElement=function(e,t){return a.isValidElement(e)?a.cloneElement(e,t):a.createElement(e,t)},y=(t.createDefaultRender=function(e,t){return function(r,n,o,i){return o?p(e,r):i?p(t,u({},r,{error:i})):p(n||e,r)}},t.callForString=function(e,t){return"function"==typeof e?e(t):e}),v=(t.loadFromCache=function(e,t,r){return!f&&r[y(e,t)]},t.cacheExport=function(e,t,r,n){return n[y(t,r)]=e});t.loadFromPromiseCache=function(e,t,r){return r[y(e,t)]},t.cacheProm=function(e,t,r,n){return n[y(t,r)]=e}},function(e,t){e.exports=require("react-router")},function(e,t,r){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("hoist-non-react-statics")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0)),o=a(r(16)),u=r(10),i=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){t.send('\n        <html>\n            <head>\n                <link href="style.css" rel="stylesheet">\n            </head>\n            <body>\n                <div id="root">'+o.default.renderToString(n.default.createElement(u.StaticRouter,{location:e.url,context:{}},n.default.createElement(i.default,null)))+'</div>\n                <script src="main-bundle.js"><\/script>\n            </body>\n        </html>\n    ')}}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";(function(e){e.exports=function(e,t){if(!1===t)return e;var r=e.load;return e.then=function(e){return r().then((function(t){return e&&e(t)}))},e.catch=function(e){return r().catch((function(t){return e&&e(t)}))},e};var t=!1;!function(){if(!t){var n,o=void 0!==r;try{if(o){n=r(8)}else{n=("undefined"==typeof require?e.require:require)("react-universal-component")}n&&(n.setHasBabelPlugin(),t=!0)}catch(e){}}}()}).call(this,r(11)(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChunks=t.flushModuleIds=t.flushChunkNames=t.MODULE_IDS=t.CHUNK_NAMES=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e,t,n,l){var c=t.key,f=t.timeout,s=void 0===f?15e3:f,d=t.onLoad,p=t.onError,y=t.isDynamic,v=t.modCache,h=t.promCache,m=t.usesBabelPlugin,b=a(y,e,t,n),_=b.chunkName,g=b.path,O=b.resolve,S=b.load;return{requireSync:function(e,t){var n=(0,o.loadFromCache)(_,e,v);if(!n){var u=void 0;if(!(0,o.isWebpack)()&&g){var i=(0,o.callForString)(g,e)||"";u=(0,o.tryRequire)(i)}else if((0,o.isWebpack)()&&O){var a=(0,o.callForString)(O,e);r.m[a]&&(u=(0,o.tryRequire)(a))}u&&(n=(0,o.resolveExport)(u,c,d,_,e,t,v,!0))}return n},requireAsync:function(e,t){var r=(0,o.loadFromCache)(_,e,v);if(r)return Promise.resolve(r);var n=(0,o.loadFromPromiseCache)(_,e,h);if(n)return n;var u=new Promise((function(r,n){var u=function(e){if(e=e||new Error("timeout exceeded"),clearTimeout(i),p){var t="undefined"==typeof window;p(e,{isServer:t})}n(e)},i=s&&setTimeout(u,s),a=function(n){clearTimeout(i);var a=(0,o.resolveExport)(n,c,d,_,e,t,v);if(a)return r(a);u(new Error("export not found"))},l=S(e,{resolve:a,reject:u});l&&"function"==typeof l.then&&l.then(a).catch(u)}));return(0,o.cacheProm)(u,_,e,h),u},addModule:function(e){if(o.isServer||o.isTest){if(_){var r=(0,o.callForString)(_,e);if(m)t&&!!t.ignoreBabelRename||(r=r.replace(/\//g,"-"));if(r&&u.add(r),!o.isTest)return r}if((0,o.isWebpack)()){var n=(0,o.callForString)(O,e);return n&&i.add(n),n}if(!(0,o.isWebpack)()){var a=(0,o.callForString)(g,e);return a&&i.add(a),a}}},shouldUpdate:function(r,n){var u=(0,o.callForString)(_,r),i=a(y,e,t,n);return u!==(0,o.callForString)(i.chunkName,n)},asyncOnly:!g&&!O||"function"==typeof _}};var o=r(9),u=t.CHUNK_NAMES=new Set,i=t.MODULE_IDS=new Set;t.flushChunkNames=function(){var e=Array.from(u);return u.clear(),e},t.flushModuleIds=function(){var e=Array.from(i);return i.clear(),e},t.clearChunks=function(){u.clear(),i.clear()};var a=function(e,t,r,o){if(e){var u="function"==typeof t?t(o):t;return r&&(u=n({},u,r)),u}var i="function"==typeof t?t:function(){return t};return{file:"default",id:r.id||"default",chunkName:r.chunkName||"default",resolve:r.resolve||"",path:r.path||"",load:i,ignoreBabelRename:!0}}},function(e,t,r){var n={".":2,"./":2,"./index":2,"./index.js":2};function o(e){var t=u(e);return r(t)}function u(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=u,e.exports=o,o.id=20},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=a(r(0)),i=a(r(12));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}var f=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getChildContext",value:function(){return{report:this.props.report}}},{key:"render",value:function(){return u.default.Children.only(this.props.children)}}]),t}(u.default.Component);f.propTypes={report:i.default.func.isRequired},f.childContextTypes={report:i.default.func.isRequired},t.default=f},function(e,t){e.exports=require("vm")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.__handleAfter=t.__update=void 0;var n=u(r(13)),o=u(r(8));function u(e){return e&&e.__esModule?e:{default:e}}t.__update=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return r?(t.error||(t.error=null),i(e,t,n,o,u)):t};var i=t.__handleAfter=function(e,t,r,u,i){var a=t.mod,l=t.error;a&&!l?((0,n.default)(o.default,a,{preload:!0,preloadWeak:!0}),e.onAfter&&(0,e.onAfter)({isMount:r,isSync:u,isServer:i},a)):l&&e.onError&&e.onError(l);return t}},function(e,t,r){var n={"./About":[4,0],"./About.js":[4,0],"./AppRoot":[5,1],"./AppRoot.js":[5,1],"./Article":[6,2],"./Article.js":[6,2],"./Counter":[3,3],"./Counter.js":[3,3],"./Gallery":[7,4],"./Gallery.js":[7,4],"./Routes":[1],"./Routes.js":[1]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(n)},o.id=24,e.exports=o},function(e,t,r){var n={"./About":4,"./About.js":4,"./AppRoot":5,"./AppRoot.js":5,"./Article":6,"./Article.js":6,"./Counter":3,"./Counter.js":3,"./Gallery":7,"./Gallery.js":7,"./Routes":1,"./Routes.js":1};function o(e){var t=u(e);if(!r.m[t]){var n=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw n.code="MODULE_NOT_FOUND",n}return r(t)}function u(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=u,o.id=25,e.exports=o}]);
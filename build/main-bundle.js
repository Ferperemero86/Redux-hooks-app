module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),u=a(n(2)),l=n(3),o=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){t.send('\n        <html>\n            <head>\n                <link href="style.css" rel="stylesheet">\n            </head>\n            <body>\n                <div id="root">'+u.default.renderToString(r.default.createElement(l.StaticRouter,{location:e.url,context:{}},r.default.createElement(o.default,null)))+'</div>\n                <script src="main-bundle.js"><\/script>\n            </body>\n        </html>\n    ')}}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(0)),u=n(5),l=c(n(6)),o=c(n(7)),a=c(n(8));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"nav"},r.default.createElement(u.Link,{to:"/"},"Gallery"),r.default.createElement(u.Link,{to:"/about"},"About"),r.default.createElement(u.Link,{to:"/article"},"Article")),r.default.createElement(u.Route,{exact:!0,path:"/",component:l.default}),r.default.createElement(u.Route,{exact:!0,path:"/about",component:o.default}),r.default.createElement(u.Route,{exact:!0,path:"/article",component:a.default}))}},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),l=(r=u)&&r.__esModule?r:{default:r};t.default=function(){return l.default.createElement("h1",null,"Gallery")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),l=(r=u)&&r.__esModule?r:{default:r};t.default=function(){return l.default.createElement("h1",null,"About")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),l=(r=u)&&r.__esModule?r:{default:r};t.default=function(){return l.default.createElement("h1",null,"Article")}}]);
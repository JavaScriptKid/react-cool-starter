webpackJsonp([1],{468:function(e,t,n){"use strict";var r=n(226),o=n.n(r),u=n(477),a=n.n(u),c=n(479),i=n.n(c),f=n(480),l=n.n(f),s=n(482),p=n.n(s),d=n(481),_=n.n(d),y=n(0),v=n.n(y),h=n(134),m=n.n(h),b=n(137),E=n.n(b),O=n(71),g=(n.n(O),n(85)),U=n.n(g),j=n(475),x=n(491),I=n(498),S=n.n(I),M=function(e){function t(){var e,n,r,o;i()(this,t);for(var u=arguments.length,c=Array(u),f=0;f<u;f++)c[f]=arguments[f];return n=r=p()(this,(e=t.__proto__||a()(t)).call.apply(e,[this].concat(c))),r.displayUserCard=function(){var e=r.props,t=e.userInfo,n=e.params,o=t.get(n.id);return o&&o.get("readyState")!==j.a?o.get("readyState")===j.b?v.a.createElement("p",null,"Oops, Failed to load info!"):v.a.createElement(x.a,{info:o.get("info")}):v.a.createElement("p",null,"Loading...")},o=n,p()(r,o)}return _()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.dispatch,r=e.params;t.fetchData(n,r)}},{key:"shouldComponentUpdate",value:function(e,t){return E()(this,e,t)}},{key:"render",value:function(){return v.a.createElement("div",{className:S.a.UserInfo},v.a.createElement(U.a,{title:"User Info"}),this.displayUserCard())}}],[{key:"fetchData",value:function(e,t){return o.a.all([e(j.c(t.id))])}}]),t}(y.Component);M.propTypes={dispatch:y.PropTypes.func,params:y.PropTypes.objectOf(y.PropTypes.string),userInfo:m.a.map};var P=function(e){return{userInfo:e.get("userInfo")}};t.default=n.i(O.connect)(P)(M)},471:function(e,t,n){e.exports={default:n(472),__esModule:!0}},472:function(e,t,n){n(473);var r=n(13).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},473:function(e,t,n){var r=n(45);r(r.S+r.F*!n(29),"Object",{defineProperty:n(30).f})},475:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return f});var r="AN_USER_REQUESTING",o="AN_USER_SUCCESS",u="AN_USER_FAILURE",a="https://jsonplaceholder.typicode.com/users",c=function(e,t){return function(n){return n({type:r,userId:e}),t.get(a+"/"+e).then(function(t){n({type:o,userId:e,data:t.data})}).catch(function(t){n({type:u,userId:e,err:t})})}},i=function(e,t){var n=e.getIn(["userInfo",t]);return!n||n.get("readyState")!==o},f=function(e){return function(t,n,r){return i(n(),e)?t(c(e,r)):null}}},476:function(e,t,n){e.exports={default:n(483),__esModule:!0}},477:function(e,t,n){e.exports={default:n(484),__esModule:!0}},478:function(e,t,n){e.exports={default:n(485),__esModule:!0}},479:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},480:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(471),u=r(o);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},481:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(478),u=r(o),a=n(476),c=r(a),i=n(225),f=r(i);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,f.default)(t)));e.prototype=(0,c.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u.default?(0,u.default)(e,t):e.__proto__=t)}},482:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(225),u=r(o);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,u.default)(t))&&"function"!=typeof t?e:t}},483:function(e,t,n){n(488);var r=n(13).Object;e.exports=function(e,t){return r.create(e,t)}},484:function(e,t,n){n(489),e.exports=n(13).Object.getPrototypeOf},485:function(e,t,n){n(490),e.exports=n(13).Object.setPrototypeOf},486:function(e,t,n){var r=n(45),o=n(13),u=n(46);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*u(function(){n(1)}),"Object",a)}},487:function(e,t,n){var r=n(47),o=n(22),u=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n(58)(Function.call,n(227).f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return u(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:u}},488:function(e,t,n){var r=n(45);r(r.S,"Object",{create:n(135)})},489:function(e,t,n){var r=n(136),o=n(228);n(486)("getPrototypeOf",function(){return function(e){return o(r(e))}})},490:function(e,t,n){var r=n(45);r(r.S,"Object",{setPrototypeOf:n(487).set})},491:function(e,t,n){"use strict";var r=n(0),o=n.n(r),u=n(134),a=n.n(u),c=n(494),i=n.n(c),f=function(e){var t=e.info;return o.a.createElement("div",{className:i.a.UserCard},o.a.createElement("h4",null,"User Card"),o.a.createElement("ul",null,o.a.createElement("li",null,"Name: ",t.get("name")),o.a.createElement("li",null,"Phone: ",t.get("phone")),o.a.createElement("li",null,"Email: ",t.get("email")),o.a.createElement("li",null,"Website: ",t.get("website"))))};f.propTypes={info:a.a.map.isRequired},t.a=f},494:function(e,t){e.exports={UserCard:"_1xOhFM7UqX9vtudJe8RxKO"}},498:function(e,t){e.exports={UserInfo:"_3ahu5Tqdv3qZ0_PIihEOZG"}}});
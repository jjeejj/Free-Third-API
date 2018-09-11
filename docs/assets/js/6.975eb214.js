(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"用户模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户模块")]),a._v(" "),t("h2",{attrs:{id:"用户注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户注册","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户注册")]),a._v(" "),t("p",[t("code",[a._v("接口描述")]),a._v(" : "),t("code",[a._v("用户注册接口,返回用户注册的后的状态")])]),a._v(" "),t("p",[t("code",[a._v("请求路径")]),a._v(" :  "),t("code",[a._v("/api/user/register")])]),a._v(" "),t("p",[t("code",[a._v("请求方法")]),a._v(" :  "),t("code",[a._v("POST")])]),a._v(" "),t("p",[t("code",[a._v("请求头")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Content-Type: application/json\n")])])]),t("p",[t("code",[a._v("请求参数")]),a._v(" :")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "username": "",\n    "password": "",\n    "emai": ""\n}\n')])])]),t("p",[t("code",[a._v("响应数据")]),a._v(" :")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "code": "",\n    "msg": "",\n    "data": {\n\n    }\n}\n')])])]),t("h2",{attrs:{id:"用户登陆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户登陆","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户登陆")]),a._v(" "),t("p",[t("code",[a._v("接口描述")]),a._v(" : "),t("code",[a._v("用户登陆接口,返回用户的基本信息和登陆后的 token")])]),a._v(" "),t("p",[t("code",[a._v("请求路径")]),a._v(" :  "),t("code",[a._v("/api/user/login")])]),a._v(" "),t("p",[t("code",[a._v("请求方法")]),a._v(" :  "),t("code",[a._v("POST")])]),a._v(" "),t("p",[t("code",[a._v("请求头")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Content-Type: application/json\n")])])]),t("p",[t("code",[a._v("请求参数")]),a._v(" :")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"username"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('""')]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"password"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("code",[a._v("响应数据")]),a._v(" :")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"code"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('""')]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"msg"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('""')]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"data"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        \n    "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"用户列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户列表")]),a._v(" "),t("p",[t("code",[a._v("接口描述")]),a._v(" : "),t("code",[a._v("请求用户列表, 用到登陆接口返回的 token 进行认证")])]),a._v(" "),t("p",[t("code",[a._v("请求路径")]),a._v(" :  "),t("code",[a._v("/api/user/list/:page")])]),a._v(" "),t("p",[t("code",[a._v("请求方法")]),a._v(" :  "),t("code",[a._v("GET")])]),a._v(" "),t("p",[t("code",[a._v("请求头")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Authorization: Bearer  token\n")])])]),t("p",[t("code",[a._v("请求参数")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("page"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 第几页  required\n")])])]),t("p",[t("code",[a._v("响应数据")]),a._v(" :")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"code"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('""')]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"msg"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('""')]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{attrs:{class:"token property"}},[a._v('"data"')]),t("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        \n    "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);
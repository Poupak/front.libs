(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).vi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{locale:"vi",pluralRuleFunction:function(e,t){return t&&1==e?"one":"other"},fields:{year:{displayName:"Năm",relative:{0:"năm nay",1:"năm sau","-1":"năm ngoái"},relativeTime:{future:{other:"trong {0} năm nữa"},past:{other:"{0} năm trước"}}},month:{displayName:"Tháng",relative:{0:"tháng này",1:"tháng sau","-1":"tháng trước"},relativeTime:{future:{other:"trong {0} tháng nữa"},past:{other:"{0} tháng trước"}}},day:{displayName:"Ngày",relative:{0:"hôm nay",1:"ngày mai",2:"ngày kia","-1":"hôm qua","-2":"hôm kia"},relativeTime:{future:{other:"trong {0} ngày nữa"},past:{other:"{0} ngày trước"}}},hour:{displayName:"Giờ",relativeTime:{future:{other:"trong {0} giờ nữa"},past:{other:"{0} giờ trước"}}},minute:{displayName:"Phút",relativeTime:{future:{other:"trong {0} phút nữa"},past:{other:"{0} phút trước"}}},second:{displayName:"Giây",relative:{0:"bây giờ"},relativeTime:{future:{other:"trong {0} giây nữa"},past:{other:"{0} giây trước"}}}}},{locale:"vi-VN",parentLocale:"vi"}],module.exports=exports["default"];
},{}]},{},[1])(1)
});
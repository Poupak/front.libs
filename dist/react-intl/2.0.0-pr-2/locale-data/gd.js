(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).gd = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{locale:"gd",pluralRuleFunction:function(a,n){var e=String(a).split("."),o=Number(e[0])==a;return n?"other":1==a||11==a?"one":2==a||12==a?"two":o&&a>=3&&10>=a||o&&a>=13&&19>=a?"few":"other"},fields:{year:{displayName:"bliadhna",relative:{0:"am bliadhna",1:"an ath-bhliadhna","-1":"an-uiridh","-2":"a-bhòn-uiridh"},relativeTime:{future:{one:"an ceann {0} bhliadhna",two:"an ceann {0} bhliadhna",few:"an ceann {0} bliadhnaichean",other:"an ceann {0} bliadhna"},past:{one:"o chionn {0} bhliadhna",two:"o chionn {0} bhliadhna",few:"o chionn {0} bliadhnaichean",other:"o chionn {0} bliadhna"}}},month:{displayName:"mìos",relative:{0:"am mìos seo",1:"an ath-mhìos","-1":"am mìos seo chaidh"},relativeTime:{future:{one:"an ceann {0} mhìosa",two:"an ceann {0} mhìosa",few:"an ceann {0} mìosan",other:"an ceann {0} mìosa"},past:{one:"o chionn {0} mhìosa",two:"o chionn {0} mhìosa",few:"o chionn {0} mìosan",other:"o chionn {0} mìosa"}}},day:{displayName:"latha",relative:{0:"an-diugh",1:"a-màireach",2:"an-earar",3:"an-eararais","-1":"an-dè","-2":"a-bhòin-dè"},relativeTime:{future:{one:"an ceann {0} latha",two:"an ceann {0} latha",few:"an ceann {0} làithean",other:"an ceann {0} latha"},past:{one:"o chionn {0} latha",two:"o chionn {0} latha",few:"o chionn {0} làithean",other:"o chionn {0} latha"}}},hour:{displayName:"uair a thìde",relativeTime:{future:{one:"an ceann {0} uair a thìde",two:"an ceann {0} uair a thìde",few:"an ceann {0} uairean a thìde",other:"an ceann {0} uair a thìde"},past:{one:"o chionn {0} uair a thìde",two:"o chionn {0} uair a thìde",few:"o chionn {0} uairean a thìde",other:"o chionn {0} uair a thìde"}}},minute:{displayName:"mionaid",relativeTime:{future:{one:"an ceann {0} mhionaid",two:"an ceann {0} mhionaid",few:"an ceann {0} mionaidean",other:"an ceann {0} mionaid"},past:{one:"o chionn {0} mhionaid",two:"o chionn {0} mhionaid",few:"o chionn {0} mionaidean",other:"o chionn {0} mionaid"}}},second:{displayName:"diog",relative:{0:"now"},relativeTime:{future:{one:"an ceann {0} diog",two:"an ceann {0} dhiog",few:"an ceann {0} diogan",other:"an ceann {0} diog"},past:{one:"o chionn {0} diog",two:"o chionn {0} dhiog",few:"o chionn {0} diogan",other:"o chionn {0} diog"}}}}},{locale:"gd-GB",parentLocale:"gd"}],module.exports=exports["default"];
},{}]},{},[1])(1)
});
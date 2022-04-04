// ==UserScript==
// @name         Otakudesu Mirror
// @namespace    gvoze32/otakudesumirror
// @version      2.1.0
// @description  Force 720p mirror as default player.
// @author       gvoze32
// @grant        none
// @match        *://*.otakudesu.site/*
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/gvoze32/otakudesumirror/main/otakudesumirror.user.js
// @downloadURL  https://raw.githubusercontent.com/gvoze32/otakudesumirror/main/otakudesumirror.user.js
// ==/UserScript==

var urlName = window.location.href.toString()
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
var rand = getRndInteger(1,3)
console.log(rand)

if (urlName.indexOf("otakudesu") != -1) {
    if (urlName.indexOf("?mirror") != -1) return false;
    var oldPath = window.location.pathname;
    if (!/\?mirror="$/.test(oldPath)) {
    var newPath = oldPath + "?mirror-720p=" + rand;
    window.location.replace(newPath);
    }
}

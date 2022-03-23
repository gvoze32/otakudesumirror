// ==UserScript==
// @name         Otakudesu Mirror
// @namespace    gvoze32/otakudesumirror
// @version      1.0.0
// @description  Force 720p mirror as default player.
// @author       gvoze32
// @grant        none
// @match        *://*.otakudesu.live/*
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/gvoze32/otakudesumirror/main/otakudesumirror.user.js
// @downloadURL  https://raw.githubusercontent.com/gvoze32/otakudesumirror/main/otakudesumirror.user.js
// ==/UserScript==

var urlName = window.location.href.toString()
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
var rand = random(1, 3);

if (urlName.indexOf("otakudesu") != -1) {
    if (urlName.indexOf("?page=all") != -1) return false;
    var oldPath = window.location.pathname;
    if (!/\?mirror-720p=$rand$/.test(oldPath)) {
    var newPath = oldPath + "?mirror-720p=$rand";
    window.location.replace(newPath);
    }
}

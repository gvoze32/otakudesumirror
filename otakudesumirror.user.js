// ==UserScript==
// @name         Otakudesu Mirror
// @namespace    gvoze32/otakudesumirror
// @version      2.3.0
// @description  Force 720p mirror as default player.
// @author       gvoze32
// @grant        GM_addStyle
// @match        *://*.otakudesu.watch/episode/*
// @run-at       document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/gvoze32/otakudesumirror/main/otakudesumirror.user.js
// @downloadURL  https://raw.githubusercontent.com/gvoze32/otakudesumirror/main/otakudesumirror.user.js
// ==/UserScript==



var items = document.body.getElementsByTagName("a");
for (var i = 0; i < items.length; ++i) {
    if (items[i].textContent == "ondesuhd") {
        items[i].click();
        console.log("clicked", i) 
    } else {
        console.log("loop",i)
    } 
}

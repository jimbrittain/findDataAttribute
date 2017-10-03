"use strict";
/* global window, IMDebugger, $, __imns, console */
(function(){
    var adr = __imns('util.dom');
    // var adr = window; //for stand-alone delete above and uncomment this line
    if(!('findDataAttributeNS' in adr)){
        adr.isDataAttributeLabel = function(n){
            var uv = __imns('util.validation');
            return (uv.isString(n) && n.indexOf('data-') === 0 && n.length > 5) ? true : false; };
        adr.camelCaseDataAttributeLabel = function(n){
            var ud = __imns('util.dom');
            if(ud.isDataAttributeLabel(n)){
                n = n.substring(5);
                var arr = n.split('-');
                if(arr.length > 1){
                    for(var i=1, imax=arr.length; i<imax; i+=1){
                        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); }}
                n = arr.join(''); }
            return n; };
        adr.hasDataSet = function(o){ return ('dataset' in o) ? true : false; };
        adr.hasDataAttribute = function(o, n){
            var ud = __imns('util.dom'),
                uv = __imns('util.validation');
            if (uv.isHTMLElement(o) && uv.isString(n)){
                if(ud.hasDataSet(o)){
                    n = ud.camelCaseDataAttributeLabel(n);
                    return (n.length > 0 && n in o.dataset) ? true : false;
                } else {
                    return uv.hasAttribute(o, n); }}
            return false; };
        adr.findDataAttribute = function(o, n){
            var ud = __imns('util.dom'),
                uv = __imns('util.validation');
            if (uv.isHTMLElement(o) && uv.isString(n)) {
                if ('dataset' in o) {
                    n = ud.camelCaseDataAttributeLabel(n);
                    return (n.length > 0 && n in o.dataset) ? o.dataset[n] : null;
                } else {
                    return ud.getAttribute(o, n); }}
            return null; };
        adr.getDataAttribute = adr.findDataAttribute; //alias for findDataAttribute;
        adr.setDataAttribute = function(o, n, v){
            var ud = __imns('util.dom'),
                uv = __imns('util.validation');
            //need to look at v to make sure is string if not convert;
            if(uv.isHTMLElement(o) && uv.isString(n)){
                if('dataset' in o){
                    n  = ud.camelCaseDataAttributeLabel(n);
                    if (n.length > 0) {
                        o.dataset[n] = v;
                        return o.dataset[n]; }
                } else {
                    ud.setAttribute(o, n, v);
                    return ud.getAttribute(o, n); }}
            return false; };
    }
})();

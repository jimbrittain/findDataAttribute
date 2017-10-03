"use strict";
describe('findDataAttribute test suite', function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/c/Namespace/Namespace.js',
            'dist/f/isString/isStringNS.js',
            'dist/f/isHTMLElement/isHTMLElementNS.js',
            'dist/f/findAttribute/findAttributeNS.js',
            'dist/f/findDataAttribute/findDataAttributeNS.js'
        ]; //reforced attribute load as before isn't loading it properly
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.head.appendChild(a); }
        setTimeout(function(){ 
            uc = __imns('util.classes');
            ud = __imns('util.dom');
            done(); 
        }, 1000);
    });
    //var __imns = function(){ return window; }
    var ud = window,
        uc = window,
        obj = {}, 
        arr = [];
    //requires
    it('isDataAttributeLabel is a function', function(){
        var ud = __imns('util.dom');
        expect(typeof ud.isDataAttributeLabel === 'function').toBe(true); });
    it('isDataAttributeLabel returns true for data-url', function(){
        var ud = __imns('util.dom');
        expect(ud.isDataAttributeLabel('data-url')).toBe(true); });
    it('isDataAttributeLabel returns false for class', function(){
        var ud = __imns('util.dom');
        expect(ud.isDataAttributeLabel('class')).toBe(false); });
    it('camelCaseDataAttributeLabel is a function', function(){
        var ud = __imns('util.dom');
        expect(typeof ud.camelCaseDataAttributeLabel === 'function').toBe(true); });
    it('camelCaseDataAttributeLabel returns correctly for proper attribute', function(){
        var ud = __imns('util.dom');
        expect(ud.camelCaseDataAttributeLabel('data-cheese-and-ham') === 'cheeseAndHam').toBe(true); });
    it('camelCaseDataAttributeLabel returns same if not data label', function(){
        var ud = __imns('util.dom');
        expect(ud.camelCaseDataAttributeLabel('morris-dancing') === 'morris-dancing').toBe(true); });
    it('hasDataSet is a function', function(){
        var ud = __imns('util.dom');
        expect(typeof ud.hasDataSet === 'function').toBe(true); });
    it('hasDataSet returns Boolean correctly based on whether dataset exists', function(){
        var ud = __imns('util.dom');
        var a = {}, b = {dataset: []};
        expect(!ud.hasDataSet(a) && ud.hasDataSet(b)).toBe(true); });
    it('hasDataAttribute is a function', function(){
        var ud = __imns('util.dom');
        expect(typeof ud.hasDataAttribute === 'function').toBe(true); });
    it('hasDataAttribute returns correctly based on existance', function(){
        var ud = __imns('util.dom');
        var a = document.createElement('div'),
            b = document.createElement('div');
        ud.setAttribute(a, 'data-url', 'http://www.immaturedawn.co.uk');
        expect(ud.hasDataAttribute(a, 'data-url') && !ud.hasDataAttribute(b, 'data-url')).toBe(true); });
    it('findDataAttribute is a function and getDataAttribute is an alias', function(){
        var ud = __imns('util.dom');
        expect(typeof ud.findDataAttribute === 'function' && typeof ud.getDataAttribute === 'function' && ud.findDataAttribute === ud.getDataAttribute).toBe(true); });
    it('findDataAttribute returns correctly based on existance', function(){
        var ud = __imns('util.dom');
        var a = document.createElement('div'),
            b = document.createElement('div');
        ud.setAttribute(a, 'data-url', 'http://www.immaturedawn.co.uk');
        expect(ud.findDataAttribute(a, 'data-url') === 'http://www.immaturedawn.co.uk' && ud.findDataAttribute(b, 'data-url') === null).toBe(true); });
    it('setDataAttribute is a function', function(){
        var ud = __imns('util.dom');
        expect(typeof ud.setDataAttribute === 'function').toBe(true); });
    it('setDataAttribute works as expected.', function(){
        var ud = __imns('util.dom');
        var a = document.createElement('div'),
            b = {},
            c = ud.setDataAttribute(a, 'data-url', 'http://www.immaturedawn.co.uk'),
            d = ud.setDataAttribute(b, 'data-url', 'http://www.immaturedawn.co.uk');
        expect(c && !d && ud.getDataAttribute(a, 'data-url') === 'http://www.immaturedawn.co.uk').toBe(true); });
});

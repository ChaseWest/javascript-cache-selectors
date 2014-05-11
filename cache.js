var jsc = (function(window, document, undefined){

    _cache = {};

    function cache(selector, parent, all){
        var key = _generateKey();
        all = !!all;
        parent = !!parent ? parent : document;
        _cache[key] = all ? parent.querySelectorAll(selector) : parent.querySelector(selector);

        return key;

    }

    function get(key){
        return _cache[key];
    }

    function _generateKey(){
        return Math.random().toString(36).slice(2);
    }

    return{
        cache: cache,
        get: get
    }; 

})(window, document);

javascript-cache-selectors
==========================

Small, simple to use library for caching selectors for better performance.

##How to use

###Functions

##### `jcs.cache(selector, parent, all)`

######In
-  **selector** - [string] query selector string to get DOM node(s)  
-  **parent**   - [DOM node] parent node to search within, if none then `document`
-  **all**      - [Boolean] If true, `querySelectorAll`, else `querySelector`

######Out
-  **key**      - [string] Key value returned to access your cached nodes.


##### `jcs.get(key)`

######In
-  **key** - [string] selector key returned from `jcs.cache()`

######Out
-  **node(s)** - [DOM node(s)] Returned node(s) that were stored within `jsc.cache()`

#####[Example](http://jsfiddle.net/ChaseWest/gR9U3/2/)

```javascript
  //grab the ul with id innerUL, store it in _cache and return the key for that object
  var ulKey = jsc.cache("ul#innerUL");

  //get all the li with class selected within the cached ul above
  var liKey = jsc.cache("li.selected", jsc.get(ulKey), true);  

  //Get the DOM node(s) that were cached above
  var ul = jsc.get(ulKey);
  var li = jsc.get(liKey);

  console.log(ul);
  console.log(li);
```

###Feedback

If you have any questions, comments, or just want to chat - feel free
to contact me and let me know what you think.

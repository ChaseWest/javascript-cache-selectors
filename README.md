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

#####Example

```javascript
  //grab the first ul, store it in _cache and return the key for that object
  var ulKey = jcs.cache("ul");

  //get all the li elements within the cached ul above
  var liKey = jcs.cache("li", get(ulKey), true);  

  //Get the DOM node(s) that were cached above
  var ul = jcs.get(ulKey);
  var li = jcs.get(liKey);
```

###Feedback

If you have any questions, comments, or just want to chat - feel free
to contact me and let me know what you think.

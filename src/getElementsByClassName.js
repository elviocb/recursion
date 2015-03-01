// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var domChilds = document.childNodes,
    result = [];

  // Iterate recursively over the DOM's childNodes, and checks
  // whether the class matches or not.
  var domCross = function(node) {
      var subChNodes;

      // terminal condition
      if (!node['childNodes']) {
        return "childNodes are a must! Invalid request";
      } else {

        subChNodes = node['childNodes'];
      }
      // BASE CONDITION - (classList) - checks whether the classList's object exists
      if (node['classList'] && node['classList'].length > 0) {
        var classList = node['classList'];

        // check all the list and make the matches
        for (var i = 0; i < classList.length; i++) {

          // if the propertie value === className, push it to result's array
          if (classList[i] === className) {
            // send the matched node into result's array.
            result.push(node);
          }
        }
      }
      // TERMINATION CONDITION II - If childNodes.length = 0
      if (node['childNodes'].length === 0) {
        return;
      }
      // RECURSIVE CONDITION - (childNodes)
      for (var i = 0; i < subChNodes.length; i++) {
        domCross(subChNodes[i]);
      }
      return;
    };

  // checks if the DOM's childNodes exist.  
  if (domChilds) {
    // Loop throughout the Node Array 
    for (var i = 0; i < domChilds.length; i++) {
      domCross(domChilds[i]);
    }
  }
  return result;
};

//Seek And Destroy
function destroyer(arr) {
    // Remove all the values
    var args = [].slice.call(arguments).slice(1);
    
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
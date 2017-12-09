//Mutations
function mutation(arr) {
    var arr1 = arr[1].toLowerCase();
    var arr2 = arr[0].toLowerCase();
    
    for(var i = 0; i < arr1.length;i++) {
      if (arr2.indexOf(arr1[i]) === -1) 
        return false;
  
    }
    return true;
  }
  mutation(["hello", "hey"]);
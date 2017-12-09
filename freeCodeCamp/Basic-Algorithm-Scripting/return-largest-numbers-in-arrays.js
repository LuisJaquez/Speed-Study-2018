//Return Largest Numbers In Arrays
function largestOfFour(arr) {
    
      function largest(arr) {
         return Math.max.apply(null, arr);
      } 
      
      var maximum = arr.map(function(val) {
        return largest(val);
      });
       
      return maximum;
    }
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
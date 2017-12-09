//Falsy Bouncer
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    
       return arr.filter( function( value ){
          return value;
      });
  }
  bouncer([7, "ate", "", false, 9]);  
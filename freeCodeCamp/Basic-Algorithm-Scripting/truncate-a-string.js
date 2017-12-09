//Truncate A String
function truncateString(str, num) {
    var truncate;
    
    if (str.length > num && num > 3) {
      truncate = str.slice(0,(num-3)) + '...';
      return truncate;
      
    } else if (str.length > num && num <= 3){
      truncate = str.slice(0,num) + '...';
      return truncate;
      
    } else {
      return str;
    }
  }
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
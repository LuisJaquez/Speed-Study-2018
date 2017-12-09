//Repeat A String Repeat A String
function repeatStringNumTimes(str, num) {
    
    if (num === 1) {
      return str; 
    } else if (num < 1) {
      return "";
    }
    
    return str + repeatStringNumTimes(str,num-1);
  }
  
  repeatStringNumTimes("abc", 3);  
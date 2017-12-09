//Title Case A Sentence
function titleCase(str) {
    var words = str.toLowerCase().split(' ');
    
    var capitalized = words.map(function(val) {
      return val[0].toUpperCase() + val.substr(1);
    });
    
    return capitalized.join(' ');
    
  }
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
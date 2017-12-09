//Find The Longest Word In A String
function findLongestWord(str) {
    var words = str.split(" ");
    
    var wordsCount = words.map(function(val) {
      return val.length;
    });
    
    function longestWordEncounter(array) {
    return Math.max.apply(null, array);
  }
    return longestWordEncounter(wordsCount);
    
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
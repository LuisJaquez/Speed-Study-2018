//Confirm The Ending
function confirmEnding(str, target) {
    
    var charactersIndex = target.length;
    var lastCharacters = str.substring(str.length - charactersIndex);
    
    if (target === lastCharacters) {
      return true;
    } else {
      return false;
    }
    
  }
  confirmEnding("He has to give me a new name", "name");
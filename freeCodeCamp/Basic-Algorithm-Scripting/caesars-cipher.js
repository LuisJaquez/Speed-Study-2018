//Caesars Cipher
function rot13(str) { // LBH QVQ VG!
    function replacer(match, p1) {
      var idx = match.charCodeAt(0); 
      return idx > 90 - 13 ? String.fromCharCode(idx - 26 + 13) : String.fromCharCode(idx + 13); 
    }
    return str.replace(/[A-Z]/g, replacer);
  }
  rot13("LBH QVQ VG!");
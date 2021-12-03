//DNA to RNA Conversion

function DNAtoRNA(dna) {
    let result = "";
    for(let i = 0; i < dna.length; i++) {
      if(dna[i] === 'T') {
        result += 'U';
      } else {
        result += dna[i]
      }
      
    }
    return result
  }

  //Convert boolean values to strings 'Yes' or 'No'.

  function boolToWord( bool ){
    return  bool ? 'Yes' : 'No'
  }

  //Reversed Strings
  function solution(str){
    return str.split("").reverse().join("");
  }
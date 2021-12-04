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

  //What's the real floor?
  function getRealFloor(n) {
    if(n < 13) {
      return n - 1
    } else if(n >= 13) {
      return n - 2
    } else {
      return n
    }
  }


//ASCII Total
  function uniTotal(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count += str.charCodeAt(i);
    }
    return count;
  }

  //Transportation on vacation
  function rentalCarCost(d) {
    let cost = 40 * d;
    if(d >= 7) {
      return cost - 50;
    } else if(d >= 3 && d < 7) {
      return cost - 20;
    }
    return cost
  }
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
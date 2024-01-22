function DNAstrand(dna){
    let dnaKey = {
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
    }
    let compSide = "";
    for (let i =0; i < dna.length; i++){
        compSide += dnaKey[dna[i]]
    }
    return compSide;
}


const word = "CTAGGGTAcaFGHLMT"; //CTAGGGTAGT
let resultado = "";
for (let index = 0; index < word.length; index++) {
  console.log(word[index]);

  if (
    word[index] === "A" ||
    word[index] === "C" ||
    word[index] === "T" ||
    word[index] === "G"
  ) {
    resultado += word[index];
  }
}

console.log(resultado);
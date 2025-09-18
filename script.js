  
let codes = [ "C3", "C4", "C7", "C6", "C7", "C8", "C9", "C10"]
let compteurs = {};

for(let i = 0; i < codes.length; i++){
let codeActule = codes[i];
if (compteurs[codeActule]){
   compteurs[codeActule]++;
} else{
   compteurs[codeActule] = 1;
}

}
console.log(compteurs)
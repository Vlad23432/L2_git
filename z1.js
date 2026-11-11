function hasTwoCubeSums(n) {
  let cube = Math.cbrt(n);
  let count = 0;
  for(let i = 1; i < cube; i++){
    for(let j = i; j < cube; j++){
      let t = i**3 + j**3;
      if(t === n){
        count++;
      }
    }
  }

  if(count >= 2){return true;}
  else{return false;}
}



let n = 1729;
console.log(hasTwoCubeSums(n));
function primeFactors(n){
    let number = n;
  let divider = 2;
  let answer = '';
  while(number >= divider){
    let count = 0;
    while(number % divider === 0){
        count++;
        number /= divider;
    }
    if(count !== 0){
        if(count === 1) answer += `(${divider})`;
        else answer += (`(${divider}**${count})`);
    }
    do{
        divider++;
    } while(!isPrime(divider));
  }
  return answer;
}




function isPrime(num){
  if(num === 2) return true;
  if(num === 1 || num % 2 === 0) return false;
  else{
    for(let temp = 3; temp*temp <= num; temp += 2){
      if(num % temp === 0) return false;
    }
    return true;
  }
}
 console.log(primeFactors(7775460));
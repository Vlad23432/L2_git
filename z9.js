// function solution(str){
//    let flag = str.length % 2 == 0;
//    let result = [];

//    for (let i = 0; i < str.length - (flag ? 0 : 1); i += 2) {
//         result.push(str[i] + str[i + 1]);
//    }

//    if (!flag) {
//         result.push(str[str.length - 1] + "_");
//    }

//    return result;
// }

// console.log(solution("abc"));

function solution(str){
  let mass = [];
  str += "_";
  for(let i = 0; i < str.length; i += 2){
    let str1 = str[i] + str[i + 1];
    if(str.length % 2 != 0){
      if(i === str.length - 1) break;
    }
    mass.push(str1);
  }
  return mass;
}
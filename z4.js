function findMissing(list) {  
  let expectSum = (list[0] + list[list.length - 1]) * ((list.length + 1) / 2);
  let realSum = 0;
  for(let i = 0; i < list.length; i++){
     realSum += list[i];
  }
  return expectSum - realSum;  
  }

  console.log(findMissing([1,3,5,9,11]));
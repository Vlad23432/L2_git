function whatCentury(year)
{//1 2 3 11 21 22 23...
    let first = year.slice(0, 2);
    let last = year.slice(2, 4);
    let ending = '';
    if(last != '00'){
        first++;
    }
    if(first >= 11 && first <= 13){
        ending = 'th';
    }
    else{
        switch(first % 10){
            case 1: ending = 'st'; break;
            case 2: ending = 'nd'; break;
            case 3: ending = 'rd'; break;
            default: ending = 'th'; break;
        }
    }
  return first + ending;
}

console.log(whatCentury("1001"));
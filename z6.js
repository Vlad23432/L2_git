function toWeirdCase(string){
    let str = '';
    let mass = [];
    mass = string.split(' ');
  for(let i = 0; i < mass.length; i++){
    for(let j = 0; j < mass[i].length; j++){
        switch(j % 2){
            case 0:
                if(mass[i][j] !== mass[i][j].toUpperCase()) str += mass[i][j].toUpperCase();
                else str += mass[i][j];
                break;
            case 1:
                if(mass[i][j] !== mass[i][j].toLowerCase()) str += mass[i][j].toLowerCase();
                else str += mass[i][j];
                break;
            default: break;
        }
    }
    if(i < mass.length - 1) str += ' ';
  }
  return str;
}

console.log(toWeirdCase('QWERTY isiss'))
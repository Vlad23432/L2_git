function isCircleSorted( arr ){
    let i = 0;
    for (; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            break;
        }
    }

    
    if (i < arr.length - 1) {
        i++;
        let size = i + arr.length - 1;
        for (; i < size; i++) {
            if (arr[(i + 1) % arr.length] < arr[i % arr.length]) {
                return false;
            }
        }
    }

    return true;
}

console.log(isCircleSorted([6, 2, 3, 4, 5]));
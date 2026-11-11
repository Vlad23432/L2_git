Array.prototype.square = function() {
    return this.map(el => el ** 2);
}

Array.prototype.cube = function() {
    return this.map(el => el ** 3);
}

Array.prototype.average = function() {
    return this.sum() / this.length;
}

Array.prototype.sum = function() {
    let sum = 0;
    this.forEach(el => sum += el);
    return sum;
}

Array.prototype.even = function() {
    let result = []
    this.forEach(el => {
        if (el % 2 === 0)
            result.push(el);
    });
    return result;
}

Array.prototype.odd = function() {
    let result = []
    this.forEach(el => {
        if (el % 2 !== 0)
            result.push(el);
    });
    return result;
}
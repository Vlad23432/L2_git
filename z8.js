function expandedForm(num) {
    let preResult = [];
    let count = 0;

    while (num > 0) {
        if (num % 10 != 0) {
            preResult.push(`${num % 10}${'0'.repeat(count)}`);
        }
        num = Math.floor(num / 10);
        count++;
    }

    return preResult.reverse().join(" + ");
}

console.log(expandedForm(12345));

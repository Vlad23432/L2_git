function bingo(ticket, win){
    let count = 0;

    ticket.map(el => {
        for (let i = 0; i < el[0].length; i++) {
            if (el[0].charCodeAt(i) === el[1]) {
                count++;
                break;
            }
        }
    })

    return count >= win ? "Winner!" : "Loser!";
}

console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 1));
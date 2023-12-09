const fs = require('fs');

function solve() {
    const filePath = "./input.txt";
    const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');
    let sum = 0;

    const scratchcards = lines.map((line) => {
        return line
            .split(': ')[1]
            .split('| ')
    })

    scratchcards.forEach((scratchcard) => {
        let partSum = 0;
        const [left, right] = [scratchcard[0].split(' '), scratchcard[1].split(' ')];

        for (let i = 0; i < right.length; i++) {
            for (let j = 0; j < left.length; j++) {
                if (parseInt(left[j]) === parseInt(right[i])) {
                    partSum = partSum === 0 ? 1 : partSum * 2;
                }
            }
        }
        sum += partSum;
    })

    return sum;
}

console.log(solve());

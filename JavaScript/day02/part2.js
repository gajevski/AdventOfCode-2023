const fs = require('fs');

function solve() {
    const filePath = "./input.txt";
    const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');
    let sum = 0;
    lines.map((line) => {
        const maxCount = {
            red: 0,
            green: 0,
            blue: 0,
        }
        line
            .split(': ')[1]
            .split('; ')
            .forEach((x) => {
                const cubes = x.split(', ');
                return cubes.map((cube) => {
                    const [count, color] = cube.split(' ');
                    if (Number(count) > maxCount[color]) {
                        maxCount[color] = Number(count);
                    }
                })
            })
            sum += maxCount['red'] * maxCount['green'] * maxCount['blue'];
        })
        return sum;
}

console.log(solve());

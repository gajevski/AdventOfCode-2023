const fs = require('fs');

let sum = 0;
const numberRegex = /^[0-9]+$/;
let twoDigitNumber = '';

try {
    const filePath = "./input.txt";
    const data = fs.readFileSync(filePath, 'utf8');

    data.split('\n').forEach((line) => {
        line = line
        .replaceAll('twone', 21)
        .replaceAll('eightwo', 82)
        .replaceAll("oneight", 18)
        .replaceAll('one', 1)
        .replaceAll('two', 2)
        .replaceAll('three', 3)
        .replaceAll('four', 4)
        .replaceAll('five', 5)
        .replaceAll('six', 6)
        .replaceAll('seven', 7)
        .replaceAll('eight', 8)
        .replaceAll('nine', 9)
        twoDigitNumber = '';
        for (let i = 0; i < line.length; i++) {
            if (numberRegex.test(line[i])) {
                twoDigitNumber += line[i];
                break;
            }
        }
        for (let i = line.length - 1; i >= 0; i--) {
            if (numberRegex.test(line[i])) {
                twoDigitNumber += line[i];
                break;
            }
        }
        sum += Number(twoDigitNumber);
    })
    
    console.log(sum);

} catch (err) {
    console.error('Error reading the file:', err);
}

const fs = require('fs');

try {
    const filePath = "./input.txt";
    const data = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');
    let sum = 0;
    const values = data.map((line) => {
        let first = line.split('').find((x) => !Number.isNaN(Number(x)));
        let second = line.split('').findLast((x) => !Number.isNaN(Number(x)));
        return Number(first + second);
    })

    sum = values.reduce((a, b) => a + b);
    
    console.log(sum);

} catch (err) {
    console.error('Error reading the file:', err);
}

// Previous solution:
// const fs = require('fs');

// let sum = 0;
// const numberRegex = /^[0-9]+$/;
// let twoDigitNumber = '';

// try {
//     const filePath = "./input.txt";
//     const data = fs.readFileSync(filePath, 'utf8');

//     data.split('\n').forEach((line) => {
//         twoDigitNumber = '';
//         for (let i = 0; i < line.length; i++) {
//             if (numberRegex.test(line[i])) {
//                 twoDigitNumber += line[i];
//                 break;
//             }
//         }
//         for (let i = line.length - 1; i >= 0; i--) {
//             if (numberRegex.test(line[i])) {
//                 twoDigitNumber += line[i];
//                 break;
//             }
//         }
//         sum += Number(twoDigitNumber);
//     })
    
//     console.log(sum);

// } catch (err) {
//     console.error('Error reading the file:', err);
// }

const fs = require('fs');

function solve() {
  const filePath = "./input.txt";
  const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');
  let sum = 0;
  
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let numbers = [];
    let pattern =  /\d+/g;
    let match;

    while ((match = pattern.exec(lines[lineIndex])) !== null) {
      numbers.push({ start: match.index, end: pattern.lastIndex, number: Number(match[0]) })
    }

    for (let number of numbers) {
      for (let i = lineIndex - 1; i <= lineIndex + 1; i++) {
        for (let j = number.start - 1; j <= number.end; j++) {
          if (i >= 0 && i < lines.length && j >= 0 && lines[lineIndex].length > j) {
            if (isNaN(parseInt(lines[i][j])) && lines[i][j] !== '.') {
              sum += number.number;
            }
          }
        }
      }
    }
  }

  return sum;
}

console.log(solve());



// 1. create 2d array
// 2. go through line array and look for a number
// 3. save beginning index and last index of the number
// 4. check if there is a symbol at position beginning index - 1 and if there is a symbol at index last + 1
// 5. check if in previous line array there is symbol adjacent to the number and also check if there is a symbol at position beginning index - 1 and if there is a symbol at index last + 1
// 6. do the same for next line
// 7. if there is symbol covering points 4-6, add a number to the sum
// 8. return sum
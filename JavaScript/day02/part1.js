const fs = require('fs');

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
}

function solve() {
  const filePath = "./input.txt";
  const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

  return lines.map((line) => {
    return line
      .split(': ')[1]
      .split('; ')
      .map((x) => {
        const cubes = x.split(', ');
        return cubes.every((cube) =>{
          const [count, color] = cube.split(' ');
          return maxCount[color] >= Number(count);
        })
      }).every((boolean) => boolean);
  }).reduce((count, target, index) => {
    return target ? count + (index + 1): count;
  })
}

console.log(solve());

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// 1. ["Game 1:" "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"]
// 2. ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"]
// 3. ["blue 3, red 4", "red 1, green 2, blue 6", "green 2"]
// 4. [true, true, true]
// 5. [true]
// 6. sum: 1
function longestConsecutive(value) {
  var a = new Set(value);
  let max = 0;
  let lastChar = 0;
  for (let i = 0; i < value.length; i++) {
    if (!a.has(value[i] - 1)) {
      let currentCount = 0;
      let currentItem = value[i];

      while (a.has(currentItem)) {
        currentCount += 1;
        currentItem = currentItem + 1;
      }

      if (max < currentCount) {
        max = Math.max(max, currentCount);
        lastChar = value[i];
      }
    }
  }

  const sequence = [];
  for (let i = 0; i < max; i++) {
    sequence.push(lastChar + i);
  }
  return sequence;
}
var a = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(a));

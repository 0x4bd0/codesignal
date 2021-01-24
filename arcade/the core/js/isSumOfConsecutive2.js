const isSumOfConsecutive2 = n => {
    let count = 0;
    for (let i = 1; i < n; i++) {
      let num = n
      let x = i
      while (num > 0) {
        num -= x
        x++
      };
      if (num === 0) {
        count++
      }
    }
    return count
  }
  
function differentSymbolsNaive(s) {
    return s.split('').filter((value, index, self) => {
    return self.indexOf(value) === index;
  }).length
  }
  
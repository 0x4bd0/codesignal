function equalPairOfBits(n, m) {
    return n + m + 1 & ~m - n;
  }
  
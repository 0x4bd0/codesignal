function differentRightmostBit(n, m) {
    return (n ^ m) & -(n ^ m);
  }
  
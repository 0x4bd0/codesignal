function secondRightmostZeroBit(n) {
    return ~(n | n + 1) & (n | n + 1) + 1;
    //https://www.w3schools.com/js/js_bitwise.asp
  
  
  
   // return Math.pow(2,n.toString(2).split('').reverse().join("").split("0", 2).join("0").length);
  }
  
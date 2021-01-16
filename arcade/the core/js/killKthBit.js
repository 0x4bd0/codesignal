function killKthBit(n, k) {
  return parseInt((n.toString(2).substring(0,n.toString(2).length-k)+'0'+n.toString(2).substring(n.toString(2).length-k+1,n.length)),2);
}
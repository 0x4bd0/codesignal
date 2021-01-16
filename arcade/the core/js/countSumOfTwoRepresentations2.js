function countSumOfTwoRepresentations2(n, l, r) {
    let count = 0
    let x = Math.max(n-r,l)
    let y = n-x
    while(x<=y && x<=r){
        y--
        x++
        count++
    }
    return count
   }
   
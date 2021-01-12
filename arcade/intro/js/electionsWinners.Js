function electionsWinners(votes, k) {
    let first = Math.max(...votes)
    if(k===0) {
      return  votes.filter(item=>item==first).length>1 ?  0 : 1
    }
    return votes.filter(item=>{
        return item+k > first}).length
}

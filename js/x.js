function growingPlant(upSpeed, downSpeed, desiredHeight) {
    
    if(upSpeed>desiredHeight) return 1
    
    return Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
    
  //  let growth = grow = upSpeed-downSpeed  
  //  let count =1
  
  //  while(desiredHeight>growth){
  //      if(growth+upSpeed >= desiredHeight) {
  //          growth += upSpeed
  //          } else {
  //            growth += grow
  //          }
  //      count++
  //  }
    
  //  return count
    
  }
  
function bishopAndPawn(bishop, pawn) {
    let x = ["a","b","c","d","e","f","g","h"]
    
     let bishopX = x.indexOf(bishop[0])+1
     let bishopY = parseInt(bishop[1])
     
     let pawnX = x.indexOf(pawn[0])+1
     let pawnY = parseInt(pawn[1])
         
     return (pawnX+pawnY === bishopY+bishopX || bishopY+pawnX === bishopX+pawnY)

}

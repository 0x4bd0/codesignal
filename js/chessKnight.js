function chessKnight(cell) {
    
    let board = "*abcdefgh".split('')
    let x = board.indexOf(cell[0])
    let y = Number(cell[1])
    
    let moves = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]]
    
    let count = 0
    
    moves.map(item=>{      
        if(x+item[0] > 0 && y+item[1] > 0 && x+item[0] < 9 && y+item[1] < 9){
            count++
        }
    })
    
    return count


}

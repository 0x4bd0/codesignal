function chessBoardCellColor(cell1, cell2) {
    
    let x = [1,2,3,4,5,6,7,8]
    let y = ["a","b","c","d","e","f","g","h"]
    
    c1 = cell1.toLowerCase().split('')
    c2 = cell2.toLowerCase().split('')
    
    
    return (y.indexOf(c1[0])+1 + parseInt(c1[1]))%2  === (y.indexOf(c2[0])+1 + parseInt(c2[1]))%2

}

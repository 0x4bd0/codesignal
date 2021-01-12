function sudoku(grid) {
    
  // Horizontal check
  for(let i = 0; i < grid.length; i++){
        if(getDumplicates(grid[i])>0){
            return false
        }
  }
  
  //vertical check
    for(let i = 0; i<grid.length;i++){
        let tmp = []
         for(let j = 0; j<grid.length;j++){
          tmp.push(grid[j][i])
        }
                    
        if(getDumplicates(tmp)>0){
            return false
        }
    }
    
    
  //9x9 check
  let tmp =[]
    
  for(let k =0 ; k < 3; k++){
        for(let i = 0; i < 9; i=i+3){
        let matrix = []
       for(let j = 0; j <3; j++){
           matrix.push(...grid[i+j].splice(0,3))
       }
       tmp.push(matrix)
    }
  }

    return !tmp.some(item=>{
            return getDumplicates(item) > 0
    })
    
}


const getDumplicates = (item) => {
    return item.reduce((acc, el, i, arr) => {
            if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
            }, []).length
}

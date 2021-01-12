function boxBlur(image) {
    
    let tmp =image.slice(1,-1).map(x=>x.slice(1,-1))
    
    return tmp.map((item,index)=>{
        
       return item.map((item2,index2)=>{
            let total = 0
        for(let i=0; i < 3; ++i){
            for(let j=0; j<3 ; ++j){
                total += image[index+i][index2+j]
            }
        }
        return Math.floor(total/9)
        })
        
        
        
    })
    


}

function commonCharacterCount(s1, s2) {
    let count = 0
    let tmp_s1 = s1.split('')
    let tmp_s2 = s2.split('')
    
    tmp_s1.map(item=>{
        if(tmp_s2.indexOf(item) !== -1){
            count= count+1
            tmp_s2.splice(tmp_s2.indexOf(item),1)
        }
    })
   
   
   return count
}

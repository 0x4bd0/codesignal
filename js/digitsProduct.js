function digitsProduct(product) {
    let i = 1
    
    while(i<=9999){
        let tmp = i.toString().split('').reduce((a,b)=>a*Number(b),1)
        console.log(tmp)
        if(tmp===product) {
           return i; 
        }
        i++
    }
    
    return -1

}

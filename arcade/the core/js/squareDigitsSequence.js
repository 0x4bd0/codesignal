const squareDigitsSequence = a0 => {
    let res = a0.toString().split('').map(item=>Number(item)*Number(item)).reduce((a,b)=>a+b,0)
    if(a0 === res) return 2
    let seq = [a0,res]
    let loop = true
    while(loop){
       res = res.toString().split('').map(item=>Number(item)*Number(item)).reduce((a,b)=>a+b,0)
       
       if(seq.indexOf(res) === -1){
           seq.push(res)
       } else {
           loop = false
       }
    } 
    return seq.length+1
    }
    
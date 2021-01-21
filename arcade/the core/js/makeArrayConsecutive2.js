const makeArrayConsecutive2 = statues => {
    statues.sort((a,b)=> a-b)
    let x = 0
    statues.map((item,i)=>{
        if(statues[i+1] != undefined && statues[i+1]-item !=1){
            x+=((statues[i+1]-item)-1)
        }
    })
    return x
}
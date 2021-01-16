function rangeBitCount(a, b) {
    let tmp = []
    for(let i = a; i <=b; i++) tmp.push(i)
    return tmp.map(item=>item.toString(2)).join('').split('').filter(item=>item=="1").length
    }
function isLucky(n) {
    let x = n.toString().split('')
    return x.slice(0,x.length/2).reduce((a,b)=>parseInt(a)+parseInt(b)) == x.slice(x.length/2,x.length).reduce((a,b)=>parseInt(a)+parseInt(b))
}
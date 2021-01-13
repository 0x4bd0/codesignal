function lateRide(n) {
    let x = Math.floor(n/60)*100+(n%60)
    return x.toString().split('').map(Number).reduce((a,b)=>a+b)
}

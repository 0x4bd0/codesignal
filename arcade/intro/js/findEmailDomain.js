function findEmailDomain(address) {
    let x =address.split('@')
    return x[x.length-1]
   }
   
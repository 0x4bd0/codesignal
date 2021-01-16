const arrayPacking = a => parseInt(a.map(item=>item.toString(2).padStart(8,'0')).reverse().join(''),2)

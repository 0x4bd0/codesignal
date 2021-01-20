const rounders = n => {
    x = n.toString().split('');
      for(let i = x.length-1; i > 0; i--) {
          if(x[i] < 5) {
              x[i] = 0
          } else if(x[i] >= 5) {
              x[i-1] = (parseInt(x[i-1]) + 1)
              x[i] = 0
          }
      }
      return parseInt(x.join(''))
    }
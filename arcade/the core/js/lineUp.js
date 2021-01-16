const lineUp = (commands) => {
    let count = 0
    let s1 = 0
    let s2 = 0
    let sd1 = ['North', 'East', 'South', 'West']
    let sd2 = ['North', 'West', 'South', 'East']
    
        for(let i = 0; i < commands.length; i++) {
            if(commands[i] == 'R'){
                let pointer = (i + 1) % commands.length;
                s1 = (s1 + 1) % 4;
                s2 = (s2 + 1) % 4;
            } else if (commands[i] == 'L') {
                s1 == 0 ? s1 = 3 : s1 -= 1;
                s2 == 0 ? s2 = 3 : s2 -= 1;
            } else if (commands[i] == 'A') {
                s1 = (s1 + 2) % 4;
                s2 = (s2 + 2) % 4;
            }
            sd1[s1] == sd2[s2] ? count++ : null;
        }  
          return count       
}
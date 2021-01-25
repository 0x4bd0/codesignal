function weakNumbers(n) {
    let result = [ 0, 0 ],
        divisorsFor = [ 0 ];
    for (let i = 1; i <= n; i++) {
        let divisors = 0;
        for (let d = 1; d <= i; d++) {
            if (i % d == 0) divisors++;
        }
        let weakness = divisorsFor.reduce((weakness, value) => {
            return weakness + (value > divisors ? 1 : 0);
        });
        divisorsFor[i] = divisors;
        if (weakness > result[0]) {
            result = [ weakness, 1 ];
        }
        else if (weakness == result[0]) {
            result[1]++;
        }
    }
    return result;
}

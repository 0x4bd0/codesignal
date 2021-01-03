function almostIncreasingSequence(sequence) {
    var isFirst = true;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i+1]) {
            if (isFirst) {
                isFirst = false;
                if (sequence[i-1] >= sequence[i+1] && sequence[i] >= sequence[i+2])
                {
                    return false;
                }
            }
            else return false;
        }
    }
    return true;
}
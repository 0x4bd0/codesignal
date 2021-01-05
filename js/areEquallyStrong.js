function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return Math.abs(yourLeft-yourRight) === Math.abs(friendsLeft-friendsRight) && (yourLeft+yourRight) == (friendsLeft+friendsRight)
}

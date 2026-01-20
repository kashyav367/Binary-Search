let pick = 6;

// guess API
function guess(num) {
    if (num === pick) return 0;
    if (num > pick) return -1;
    return 1;
}

function guessNumber(n) {
    let l = 1;
    let r = n;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        let res = guess(m);

        if (res === 0) {
            return m;
        } 
        else if (res < 0) {
            r = m - 1;
        } 
        else {
            l = m + 1;
        }
    }
}

let n = 10;
console.log(guessNumber(n)); // ✅ 6

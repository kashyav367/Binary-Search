let bad = 4;
function isBadVersion(version) {
    return version >= bad;
}


let solution = function(isBadVersion) {
    return function(n,bad) {
        let l = 1;
        let r = n;

        while(l < r){
            let m = l+Math.floor((r-l)/2)
            if(!isBadVersion(m)){
                l = m+1;
            }
            else{
                r = m
            }
        }
        return r
    };
};

let n = 5;
let firstBadVersion = solution(isBadVersion);

console.log(firstBadVersion(5)); // ✅ Output: 4
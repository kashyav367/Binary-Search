function searchRange(arr,target){

    let l = 0;
    let r = arr.length-1;
    let ans = [-1,-1];

    while(l <= r){
        let m = l+Math.floor((r-l)/2);
        if(arr[m] === target){
            ans[0] = m;
            r = m-1;
        }
        else if(arr[m] < target){
            l = m+1;
        }
        else{
            r = m-1;
        }
    }

    
     l = 0;
     r = arr.length-1;

    while(l <= r){
        let m = l+Math.floor((r-l)/2);
        if(arr[m] === target){
            ans[1] = m;
            l = m+1;
        }
        else if(arr[m] < target){
            l = m+1;
        }
        else{
            r = m-1;
        }
    }
   return ans;
}

let arr = [5,7,7,8,8,10]
let target = 8;

console.log(searchRange(arr,target));
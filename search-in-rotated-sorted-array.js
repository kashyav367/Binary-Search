function search(arr,target){
    let l = 0;
    let r = arr.length-1;

    while(l<=r){
        let m = l+Math.floor((r-l)/2);

        if(target == arr[m]){
            return m;
        }

        if(arr[l] <= arr[m]){
            if(target < arr[m] && target >=arr[l]){
                r = m-1;
            }
            else{
                l = m+1;
            }
        }
        else{
            if(target > arr[m] && target <=arr[m]){
                l = m+1;
            }
            else{
                r = m-1;
        }
    }
}
 return-1;
}

let arr = [4,5,6,7,0,1,2], target = 0
console.log(search(arr,target));
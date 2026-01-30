function min(a){
   let l = 0;
   let r = a.length-1;

   while(l <= r){
    if(a[l] <= a[r]){
        return a[l];
    }

    let m = l+Math.floor((r-l)/2);
    if(a[m] < a[m-1]){
        return a[m];
    }

    if(a[l] > a[m]){
        r = m-1;
    }
    else{
        l = m+1;
    }
   }
}

let a = [3,4,5,1,2];
console.log(min(a))
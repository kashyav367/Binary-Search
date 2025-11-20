class main{

    public static int binarySearch(int[] nums , int target){

        int left = 0;
        int right = nums.length-1;

        while(right >= left){
            int middle = (left+right)/2;

            if(target == nums[middle]){
                return middle;
            }
            else if(target < nums[middle]){
                right = middle-1;
            }
            else{
                left = middle+1;
            }
        }
        return-1;
    }
    public static void main(String[] args) {
        int[] nums = {-1,0,3,5,9,12};

        int ans = binarySearch(nums,3);

        System.out.println(ans);
    }
}
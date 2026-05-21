function twoSum(arr,target){
   
    for (let i = 0; i < arr.length; i++) {
        for (let j =  i + 1; j >= 0; j--) {
            if((arr[i] + arr[j]) == target){
                return [i, j];
            }
        }
    }


}

console.log(twoSum([2,8,6,4,3],5));

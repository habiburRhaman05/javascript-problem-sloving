function removeDublicates(arr){


    let output = [];

    for (let index = 0; index < arr.length; index++) {
       
        if(!output.includes(arr[index])){
            output.push(arr[index])
        }
        
    }

    return output


}

console.log(removeDublicates([7,9,11,8,7,11,18,20]));

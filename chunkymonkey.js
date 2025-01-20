function chunkArrayInGroups(arr, size) {
    let result = [];
  
    for(let i = 0; i < arr.length; i+=size){
        result.push(arr.slice(i, i + size));
    }
  
    return result;
  
    /* const firstArray = [];
    const secondArray = [];
    for(let i = 0; i < size; i++){
      firstArray.push(arr[i]);
    }
    
    arr.reverse();
    for(let i = 0; i < Math.abs(size - arr.length); i++){
      secondArray.push(arr[i]);
    }
    secondArray.reverse();
  
  
  
    console.log([firstArray, secondArray]); */
    // return [firstArray, secondArray];
  
}
  
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
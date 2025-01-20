function largestOfFour(arr) {
    
    const largestArray = [];
  
    for(let i = 0; i < arr.length; i++){
        let largest = arr[i][0];

        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
      largestArray.push(largest);
    }
    
    return largestArray;
}
  
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
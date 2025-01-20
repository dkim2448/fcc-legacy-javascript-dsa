function getIndexToIns(arr, num) {

    if (arr.length < 1) {
        return 0;
    }
  
    arr.sort((a, b) => a - b);
  
    for(let i = 0; i < arr.length; i++){
        if(num < arr[i]){
            arr.splice(i, 0, num);
            break;
        }
    }
  
    if(num > arr[arr.length - 1]){
        arr.push(num);
    }
    
    return arr.indexOf(num);
}
  
getIndexToIns([40, 60], 50);
function findElement(arr, func) {
    for(const num of arr){
        if(func(num)){
            return num;
        }
    }
  
    return undefined;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);
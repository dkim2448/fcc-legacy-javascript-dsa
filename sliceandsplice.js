function frankenSplice(arr1, arr2, n) {
    const newArray = arr2.toSpliced(n, 0, ...arr1);
    console.log(newArray);
    
    return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
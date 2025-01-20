function findLongestWordLength(str) {
    const array = str.split(" ");
    
    let largest = array[0];

    for(let word of array){
        if(word.length > largest.length){
            largest = word;
        }
    }
    
    return largest.length;
}
  
findLongestWordLength('The quick brown fox jumped over the lazy dog');
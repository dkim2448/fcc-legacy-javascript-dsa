function mutation(arr) {
    let word1 = arr[0].toLowerCase();
    let word2 = arr[1].toLowerCase();
  
    for(let i = 0; i < word2.length; i++){
        let letter = word2[i];
        if(word1.indexOf(letter) == -1){
            return false;
        }
    }
    return true;
}
  
mutation(['hello', 'hey']);
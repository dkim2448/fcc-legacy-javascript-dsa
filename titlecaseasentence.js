function titleCase(str) {
    const array = str.split(" ");
    const newArray = [];
    
    for(let word of array){
        let capWord = "";
        let firstLetter = word.charAt(0).toUpperCase();
        let restOfLetters = word.slice(1).toLowerCase();
        capWord = firstLetter + restOfLetters;
        newArray.push(capWord);
    }
    
    return newArray.join(" ");
}
  
titleCase("I'm a little tea pot");
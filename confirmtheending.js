function confirmEnding(str, target) {
    const array = [...str];
    array.splice(0, str.length - target.length);
    const test = array.join("");
    
    return test == target ? true : false;
}
  
confirmEnding('Congratulation', 'on');
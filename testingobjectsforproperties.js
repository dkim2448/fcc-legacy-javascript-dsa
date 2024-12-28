/* 

function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
}
  
checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false 

*/

function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}
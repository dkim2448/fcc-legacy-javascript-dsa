// const regex = /e+/g; Match e or more than one e (match as many in a row as you can, but at least one)
// const regex = /\.$/g; Match the end of our statement
// const regex = /ea*/g; a is optional, but you can match as many if it's found (Theaaaaa -> eaaaaa)

let username = "JackOfAllTrades";
let userCheck = /(^[a-z])([a-z]+\d*|[\d][\d])$/i; // Change this line
let result = userCheck.test(username);

//require ("babel-runtime/regenerator");
require("babel-register");
require("webpack-hot-middleware/client?reload=true");
require ("./style.scss");
require ("./index.html");
require("./app");

//const a = async () => {
//   await console.log("Hello from the future!"); 
//}
//
//a();
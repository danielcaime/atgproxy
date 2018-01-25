// var foo, callback;

// my function(response) {
//     foo = "foobar";

//     if( typeof callback == 'function' ){
//         callback(foo);
//     }
// });

// module.exports = function(cb){
//     if(typeof foo != 'undefined'){
//         cb(foo); // If foo is already define, I don't wait.
//     } else {
//         callback = cb;
//     }
// }


module.exports = new Promise((resolve, reject) => {
    setTimeout(resolve.bind(null, 'someValueToBeReturned'), 2000);
});
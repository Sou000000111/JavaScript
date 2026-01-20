// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // here semicolon is must without semicolon the next function is not called

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('soumya')
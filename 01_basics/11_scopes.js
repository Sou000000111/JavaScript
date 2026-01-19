//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){  // it's a global scope.... We can not access the value of it's child function value in it
    const username = "soumya"

    function two(){ // it's a block scope.... We can access the value of it's parent function value in it
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // it gives error....

     two()

}

// one()

if (true) {
    const username = "soumya"
    if (username === "soumya") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ important ++++++++++++++++++


console.log(addone(5)) // in this declaration of function we can call the function before it...

function addone(num){
    return num + 1
}



addTwo(5)        //   in this declaration of function we can not call the function before it...
const addTwo = function(num){
    return num + 2
}
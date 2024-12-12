function one(){
    let first="first"
    function two(){
        let second="second"
        console.log(first);
    } //can access the variable first both in and out of function two()
    console.log(first)
    two()
    //console.log(second);  
    //cannot access second variable outside of function two()
}
one()


//another way of declaration of function

//1.
const addOne=function(num){
    return num+1
}
console.log(addOne(7))    //another way

//2.
console.log(add(3));
function add(num){
    return num+1
}


//hoisting in javascript means moving variables or function declaration to top of their scope
//scope means {}....not related to the object {}

//in the above two cases 1 and 2, if we were to do hoisting on both...case 1 wud give error
//case 2 no problem





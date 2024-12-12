//function
function add1(num1,num2){     //no need to specify the data type
    console.log(num1+num2); 
}
//add("7",9)    //prints 79
//add(7,null)   //prints 7

//const result= add(5,3)

//console.log(result);   //this will be undefined

function add(num1,num2){     //no need to specify the data type
    let result=num1+num2
    return result 
    console.log(result);     //anything written after return is unreachable
}

const res= add(5,3)

//console.log("result:", res);   //prints 8 not underfined when we use return in function

function loginUser(username){
    return "${username}"
}

//console.log(loginUser());  //undefined


function calculatePrice(...num){  //spread operator is used for passing different values in the form of array
    return num
}

//console.log(calculatePrice(200,700,1000));

const someObject={
    name:"Tina", roll_no:15
}
function student(anyObject){
    console.log(`The name is ${anyObject.name} and roll number is ${anyObject.roll_no}`);
}

student(someObject)
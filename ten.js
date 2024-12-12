//this keyword

const user={
    username:"tina",
    roll_no:45,
    welcome:function(){
        console.log(`Hello welcome ${this.username}`);  //if this keyword not used, error shown

    }
};
// user.welcome();
// user.username="sam"
// user.welcome();

console.log(this);    //prints {}(empty object) since there is no context

//arrow


function next1(){
    const name="Random"
    console.log(this.name);  //prints undefined because we cannot use this inside function this way
}

const next2=function(){
    const name="Random"
    console.log(this.name);  //this way of function declaration also doesnt work
}

// next2()

const next3=()=>{
    const name="Random"
    console.log(this.name);  //this way of function declaration also doesnt work
}

// next3()

//explicit return
//when return keyword is used

//implicit return
const addTwo=(num1)=>(num1+2)   //if curly braces used then it is compulsory to use return otherwise no need


//also to return objects we have to use ();
console.log(addTwo(5))




//constrol flow

//if inside a scope variable is defined using var keyword it is global, it can be accessed everywhere
//not the case when let or const are used to define variable inside scope
const user=null;
if(user){
    console.log("got user email");
}else{
    console.log("didn't get user email");
}

//falsy value

//false , 0 , "" , NaN, undefined ,null, Bigint 0n

//truthy value
//true , non empty string , any non zero number , any object, any array , function(){}

//null coalescing operator (??):null undefined

let val1;
// val1=5??10        //the first value is printed

val1=null??10          //whenever the first value is null or undefined, the next value value after ?? will be displayed
val1=null??10??20    //in this case, first value after null i e 10 will be displayed

console.log(val1);  

// this is a way to ensure no null or undefined values block the flow



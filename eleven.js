//immediently invoked function expression(iife)

//to immediently excuete a function just after being defined
//has many more important advantages
//used to avoid global namespace polluting

((function next(){
    console.log("hello welcome back");
}))();                             //over here compulsory to put ;

(()=>{
    console.log("hello 2");
}
)();


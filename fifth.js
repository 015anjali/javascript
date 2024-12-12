

//object literal
const mysym=Symbol("key1") //declaration of symbol 
const jsuser={
    name:"Rabbit",
    age:18,
    email:"rabbit@gmail.com",
    country:"India",
    [mysym]:"key1",
    
}
//console.log(typeof (jsuser));

//to access the states or behaviour in the object.... dot notation

//console.log(jsuser.email)
//console.log(jsuser["email"])     //way to access things in object
//console.log(jsuser)              //print object
//console.log(typeof jsuser["mysym"]);
//console.log(typeof jsuser["age"]);

/*jsuser.greeting=function(){
    console.log("Hello user");
}*/
jsuser.greeting=function(){
    console.log('Hello user')
} //calls the function

jsuser.greeting();

let score=null
console.log(typeof (score))
//object

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
//number

console.log(valueInNumber)
//0 is the op here.............imp

//similarly for score=undefined, the valueInNumber would be NaN

//************************ NOTE ********************************  
//1.
console.log("1"+2+2);//prints 122
console.log(2+1+"2");//32 is printed


//2.
console.log(true);//prints true no issue
console.log(+true);//prints 1 but true+ is not allowed
console.log(+"");//prints 0

//another poin to be noted is ++ in prefix and suffix matters
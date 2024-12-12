//filter

const arr=[1,2,3,4,5,6,7,8]
// const nums=arr.filter((i)=>i>5)   //{i>5} is not used since {} is a scope and should contain a return
// //const nums=arr.filter((i)=>{
// //     return i>5})

// const newNums=[];

// arr.forEach((item) => {
//     if(item>5){
//         newNums.push(item)
//     }
// }); 

// console.log(newNums);

//similarly we can put condition using && or || to get the required values from objects and arrays

//map


const nums=arr.map((item)=>item * 10)
//console.log(nums)

//chaining
//using multiple maps anf filter is called chaining
const nums2=arr.map((item)=>item*10).map((item)=>item+1).filter((item)=>item>40)  

//note:2nd map considers the values of 1st map only i.e 2nd item is 10,20,30,40,50...

//console.log(nums2); 


//reduce
//it is used to reduce the array to a single value
const num3=[1,2,3]
//const acc=0


const total=num3.reduce(function (acc,curr){
    console.log(`${acc}, ${curr}`)
    return acc+curr
},0)   //0 is added to set the initaial value of accumulator as 0


console.log(total);
//array
const array=[0,1,2,3,4,5,true,"rabbit"]
//resizable array 
//zero based indexing
//makes shallow copy...imp
//that means whatever change you make in copy will affect the original also...same reference point
const myArr=new Array(1,2,3,4,5,6,7)
//console.log(myArr[3]);



//array methods
myArr.push(90)
//console.log(myArr);
myArr.pop()
//console.log(myArr);

//unshift...to add infront
myArr.unshift(8)
//shift is used to remove 8
myArr.shift()
console.log(myArr);


//include
//console.log(myArr.includes(6));
//console.log(myArr.indexOf(90));
//console.log(myArr.indexOf("snail"));

const arr2=myArr.join()
console.log(myArr);
console.log(arr2);
console.log(typeof (arr2));


//slice,splice
//splice will manipulate original array...like the original array will change
//slice does not do this.....this is main difference
console.log("A ",myArr);
const myn1=myArr.slice(1,3)

console.log(myn1);

console.log("B ",myArr);
const myn2=myArr.splice(1,3);
console.log(myArr);
console.log(myn2);
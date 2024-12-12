const arr1=[1,2,3,4]
const arr2=[5,6,7]
//arr2.push(arr1)
//console.log(arr2);
//arr1 is single elemnt


//way to merge
//use concat()
const arr0=arr1.concat(arr2)
//console.log(arr0);

//use spread operator
const together=[...arr1,...arr2]
//console.log(together);


//use flat() to convert into single array is another array present inside original array
const new1=[1,2,3,[4,5,6,[9,0]],8,[7,1]]
//const real_new=
console.log(new1.flat(Infinity));


//to convert anything to array format
//use from()
const new2="chemical"
console.log(Array.isArray(new2));

console.log(Array.from(new2));

console.log(Array.from({name:"Bheem",age:8}));    //only  [] is printed

const s1=100
const s2=200
const s3=300
console.log(Array.of(s1,s2,s3));


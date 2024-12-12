//destructing
//easy way to access properties of objects at any point
const course={
    name:"javascript",
    price:"999",
    hours:65
}

const {name}=course
//syntax for destructing.... const {property_name}=object_name
console.log(name);

const {price:pr}=course  //optional(if we want to call property by another name)
console.log(pr);



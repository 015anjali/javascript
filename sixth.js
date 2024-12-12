const next=new Object()    //singleton
//console.log(typeof (next));
const next2={};            //non_singleton
//console.log(typeof next2);

const jsuser={
    id:"235jfk",
    name:{
        first_name:"Steve",
        last_name:"Roger"
    },
    isLoggedIn:false
};
//console.log(jsuser);
//console.log(jsuser.name.first_name);

const obj1={
    1:'red', 2:'blue'
}
const obj2={
    3:'brown',4:'black'
}
//console.log({obj1,obj2});
//const obj3=Object.assign(obj1,obj2) ///used to merge two objects...target=obj1 i.e the other object will be added to this.
//console.log(obj3);                  // target acn also be simply {} so that all other objects added to {} without change in original objects
//console.log(obj1)   //since the change has affected the original obj1...both obj1 and obj3, same result 

//easier method...use spread
const obj3={...obj1,...obj2}
//console.log(obj3);

console.log(Object.keys(obj1)); //the keys appear as array
console.log(Object.values(obj1)) //values appear as array
console.log(Object.entries(obj1)) //all keys and values appear as array inside another array
console.log(obj1.hasOwnProperty(1));  //returns true as obj1 has a property called 1


for (let key in obj1){               //to get the key and the value
    console.log(key)
    console.log(obj1[key]);
}

const myObj={
    js:"javascript",
    py:"python",
    cpp:"c++"
}

//to iterate object we use for in loop
//not nessecary that we use for in loop only for object

for (const key in myObj) {
    console.log(key);    //to print all the keys
}

for (const key in myObj) {
    console.log(myObj[key]);    //to print all the values
}

//cannot do for in loop for map


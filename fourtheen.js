//high order loop

const arr=[1,2,3,4,5,6,7]
for (const i in arr) {
    //console.log(i)     //displays the index
    
}
for (const k of arr) {
    //console.log(k);    //displays the values in array
}

//map
const map=new Map()
map.set('key1',"value1")
map.set('key2',"value2")
map.set('key3',"value3")
map.set('key4',"value4")

//console.log(map);

//to iterate map:-
for (const [key,value] of map) {
    // console.log(key,':-',value)
}

//objects are not iterable this way

    arr.forEach(function(item){
        //console.log(item);
    })

    arr.forEach((item,index,arr)=>{
        //console.log(item,index,arr);
    })

    function third(item){
        //console.log(item);
    }
    arr.forEach(third);

const student=[
    {
        name:"Steve Rogers",rollno:8
    },
    {
        name:"Black Panther",rollno:10
    },
    {
        name:"Ant man",rollno:12
    }
]
student.forEach((item)=>{
    console.log(item);//displays the whole thing
    console.log(item.name);// displays name only
})
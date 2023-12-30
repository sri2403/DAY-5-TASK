//1.For the given JSON iterate over all for loops(for, for in, for of, forEach)

const jsonStr = '{"name": "Sri", "age": 21, "city": "Madurai"}';
const jsonObj = JSON.parse(jsonStr);

const keys=Object.keys(jsonObj);
const values=Object.values(jsonObj);


//for loop
for(let i=0;i<keys.length;i++){

    console.log(`${keys[i]}: ${values[i]}`);
}

//for in loop
for(let i in keys){
    console.log(`${keys[i]}: ${values[i]}`);
}

//for of loop
for(let key of keys){
    console.log(`${key}: ${jsonObj[key]}`);
}

//for each
keys.forEach(key =>{
    console.log(`${key}: ${jsonObj[key]}`);
})

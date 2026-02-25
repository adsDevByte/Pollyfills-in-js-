// Making my own Pollyfills in js 
// Pollyfill for Array for getting last Element
Array.prototype.lastEle=function(){
    return this[this.length-1]
}
console.log([1,2,3].lastEle())// output => 3
// Polyfill for getting the exact element 
Array.prototype.last=function(){
    return this[2] 
}
console.log(["anni","adds","adarsh"].last())// output => adarsh
// pollyfill for getting the first element 
Array.prototype.firstEle=function(){
    return this[0];
}
console.log([4,5,6].firstEle());// output => 4
// Sum of the Array
Array.prototype.sum=function(){
return this.reduce((acc , val)=> acc +val , 0)
}
console.log([2,4,6].sum())// output => 12
//Remove duplicates from array
Array.prototype.remDuplicate=function(){
    return [...new Set(this)]
}
console.log(["anni","adds","adarsh","adarsh"].remDuplicate());// output => [ 'anni', 'adds', 'adarsh' ]
// Now Pollyfills for String 
// Pollyfill for getting the exact character in the string
String.prototype.getChar=function(index){
if(index<0 || index >= this.length) return ""
return this[index]
}
const name ="Aadarsh";
console.log(name.getChar(0))//output => A
console.log(name.getChar(2))// output => d
console.log(name.getChar(8))// output => ""
// For making charchter UPPERCASE
String.prototype.myUpperCase=function(){
    let result = ""
    for (let i = 0 ; i<this.length;i++){
        const charCode = this.charCodeAt(i)
        if(charCode>=97 && charCode<=122){
            result+= String.fromCharCode(charCode-32)
        }else{
            result+= this[i]
        }
    }
    return result
}
console.log("Jack".myUpperCase());// Output => JACK
// For Lowercase 
String.prototype.myLowerCase=function(){
    let result = ""
    for (let i = 0 ; i<this.length;i++){
        const charCode = this.charCodeAt(i)
        if(charCode>=65 && charCode<=90){
            result+= String.fromCharCode(charCode+32)
        }else{
            result+= this[i]
        }
    }
    return result
}
console.log("JACK".myLowerCase());// output=> jack

// Pollyfill for forEach
Array.prototype.mineForEach=function(func){
    for(let i=0 ; i< this.length;i++){
    func(this[i],i , this)
    }
};
[4,5,6].mineForEach((val,idx)=>{
    console.log(idx,val)
});/* output =>0 4 
            1 5
            2 6*/
// Polyfill for map
Array.prototype.myMap=function(func){
    const result  = []
    for(let i = 0 ; i<this.length;i++){
    result.push(func(this[i], i ,this));
    }
    return result 
};
const arr = [2,4 ,6]
const newarr = arr.myMap((val)=> val * 2)
console.log(newarr);// output => [ 4, 8, 12 ]

// Pollyfill for filter
Array.prototype.myFilter=function(func){
    const result  = []
    for(let i = 0 ; i<this.length;i++){
    if(func(this[i], i ,this)){
        result.push(this[i])
    }
    }
    return result 
}
const arr2 = [1,2,3,4];

const evens = arr2.myFilter((val) => val % 2 === 0);

console.log(evens);// output=> [ 2, 4 ]

// Pollyfill for reduce
Array.prototype.myReduce = function(fn, initval){
let acc = initval;
let startIndex = 0;
if(acc === undefined){
    acc = this[0];
    startIndex = 1
}
for(let i = 0 ; i<this.length;i++){
acc = fn(acc , this[i], i, this)
}
return acc;
}
const arr3 = [1,2,3,4];
const sum = arr3.myReduce((acc , val )=> acc + val,0)
console.log(sum);// ouput => 10


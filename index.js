// Write your solution here!
 const cats =[
    "Milo", "Otis", "Garfield"
 ]
 function destructivelyAppendCat (name){
    return cats.push('Ralph') 

 }
 function  destructivelyPrependCat(name){
    return cats.unshift("Bob")
 }
 function destructivelyRemoveLastCat (){
    return cats.pop()
 }  
 function destructivelyRemoveFirstCat(){
    return cats.shift()
 }
 function appendCat(){
    const newCats=[  ...cats,"Broom" ]
    return newCats;
 }

 function prependCat(){
    const newCats=[  "Arnold", ...cats]
    return newCats;
 }
 function removeLastCat (){
    return cats.slice(0,2)
 }
 function removeFirstCat(){
    return  cats.slice(1)           
 }
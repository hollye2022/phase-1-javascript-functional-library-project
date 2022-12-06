function intoArr(collection){
    let objValue;
    if(typeof collection === "object"){
        objValue = Object.values(collection)
    } else {
        objValue = collection;
    }
    return objValue;
}

function myEach(collection, callback){
   let newCollection = intoArr(collection);
    for(let i = 0; i< newCollection.length; i++){
        callback(newCollection[i]);
    } 
    return collection;
    
}

function myMap(collection, callback){
    let newCollection = intoArr(collection);
    const result = [];
    for(let i = 0; i< newCollection.length; i++){
       result.push(callback(newCollection[i]));
    }
    return result;
}

function myReduce(collection, callback, acc){
    
    let newCollection = intoArr(collection);
    if(typeof acc === "undefined"){
        acc = 0;
    } 

    for(let i = 0; i< newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)   
    }
    return acc;
}

function myFind(collection, predicate){
    let newCollection = intoArr(collection);
    for(let i = 0; i< newCollection.length; i++){
       
     if( predicate(newCollection[i])){
        return newCollection[i];
    } 
} return undefined;
}

function myFilter(collection, predicate){
    let newCollection = intoArr(collection); 
    let result = [];
    for(let i = 0; i< newCollection.length; i++){

        if(predicate(newCollection[i])){
        result.push(newCollection[i])
        }
    }
    return result;

}

function mySize(collection){
    let newCollection = intoArr(collection); 
    return newCollection.length;
}

function myFirst(array, n){
    let result;
    let i = 0;
    if(typeof n === "undefined"){
        result = array[0];
    } else{  
         result = []; 
        while(i < n) {
            result.push(array[i]);
            i++;
        }
    }
    return result;
}

function myLast(array, n){
    let result;
    let i = 0;
    if(typeof n === "undefined"){
        result = array[array.length-1];
    } else{  
        result = array.slice(-n)   
    }
    return result;
}

function myKeys(object){

    return Object.keys(object);

}
function myValues(object){

    return Object.values(object);

}


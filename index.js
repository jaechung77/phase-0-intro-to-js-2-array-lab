const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
} 

function appendCat(name){
    return[...cats, name];
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function prependCat(name){
    return[name, ...cats];
}

function removeLastCat(){
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}

function removeFirstCat(){
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats;
}
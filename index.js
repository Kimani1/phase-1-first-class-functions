function callback(){
    return "Hello";
}
function receivesAFunction(callback){
callback();
return "Yes";
}

function yessir(){
    return "Yes sir";
}
function returnsANamedFunction() {
  yessir() ;
    
  return yessir ;
}

function returnsAnAnonymousFunction(){
 return function(){"nothing to see here"};
}


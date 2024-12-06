let promise= new promise((resolve,reject)=>{
    let deliver=yes;
    if(deliver== yes)
{
    resolve("your product delivered pay the amount")
}
else{
    reject("your order  not delivered raise complaint")
}
})
promise.then(function(msg){
    console.log(msg);
}).cache(function(err){
    console.log(err);
})
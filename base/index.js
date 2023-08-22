// async 
setTimeout(function(){
    console.log("bat quang cao 1");
}, 1000);
setTimeout(function(){
    console.log("bat quang cao 2");
}, 500);

// sync
console.log(10);

// sync runs before async
// for asyncs, whoever's delay time is shorter will get to run first. 
// so their positions on js don't matter

// let test = axios ();
// console.log("🚀 ~ file: index.js:17 ~ test:", test)

axios ({
    url: "https://api.tiki.vn/raiden/v2/menu-config?platform=desktop",
    method: "GET",
})
    .then(function (res){
    // res === response from server, the callback function is called when the request is successful
        console.log("🚀 ~ file: index.js:24 ~ res:", res);
    
    })
    .catch(function (err){
        // err is error, this callback is called with the erro from the request
        console.log("🚀 ~ file: index.js:28 ~ err:", err)
    });
// const myPromise = (val) =>{
//     return new Promise ((resolve,rejected)=> {
//         setTimeout(() => {
//             typeof val == "number"?
//             resolve(val+5)
//             :
//             rejected("invalid data")
//         }, 1500);
//     })
// }

// myPromise("hello")
// .then(res=> console.log(res))
// .catch(e=> console.log(e))


async function myResult(cb){
    try{
        let result = await fetch("https://jsonplaceholder.typicode.com/todos ")
        result = await result.json()
        cb(result ,false)
    }
    catch(e){
        cb (false,e.message)
    }
}
myResult((res,err)=>{
    if(res){
        console.log("done")
        console.log(res)
    }
    else{
        console.log("Error")
        console.log(err)
    }
})
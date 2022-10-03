// let x = prompt("x = ")
// let y = prompt("y = ")
// let z = prompt("operation")

// function runner (x,y,z){
//     let sum ;
//     switch(z){
//         case 1:
//          sum=x+y;
//          break;


//         case 2 :
//          sum =(x-y);
//          break;


//         case 3 :
//          sum = (x*y);
//          break;


//         case 4 :
//          sum =(x/y);
//          break;
//     };

//     return sum ;
// }

// console.log("Sum Is " + runner(x,y,z))


// let obj = {id:1,
//            name:"mohamed",
//            age:20,
//            print: function(){
//             for(val in this){
//                 if(val=="print") break;
//                 console.log(`${val} : ${obj[val]}`) 
//             }
//            }}

// console.log(obj.print())






btn = document.getElementById("btn")
btn.onclick("click",function(){
    console.log(document.form[0])
})
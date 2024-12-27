let add=document.getElementById("add")
console.log(add);

let sub=document.getElementById("sub")
console.log(sub);

let demo=document.getElementById("demo")
console.log(demo);

add.onclick=()=>{
    console.log(demo.value);
    demo.value++
}                                                                                   

sub.onclick=()=>{
    console.log(demo.value);
    let count=0
    if(demo.value>count){
        demo.value--
    }else{
        count
    }
    //demo.value--;
}

let login=document.getElementById("addelement")
console.log(login);


addelement.onclick=()=>{
       let output=document.getElementById("coe")
    // console.log(output);

    let s=login.classList.toggle("true")
    if(s){
        coe.style.visibility="hidden"
    }else{
        coe.style.visibility="visible"
    }
}



// let plus=document.getElementById("plus")
// console.log(plus);

// plus.onclick=()=>{
//     let out=document.getElementById("add")

//     let add=document.getElementById("add")
// console.log(add);

// let sub=document.getElementById("sub")
// console.log(sub);

// let demo=document.getElementById("demo")
// console.log(demo);

// add.onclick=()=>{
//     console.log(demo.value);
//     demo.value++
// }                                                                                   

// sub.onclick=()=>{
//     console.log(demo.value);
//     let count=0
//     if(demo.value>count){
//         demo.value--
//     }else{
//         count
//     }
//     //demo.value--;
// }

//     let a=plus.classList.toggle("true")
//     if(a){
//         add.style.visibility="hidden"

//         let add=document.getElementById("add")
//         console.log(add);
//         let demo=document.getElementById("demo")
// console.log(demo);

// add.onclick=()=>{
//     console.log(demo.value);
//     demo.value++

//     }
//     else{
//         add.style.visibility="visible"
//     }
// }
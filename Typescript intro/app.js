var cl = console.log;
// const num1 = document.getElementById("num1") as HTMLInputElement;
// const num2 = document.getElementById("num2") as HTMLInputElement;
// const addBtn = <HTMLElement>document.getElementById("addBtn")!;  
// //const add = document.getElementById("add")as HTMLElement;  
// //const add = document.getElementById("add")!;  
// const addition = (n1:number, n2:number) => { 
//     cl(n1 + n2); 
// };
// //nullcheker >> ?
// addBtn.addEventListener("click", () => { 
//  addition(+num1.value, +num2.value); 
// })
function addition(n1, n2, showresult, pharse) {
    if (showresult) {
        cl("".concat(pharse, " ").concat(n1 + n2));
    }
    else {
        return "".concat(pharse, " ").concat(n1 + n2);
    }
}
cl(addition(110, 320, false, "The result is"));
addition(1000, 3000, true, "The result is");
var person = {
    fname: " jhon",
    lname: "doe",
    age: 33,
    child: {
        fanme: "may",
        lname: "doe",
        age: 5
    }
};
// let data : {fname: string, lname : string, email: string | null}[] = [
//     {
//         fname : "Jhon",
//         lname : "Doe",
//         email : null
//     },
//     {
//         fname : "May",
//         lname : "doe",
//         email : "maydoe@gmail.com"
//     }
// ]
// for(const i of data){
//    cl(i.email?.toUpperCase())
// }

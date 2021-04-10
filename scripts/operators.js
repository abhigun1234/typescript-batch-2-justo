"use strict";
// let a1:number=1
// let b1:number=2
// let a1=Number(prompt("enter a no"))
// let b1=Number(prompt("enter a no"))
// if(a1>b1){
//     console.log("a1 is greater")
// }
// else{
//     console.log("b1 is gtreater")
// }
//  es6
// while do while for for each 
var i = 0;
// while (i<10){
//     console.log("i==",i)
//     i=i+1
// }
// do{
//     console.log("i==",i)
//     i=i+1
// }while(i<10)
//  function printTable( no:any){
//      no=Number(prompt("enter a no"))
//         for(let j=1 ;j<10;j++){
//         let result=no*j;
//         console.log("result",result)
//         }
//  }
//  //call
//  printTable(3)
// function disp_details(id:number,name:string,mail_id?:string) { 
//     console.log("ID:", id); console.log("Name",name); 
//     // if(mail_id!=undefined)
//      console.log("Email Id",mail_id); 
// }
//  disp_details(123,"John"); disp_details(111,"mary","mary@xyz.com");
// function addNumbers(...nums:number[]) { var i; var sum:number = 0; 
//     for(i = 0;i<nums.length;i++) { sum = sum + nums[i]; } 
//     console.log("sum of the numbers",sum) } addNumbers(1,2,3) 
//     addNumbers(10,10,10,10,10)
//     addNumbers(10,10,10,10,10,10,10)
function calculate_discount(price, rate, name) {
    if (rate === void 0) { rate = 0.50; }
    if (name === void 0) { name = 'abhishek'; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
    console.log("name", name);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
calculate_discount(1000, 0.30);
calculate_discount(1000, 0.30, 'ravi');
//# sourceMappingURL=operators.js.map
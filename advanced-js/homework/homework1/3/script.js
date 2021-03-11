/* 
const user = {                                                           //повний запис
   name: "John",
   years: 30,
 };

const {name, years: age, isAdmin = false} = user;
*/

const {name, years: age, isAdmin = false} = {name: "John", years: 30,};  //короткий запис

console.log('name:', name);
console.log('years:', age);
console.log('isAdmin:', isAdmin);
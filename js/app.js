console.log('App was loaded');

const person = confirm("Who are you?");
const age = prompt("Your age");
// if(person) {
//     if(age > 20 ){
//         if(age < 40) {
//             console.log("ok");
//         }
//     }
// }


if(person && age > 20  && age < 40){
    console.log("ok");
}

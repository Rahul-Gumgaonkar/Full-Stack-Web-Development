// const a = [1, 2, 3, 4, 5, 6, 7, 8];

// function filterNumber(ele) {
//   const b = [];
//   for (let i = 0; i < a.length; i++) {
//     if (ele(a[i])) {
//       b.push(a[i]);
//     }
//   }
//   return b;
// }

// function isEven(num) {
//   return num % 2 == 0;
// }
// function isOdd(num) {
//   return num % 2 != 0;
// }

// // const evenNumber = filterNumber(isEven);
// // console.log(evenNumber);
// // const evenNumber = filterNumber(isOdd);
// // console.log(evenNumber);

// function checking (element){
//     const b = [];
//     for (let i = 0; i<=a.length; i++){
//         if (element (a[i])){
//             b.push(a[i]);
//         }
//     }
//     return b;
// }

// const iseven = function(num){
//     return num %2 ==0;
// }

// const even = checking(iseven);
// console.log(even);

const a = [1, 2, 3, 4, 5, 6, 7, 8];

function isEven(num) {
  return num % 2 == 0;
}
function isOdd(num) {
  return num % 2 != 0;
}
// const b = a.filter((element, index, arr) => {
//   console.log(element, index, arr);
//   return true;
// });

const b = a.filter(isEven);
console.log(b);

const mult = (num) => {
  return num * num;
};

const result = a.map(mult);
console.log(result);

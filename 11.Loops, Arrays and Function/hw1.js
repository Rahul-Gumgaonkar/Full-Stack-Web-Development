// let marks = [50, 34, 23, 67];

// function average(marks) {
//   let avg = 0;
//   for (let i = 0; i < marks.length; i++) {
//     // console.log(marks[i]);
//     avg = avg + marks[i];
//   }
//   return avg / marks.length;
// }

// const ans = average(marks);
// console.log(ans);

const marks = [54, 23, 57, 90, 45];
const average = (marks) => {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = marks[i] + sum;
  }
  return sum / marks.length;
};

const result = average(marks);

console.log(result);

const arr = [45, 34, 23, 89];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

const ans = sum / arr.length;
console.log(ans);

let a = prompt("enter a number: ");

// function ispalindrm (a){
//     let j = a.length ;
//     for (let i = 0 ; i < j /2;i++){
//         let x = a[i];
//         let y = a [j -1-i];
//         if (x!=y){
//             console.log("not a palindrom");
//             return 0 ;
//         }
//     }
//     console.log("palindrom");
// }
// ispalindrm(a);

const isPalindrm = (element) => {
  const j = a.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = a[i];
    let y = a[j - i];
    if (x != y) {
      console.log("not a palindrom");
      return 0;
    }
  }
  console.log("palindrom");
};

isPalindrm(a);

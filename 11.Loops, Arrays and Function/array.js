const words = ["rahul", "suresh", "yash", "himanshu"];
console.log(words);
console.log(typeof words);
words.sort();
console.log(words);
console.log(words[3]);

const digit = [34, 23, 5, 7, 12, 18];
console.log(digit);
console.log(typeof digit);
digit.sort();
console.log(digit);
console.log(digit.length);

words.pop();
console.log(words);

words.push("satyam");
console.log(words);

words.splice(2, 2, "pranav");
console.log(words);

words.splice(2, 0, "suresh");
console.log(words);

for (let i = 0; i < words.length; i++) {
  console.log("hello", words[i]);
}

const isPresent = words.includes("Anuj");
console.log(isPresent);

const isPresent1 = words.includes("rahul");
console.log(isPresent1);

const index = words.indexOf("rahul");
console.log(index);

for (let i in words) {
  console.log("hello", words[i]);
}
console.log(words.length);

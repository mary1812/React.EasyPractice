function* generator() {
  for (let i = 0; i <= 100; i++){
    yield i;
  }
}

const iterator = generator();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// function* generateNumbers() {
//   let number = 0;

//   yield number;
// }

// const iter = generateNumbers();

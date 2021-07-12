let num = 1;
while (num <= 100) {
  console.log(num % 15 ? (num % 5 ? (num % 3 ? num : 'Fizz') : 'Buzz') : 'FizzBuzz');
  num+=1;
}

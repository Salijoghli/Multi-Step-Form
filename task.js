//all the possible values (almost)
const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

//sum all the hundred and ten values (no thousand)
const getValues = (words) => {
  let sum = 0;
  words.forEach((word) => {
    sum += numbers[word];
    if (word === "hundred") sum = 0;
    //check words with "-" e.g (twenty-five)
    if (word.includes("-")) {
      sum = word.split("-").reduce((accumulator, currentValue) => {
        if (numbers.hasOwnProperty(currentValue)) {
          return accumulator + numbers[currentValue];
        }
        return accumulator;
      }, 0);
    }
  });

  let hundred = 0;
  const hundredIndex = words.indexOf("hundred");

  if (hundredIndex > 0) {
    const numBeforeHundred = numbers[words[hundredIndex - 1]];
    hundred = numBeforeHundred * numbers["hundred"];
  }

  return sum + hundred;
};

const conditions = (words) => {
  const lettersOnlyRegex = /^[a-zA-Z\s-]+$/;
  if (!lettersOnlyRegex.test(words.join(""))) return false;

  if (words.includes("zero") && words.length > 1) return false;
  if (words.includes("million") && words.length > 1) return false;
  return true;
};

//main function
const parseInt = (text) => {
  if (text === "zero" || text === "million") return numbers[text];

  const words = text.trim().toLowerCase().split(" ");
  if (!conditions(words)) return "invalid input";

  // const hasNumberWord = words.some((word) => numbers.hasOwnProperty(word));
  // if (!hasNumberWord) return "no valid number word found";

  const thousandIndex = words.indexOf("thousand");
  if (thousandIndex > 0) {
    const beforeThousandValue =
      getValues(words.slice(0, thousandIndex)) * numbers["thousand"];
    const afterThousandValue = getValues(words.slice(thousandIndex + 1));
    return beforeThousandValue + afterThousandValue;
  }

  return getValues(words);
};

console.log(parseInt("ninety-six"));
console.log(parseInt("eighty-seven"));

console.log(parseInt("six hundred"));
console.log(parseInt("eight hundred"));

console.log(parseInt("six hundred ninety-six"));
console.log(parseInt("eight hundred eighty-seven"));

console.log(parseInt("six hundred ninety-six thousand six hundred ninety-six"));
console.log(
  parseInt("eight hundred eighty-seven thousand eight hundred eighty-seven")
);
console.log(
  parseInt("five hundred twenty-five thousand five hundred twenty-five")
);

console.log(parseInt("one"));
console.log(parseInt("two"));

console.log(parseInt("twenty"));
console.log(parseInt("thirty"));

console.log(parseInt("five thousand one hundred"));
console.log(parseInt("one hundred"));
console.log(parseInt("zero"));
console.log(parseInt("million"));
console.log(parseInt("five thousand one hundred twenty-five"));

console.log(parseInt("zero hundred"));

console.log(parseInt("babu"));

console.log(parseInt("one hundred one"));

console.log(parseInt("one hundred ten"));

console.log(parseInt("eight hundred ninety-nine thousand four hundred twenty"));

console.log(parseInt("one million five hundred twenty-five"));

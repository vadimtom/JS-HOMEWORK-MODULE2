// 1
const logItems =function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i])
  }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// 2
const calculateEngravingPrice = function(message, pricePerWord) {
  const a = message.split(' ')
  const wordsLength = a.length
  const price = wordsLength * pricePerWord;
  return price
}
const result = (calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10));
console.log(result)


//3
const findLongestWord = function(string) {
  const words = string.split(' ')
  let longestWord = ''
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }
  return longestWord
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
//4
const formatString = function(string) {
  if (string.length < 40) {
    return string
  } else {
    return string.slice(0,39) + '...';

  }
}
console.log(formatString('Curabitur ligula sapien, tincidunt non'))

//5
const checkForSpam = function(message) {
  return !!(message.includes(`spam`) || message.includes(`sale`));
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//6
let input = prompt('ввести число');
const numbers = [];
let total = 0;
for (let i=0; i < Infinity; i++) {
  if (input === null) {
    break
  }
  let inputNumber = Number(input)
  if (!Number.isNaN(inputNumber)) {
    numbers.push(Number(input))
  }
  else {
    alert('Было введено не число, попробуйте еще раз')
  }
    input = prompt('ввести число');
  if(numbers.length){
    for (const number of numbers){
      total += number
    }

  }
}
alert(`Общая сумма чисел равна ${total}`)

//7
const logins = ['Mango', 'robotoGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123']
const isLoginValid = function(login) {
  return (login.length >= 4 && login.length <=16)
};
const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login)
};
const addLogin = function(allLogins, login) {
if (!isLoginValid(login)) {
   return ('Ошибка! Логин должен быть от 4 до 16 символов')
}
else if (!isLoginUnique(allLogins,login)) {
  return ('Такой логин уже используется!')
}
else {
  logins.push(login);
  return "Логин успешно добавлен!"
}
}

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotoGoogles'))
console.log(addLogin(logins, 'Zodiac'))
console.log(addLogin(logins, 'jqueryisextremelyfast'))
console.log(logins)
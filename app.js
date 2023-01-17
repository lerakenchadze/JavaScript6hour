// 1. Переменные
// CamelCase
// const firstName = 'Valeriya' 
// const lastName = 'Deshkevich' // string
// const age = 21 // number
// const isProgrammer = true //boolean

// const _private = 'private'
// const _ = 'private'
// const $ = 'some value'

// const if = 'nfjdk' //err
// const withNum5 = '5'
//const 5withNum = '5' // err





// 2. Мутирование

// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию: ')
// alert(firstName + ' ' + lastName)

// 3. Операторы
// let currentYear = 2023
// const birthYear = 2001

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

// 4. Типы данных
// const isProgrammer = true
// const name = 'Valeriya'
// const age = 21
// let x
// console.log(typeof isProgrammer)
// console.logty(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)
  



// 5. Приоритет операторов  mdn operator precedence
// const fullAge = 21
// const birthYear = 2001
// const currentYear = 2023

//  > < >= <= отвечают за сравнение
// const isFullAge = currentYear - birthYear >= fullAge

// 6. Условные операторы

// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// }

// if (courseStatus === 'pending'){
//     console.log('Курс пока проходится в процессе разработки')
// }
  


// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// }
// else if (courseStatus === 'pending'){
//     console.log('Курс пока проходится в процессе разработки')
// }
// else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if(isReady){
//     console.log('Все готово!')
// }
// else {
//     console.log('Все не готово!')
// }

// Тернарное выражение для простых условий
// isReady ? console.log('Все готово!') : console.log('Все не готово!')


// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1===num2)
// == - это если разные типы данных но их надо сравнять



// 7. Булевая логика  mdn logical operators

// 8. Функции

// function calculateAge(year){
//     return 2023 - year
// }

// const myAge = calculateAge(2001)
// console.log(myAge)


// function logInfoAbout(name, year){
//     const age = calculateAge(year)

//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// }

// logInfoAbout('Валерия', '2023')

// 9. Массивы

const cars = ['Мазда', 'Мерседес', 'Форд'] // - более правильный вариант
// console.log(cars)
// const cars = new Array('Мазда', 'Мерседес', 'Форд')

// console.log(cars[1]) //индекс
// console.log(cars.length) // длина массива
cars[0] = 'Porsche'
cars[cars.length] = 'Mazda' // добавлять в конец

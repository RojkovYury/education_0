console.log('--------------------')
console.log('--Числа--');
console.log('--------------------')

const num = 42; //integer
const float = 42.42; //float
const pow = 10e3 //10000 (то есть 10 в третьей степени)

console.log('Number.MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER); //2e53-1
console.log('Math.pow(2,53) -1 ', Math.pow(2,53) -1); //2e53-1
console.log('Number.MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER);
console.log('number.MAX_VALUE ', Number.MAX_VALUE); // максимальное число, с которым может оперировать ЯС, но не может считать
console.log('number.MIN_VALUE ', Number.MIN_VALUE);
console.log('number.POSITIVE_INFINITY ', Number.POSITIVE_INFINITY);
console.log('number.NEGATIVE_INFINITY ', Number.NEGATIVE_INFINITY);
console.log(Number.NaN); //Not a Number

const stringInt = '40'
console.log(stringInt + 2) //402

console.log(Number.parseInt(stringInt) + 2) //можно без number
console.log(+stringInt + 2) //то же самое, что и сверху. Преобразует строчку в число

const stringFloat = '40.42'
console.log(parseInt(stringFloat) + 2) // все равно получаем 42
console.log(parseFloat(stringFloat) + 2) // получаем 42.42

console.log('------------------')
console.log('0.4+0.6 ', 0.4+0.2) //0,6000000000001
console.log('(0.4+0.2).toFixed) ', (0.4+0.2).toFixed(10)) // число или выражение.toFixed(10) - максимум десятичных чисел (0.6000000000)
console.log('+(0.4+0.2).toFixed) ', +(0.4+0.2).toFixed(10)) // parseFloat принудительно в число, убирает нули
console.log('+(0.4+0.2).toFixed) ', parseFloat((0.4+0.2).toFixed(10))) 

console.log('------------------BigInt--')
console.log(90071992547409919999999n); //n в конце преобразует Number в BigInt
//BigInt нельзя миксовать с другими типами данными 
console.log(parseInt(10n)-4); //преобразовываем BigInt в Int и вычисляем (6)
console.log(10n-BigInt(4)); // наоборот (6n)

console.log('------------------Math--')
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25)) //квадрат (5)
console.log(Math.pow(5,2)) //степень, пять во второй (25)
console.log(Math.abs(-42)) //модуль числа (42)

console.log(Math.max (12,422,23,11)); //определяет максимальное число (422)
console.log(Math.min (12,422,23,11));

console.log(Math.random());

console.log('------------------пример--')
function getRandomBetween (min, max) {
	return Math.random()* (max-min) + min
}
console.log(getRandomBetween (10,42)) //(хх.хххххх....)
//
function getRandomBetween2 (min, max) {
	return Math.floor(Math.random() * (max-min+1) + min)
}
console.log(getRandomBetween2 (10,42));  // (xx)

//_____Строки__________________________________
console.log('--------------------')
console.log('--Строки--');
console.log('--------------------')

const name1 = 'Yury';
const age = '31';
const output1 = 'name : ' + name1 + ' age : ' + age;
console.log(output1);
//или
const output2 = `name : ${name1} age : ${age} `;
console.log(output2);
//или
function getAge() {
	return age
}
const output3 = `name : ${name1} age : ${getAge()} `;
console.log(output3);
//или
const output4 = `name : ${name1} age : ${age<30 ? 'A':'B'} `; // если истина, то А, иначе В
console.log(output4);

console.log('--------------------')
console.log('--Методы--');
console.log('--------------------')
const output5 = `
<div>This is "div"</div>
<p>this is "p" </p>
`
console.log(output5);

const name2 = 'Yury';
console.log(name2.length);
console.log(name2.toUpperCase()); //все к верхнему регистру
console.log(name2.toLowerCase());
console.log(name2.charAt(2)); //узнать что в позиции два (r) c нуля
console.log(name2.indexOf('ry')); //возвращает 2, то есть начиная с пятого индекса есть такая подстрока
//если ничего не нашлось, то возвращает -1
console.log(name2.startsWith('Yu')); // начинается ли строка с данной подстроки, возвращает true
console.log(name2.endsWith('Yu')); // заканчивается ли тсрока символами "Yu". false
//можно использовать некоторые методы подряд, например, если необходимо не учитывать регист:
console.log(name2.toLowerCase().startsWith('yu')); //сначала приводим к нижнему регистру, а потом ищем подстроку. Правда
console.log(name2.repeat(3)); //повторить трижды
const string1 = '     password       '//печатает со всеми пробелами
console.log(string1);
console.log(string1.trim()); //без пробелов
console.log(string1.trimLeft()); //убирает пробелы слева 
console.log(string1.trimRight()); //и справа

console.log('--------------------')

function logPerson (s, name, age) {
	if (age<0) {
		age='Ошибка, еще не родился'
	}
	return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`;
}

const personName1 = 'Yury';
const personName2 = 'Max';
const personAge1 = 31;
const personAge2 = -10;

const output6 = logPerson`Имя ${personName1}, возраст: ${personAge1}`
const output7 = logPerson`Имя ${personName2}, возраст: ${personAge2}`

console.log(output6);
console.log(output7);

console.log('--------------------')
console.log('--FUNCTION--');
console.log('--------------------')


//--function Declaration--
function greet(name) {
	console.log('Привет - ', name)
}

//--function Expression (функция в переменной)--
const greet2 = function(name) {   //const greet2 = function greet2() { - идентично
	console.log('Привет 2 - ', name)
}

greet ('Yury')
greet2 ('Yury')
//Declaration - в любом месте
//Expression - переменная должна быть объявлена до вызова функции!!

//--Анонимные функции--
let counter = 0
setInterval(function() {
	console.log(++counter)
},100000);

//--Стрелочные функции--

//	const greet2 = function(name) {
//		console.log('Привет 2 - ', name)
//	}

//1 можно сократить function, стрелочка её обозначает
const arrow = (name) => {
	console.log('Привет 3 - ', name)
}
arrow ('Yury');
//2, если у функции одна строчка можно сократить фигурные скобки
//если один параметр - можно сократить круглые скобки 
const arrow2 = name => console.log('Привет 4 - ', name)
arrow2 ('Yury');

//1
const pow2 = num2 => {
	return num2 ** 2; //** - возвести в степень
}
console.log(pow2(5)) //25

//2 return так же можно убрать
const pow3 = num3 => num3 ** 3;
console.log(pow3(5)) //125

//--Параметры по умолчанию--
const sum = (a,b) => a+b
console.log(sum(41,1))
//если не обозначить один из параметров, выдаст NaN, например sum(41) будет ошибкой, так как 41+ind=NaN
//для этого можно сразу задавать параметр по умолчанию:
const sum2 = (a,b=1) => a+b
console.log(sum2(41)) //42
console.log(sum2(41,4)) //45, так как b=1 заменяется на b=4


function sumAll(...all) { //... - неограниченное кол-во
	console.log(all)
}
sumAll(1,12,5,4,8,9)	//массив из 6 элементов

//к ней же задаем логику суммирования всех элементов массива
function sumAll2(...all2) {
	let result = 0
	for (let num of all2) {
		result += num
	}
	return result
}
const res = sumAll2(1,12,5,4,8,9)
console.log(res)	

//--Замыкания--
function createMember (name3) {
	return function(surname3) {
		console.log(name3+surname3)
	}
}

const logWithSurname = createMember ('Yury')
console.log(logWithSurname) //по факту, сейчас "logWithSurname" равняется "function(surname3) {console.log(name3+surname3)}"

console.log(logWithSurname('Petrov')) //YuryPetrov
console.log(logWithSurname('Sidorov')) //YurySidorov

console.log('--------------------')
console.log('--Массивы--');
console.log('--------------------')

const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const fib = [1,1,2,3,5,8,13]

cars.push('Porsche') //добавление в конец массива
cars.unshift('Volga') //в конец
console.log(cars)

//cars.shift() //удаляет и возвращает первый элемент массива
const firstItem = cars.shift() //первый элемент удаляется из массива и заносится в переменную
const lastCar = cars.pop() //последнюю
console.log(cars)
console.log(firstItem)

console.log(cars.reverse()) //мутирует и возвращает реверсивный массив

//Задача1
const text = 'Тест, тестович'
//const reversText = text.split(',') //метод сплит делит строчку и вовзращает массив // (2) ['Тест', ' тестович']
//если в сплит передать пустое значение, то он делит все по знакам
const reversText = text.split('').reverse().join('') //1. делим строчку в массив 2. разворачивает его
//3. обединяем получившийся результат в одну переменную строчку (чивотсет ,тсеТ) через пробел.
console.log(reversText)

console.log(cars.indexOf('BMW')) //1 //вовзращает номер элемента

const index = cars.indexOf('BMW') //1
console.log(cars[index]) //BMW

cars[index] = 'Reno' //присваеваем индексу два значение Рено
console.log(cars) //['Mersedes', 'Reno', 'Ford', 'Mazda']

//----------массив из объектов--
const people = [
	{name: 'Yury', budget: 4200},
	{name: 'Elena', budget: 3500},
	{name: 'Viktoria', budget: 1700},
]
//если нужно найти бюджет того у кого 3500 это не сделать с indexOf (сложно сделать), необходим findIndex
//вар1
const index2 = people.findIndex(function(person) {
	return person.budget === 3500
})
console.log(index2) //1
console.log(people[index2]) //{name: 'Elena', budget: 3500}

//вар2
const person = people.find(function(person) {
	return person.budget === 3500
})
console.log(person) //{name: 'Elena', budget: 3500}
console.log('----------')

//более подробно в цикле всё вышенаписанное:

let findedPerson
for (const person1 of people) { //итерация по массиву people
	if (person1.budget === 3500) { //если бюджет 3500
		findedPerson = person1     //тогда findedPerson = этому персонажу
	}
}
console.log(findedPerson)

//упрощаем в стрелочную функцию:
const person2 = people.find((person) => { //так как параметр один можно убрать скобки
	return person.budget === 4200         //так как функция в одну строку можно убрать ретурн
})
console.log(person2)

//еще больше упрощаем:
const person3 = people.find(person => person.budget === 1700)
console.log(person3)
//если такой переменной нет, то эта переменная будет не определена
console.log('----------')
//----------------------

const cars1 = ['Mazda', 'Ford', 'BMW', 'Mersedes']
cars.includes ('Mazda') //проверка наличия элемента //true
cars.includes ('Reno')  //проверка наличия элемента //false

//--Методы высокого порядка--
const uppperCaseCars = cars1.map(car => { //метод map всегда возвращает новый массив, то есть cars1 остался без изменений
	return car.toUpperCase()
})
console.log(uppperCaseCars)

const fib1 = [1,1,2,3,5,8,13]
const pow2Fib = fib1.map(num => num ** 2)
console.log(pow2Fib)

//логику 'num => num ** 2' можно вынести в отдельную функцию:
const pow4 = num => num ** 2 //это будет функция принимающая число и возводящая ее в квадрат
const pow2Fib1 = fib1.map(pow4)
console.log(pow2Fib1)

//так же можно вызывать методы:
const sqrt = num => Math.sqrt(num)
const pow2Fib2 = fib1.map(pow4).map(sqrt) //const pow2Fib2 = fib1.map(pow4).map(Math.sqrt) если без переменной
console.log(pow2Fib2)
console.log('----------')

//отфильтруем массив
const pow5 = num => num ** 2
const pow2Fib5 = fib1.map(pow5)
const filterNumbers = pow2Fib5.filter(num => {         //отсеим элементы которые меньше 20 
	return num > 20 //если вернет тру, то элемент остается в результирующем массиве
	//метод фильтр создает новый массив, поэтому прячем его в новую переменную
})
//const filterNumbers = pow2Fib5.filter(num => num > 20)
console.log(filterNumbers)
//---------map - преобразовывает данные, filter - фильтрует
console.log('----------')

//допустим, мы хотим сложить все бюджеты, которые больше 2000
//метод reduce
const people2 = [
	{name: 'Yury', budget: 4200},
	{name: 'Elena', budget: 3500},
	{name: 'Viktoria', budget: 1700},
]

//people2.reduce(function(acc, person) {}, 0) //принимает первым параметром функцию, а вторым параметорм - некое начальное значение.
//приводим к стрелочному виду и оборачиваем в переменную:
const allBudget = people2.reduce((acc, person) => {
	acc += person.budget
	return acc
}, 0)
console.log(allBudget) //9400 // Мы сложили все бюджеты

const allBudget1 = people2.reduce((acc, person) => {
	if (person.budget > 2000) {
		acc += person.budget
	}
	return acc
}, 0)
console.log(allBudget1) //7700 // Мы сложили только те, что больше 2000

//усовершенствуем методом фильтр:
const allBudget2 = people2
	.filter(person => person.budget > 2000) //возвращаем всех тех  кого бюджет больше 2000 тысяч
	.reduce((acc, person) => { 
		acc += person.budget
		return acc
	}, 0)
	//то есть filter возвращает нам новый массив, у которого в свою очередь есть стой метод reduce 
console.log(allBudget2) //7700 // Мы сложили только те, что больше 2000

console.log('--------------------')
console.log('--Объекты--');
console.log('--------------------')

const persona = {
	name0: 'Yury',
	age0: 31,
	isProgrammer: true,
	languages: ['ru', 'en', 'bg'],
	'complex key': 'Complex Value',
	['key_' + (1+3)]: 'Computed Key', //key_4
	//сокращенно от - greet0: function() {  //опускаем слово function //метод так как внутри объекта
	greet0() {  
		console.log('greet0 from persona')
	}
}

console.log(persona.name0) //Yury
console.log(persona['age0']) //31
const ageKey = 'age0'
console.log(persona[ageKey]) //31
console.log(persona['complex key']); //Complex Value
persona.greet0()

persona.age0++
console.log(persona['age0']) //32

persona.languages.push ('by') //languages: (4) ['ru', 'en', 'bg', 'by']
console.log(persona)

//удаляем из объекта
delete persona['key_4']

////получаем поле в отдельную переменную:
//const name0 = persona.name0
//const age0 = persona.age0
//const languages = persona.languages
//console.log(name0, age0, languages)

////второй способ. Деструктуризация:
const {name0, age0: nextAge = 10, languages} = persona; //так же можно поменять переменную при заборе поля age0: nextAge, 
//а также постаить значение по умолчанию (= 10), если переменная будет неопределена
console.log(name0, nextAge, languages);

//--Итерация объекта
for (let key in persona) {
	//при использовании цикла "for in" бежит не только по ключам объекта, но и заходит в его прототип
	//поэтому нужна проверка:
	if (persona.hasOwnProperty(key)){
		console.log('key: ', key)
		console.log('value: ', persona[key])
	}
}
console.log('--------')

//forEach не бежит проверкой по прототипу
const keys = Object.keys(persona)
console.log(keys)
keys.forEach((key) => {
	console.log('key: ', key)
	console.log('value: ', persona[key])
})

//так же необязательно объявлять переменную, так как Object.keys возвращает массив и к нему сразу можно применить метод forEach:
Object.keys(persona).forEach((key) => {
	console.log('key: ', key)
	console.log('value: ', persona[key])
})

console.log('------------------')
console.log('--контекст(this)--')

const persona01 = {
	name01: 'Yury',
	age01: 31,
	isProgrammer01: true,
	languages01: ['ru', 'en', 'bg'],
	//сокращенно от - greet0: function() {  //опускаем слово function //метод так как внутри объекта
	greet01() {  
		console.log('greet0 from persona')
	},
	info01() {
		console.log('this:', this);
	  //console.info('Info of people:', persona01.name01);
		console.info('Info of people:', this.name01);
	}
}
persona01.info01()

const logger = {
	keys01(obj) {
	  //console.log('Object Keys:', Object.keys(obj))
		console.log('Object Keys:', Object.keys(this)) //this будет тем объектом, который мы сами передадим
	}
}
logger.keys01(persona01)
const bound = logger.keys01.bind(logger) //привязываем метод
//const bound = logger.keys01.bind(persona) 
bound()
logger.keys01.call(persona01)
console.log('------------------')

/*const logger02 = {
	keys() {
		console.log('Object Keys: ', Object.keys(this))
	},
	keysAndValues() {
		Objets.keys(this).forEach(key => {
			console.log(`"${key}": ${this[key]}`)
		})
	}
}*/
//logger02.keysAndValues.call(persona01)

console.log('--------------------')
console.log('--Асинхроность--');
console.log('--------------------')


//event loop
const timeout = setTimeout(() => {	
console.log('afterTimeout')
}, 2500)
clearTimeout(timeout)

const interval = setInterval(() => {	
console.log('afterInterval')
}, 1000)
clearInterval(timeout)

const delay0 = (callback, wait = 1000) => {
	setTimeout(callback, wait)
}
delay0(() => {
	console.log('after 2 sec')
})

const delay = (wait = 1000) => {
	const promise = new Promise ((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, wait)
	})
	return promise
}

delay(2500)
	.then(() => {
		console.log('after 2 sec2')
	})
	.catch(err => console.error(err))
	.finally(() => console.log('finally'))

const getData = () => new Promise (resolve => resolve ([
	1,1,2,3,5,8,13
	]))

getData().then(data => console.log(data))

async function asyncExample() { //async - делает функцию асинхронной, чтобы работать с await
	await delay(3000)
	const data = await getData()
	console.log(data)
}

asyncExample()



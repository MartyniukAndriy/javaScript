//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr=[
    12,13,15,20,31,
    'book','dog','cat',
    'red','blue']
console.log(arr [0])
console.log(arr [1])
console.log(arr [2])
console.log(arr [3])
console.log(arr [4])
console.log(arr [5])
console.log(arr [6])
console.log(arr [7])
console.log(arr [8])
console.log(arr [9])

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1={
    title:'love of life',
    pageCount:96,
    genre:'novel'
}
let book2={
    title:'1984',
    pageCount:315,
    genre:'sci-fi'
}
let book3={
    title:'clockworck orange',
    pageCount:200,
    genre:'autopy'
}

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let read1={
    title:'love of life',
    pageCount:96,
    genre:'novel',
    autors:[
        {name:'Jack London',
        age:40}]
}
let read2={
    title:'1984',
    pageCount:315,
    genre:'sci-fi',
    autors:[
        {name:'George Orwell',
        age:43}]
}
let read3={
    title:'clockworck orange',
    pageCount:200,
    genre:'autopy',
    autors:
        [{name:'Antony Burgess',
            age:76}]

}
console.log(read3.autors)

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let usrs =[
    user1={
        name: 'Anton',
        username: 'Anton2023',
        password: 'qwert12345',
    },
    user2={
        name: 'Vasya',
        username: 'dsgdf',
        password: 'gg12ht',
    },
    user3={
        name: 'vanya',
        username: 'aasasd',
        password: 'ghi345',
    },
    user4={
        name: 'Dima',
        username: 'mi12345',
        password: 'HHsqeds',
    },
    user5={
        name: 'Ivan',
        username: 'Iv3907',
        password: 'Jjfrt5767',
    },
    user6={
        name: 'Oleg',
        username: 'Jjysd12',
        password: 'Ff12ht45',
    },
    user7={
        name: 'Darya',
        username: 'DshTy561',
        password: 'qwert1JJ67',
    },
    user8={
        name: 'Jason',
        username: 'Jatty67',
        password: 'Kk12ui90',
    },
    user9={
        name: 'Diana',
        username: 'Dd12hty',
        password: 'qwggohjy1',
    },
    user10={
        name: 'Oksana',
        username: 'Oodd12',
        password: 'Jias12',
}
]
console.log(user1.password)
console.log(user2.password)
console.log(user3.password)
console.log(user4.password)
console.log(user5.password)
console.log(user6.password)
console.log(user7.password)
console.log(user8.password)
console.log(user9.password)
console.log(user10.password)

//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
    let x = 0
    if (x!==0){console.log('не вірно')}
    else{console.log('вірно')}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

    let time =100
    if (time >=45 && time<=59){
        console.log('4 part')}
    else if (time >=30 && time<=45)
        console.log('3 part')
    else if (time >=15 && time <=30)
        console.log('2 part')
    else if (time >=0 && time <=15)
        console.log('1 part')
    else {
        console.log('не вийшло)')}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

    let number= '4'
    if (number <=31 && number >=21){
        console.log('3 part')}
    else if(number <=21 && number >=11){
        console.log('part2')}
    else if(number <=11 && number>=0){
        console.log('part 1')}
    else {
        console.log('спробуй знову')
    }

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//   - Користувач вводить або має два числа.

    let day  = prompt('введи день тиждня');
    switch (day){
        case 'monday':
        console.log('сумно пари')
        break;
        case 'tuesday':
        console.log('спать');
        break;
        case'wednesday':
        console.log('пити')
        break;
        case'thursday':
        console.log('знову спати')
        break;
        case'friaday':
        console.log('ще раз пари')
        break;
        case'saturday':
        console.log('додаткова')
        break;
        case'sunday':
        console.log('die')
        break;
        default:
            console.log('навіть не думай більше')
    }
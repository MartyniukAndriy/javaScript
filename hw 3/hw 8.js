//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
const users =[
    new User(1,'vasya','ggg','@vasya.pes','0675671425'),
    new User(2,'darya','g22','@darya.pes','0675672343'),
    new User(3,'kolya','mops','@mops.ua','0675671678'),
    new User(4,'petya','jkkj','@petya.com','06756908967'),
    new User(5,'olya','rrr','@olya.hjh','06756790425'),
    new User(6,'oleg','jua','@oleg.jjp','0675679090'),
    new User(7,'vanya','kkk','@vanya.com','0675890425'),
    new User(8,'lera','ooo','@lera.com','0675675625'),
    new User(9,'bogdan','qqq','@bogdan.pes','0675761542'),
]
console.log(users)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user ) =>(user.id %2)));
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((u1,u2) => u1.id - u2.id))
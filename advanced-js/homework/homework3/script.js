class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set name (name) {
        this._name = name;
    }
    get name () {
        return this._name;
    }
    set age (age) {
        this._age = age;
    }
    get age () {
        return this._age;
    }
    set salary (salary) {
        this._salary = salary;
    }
    get salary () {
        return this._salary;
    }
}

class Programmer extends Employee{
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }
    set salary (salary){
        this._salary = salary * 3;
    }
    get salary () {
        return this._salary ;
    }
}

const worker1 = new Programmer("John", "35", 1_000, ["Javascript", "Java", "PHP", "SQL"]);
const worker2 = new Programmer("Roman", "40", 850, ["Javascript", "PHP", "SQL"]);
const worker3 = new Programmer("Anna", "30", 750, ["Javascript", "PHP"]);
const worker4 = new Employee("Victor", "20", 650);
const worker5 = new Employee("Maria", "18", 550);


console.log("Worker 1", worker1);
console.log("Worker 2", worker2);
console.log("Worker 3", worker3);
console.log("Worker 4", worker4);
console.log("Worker 5", worker5);

//   Обьясните своими словами, как вы понимаете, как работает прототипное наследование в Javascript
/* 
  Прототипне спадкування полягає в тому, що один об'єкт можна зробити прототипом іншого.
  При цьому якщо властивість не знайдена в об'єкті - вона береться з прототипу.
*/
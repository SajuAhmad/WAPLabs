(function () {
    "use strict";

    // Exercise 1:
    console.log("Exercise 1");
    String.prototype.filter = function (str) {
        return this.replace(str + " ", "");
    };
    console.log("This house is not nice!".filter('not'));
    console.log("\n");


    // Exercise 2:
    console.log("Exercise 2");
    Array.prototype.bubbleSort = function () {
        let len = this.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (this[j] > this[j + 1]) {
                    let tmp = this[j];
                    this[j] = this[j + 1];
                    this[j + 1] = tmp;
                }
            }
        }
        return this;
    };
    console.log([6, 4, 0, 3, -2, 1].bubbleSort());
    console.log("\n");


    // Exercise 3a:
    console.log("Exercise 3a");

    function Person(name, age) {
        this.name = name;
        this.age = age;
        let species = "homo sapien";
        this.species = function () {
            return species;
        };
        this.favoriteHobby = function (hobby) {
            return "My name is " + name + " and my hobby is " + hobby;
        };
    }

    function Teacher(name, age) {
        Person.call(this, name, age);
        this.teach = function (subject) {
            return this.name + " is now teaching " + subject;
        };
    }

    const p11 = new Person("Saju", 29);
    const t11 = new Teacher("Prof. K. Levi", 60);
    const t12 = new Teacher("Prof. T. Xing", 35);

    console.log(t11.teach("WAP"));
    console.log(t12.teach("WAA"));
    console.log(t12.species());
    console.log(p11.favoriteHobby("Fishing"));
    console.log("\n");


    // Exercise 3b:
    console.log("Exercise 3b");
    const Person2 = {
        name: "Default",
        age: 0,
        species: function () {
            return "homo sapien";
        },
        favoriteHobby: function (hobby) {
            return "My name is " + this.name + " and my hobby is " + hobby;
        }
    };

    const t21 = Object.create(Person2);
    t21.teach = function (subject) {
        return this.name + " is now teaching " + subject;
    };

    t21.name = "Prof. K. Levi";
    t21.age = 60;

    console.log(t21.teach("WAP"));
    console.log(t21.species());
    console.log(t21.favoriteHobby("Teaching"));
    console.log("\n");


    // Exercise 3c:
    console.log("Exercise 3c");

    class Person3 {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        static species() {
            return "homo sapien";
        }

        favoriteHobby(hobby) {
            return "My name is " + this.name + " and my hobby is " + hobby;
        }
    }

    class Teacher3 extends Person3 {
        constructor(name, age) {
            super(name, age);
        }

        teach(subject) {
            return this.name + " is now teaching " + subject;
        }
    }

    const p31 = new Person3("Saju", 29);
    const t31 = new Teacher3("Prof. K. Levi", 60);
    const t32 = new Teacher3("Prof. T. Xing", 35);

    console.log(t31.teach("WAP"));
    console.log(t32.teach("WAA"));
    console.log(t32.species());
    console.log(p31.favoriteHobby("Fishing"));
    console.log("\n");

    // Exercise 4:
    console.log("Exercise 4 Using Object.create");
    const Person4 = {
        name: "Default",
        age: 0,
        greetings: function () {
            return "Greetings, my name is " + this.name + " and I am " + this.age + " years old.";
        },
        salute: function () {
            return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
        }
    };

    const Student = Object.create(Person4);
    Student.major = "CS";
    Student.greetings = function () {
        return "Hay, my name is " + this.name + " and I am studying " + this.major;
    };
    Student.name = "Saju";
    console.log(Student.greetings());
    console.log(Student.salute());

    const Professor = Object.create(Person4);
    Professor.department = "CSE";
    Professor.greetings = function () {
        return "Good day, my name is " + this.name + " and I am in " + this.department + " department.";
    };
    Professor.name = "Prof. K. Levi";
    console.log(Professor.greetings());
    console.log(Professor.salute());
    console.log("\n");


    // Exercise 4 Using function constructors
    console.log("Exercise 4 Using function constructors");

    function Person5(name, age) {
        this.name = name;
        this.age = age;
        this.greetings = function () {
            return "Greetings, my name is " + this.name + " and I am " + this.age + " years old.";
        };
        this.salute = function () {
            return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
        };
    }

    function Student2(name, age, major) {
        Person5.call(this, name, age);
        this.major = major;
        this.greetings = function () {
            return "Hay, my name is " + this.name + " and I am studying " + this.major;
        };
    }

    function Professor2(name, age, department) {
        Person5.call(this, name, age);
        this.department = department;
        this.greetings = function () {
            return "Good day, my name is " + this.name + " and I am in " + this.department + " department.";
        };
    }

    const st = new Student2("Saju", 29, "CS");
    const prof = new Professor2("Prof. K. Levi", 60, "CSE");
    console.log(st.greetings());
    console.log(st.salute());
    console.log(prof.greetings());
    console.log(prof.salute());
    console.log("\n");


    // Exercise 4 Using ES6 Class
    console.log("Exercise 4 Using ES6 Class");

    class Person6 {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        static greetings() {
            return "Greetings, my name is " + this.name + " and I am " + this.age + " years old.";
        }

        static salute() {
            return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
        }
    }

    class Student3 extends Person6 {
        constructor(name, age, major) {
            super(name, age);
            this.major = major;
        }

        static greetings() {
            return "Hay, my name is " + this.name + " and I am studying " + this.major;
        }
    }

    class Professor3 extends Person6 {
        constructor(name, age, department) {
            super(name, age);
            this.department = department;
        }

        static greetings() {
            return "Good day, my name is " + this.name + " and I am in " + this.department + " department.";
        }
    }

    const st1 = new Student3("Saju", 29, "CS");
    const prof1 = new Professor3("Prof. K. Levi", 60, "CSE");
    console.log(st1.greetings());
    console.log(st1.salute());
    console.log(prof1.greetings());
    console.log(prof1.salute());
    console.log("\n");

})();
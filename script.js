console.log("Hello World");

// x = 5;
// var x = 5;
// let x = 5;

// Use const wherever you can, otherwise use let

const x = 5;

console.log(x);

let fruits = [
    "apple",
    "banana",
    "mango"
];

fruits.forEach(fruit => {
    console.log(fruit.toLocaleUpperCase());
});

console.log(fruits);

mapTest = fruits.map((fruit) => {
    return fruit.toLocaleUpperCase();
});

console.log(mapTest);


// Objects

const person1 = {
    name: "Perri",
    age: 23,
    city: "Toowoomba",
    greetingMessage: function() { // Function expression
        console.log("My name is " + this.name + "!")}
};

console.log(person1.name);
console.log(person1.age);
console.log(person1.city);
console.log(person1.greetingMessage());



const person2 = {
    name: "Liam",
    age: 26,
    city: "Toowoomba",
    greetingMessage: () => { // Function expression
        console.log("Hi!");
    }
};

console.log(person2.name);
console.log(person2.age);
console.log(person2.city);
console.log(person2.greetingMessage());

// Functions

function calculateArea(length, width) {
    return length * width;
};

let area = calculateArea(5,3);

console.log(area);

// Methods

function greet(name) {
    console.log("Hello," + name + "!")

}

let person3 = {
    name: "Baden",
    age: 20,
    city: "Toowoomba",
    greetingMessage: greet
};

//           object propertyValue
console.log(person3.name);
//           object  propertyFunction
console.log(person3.greetingMessage(person3.name));

console.log(this);


// Object inside of an object
let person4 = {
    name: "Alice",
    age: 25,
    city: "Sydney",
    greetingMessage: greet,
    contact: {
        tel: "24444444",
        mobile: "0400444444",
        voicemailMessage: function(){
            console.log("This message is from a nested object");
        }
    }
}

console.log(person4.contact.tel); // Fetch a method inside of a method
console.log(person4["contact"]["tel"]);

console.log(person4.contact.voicemailMessage()); // REMEMBER () for functions

console.log(Object.keys(person4));
console.log(Object.keys(person4.contact));

## TypeScript

Crash course by XREF

---

## What is TypeScript

- Superset of Javascript developed by Microsoft.
    - Subset or superset means that every thing you can do with Javascript, you can do with Typescript with extra featuers.
    - Example of superset is Objective C is a superset of C language.
- Transpiled to Javascript.
- Easily to integrate with Javascript projects.
- Designed for developmenet of large projects or application.

---

## What does TypeScript offer?

#### Main topics:

- Static type checking.
- Class based objects (OOP).
- Modularity (Import, Export => require, module.exports).
- ES6 features (Fat arrow, classes, etc).
- Syntac closer to Java and other high level languages.

---

## Static Type Checking.

***With Typescript we can check and assign type to variables, parameter, and function.***

Types are:
- Completely optional
- Helps us find and prevent bugs and stop future issue from happening.
- Makes our code much more readable and desciptive.

***Again those are OPTIONAL to use but If you use them and you assaign variable with different value type then it will throw you an error with the wrong type.***

+++

## TypeScript Types are:

The core types:

- String
- Number
- Boolean
- Array
- Any
- Void
- Null

More info:
https://www.typescriptlang.org/docs/handbook/basic-types.html

---

## Class based objects (OOP)

- OOP in Javascript.
- No prototypes.
- Encapsulation (Individual modules).
- Inheritance.
- Modifiers (public, private, protected).

---

## TypeScript Compiler (tsc)

- Written in TypeScript itsef.
- Compile .ts to .js
- Installed as NPM package (Node.js)
- Support ES6 syntax.

---

## Let's have fun.

---

## Installation

```
npm install -g typescript@latest
```

---
# Variables
## EX-01:

```typescript
let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myVar: any;

myString = "Hello".slice(0, 4);
myNumber = 1;
myBoolean = true;
myVar = ['anything', 2, true, {org: 'Refugees { Code }'}];
```
+++

## EX-02:
```typescript

// Array can be done by either this way
let arrString: string[];
let arrNumber: number[];
let arrBoolean: boolean[];

// Or this way
let arrString: Array<string>;
let arrNumber: Array<number>;
let arrBoolean: Array<boolean>;

arrString = "Hello world".split(' ');
arrNumber = "1,2,3,4,5".split(',').map(function(num, i)
            {
                return parseInt(num)
            });
arrBoolean = [true, false];

```
+++

## EX-03:

```typescript
var myVoid: void = undefined;
var myNull: null = null;
var myUndefined: undefined = undefined;

console.log(myVoid);
console.log(myNull);
console.log(myUndefined);
```

+++
# Functions
## EX-04:
```typescript
function getSum(num1: number, num2: number): number {
 return num1 + num2;
}

console.log(getSum(10,5));
```

## Slight change
```typescript
function getSum(num1: string, num2: string): number {
    if(typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
 return num1 + num2;
}

console.log(getSum("10","5"))
```

+++
# Interfaces
## EX-05:

With custom Type or (Interface):

```typescript
interface Todo {
    title: string;
    text: string;
}

function printToDoList(args: Todo): void {
    console.log(args);
}

let todolist: Array<Todo> = [
    {title: 'this is title 1', text: 'this is text 1'},
    {title: 'this is title 2', text: 'this is text 2'},
]
printToDoList(todoList);
```
There are two errors!!! speify them.
+++

# Classes
## EX-06:

```typescript
class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = this.name.charAt(0).toUpperCase() + this.name.substr(1);
        this.email = email;
        this.age = age;
        console.log('User ' + this.name + ' has been created');
    }
    isUserRegister(user: string) {
        if(this.name == user) {
            console.log(user + ' is already registered');
        } else {
            console.log(user + ' user is not register on our system');
        }
    }
}

let ahmed = new User('ahmed', 'ahmedbazy@gmail.com', 28);
console.log(ahmed.name + ' age is: ' + ahmed.age);
```
Change age to private and see what happen.

```typescript
ahmed.isUserRegister('Ahmed');
```
+++

# Inheritance
## EX-07:
```typescript
interface UserInterface {
    name: string;
    email: string;
    age: number;
    isUserRegistered(user: string);
    isInvoicePaid();
}
class User implements UserInterFace {
    name: string;
    email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name.charAt(0).toUpperCase() + name.substr(1);
        this.email = email;
        this.age = age;
        console.log('User (' + this.name + ') has been created');
    }
    isUserRegistered(user: string) {
        if(this.name == user) {
            console.log(user + ' is already registered');
        } else {
            console.log(user + ' user is not register on our system');
        }
    }
    isInvoicePaid() {
        console.log(this.name + ' paid the invoice.');
    }
}

class Member extends User {
    id: number;
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }
    checkPaidInvoice() {
        super.isInvoicePaid();
    }
}

let ahmed: Member = new Member(20, 'ahmed', 'ahmedbazy@gmail.com', 28);
console.log(ahmed.name + ' age is: ' + ahmed.age);
ahmed.isUserRegistered('Ahmed');
console.log(ahmed.checkPaidInvoice());
```
---

#### Should we say TypeScript vs JavaScript?

***the answer is NO, because we are like using the enhanced Javascript but not another language with different structure***

BUT... we can say ->

---

# Why TypeScript?

1. Type safty.

### Javascript major problem:
```javascript
var ZIP = 1120;

setTimeout( () => {
    ZIP = 'Hello world';
}, 5000);

setInterval( () => {
    console.log(ZIP);
}, 2000);
```
 +++

### Typescript type safty

```typescript
let ZIP: number = 1120;

setTimeout( () => {
    ZIP = 'Hello world';
}, 5000);

setInterval( () => {
    console.log(ZIP);
}, 2000);
```
---

2. Debugging while coding.

***Did you suffer from figure out what is wrong with your code ? Now typescript will level down this pain by giving you some hints about what you are doing wrongly***

---

3. Intelisense

***This is the most beutiful feature that typescript give us. When you define a class and then you want to call a method or property in another place for the same class, then TypeScript will sense all the property and methods inside that called class and give them all to you as options. OR what we somehow call it autocomplete.***

---

4. Extra features.

- classes
- Transpile to ES5, or ES6.
- Modulization.
- etc.

---

#### "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie.

# Thank you.
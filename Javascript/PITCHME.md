## JavaScript

Crash course by XREF

---

## What is JavaScript

- JavaScript is the scripting language of the web.
- Run on client slide (Not any more with Nodejs).
- Created by Brendan Eich and Netscape.
- Doesn't need special software or server.
- Is the main code of many libraries or "Building Block" (Jquery, Ajax, Angular, ...)

---

## What can JavaScript do?

- Validate form.
- Create animations.
- Run Asynchronous content (No need to Reload).
- Communicate with the server.
- Power HTML5 features (Canvas, Geolocation, Local Storage, etc).
- Search & Autocomplete.
- Much Much more.

---

**Binding with HTML**

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
    <script>
        var isJSbrutal = "No, JavaScript won't bite.";
        document.write("Is JavaScript brutal: %s", isJSbrutal);
    </script>
</head>
<body>
    
</body>
</html>
```
@[9]
@[10-13]

---
## Variables

- Must begin with a letter, $ or _
- Are CASE SENSITIVE.
```Javascript
    var rc;
    rc = 'Refugees { Code }';
    var PI;
    PI = 3.14; // And this is not equal to pi;
    var isJSHard = false;
    var my_address = {
        country: 'Austria',
        city: 'Vienna',
        street: 'I will not tell you.',
        house: 'What do you want exactly?',
        door_num: 'Back off'
    }
```
@[1-2]
@[3-4]
@[5]
@[6-12]

@fa[arrow-down]

+++

## Variables TYPE:
- Strings.
- Numbers.
- Booleans.
- Objects.
- Arrays.

---

## Arrays are Objects

@fa[arrow-down]

+++
#### Indexed array
```Javascript
    var array = new Array();
    array[0] = 'index 0';
    array[1] = 'index 1';
    array[2] = 'index 2';

    var array = new Array('index 0', 'index 1', 'index 2');

    var array = ['index 0', 'index 1', 'index 2'];
```
@[1-4]
@[6]
@[8]
+++
#### Associative array
```Javascript
    var array = []
        array['index0'] = 0;
        array['index1'] = 1;
        array['index2'] = 2;
```

Note: To check that array is object use:
```javascript
    console.log("Is arrays are objects: " + (array instanceof Object) );
```

---

### Loops

***Loops are used to run the same code over and over until a certin condition is met***

#### Type of loops:

- for
```javascript
    for (var i = 0; i < array.length; i++) {
        // Run the same code over and over.
    }
```

---

- while
```javascript
var i = 0;
    while(i < array.length) {
        // Run the same code over and over.
        i++;
    }
```
- do ... while
```javascript
var i = 0;
    do {
        // Run the same code over and over.
        i++;
    } while (i < array.length)
```

---

- for ... in
```javascript
    var my_address = {
        country: 'Austria',
        city: 'Vienna',
        street: 'I will not tell you.',
        house: 'What do you want exactly?',
        door_num: 'Back off'
    }
    for (var item in my_address) {
        console.log(item + ': ' +my_address[item]);
    }
```
---

### Functions

***A function is a block of code that runs when it is called***

#### Types of functions
- Declaration function
- Expression function

```javascript
function sayHi() {
    console.log('Hi');
}
sayHi();
```

```javascript
var sayHi = function() {
    console.log('Hi');
}
sayHi();
```

---

**Everything in Javascript is an object**
**we have some buildin objects like: String, Date, Array**

Objects have properties
objectName.propertyName

```javascript
var greeting = 'Hello';
greeting.toUpperCase();
var x = greeting.length;
```
@[1]
@[2]
@[3]

x will be 5.
---


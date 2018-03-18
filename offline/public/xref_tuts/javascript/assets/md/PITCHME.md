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
<span class="code-presenting-annotation fragment current-only" data-code-focus="9"></span>
<span class="code-presenting-annotation fragment current-only" data-code-focus="10-13"></span>

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
<span class="code-presenting-annotation fragment current-only" data-code-focus="1-2"></span>
<span class="code-presenting-annotation fragment current-only" data-code-focus="3-4"></span>
<span class="code-presenting-annotation fragment current-only" data-code-focus="5"></span>
<span class="code-presenting-annotation fragment current-only" data-code-focus="6-12"></span>

<i class="fa fa-arrow-down" aria-hidden="true"> </i>

+++

## Variables TYPE:
- Strings.
- Numbers.
- Booleans.
- Objects.
- Arrays.

---

## Arrays are Objects

<i class="fa fa-arrow-down" aria-hidden="true"> </i>

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
<span class="code-presenting-annotation fragment current-only" data-code-focus="1-4"></span>
<span class="code-presenting-annotation fragment current-only" data-code-focus="6"></span>
<span class="code-presenting-annotation fragment current-only" data-code-focus="8"></span>
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
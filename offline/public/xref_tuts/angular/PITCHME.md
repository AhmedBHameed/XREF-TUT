## Angular [+2] Framework

Crash course by XREF

---

## Requirements

- HTML.
- CSS.
- Basic JavaScript.
- Programming fundamentals (Functions, Conditions, Loop, etc).

---

## What is Angular

- Angular is Javascript client side framework for creating powerful (APP not a PAGE).
- Invented by Google.
- Famouse framework that used in a wide range to date.
- It is a dynamic HTML (Imagination concept).

---

## ATTENTION!!!
### Angular is not:
- Server side framework or technology.
- JAVASCRIPT library (JQuery).
- Design pattern
- Platform or language (.NET, Java).
- Plugin or extention.

---

## What Angular can offer?

- Dynamic HTML.
- Powerful template.
- Fast rendering.
- Component encapsulation.
- Services (like HTTP service).
- Form & input handling.
- Event handling.
- Routing
- TypeScript subset.
- Much much more.

---

## What is TypeScript?

- A strict supset of JavaScript with added feature.
- Created by Microsoft.
- Optinal static typing (C#, Java).
- Class-based OOP

---

# Time for BIG talk.
### Are you ready?

---

## Components

***Components are the main way to build and specify elements and logic on pages***

- Basic building block of Angular UI
- Angular is a tree of components.
- Decorator allow us to mark a class as an Angular component & provide a metadata that determines how the component should be proccessed, initiated, and used at runtime.

@fa[arrow-down]

+++

**mycomponent.component.ts**

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'app-mycomponent',
    template: '<h1>Hello World</h1>'
})

export class MycomponentComponent {
    providedBy = 'XREF';
    constructor() { }

    sayMyName() {
        console.log('Ang-Tut provided by XREF');
    }
}
```
@[1]
@[3-6]
@[8-15]

---

## Services

***Services are used for reusable data services***

- [Share, Grabbing, Modifying] data among components throughout your app.

@fa[arrow-down]

+++

**myservice.service.ts**

```javascript
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpParams,  HttpRequest, HttpErrorResponse } from  '@angular/common/http';
import { environment } from  '../../../environments/environment';

@Injectable()
export class MyserviceService {
    
    public url = environment.backendUrl;

    constructor(
        private title: Title,
        private http: HttpClient
    ) {}

    pageTitle(activeRoute: any) {
        this.title.setTitle(activeRoute.snapshot.data['title']);
    }

    makeRequest(page = null, type = null, data = null, resType: string = null) {
        let headers = new HttpHeaders();
        let requestOptions, token = this.getToken();
        if (token) {
            headers = headers.set('Authorization', 'Basic ' + token);
        }
        headers = headers.set('Accept', 'application/json');
        if (type === 'Post' || type === 'Put' || type === 'Patch') {
            headers = headers.set('Content-Type', 'application/json');
            requestOptions = {
                headers: headers,
                body: JSON.stringify(data),
                responseType: !resType ? 'json' : 'text'
            };
        } else if (type === 'Get' || type === 'Delete') {
            requestOptions = {
                headers: headers,
                responseType: !resType ? 'json' : 'text'
            };
        }
        return this.http.request(type, this.url + page, requestOptions);
    }
}
```
@[1-4]
@[6]
@[7-42]
@[9]
@[16-41]

---

### Angular microscope view

![More angular](https://raw.githubusercontent.com/AhmedBHameed/XREF-TUT/master/Angular/assets/img/more_angular.jpg)

+++

![Angular structure](https://raw.githubusercontent.com/AhmedBHameed/XREF-TUT/master/Angular/assets/img/angular_structure.jpg)

---

## Angular installation methods

- From scratch.
- Using the quickstart
    ```
    https://angular.io/generated/zips/cli-quickstart/cli-quickstart.zip
    ```
- Using Angular-cli
    ```
    npm install -g angular-cli
    ```

##### **Requirements:** Node.js, NPM, Git, basic command prompt.
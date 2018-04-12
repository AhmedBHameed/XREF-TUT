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
## Angular part-2
### Are you ready?

---

## Angular installation methods

- From scratch.
- Using the quickstart
    ```
    https://angular.io/generated/zips/cli-quickstart/cli-quickstart.zip
    ```
- Using Angular-cli
    ```
    npm install -g @angular/cli
    ```

##### **Requirements:** Node.js, NPM, Git, basic command prompt.

---

## Create new Angular project

```text
#your-path> ng new PROJECT-NAME
```

---

## Files structure

create the missing folders.
```text
angular-Project
├── e2e
├── node_modules
├── src
│   ├── app
│   │   ├── componenets     # All created componenets here
│   │   ├── routes          # Routing files here
│   │   ├── services        # All created services
│   │   └── pipes           # All created pipes
│   ├── assets
│   ├── environmenets
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── style.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── .angular-cli.json
├── .editorconfig
├── .gitignore
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.json
├── README.md
├── tsconfig.json
└── tslinter.json
```

@[5-20]
@[6-9]

---

## Components
***Components are the main way to build and specify elements and logic on pages***
- Basic building block of Angular UI |
- Angular is a tree of components. |
- Decorator allow us to mark a class as an Angular component & provide a metadata that determines how the component should be proccessed, initiated, and used at runtime. |
- To create componenet use: |
```text
#your-path\PROJECT-NAME\src\app\componenets> ng g c COMPONENT-NAME
```

@fa[arrow-down]

+++

**first.component.ts**

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'app-first',
    template: '<h1>Hello World</h1>'
})

export class FirstComponent {
    providedBy = 'XREF';
    constructor() { }

    sayMyName() {
        console.log('Ang-Tut provided by ' + this.providedBy);
    }
}
```
@[1]
@[3-6]
@[8-15]

---

## Services

***Services are used for reusable data services***

- [Share, Grabbing, Modifying] data among components throughout your app. |
- To create service, use:
```text
#your-path\PROJECT-NAME\src\app\componenets> ng g s SERVICE-NAME --module=app
```

@fa[arrow-down]

+++

**myservice.service.ts**

```javascript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { environment } from  '../../../environments/environment';

@Injectable()
export class MyserviceService {
    
    public url = environment.backendUrl;

    constructor(
        private http: HttpClient
    ) {}

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

    getToken() {
        return window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
    }
}
```
@[1-4]
@[6]
@[7-42]
@[9]
@[16-41]

+++

**app.module.ts**
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    :
    :
    HttpClientModule
    :
    :
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
@[3, 13]

---

### Angular microscope view

![More angular](/Angular/assets/img/more_angular.jpg)

+++

![Angular structure](/Angular/assets/img/angular_structure.jpg)

---

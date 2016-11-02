# Promise.allProperties

Meteor package to extend the JS Promise API with allProperties.

`Promise.allProperties` expands awesome `Promise.all` to work with objects whose values might be promises.

See [implementation](https://github.com/izqui/meteor-promise-all-properties/blob/master/export.js)

```sh
meteor add izqui:meteor-promise-all-properties
```

## Usage

```js

class Person {
  constructor() {
    this.name = 'Jorge';
    this.lastname = Promise.resolve('Izquierdo');
    this.age = this.calculateAge();
  }
  
  calculateAge() {
    return new Promise((fulfill, reject) => {
      setTimeout(() => fulfill(19), 1000)
    })
  }
}

Promise.allProperties(new Person())
  .then((person) => console.log("Person loaded", person))

```

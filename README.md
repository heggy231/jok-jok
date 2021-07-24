# JokJok

- [demo](https://jok-jok.herokuapp.com/)
- [github code](https://github.com/heggy231/jok-jok)

## How to start up:
1. `npm run dev` 
   * from the root of the project `./jok-jok`
   * Go to http://localhost:8080 to see the app running!
     Note: Express server is serving react statics from `./react-ui/build`
2. whenever you update code in `./react-ui/src`, you need to run `npm run build` to see the changes reflected in the browser.

** OR **

* `cd` into `./react-ui` then run `npm run start`

* `npm run build` from the root of the project `./jok-jok`

```shell script
"build": "cd react-ui/ && npm install && npm run build"
```

* installling bootstrap:
https://react-bootstrap.github.io/getting-started/introduction

- follow installation step:
> npm install react-bootstrap@next bootstrap@5.0.2
# JokJok

- [demo](https://jok-jok.herokuapp.com/)
- [github code](https://github.com/heggy231/jok-jok)

## How to start up:
0. `npm i` in 2 places.  
    1. under root of this project, run `npm i`
    2. `cd` into `react-ui` directory, run `npm i`
1. `npm run dev` 
   * from the root of the project `./jok-jok`
   * Go to http://localhost:8080 to see the app running!
     Note: Express server is serving react statics from `./react-ui/build`
2. whenever you update code in `./react-ui/src`, you need to run `npm run build` to see the changes reflected in the browser.

** OR **

1. `cd` into `./react-ui` then run `npm run start`  (This will start the react server locally so that you can make changes to the react code.)

2. `npm run build` from the root of the project `./jok-jok`  (This will serve up react static files to Heroku live deployed server [jokjok](https://jok-jok.herokuapp.com/))

```shell script
// what does npm run build do?

"build": "cd react-ui/ && npm install && npm run build"
```

* installling bootstrap:
https://react-bootstrap.github.io/getting-started/introduction

- follow installation step:
> npm install react-bootstrap@next bootstrap@5.0.2

* React Router DOM:
https://reactrouter.com/web/guides/quick-start

> npm install react-router-dom

extrapolate page routes into its own folders
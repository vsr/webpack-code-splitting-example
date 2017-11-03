# Webpack Code splitting and async loading example

Webpack can split code into chunks based on split points defined by [dynamic imports](https://webpack.js.org/api/module-methods/#import-) and code comments.

Further, these chunks could also be loaded lazily by ensuring the `import` is called only when required.

## Code splitting
We need following configuration

* [`syntax-dynamic-import`](https://babeljs.io/docs/plugins/syntax-dynamic-import/) Babel plugin - for Babel to understand dynamic import.
* Dynamic import with webpackChunkName in comments
```
import( /* webpackChunkName: "hey" */ './modules/hello')
```

## Lazy loading:
The dynamic `import` code should be called asynchronously, i.e, the import should be in a function that is invoked only when the module is needed. 


## How to run

After cloning the repo, run:

```
npm install
npm run build
```

This will generate the code in `dist` directory.

Open the `index.html` file in browser. Only the main JS module is loaded initially.

Clicking on the buttons loads the other modules dynamically.

function sayHi(message){
  const text = `Hi ${message}.`;
  console.log((new Date), text);
  return text;
}

function heyheyhey() {
  return import(
    /* webpackChunkName: "hey" */
     './modules/hello').then(mod => {
    const there = mod.default;
    return sayHi(there);
  });
}

function hohoho() {
  return import(
    /* webpackChunkName: "ho" */
    './modules/there').then(mod => {
    const hello = mod.default;
    return sayHi(hello);
  });
}

export { sayHi, heyheyhey, hohoho };

import { sayHi, heyheyhey, hohoho } from './methods';

(function load() {
  const button1 = document.createElement('button');
  button1.textContent = "Load module 1: hello.";
  button1.onclick = heyheyhey;
  document.body.appendChild(button1);

  const button2 = document.createElement('button');
  button2.textContent = "Load module 2: there.";
  button2.onclick = hohoho;
  document.body.appendChild(button2);
}());

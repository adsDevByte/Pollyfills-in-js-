# JavaScript Polyfills 🚀

This repository contains custom implementations (polyfills) of important JavaScript methods.

## 📌 What is a Polyfill?

A polyfill is a piece of code that provides modern functionality on older browsers that do not natively support it.

In simple words:
> If a browser does not support a method, we write our own version of it.

---

## 🛠 Implemented Polyfills

- ✅ `Array.prototype.map`
- ✅ `Array.prototype.filter`
- ✅ `Array.prototype.reduce`
- ✅ `String.prototype.myUpperCase`
- ✅ `String.prototype.myLowerCase`
- ✅ `String.prototype.getChar`
- ✅ `Array.prototype.lastEle`
- ✅ `Array.prototype.firstEle`



---

All implementations are written from scratch for learning and understanding how JavaScript works internally.

---

## 🎯 Purpose of This Repository

- Deep understanding of JavaScript internals
- Mastering `this` keyword behavior
- Understanding how higher-order functions work
- Strengthening core JavaScript concepts

---

## 🧠 Example

Example of custom `map` implementation:

```js
Array.prototype.myMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

function curry(callback) {
  function curried(...args) {
    if (args.length === 0) {
      return callback();
    }

    if (callback.length === 0) {
      return callback(...args);
    }

    return curry((...rest) => callback(...args, ...rest));
  }

  return curried;
}

module.exports = curry;

function spy(func) {
    let calls = [];
    return function(...args) {
      let final = [];
      for (arg of args) {
        final.push(arg);
      }
      calls.push(final);
    let result = func.call(this,...args);
    return result;
    }

  }
  let work = (a, b) => a + b;
  work = spy(work);
  let a = work(1, 2);
  let b = work(3, 4);
  console.log(a);
  console.log(b);
  console.log(a.calls);
  console.log(b.calls);
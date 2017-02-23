function timer() {
  return new Promise(resolve => {
    let count = 1;
    const interval = setInterval(() => {
      console.log(count++);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      console.log('timer end');
      resolve(true);
    }, 3000);
  });
};

async function hoge() {
  var a = await timer();
  var b = await timer();
  return [a, b];
};

hoge().then(result => {
  console.log(result);
});

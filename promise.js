//ES6 Promise对象
function timeout(ms) {
    return new Promise((resolve, reject) => {
        console.log('start');
        setTimeout(resolve, ms, 'done');
    });
  }
  
  timeout(2000).then((value) => {
    console.log(value);
  });
  console.log('end');
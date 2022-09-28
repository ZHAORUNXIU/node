//ES6 Promise对象
function timeout(ms) {
    return new Promise((resolve, reject) => {
        console.log('start');
        // 指定时间后将'done'放入resolve中：resolve('done')
        setTimeout(resolve, ms, 'done');
    });
  }
  
async function doAwait(ms) {
    let val = await timeout(ms);
    console.log(val);
}

doAwait(2000);
console.log('end');
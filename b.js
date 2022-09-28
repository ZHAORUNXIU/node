let user = {
    username:'Rose',
    password: '123456',
    login(){
        console,console.log('Login success!');
    }
}

// b.js 需要导出
// default 只能有一个、导入可以随意命名、导入不需要{}
export default user

// 非default，导入加{}，解构赋值
export let a = "aaa"
export let b = "bbb"
export let c = "ccc"
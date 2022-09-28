//解构赋值
//let password = '123456'

let user = {
    username: 'Jack',
    password: '111222',
    eat(){
        console.log("I am eating!")
    }
}

let {username,password} = user
console.log(username)
console.log(password)

// let [a,b,c,d] = [1,2,3,4]
// console.log(a)

let [a,...d] = [1,2,3,4]
console.log(a)
console.log(d)

let {eat} = user
eat()
// 扩展运算符（...）
// 1. 函数传参：展开数组
function mySum(v,w,x,y,z) {
    return v+w+x+y+z
}
var args =[1,2]
var result = mySum(0, ...args, 3, ...[3])
console.log(result)

// 2. 数组拷贝
var arr1 = [1,2,3]
var arr2 = [...arr1]
console.log(arr1)
console.log(arr2)

// 3. 数组连接
var arr3 = [...arr1, ...arr2]
console.log(arr3)

// 4. 对象拷贝
var obj1 = { foo:'bar', x:42}
var clonedObj = {...obj1}
console.log(clonedObj)

// 5. 对象合并
var obj2 = { foo:'bar', y:12}
var mergedObj = {...obj1, ...obj2}
console.log(mergedObj)
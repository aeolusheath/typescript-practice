// 静态类型
const count: number = 1

// count = 4; // 报错，const是常量

// 自定义静态类型
interface Student {
  uid: string,
  name ?: string; // 可选
  age: number;
}

const s1 :Student = {
  uid: '1',
  name: '可选的', // 可以不写
  age: 20
}

s1.age = 30 // 可以修改
console.log(s1.age)
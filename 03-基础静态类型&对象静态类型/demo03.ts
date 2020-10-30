const count: number = 918

const myName: String = 'kevin'

const myName2: string = 'kevin'

// 对象类型
const s: {
  name: string,
  age: number
} = {
  name: 'kevin',
  age: 18
}

console.log(s, 's')

// 字符串类型
const students: string[]  = ['chris', 'katy', 'beyonce']
const student2: string[]  = ['chris', 'katy', 123]
const students3: any[] = ['chris', 123]


class Student {}
const s_:Student = new Student()


// 函数类型
const f: (num: number) => string = () => {
  // return 2; // wrong
  return 'k'
}

// 接口
interface SS { 
  name: string,
  salary: number
}

const ss_:SS = {
  name: 'k',
  salary: 1000000,
}
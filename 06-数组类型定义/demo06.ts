namespace demo06 { 

  const numArr = [1,2,3,4,5] // 自动类型推断

  const numberArr : number[] = [2, 6, 8] // 指定数组类型

  const undefinedArr : undefined[] = [undefined, undefined, undefined] // 指定数组为undefined 数组

  // 重要
  const arr: (string | number) [] = [1, 'str', 2] // 指定数组元素可能是string 或者 是number



  //1, 对象类型的定义, 直接定义
  const sArr: { name: string, age: number, salary?: number } [] = [
    { name: 'beyonce', age: 34 },
    { name: 'pink', age: 28 }
  ]

  // 2, 对象类型定义为一个别名
  type Worker = {
    name: string,
    age: number,
    salary?: number
  }

  const wArr: Worker[] = [
    { name: 'beyonce', age: 34 },
    { name: 'pink', age: 28 }
  ]


  // 3，我们也可以定义一个类
  class SuperWorker {
    name: string;
    age: number;
    salary?: number;
  }
  const sWArr: SuperWorker[] = [
    { name: 'blue', age: 34 },
    { name: 'ele', age: 28 }
  ]


  // 4，也可以定义一个接口
  interface interfaceWorker {
    name: string;
    age: number;
    salary?: number;
  }
  const iWArr: SuperWorker[] = [
    { name: 'blue', age: 34 },
    { name: 'ele', age: 28 }
  ]
}

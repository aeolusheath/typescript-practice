// 泛型类型
namespace demo18 {
  
  function join(first: string | number, second: string | number) {
    return `${first}${second}`
  }
  join("kevin", "kang")




  // 在调用的时候指定参数的类型
  function join2<T>(first: T, second: T) {
    return `${first}${second}`
  }
  join2<number>(1,2); // 指定参数类型


  // 数组中使用泛型
  function printArr<T>(params: Array<T>): void {
    console.log(params)
  }

  printArr<number>([1,2,4])


  // 多个泛型的定义

  function join3<T, P>(first: T, second: P) {
    return `${first}${second}`
  }
  join3<number, string>(1, 'k')



  // 在类中使用泛型
  interface Animal {
    breathe(): string;
  }

  class Cat implements Animal {
    public name: string
    constructor(n: string) {
      this.name = n
    }
    breathe():string {
      console.log('miao')
      return 'miaomiaomiao'
    }
  }

  class Dog implements Animal {
    public name: string
    constructor(n: string) {
      this.name = n
    }    
    breathe():string {
      console.log('wang')
      return 'wangwangwang'
    }
  }

  // 获取某一种动物
  // 在TypeScript使用泛型创建工厂函数
  function getAnimal<T extends Animal>(c: new (name: string) => T, n: string): T {
    return new c(n);
  }

  const c:Cat = getAnimal(Cat, 'cc')
  c.breathe()

  const d:Dog = getAnimal(Dog, 'doge')
  d.breathe()



  const map = {
    '0': 'cat',
    '1': 'dog'
  }
  // 泛型也可以被多种基础数据类型约束

  // 比如这个函数参数，可以是number索引，也可以是string，关键字。
  // 搜索的的时候通用方法可以通过这个一起来写, 可以通过索引来搜索，也可以通过关键字key来搜索
  function getAnimalByKey<T extends number | string> (p: T) :any {
    // your logic
  }

}

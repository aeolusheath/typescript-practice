// public protected private

// public 任意地方都可以访问
// private 不能在声明它的类的外部访问
// protected 可以在派生类访问

namespace demo11 {



  class Person {
    public name: string;
    age: number;  // 默认也是public
    protected id: string;
    private salary: number = 0; // 设置默认值


    constructor (name: string, id: string) {
      this.name = name
      this.id = id
    }

    setSalary(num: number) {
      this.salary = num
    }
    getSalary(): number {
      return this.salary
    }
  }

  class Man extends Person {
    sayId() {
      console.log('Hi', this.id)
    }
  }


  const p:Person = new Person('kev', '007')
  console.log(p.salary) // 报错，salary是私有属性，只能在类内部才能访问
  console.log(p.getSalary()) // 正确

  
  console.log(p.name); // 正确 name是public
  console.log(p.id); // 错误，id是protected 只能在类的内部，以及派生类的内部访问


  const m:Man = new Man('k3v', '008')
  console.log(m.sayId()); // 正确，派生类的内部可以访问protected属性
}

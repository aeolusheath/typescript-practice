
// 构造函数
// 继承的时候，派生类的构造函数一定要先调用父类的构造函数
namespace demo12 {

  class Person {
    public name: string = "" // 默认是空的
    constructor(name: string){
      this.name = name
    }
  }

  class Teacher extends Person {
    public subject: string = ''
    constructor(name: string, subject: string) {
      super(name); // required
      this.subject = subject
    }
  }


  const t: Person = new Teacher('Beyonce', 'Math')
  const t2: Teacher = new Teacher('Pink', 'Lauguage')

  console.log(t, 't')
  console.log(t2, 't2')
}
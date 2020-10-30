namespace demp13 {
  // 因为类的修饰符有private私有，私有属性不能直接访问，所以getter setter就出来了
  
  class Worker {
    private _salary: number;
    public name: string;
    constructor(n:string) {
      this.name = n
    }
    get salary() {
      return this._salary * 1000
    }

    set salary(s: number) {
      this._salary = s
    }

  }

  const w: Worker = new Worker('k')
  w.salary = 1000
  console.log(w.salary, '现在的薪水')


  // 静态属性，可以用类直接访问这些属性
  class Person {
    public static breathe() {
      console.log('breathe for live animal')
    }
  }
 
  Person.breathe()



}

namespace demo14 {
  // 只读属性，初始化之后就不能修改了
  class Worker {
    public readonly name: string; // 
    constructor(n: string) {
      this.name = n
    }
  }
  const w: Worker = new Worker('kanye')
  // w.name = 'k' // 报错，因为name属性是只读的





  // 抽象类
  abstract class Department {
    constructor(public name: string) {} // 抽象类也可以有构造函数
    printName():void {console.log('Department name: ' + this.name + '\n')}
    abstract printMeeting(): void; // 必须在派生类中实现
  }


  class AccountingDepartment extends Department {
    constructor() {
      super('Accounting and Auditing')
    }
    // 必须实现，因为继承了抽象类
    printMeeting():void {
      console.log('The Accounting Department meets each Monday at 10am. \n')
    }
    generateReports(): void {
      console.log('Generating accounting reports... ');
    }
  }

  let department: Department
  // department = new Department() // 错误，不能对抽象类进行实例化
  department = new AccountingDepartment()
  department.printName()
  department.printMeeting()
  // department.generateReports() // 错误，方法在声明的抽象类中不存在


  let accountDepartment: AccountingDepartment = new AccountingDepartment()
  accountDepartment.printName() // 正确，AccountingDepartment类中实现了这个方法


  class TechDepartment extends Department {
    constructor() {
      super('Tech department')
    }
    // 必须实现，因为继承了抽象类
    printMeeting():void {
      console.log('The Tech Department meets each Monday at 3pm.')
    }
    generateTechReports(): void {
      console.log('Generating tech reports...');
    }
  }

  let techDepartment: TechDepartment = new TechDepartment()
  techDepartment.printName()
  techDepartment.printMeeting()
  techDepartment.generateTechReports()
   

  

}
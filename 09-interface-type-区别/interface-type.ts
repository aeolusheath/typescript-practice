namespace demo0902 {

  // 相同点1： 都可以约束类型
  interface Human {
    name: string;
    age: number;
    readonly salary?: number; // 薪水
    sayHi?(n: string): string;
    sayHi2(n: string): string;
  }

  type Person =  {
    name: string,
    age: number,
    sayHi?(n:string):string
  }

  var h: Human = { name: 'kevin', age: 18, sayHi:() =>'', sayHi2: ()=>'' }
  var p: Person = { name: 'k3v', age: 20, sayHi: ()=>'' }




  // 相同点2： 都可以继承扩展
  // interface可以扩展interface，也可以扩展type

  type Breath = {
    breath():string
  }
  interface Animal {
    name: string;
  }
  // 同时继承两种
  interface HumanBeing extends Animal, Breath {
    language: string;
  }
  const human: HumanBeing = { 
    name: 'Kanye',
    language: 'EN',
    breath: ()=> 'flashback'
  }

  // type可以扩展type，也可以扩展interface

  // 扩展type
  type HumanBeing2 = Breath & { name: string } 

  // 扩展interface
  type HumanBeing3 = Animal & { breath(): string }

  // 同时扩展两种
  type HumanBeing4 = Breath & Animal & { language: string } 
  
  const humanb4: HumanBeing4 = {
    name: 'Kim',
    breath: () => 'this is super akward' ,
    language: 'EN'
  }





  // 不同点1： type 可以指定一个基本类型，interface不可以
  type STATUS = number;

  const SUCCESS: STATUS = 200; 
  const FAIL: STATUS = 500;

  // 不同点2：type可以声明联合类型，interface不可以
  interface Parrot { sayHello():string }
  interface Pigeon { sayHi(): string}

  type Bird = Parrot | Pigeon


  const bird:Bird = { sayHi: ()=>'I am pigeon' }
  
}

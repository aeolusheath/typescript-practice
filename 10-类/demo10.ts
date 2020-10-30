class Human {
  constructor(name) {
    this.name = name
  }
  age // 可以不指定，就是any
  name: string
  word: string ="world"
  sayHi() {
    console.log('hello ' + this.word + '. my name is ' + this.name)
  }
}


const h:Human = new Human('k');
h.sayHi()


// 继承
class Man extends Human {
  sayHi() {
    console.log('hello beauty ' + 'my name is ' + this.name)
  }
  sayHiToWoman() {
    super.sayHi() // 调用父类的方法,super 关键字
    console.log('hello beauty')
  }
}

const m: Man = new Man('k3')
m.sayHi()
m.sayHiToWoman();
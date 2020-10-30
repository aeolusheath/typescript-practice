  // 指定函数的返回值类型
  function getStandardSum(one:number, two: number): number {
    // return one + two + ''
    return one + two
  }

  const sum = getStandardSum(1, 2)


  // 指定void ，表名无返回值
  function sayHello():void {
    console.log('hello world ts')
    
    // below都可以
    return null
    return undefined
  }


  function errorThrowFunc():never {
    throw new Error()
    console.log('_')
  } 


  // 结构赋值
  // return any
  function add({one, two}) {
    return one + two
  }

  // WRONG 结构赋值，重命名参数, 不是指定类型
  function add2({one: number, two: number}) {
    return one + two;
  }

  // return number
  function add3 ({one, two}: { one: number, two: number }) {
    return one + two
  }

  


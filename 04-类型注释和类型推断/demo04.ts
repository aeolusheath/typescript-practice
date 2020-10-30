// type annotation  类型注释
// type interface   类型推断

// 添加namespace是为了 防止命名冲突，先忽略
namespace demo04 {
  let count: number;
  count = 123

  let numberAuto = 123 // typescript 自动识别 123是一个number类型

  const one = 1
  const two = 2
  const three = one + two


  // hover getSum display any
  function getSum(one, two) {
    return one + two
  }

  // hover getStandardSum return number 自动推断出返回的是number
  function getStandardSum(one:number, two: number) {
    return one + two
  }



  // 这时候对象的属性，也是自动推断的
  const s = {
    name: '鼓楼先生',
    age: 60
  }

}

// 联合类型 与 类型保护
namespace demo16 {
  interface Waiter {
    anjiao: boolean,
    say: () => {}
  }

  interface Teacher {
    anjiao: boolean,
    skill: () => {}
  }

  function judgeWho(animal: Waiter | Teacher) {
    // animal.say() // 错误  不知道anima有没有say这个方法

    // 方式一 as
    if (animal.anjiao) {
      (animal as Teacher).skill()
    } else {
      (animal as  Waiter).say()
    }

    // 方法二 in
    if ("skill" in animal) {
      animal.skill()
    } else if ( "say" in animal ) {
      animal.say()
    }
  }
}

// 方式三 instanceOf

class NumberObj {
  count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}



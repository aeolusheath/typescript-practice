namespace demo17 {
  // 一个关于状态status的重构

  // 方法一，无语义 直接传递数字，不可取
  function getServe(status: number) {
    if (status === 0) {
      return "mesage"
    } else if (status === 1) {
      return "spa"
    } else if (status === 2) {
      return "dabaojian"
    }
  }

  const result = getServe(0);
  console.log(`我要去${result}`)


  // 方法二，使用一个字典MAP去存储状态
  const Status = {
    MASSAGE: 0,
    SPA: 1,
    DABAOJIAN: 2
  }

  function getServe2(status: any) {
    if (status === Status.MASSAGE) {
      return "message"
    } else if (status === Status.SPA) {
      return "spa"
    } else if (status === Status.DABAOJIAN) {
      return "dabaojian"
    }

  }
   
  const result2 = getServe2(Status.SPA)
  console.log(`我要去${result2}`)



  // 方法三 使用枚举
  // 默认值是从0开始的, 也是一个整型，与上面的好处在于，不用专门维护一个number数据
  enum STATUS {
    MASSAGE,
    SPA,
    DABAOJIAN
  }

  function getServe3(status: any) {
    if (status === STATUS.MASSAGE) {
      return "message"
    } else if (status === STATUS.SPA) {
      return "spa"
    } else if (status === STATUS.DABAOJIAN) {
      return "dabaojian"
    }
  }

  console.log(STATUS.MASSAGE, STATUS.MASSAGE === 0, 'STATUS.MASSAGE -------->>>>>> ')

}
namespace Home {
  class Header {
    constructor() {
      const ele = document.createElement("div")
      ele.innerText ="this is Header"
      document.body.appendChild(ele)
    }
  }
  
  class Content {
    constructor() {
      const ele = document.createElement("div")
      ele.innerText = "this is Content"
      document.body.appendChild(ele)
    }
  }
  
  class Footer  {
    constructor() {
      const ele = document.createElement("div")
      ele.innerText = "this is Footer"
      document.body.appendChild(ele)
    }
  }
  
  // 声明了命名空间之后，不能直接这样写，必须要暴露出去
  export class Page {
    constructor () {
      new Header()
      new Content()
      new Footer()
    }
  }
}


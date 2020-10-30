// type girl1 = string;


// var x:girl1 = 'l'

// type girl2 = {
//   name: string,
//   age: number
// }

// var y:girl2 = { name: 's', age: 18 }



/**
 * 
 * interface 接口
 * 接口为具有值所具有的结构进行类型检查
 * 
 * 
 */
namespace demo08 {
  //封装类型定义


  // STATUS - 1
  const screenResume = (name: string, age: number, bust: number) => {
    age < 24 && bust >= 90 && console.log(name + "进入面试");
    age > 24 || (bust < 90 && console.log(name + "你被淘汰"));
  };
  
  screenResume("大脚", 18, 94);
  

  const getResume = (name: string, age: number, bust: number) => {
    console.log(name + "年龄是：" + age);
    console.log(name + "胸围是：" + bust);
  };
  getResume("大脚", 18, 94);

  
  // STATUS - 2
  interface Girl {
    name: string;
    age?: number; // 加问号是可选的意思，这个属性值在初始化的时候
    bust: number;
  }

  // TIPS： STATUS - 2 也可以用类型别名
  type Girl2 = {
    name: string;
    age: number;
    bust: number;
  }

  // 这里用 girl: Girl2 
  const screenResumeOptimize1 = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
  };
  
  const getResumeOptimize1 = (girl: Girl) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
  };
  const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
  };
  
  screenResumeOptimize1(girl);
  getResumeOptimize1(girl);
}

namespace demo09 {
  // 定义了一个接口
  interface SquareConfig {
    color: string;
    width?: number;
    // feature - 01 允许加入任何其他自定义属性
    [propName: string]: any;
    // feature - 02 方法属性也可以是可选的
    output?(): string;
    mustOutput(): string;
  }

  // 接口直接约束实体对象
  const cfg : SquareConfig = {
    color: 'blue',
    dynamicProp: 'k', // 动态加入的属性，如果没有定义[propName: string]: any 会报错
    mustOutput: ()=>{ return 'output required info' }
  }


  // 接口约束一个类
  class squareConfigImpl implements SquareConfig {
    color = 'blue'
    mustOutput() {
      return 'output required string'
    }
  }


  // 借口的继承
  interface SubSquareConfig extends SquareConfig {
    subOutPut(): string; // 子接口定义了自己的方法
  }
 

  // 子接口约束实体对象
  const subCfg: SubSquareConfig = {
    color: 'blue',
    mustOutput: ()=> 'output required info',
    subOutPut: ()=> 'sub output require info'
  }
  
}
namespace demo07 {

// number 或者 string 类型的数组

const arr : (string | number)[] = [1, 'k']
const arr2 : (string | number)[] = [ 'k', 2]




// 元组是 规定了 数组里面的元素的顺序, 以及元素的个数
const tuple1: [string, number] = ['l', 3]
// 报错
// const wrongTuple1: [string, number] = [3, 'l']

}


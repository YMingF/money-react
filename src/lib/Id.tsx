//类封装法的代码。
let id=0
class Id{
 value: number;
  constructor() {
    id+=1
    this.value=id
  }
}
export {Id}

//后续我们用的是函数封装法去新增的id，但是这个类封装法的代码还是留在这里，作为额外知识点。
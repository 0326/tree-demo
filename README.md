# tree-demo

> A Vue.js project

## family tree 设计
基本元素 BaseObj 结构：
```
{
  id: Number,
  name: String,
  father: BaseObj, // 父亲
  mother: BaseObj, // 母亲
  mate: BaseObj,  // 配偶
  children: [ BaseObj, ...]  // 子女
}
```

渲染方案，先将 BaseObj 扁平化为列表结构：
- 递归遍历 father/mother/mate/children 数据，将 id 和 name 信息存储在 result 数组中
- result.push 时注意去重，比如 x.mate = y 必有 y.mate = x，需要判断 x 是否已添加
- 每个元素计算出辈分级别，同时计算出最高辈分和最低辈分的差值，便于展示
- 同辈分之间有夫妻，兄弟姐妹关系，需要控制显示夫妻相邻（男左女右）
- 与上一辈连接只有父母关系
- 与下一辈连接只有子女关系


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

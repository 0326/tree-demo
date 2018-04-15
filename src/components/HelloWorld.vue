<template>
  <div class="tree-container">
    <div class="tree-box">
      <template v-for="item in list">
        <Avatar
          :key="item.id"
          :name="item.name"
          :top="(item.level - info.minLevel) * 180"
          :left="(item.amount - 1) * 140"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'
import * as mockData from './data'
import { familySort } from './tree'

function flatTree (tree = {}, level = 0, result = [], info) {
  const father = tree.father || {}
  const mather = tree.mather || {}
  const mate = tree.mate || {}
  const children = tree.children || []
  if (!info.addedSet.has(tree.id)) {
    // 存储树的层级深度
    if (level >= info.maxLevel) {
      info.maxLevel = level
    } else if (level <= info.minLevel) {
      info.minLevel = level
    }

    // 存储各层级出现元素的次数
    const amount = info.levelAmount[level]
    if (amount) {
      info.levelAmount[level] += 1
    } else {
      info.levelAmount[level] = 1
    }

    // 添加新成员
    const member = {
      level, // 辈分排位
      id: tree.id, // 唯一 id
      amount: info.levelAmount[level], // 同辈排序
      name: tree.name, // 姓名
      fatherId: father.id,
      matherId: mather.id,
      mateId: mate.id,
      hasChild: children.length,
      avatar: tree.avatar // 图像
    }
    result.push(member)
    info.addedSet.add(tree.id);
  }

  if (father.id) {
    flatTree(father, level - 1, result, info)
  }
  if (mather.id) {
    flatTree(mather, level - 1, result, info)
  }
  if (mate.id) {
    flatTree(mate, level, result, info)
  }
  children.forEach(child => {
    flatTree(child, level + 1, result, info)
  })
}

export default {
  name: 'HelloWorld',
  components: {
    Avatar
  },
  data () {
    const list = []
    const info = {
      maxLevel: 0,
      minLevel: 0,
      addedSet: new Set(),
      levelAmount: {}
    }
    // tree => list
    flatTree(mockData.tree1, 0, list, info)

    // 将 list 按照 level + amount 重新规划
    const familyList = familySort(list);

    console.log(list, familyList)
    return {
      list,
      info,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.tree-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  border: 2px solid #666;
  box-sizing: border-box;
}
.tree-box {
  padding: 20px;
}
</style>

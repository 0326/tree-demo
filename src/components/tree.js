/**
 * @param {
      level, // 辈分排位
      id: tree.id, // 唯一 id
      amount: info.levelAmount[level], // 同辈排序
      name: tree.name, // 姓名
      avatar: tree.avatar // 图像
    }
 */
export function familySort (list = [], minLevel, maxLevel) {
  // 按 level 辈分从前到后排序
  const result = list.sort((a, b) => a.level - b.level)
  const resultCopy = list.sort((a, b) => a.level - b.level)
  // 按 amount 同辈排序，先找到妻子
  for (let i in resultCopy) {
    const item = resultCopy[i]
    item.role = item.role || []
    // 根据 meta 来寻找夫妻关系
    if (item.mateId) {
      const mate = resultCopy.filter(val => val.id === item.mateId)
      // 女性为妻子
      if (mate.gender === 'f') {
        mate.role.push('wife')
      }
    }
    // 根据 father 和 mather 信息来寻找夫妻关系
    if (item.fatherId && item.matherId) {

    }
  }
  return result
}

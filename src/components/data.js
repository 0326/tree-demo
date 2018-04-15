export const tree1 = {
  id: 1,
  name: '李全锋',
  avatar: '',
  father: {
    id: 11,
    name: '李世民爸爸',
    avatar: '',
    mather: {
      id: 112,
      name: '王母奶奶',
      gender: 'f',
      avatar: ''
    },
    father: {
      id: 111,
      name: '李渊爷爷',
      avatar: '//cdn-img.easyicon.net/png/51/5119.gif',
      children: [{
        id: 18,
        name: '李元霸',
        avatar: ''
      }, {
        id: 17,
        name: '李元吉',
        avatar: '',
        mate: {
          id: 130,
          gender: 'f',
          name: '西施'
        }
      }, {
        id: 15,
        name: '李建成',
        avatar: '',
        mate: {
          id: 110,
          gender: 'f',
          name: '貂蝉',
          mather: {
            id: 11101,
            gender: 'f',
            name: '貂蝉她妈'
          }
        }
      }]
    }
  },
  mather: {
    id: 12,
    name: '杨贵妃妈妈',
    gender: 'f',
    avatar: ''
  },
  mate: {
    id: 2,
    name: '嫦娥老婆',
    gender: 'f',
    avatar: '//cdn-img.easyicon.net/png/12096/1209628.gif'
  },
  children: [{
    id: 20,
    gender: 'm',
    name: '李晓明儿砸',
    father: {
      id: 1,
      name: '李全锋'
    }
  }, {
    id: 22,
    gender: 'f',
    avatar: '//cdn-img.easyicon.net/png/12029/1202944.gif',
    name: '李晓梦女儿'
  }]
}

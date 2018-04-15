<template>
  <div
    class="avatar-box"
    :style="{
      top: top + 'px',
      left: left + 'px',
      width: width + 'px',
      height: height + 'px',
      backgroundImage: `url(${img})`
  }">
    <p class="avatar-name">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    left: {
      type: [String, Number],
      default: '0'
    },
    top: {
      type: [String, Number],
      default: '0'
    },
    width: {
      type: String,
      default: '100'
    },
    height: {
      type: String,
      default: '120'
    },
    img: {
      type: String,
      default: '//cdn-img.easyicon.net/png/12029/1202943.gif'
    },
    name: String
  }
}
</script>

<style scoped>
.avatar-box {
  position: absolute;
  overflow: hidden;
  box-sizing: border-box;
  border: 2px solid rgb(53, 212, 204);
  background: #fff left top no-repeat;
  background-size: contain;
}
.avatar-name {
  margin: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

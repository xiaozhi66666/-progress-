<template>
  <div>
    <!-- bgc接收字符串，控制外层容器的背景色，提供三种值选择 outeruSccess/outerPrimary/outerDefault -->
    <!-- 内层颜色随进度条的增长而自动进行改变 -->
    <!-- size接收字符串，控制进度条的尺寸大小，有三值可选large/small/mini -->
    <!-- showText接收布尔值，控制是否显示百分比文字 -->
   <zz-Progress  radiu='10' progress=29  bgc="outerPrimary" size="small" showText></zz-Progress>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style lang ='less' scoped >

</style>

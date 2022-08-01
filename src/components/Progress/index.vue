<template>
<!-- 首先我们封装一个组件肯定是需要考虑到他的结构怎么搭建 -->
 <div>
     <div class="progress-container"  ref="progressContainer"  :class="[bgc,size]">
    <div class="progress" ref="progress" :class="[size]" :radiu="radiu"><slot :progress="progress">{{showText ? `${progress}%` : ''}}</slot></div>
  </div>
 </div>
</template>

<script>
export default {
    props:{
        // 外层容器的背景色
      bgc:{
        type: String,
        default: 'primary',
         validator (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['outerSuccess', 'outerPrimary', 'outerDefault'].includes(value)
      }
      },
      radiu:{
        type: String,
        default: '10px'
      },
      progress:{
        type: String,
      },
      // 尺寸
      size:{
        type: String,
         validator (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['large', 'small', 'mini'].includes(value)
        }
      },
      // 是否显示文字
      showText:{
        type: Boolean,
        default:true
      }

    },
  data () {
    return {

    }
  },
  watch:{
    // 进度条展示
   progress:{
    handler(newVal){
    this.$nextTick(()=>{
        this.$refs.progress.style.transition ="all 2s"
       this.$refs.progress.style.width = `${newVal}%`
     if(newVal <= 50){
   this.$refs.progress.className = 'warning'
        }else if (newVal <=70){ //
            this.$refs.progress.className = 'default'
        }else if(newVal <=80){
            this.$refs.progress.className = 'exception'
        }else if(newVal <=100){
            this.$refs.progress.className = 'success'
        }else{
          // 如果不在范围内就强制等于最大值
          this.progress = 100
           this.$refs.progress.style.width = `100%`
          throw('progress请输入合法值');
        }
    })
   },
   immediate:true,
   },
  //  圆角展示
    radiu:{
      handler(newVal){
        if(newVal){
          this.$nextTick(()=>{
          this.$refs.progressContainer.style.borderRadius =`${newVal}px`
          this.$refs.progress.style.borderRadius =`${newVal}px`
          })
        }else{
          this.$nextTick(()=>{
          this.$refs.progressContainer.style.borderRadius ="0"
          this.$refs.progress.style.borderRadius ="0"
          })
        }
      },
      immediate:true
    }

  },

  created () {
   
  },
  mounted(){
  },

  methods: {

  }
}
</script>

<style  scoped >
.progress-container{
    width: 600px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    position: relative;
    /* background-color:pink; */
}
.progress{
    position:absolute;
    left: 0;
    height: 100%;
}
/* 外层容器背景色 */
.outerSuccess{ 
    background-color: #ccc;
}
.outerPrimary{
     background-color:darkslategrey;
}
.outerDefault{
  background-color:slategray
}


/* 里层背景色 */
.default{ 
    height: 100%;
    background-color: #409eff;

}
/* 成功 */
.success{
    height: 100%;
    background-color:#67c23a;

}
/* 期望 */
.exception{
    height: 100%;
    background-color:#e6a23c;

}
/* 警告 */
.warning{height: 100%;background-color:#f56c6c}

/* 大小 */
.large{
  width: 600px;
  height: 60px;
  line-height: 60px;


}
.small{
  width: 300px;
  height: 30px;
  line-height: 30px;
}
.mini{
  width: 150px;
  height: 15px;
  line-height: 15px;
}
/* 圆角 */
/* .isRadiu{
    border-radius:10px;
} */


</style>

<template>
<!-- 首先我们封装一个组件肯定是需要考虑到他的结构怎么搭建 -->
 <div>
     <div class="progress-container"  ref="progressContainer"  :class="[bgc,radiu]">
    <div class="progress" ref="progress" :class="[status,radiu]"><slot :progress="progress">{{progress}}%</slot></div>
  </div>
 </div>
</template>

<script>
export default {
    props:{
        // 外层容器的背景色
      bgc:{
        type: String,
        default: 'primary'
      },
      radiu:{
        type: String,
        default: 'isRadiu'
      },
    //  内层进度条的背景色
      status:{
        type: String,
        default: 'default'
      },
      progress:{
        type: String,
        // default:''
      }

    },
  data () {
    return {

    }
  },
  watch:{
   progress:{
    handler(newVal){
    this.$nextTick(()=>{
        this.$refs.progress.style.transition ="all 2s"
       this.$refs.progress.style.width = `${newVal}%`
     if(newVal <= 50){
        // console.log(this.$refs.progress.classList);
   this.$refs.progress.className = 'warning'
        }else if (newVal <=70){ //
            console.log(70);
            this.$refs.progress.className = 'default'
        }else if(newVal <=80){
            console.log(80);
            this.$refs.progress.className = 'exception'
        }else if(newVal <=100){
            console.log(100);
            // this.$refs.progress.setAttribute("class", "success");\

            this.$refs.progress.className = 'success'
            console.log(this.$refs.progress.className);
        }
    })
   },
   immediate:true,
   }
  },

  created () {
   
  },
  mounted(){
    this.$refs.progressContainer.style.backgroundColor = this.bgc
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
.success{ 
    background-color: #eee;
}
.primary{
    
     background-color: #eee;
}

/* 里层背景色 */
.default{ 
    height: 100%;
    background-color: #409eff;
    border-radius:10px;
    /* transition:all 2s; */
}
/* 成功 */
.success{
    height: 100%;
    background-color:#67c23a;
    border-radius:10px;
    /* transition:all 2s; */
}
/* 期望 */
.exception{
    height: 100%;
    background-color:#e6a23c;
    border-radius:10px;
    /* transition:all 2s; */
}
/* 警告 */
.warning{height: 100%;background-color:#f56c6c;  border-radius:10px; transition:all 2s;}
/* 圆角 */
.isRadiu{
    border-radius:10px;
}


</style>

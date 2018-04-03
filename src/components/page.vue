<template>
  <div class="page-item">
      <!-- <span @click="gobeforepage">&lt;</span>
      <span :class="{checked:pageindex==page}" v-for="(page,index) in pagenum" @click="jump(page)" :title="'跳转到'+page+'页'">{{page}}</span>
      <span @click="gonextpage">&gt;</span> -->
      <el-pagination background @current-change="changer" layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // pagenum:[1,2,3,4,5,6,7,8,9,10],
            // pageindex:1
        }
    },
    methods:{
        changer(Nowpage){
            // console.log(currentPage)
            // this.pageindex=Nowpage;
            this.$emit('myevent',Nowpage);
        }
        // jump(Nowpage){
        //     this.pageindex=Nowpage;
        //     this.$emit('myevent',Nowpage);
        // },
        // gobeforepage(){
        //     if(this.pageindex>1){
        //         this.pageindex--;
        //         this.$emit('beforeEvent',this.pageindex);  
        //     }
        // },
        // gonextpage(){
        //     this.pageindex++;
        //     this.$emit('nextEvent',this.pageindex);
        // }
    }
}
</script>

<style>
.page-item span{
    display:inline-block;
    width:30px;
    height:30px;
    cursor: pointer;
    line-height:30px;
    margin:0 3px;
    background-color:#F4F4F5;
}
.checked{
    background-color:#699E00!important;
    color:#fff;
}
</style>

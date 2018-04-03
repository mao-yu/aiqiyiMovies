<template>
  <div class="choose-type">
      <li v-for="item in mold">
          <b>{{item.classifyName}}</b>
          <span v-for="items in item.detailClassify" :data-value="items.value" @click="choosetype(items.value)">{{items.name}}</span>
      </li>
  </div>
</template>

<script>
export default {
    data(){
        return {
            mold:[]
        }
    },
    created(){
        this.getclassify('');
    },
    methods:{
        // 获取筛选条件
        getclassify(classify_type){
            this.$http.get('http://movies.llili.cn/api/classify?classify='+classify_type)
            .then(result=>{
                this.mold=result.body
            })
            .catch(function(result){
                alert('网络错误!')
            })
        },
        // 选择分类
        choosetype(val){
            // console.log(event.target.nodeName)
            this.getclassify(val);
            this.$emit('classify',val)
        }
    }
}
</script>

<style>
.choose-type li{
    line-height:20px;
    font-size:1rem;
    padding:5px;
    border-bottom:1px dotted #EBEBEB;
    cursor: pointer;
}
/* .choose-type li span:nth-child(2){
    background:#6AA001!important;
    color:#fff;
} */
.choose-type span{
    margin:0 5px;
    padding: 5px;
}
</style>

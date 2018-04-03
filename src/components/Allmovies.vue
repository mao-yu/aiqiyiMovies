<template>
  <div class="movie-contain">
      <!-- 筛选条件 -->
      <ul class="choose-container">
          <Choose @classify='getmovie'></Choose>
      </ul>
      <!-- 电影列表 -->
      <ul class="movies-list">
          <Movie :items='list'></Movie>
      </ul>
    <!-- 分页 -->
    <div class="page"><Page @myevent="getMyEvent"></Page></div>
  </div>
</template>

<script>
import Movie from './movie'
import Choose from './choose'
import Page from './page'
export default {
    data(){
        return{
            list:[],
            page:1,
            url:'/www/2/----------------iqiyi--.html'
        }
    },
    components:{
        Movie,
        Choose,
        Page
    },
    created(){
        this.getData();
        // 获取电影列表
        // this.$http.get('http://movies.llili.cn/api/movies')
        // .then(result=>{
        //     this.list=result.body
        // })
        // .catch(function(result){
        //     alert('网络错误!')
        // })
    },
    methods:{
        // 选择分页
        getMyEvent(Nowpage){
            this.page=Nowpage;
            this.getData();
        },
        getmovie(val){
            this.url=val;
            this.getData();
        },
        /****自己写的分页***/ 
        // getbefore(beforepage){
        //     this.getPage(beforepage);
        // },
        // getnext(nextpage){
        //     this.getPage(nextpage);
        // },
        // getPage(page){
        //     this.$http.get('http://movies.llili.cn/api/movies?page='+page)
        //     .then(result=>{
        //         this.list=result.body
        //     })
        //     .catch(function(result){
        //         alert('网络错误!')
        //     }) 
        // },
        getData(){
            this.$http.get('http://movies.llili.cn/api/movies?page='+this.page+'&classify='+this.url)
            .then(result=>{
                this.list=result.body
            })
            .catch(function(result){
                alert('网络错误!')
            }) 
        }
    }
}
</script>

<style>
.movie-contain{
    width:1200px;
    margin:0 auto;
}
.choose-container{
    margin:30px 15px;
    padding:5px;
    border:1px solid #E4E4E4;
    text-align: left;
}
.movies-list{
    overflow: hidden;
}
.page{
    margin:20px 0;
    clear:both;
}
</style>

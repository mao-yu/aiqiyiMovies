<template>
  <div class="li-list">
      <li v-for="item in items" class="movie-li">
          <a :href="item.url">
            <p><img :src="item.imageUrl"></p>
            <div class="movie-title">{{item.title}}<span>{{item.score}}</span></div>
            <div class="movie-brief">{{item.role}}</div>
          </a>
      </li>
  </div>
</template>

<script>
export default {
    props:['items']
}
</script>

<style>
.movie-li{
    float:left;
    width:170px;
    margin:0 15px 10px 15px;
    text-align: left;
}
.movie-li img{
    width:100%;  
}
.movie-title{
    margin:3px 0;
}
.movie-title span{
    float:right;
    color:#DB836F;
    /* font-size:1.14rem; */
}
.movie-brief{
    height:16px;
    overflow: hidden;
}
</style>

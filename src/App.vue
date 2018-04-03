<template>
  <div id="app">
    <div class="movie-head">
      <div class="movie-head-container">
        <img src="./assets/logo.png">
      </div>
    </div>
    <div class="movie-container">
      <router-view/>
    </div>
    <div class="movie-footer">
      <p>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
        <span>|</span>
        <a href="#">公司介绍</a>
      </p>
      <div>Copyright 爱奇艺 All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
div,p,ul,dl,h1,h2,h3,h4,h5,li,dl{margin:0;padding:0;}
a{text-decoration: none;color:#575757;}
ul{list-style: none;}
.movie-head{
  width:100%;
  height:50px;
  line-height:50px;
  background:#1C1C1C;
}
.movie-head-container{
  width:1200px;
  margin:0 auto;
}
.movie-head-container img{
  float:left;
  width:50px;
}
.movie-footer{
  clear:both;
  margin-top: 30px;
}
.movie-footer a{
  margin:0 5px;
}
</style>

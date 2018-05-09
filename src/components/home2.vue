<template>
  <div>
    <ul class="list clear">
      <li v-for="item in arr">
        <div class="time">{{item.openTime}}</div>
        <div class="data clear">
          <img class="left" :src="item.poster"/>
          <div class="cont left">
            <p class="tit">{{item.showName}}</p>
            <p><span class="num">{{item.wantCount}}</span>人想看</p>
            <p class="director">导演：{{item.director}}</p>
            <p class="leadingRole">主演：{{item.leadingRole}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      arr:[]
    }
  },
  mounted(){
    this.Axios.get("../../static/show.json",{

    }).then(res=>{
      this.arr=res.data.data.returnValue
      console.log(res.data.data.returnValue)
    })
  }
}
</script>

<style>
.list>li{
  width: 100%;
  display: block;
}
.list .time{
  width: 100%;
  line-height: 0.6rem;
  font-size: 12px;
  padding-left: 0.4rem;
  background: #F5F5F5;
}
.list .data{
  /* width: 68%; */
  color: #777777; 
  line-height: 0.4rem;
  font-size: 14px;
  padding: 0.2rem;
}
.list .data>img{
  display: block;
  width: 23%;
  margin-right: 0.2rem;
  height: 2rem;
}
.data .tit{
  font-size: 16px;
  color: #000;
  line-height: 0.5rem;
}
.data .num{
  color: #FEA54C;
  display: inline-block;
  margin-right: 0.1rem;
}
</style>

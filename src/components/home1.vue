<template>
  <div>
      <!-- swiper轮播图 -->
    <div id='swiper'>
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="https://gw.alicdn.com/tfs/TB1QJhtlYGYBuNjy0FoXXciBFXa-1280-520.jpg_720x720Q30s100.jpg_.webp"/></mt-swipe-item>
        <mt-swipe-item><img src="https://gw.alicdn.com/tfs/TB1K4aymCtYBeNjSspaXXaOOFXa-1280-520.jpg_720x720Q30s100.jpg_.webp"/></mt-swipe-item>
        <mt-swipe-item><img src="https://gw.alicdn.com/tfs/TB1CYF7mGmWBuNjy1XaXXXCbXXa-1280-520.jpg_720x720Q30s100.jpg_.webp"/></mt-swipe-item>
        <mt-swipe-item><img src="https://gw.alicdn.com/tfs/TB17JmRnXuWBuNjSszbXXcS7FXa-1280-520.jpg_720x720Q30s100.jpg_.webp"/></mt-swipe-item>
        <mt-swipe-item><img src="https://gw.alicdn.com/tfs/TB1Jgplm7yWBuNjy0FpXXassXXa-1280-520.jpg_720x720Q30s100.jpg_.webp"/></mt-swipe-item>
        <mt-swipe-item><img src="https://gw.alicdn.com/tfs/TB1Zw4XhDtYBeNjy1XdXXXXyVXa-1280-520.jpg_720x720Q30s100.jpg_.webp"/></mt-swipe-item>
        <mt-swipe-item><img src="https://gw.alicdn.com/tfs/TB1mFgynkyWBuNjy0FpXXassXXa-1280-520.jpg_720x720Q30s100.jpg_.webp"/></mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 数据加载 -->
    <ul id="list" class="clear">
        <li v-for="item in arr">
            <img class="left" :src="item.img.small"/>
            <router-link :to="{path:'/details',query:{id:item.id}}" tag="li">
            <div class="cont left">
                <div class="tit clear">
                    <p class="left">{{item.name}}</p>
                    <span class="first">{{item.pattern[0]}}</span>
                    
                    <span>{{item.pattern[1]}}</span>
                </div>
                <p class="score">观众评分<span>8.9</span></p>
                <p class="action">导演：{{item.director}}</p>
                <p class="action">主演：{{item.tostar[0]}}&nbsp;&nbsp;{{item.tostar[1]}}&nbsp;&nbsp;{{item.tostar[2]}}&nbsp;&nbsp;</p>            
            </div>
            </router-link>
            
            <div class="buy right">
                <p id="buy">{{item.buy}}</p>
                <span>特惠</span>
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
        this.Axios.get("../../static/list.json",{

        }).then(res=>{
            this.arr=res.data.data;
            console.log(res.data.data)
        })
    }
}
</script>

<style>
#list>li{
    color: #777777;
    font-size: 13px;
    width: 100%;
    padding: 0.3rem 0.25rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
}
#list>li>img{
    height: 1.9rem;
    display: block;
    margin-right: 0.15rem;
}
#list>li>img{
    width: 22%;
}
#list>li>.buy{
    width: 15%;
}
#list>li .cont{
    box-sizing: border-box;
}
#list>li .cont .tit>p{
    font-size: 16px;
    color: #000;
    line-height: 0.45rem;
    margin: 0 0.1rem 0.1rem 0;
}
#list>li .cont .tit>span{
    margin-top: 0.09rem;
    display: block;
    float: left;
    font-size: 12px;
    border-radius: 0.03rem;
    line-height: 0.25rem;
}
#list>li .cont .tit>span.first{
    padding: 0 0.05rem;
    box-sizing: border-box;
    color: #fff;
    line-height: 0.27rem;
    background: #999999;
}
#list>li .cont .tit>span:last-child{
    border: 1px solid #D9D9D9;
    background: #fff;
    color: #A1A1A1;
    padding: 0 0.1rem;
}
#list>li .cont .score>span{
    margin-left: 0.1rem;
    color: #F27E1A;
    font-size: 12px;
}
#list>li .cont .score,.action{
    line-height: 0.4rem;
}
#list>li .cont .action{
    text-overflow: ellipsis;
    white-space: nowrap;
}
#list>li .buy{
    font-size: 12px;
}
#list>li .buy>p{
    width: 0.75rem;
    line-height: 0.45rem;
    text-align: center;
    color: #fff;
    background: #FF7E90;
    border-radius: 0.3rem;
    margin: 33.3% auto 0.05rem;
}
#list>li .buy{
    text-align: center;
}
#swiper{
  width: 100%;
  height: 2.45rem;
}
#swiper img{
  display: block;
  width: 100%;
  height: 100%;
}
</style>

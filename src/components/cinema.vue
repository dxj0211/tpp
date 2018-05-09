<template>
  <div>
         <!-- 头部 -->
          <ul id="header1">
            <li>
              <img class="left" src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E   %3Cg fill='none' fill-rule='evenodd'%3E     %3Cpath fill='%23F6303E' d='M38.793 50H11.207C5.017 50 0 44.982 0 38.793V11.207C0 5.017 5.017 0 11.207 0h27.586C44.983 0 50 5.017 50 11.207v27.586C50 44.983 44.982 50 38.793 50'/%3E     %3Cpath fill='%23FFF' d='M30.004 10.63c-3.158-.837-4.13-5.006-10.032-5.006 2.137 2.454 1.15 4.61-.453 5.103-7.83 2.09-13.69 8.68-13.32 17.79.38 9.38 8.39 15.495 18.75 15.495 10.35 0 18.37-6.116 18.75-15.494.37-9.258-5.69-15.913-13.7-17.888'/%3E     %3Cpath fill='%23373D42' d='M25 26.3c-.716 0-1.267 3.092-2.473 4.794-.896 1.265-2.162 1.838-4.37 1.976-.763.048-1.64.045-2.687-.01-1.432-.075-2.67-.847-3.582-2.234-.65-.992-1.134-2.283-1.436-3.838v-.007c-.107-.54-.205-1.05-.265-1.54-.163-1.08-.623-1.46-.926-1.59l-.03-.01c-.23-.06-.28-.294-.28-.34-.03-.44-.13-1.41-.17-2.015-.03-.453.35-.512.42-.517 2.608-.163 8.655-.49 11.4.23.825.214 3.17.66 4.41.66 1.24 0 3.59-.446 4.41-.66 2.75-.72 8.798-.393 11.4-.23.075.005.448.064.42.517-.04.605-.146 1.58-.174 2.014-.002.044-.047.28-.28.34-.012.003-.022.01-.033.014-.305.134-.765.516-.93 1.594-.06.487-.16.996-.263 1.542V27c-.304 1.553-.787 2.844-1.438 3.836-.91 1.387-2.15 2.16-3.584 2.234-1.045.055-1.923.06-2.686.01-2.207-.138-3.473-.71-4.37-1.976-1.21-1.706-1.76-4.8-2.48-4.8'/%3E     %3Cpath fill='%23F6303E' d='M19.925 23.308c-.06-.01-.125-.024-.195-.038-.98-.183-2.975-.436-4.52-.338-.68.043-1.27.152-1.65.367-.94.53-1.016 1.36-.858 2.49.046.32.112.67.182 1.05.376 2 1.264 4.13 3.112 4.24.83.05 1.51.05 2.075.01 1.74-.11 2.36-.58 2.8-1.227 2.47-3.66 1.49-6.066-.932-6.57'/%3E     %3Cpath fill='%231F9BDE' d='M30.075 23.308c.06-.01.125-.024.195-.038.98-.183 2.975-.436 4.52-.338.68.043 1.27.152 1.65.367.94.53 1.016 1.36.858 2.49-.046.32-.112.67-.182 1.05-.376 2-1.264 4.13-3.112 4.24-.83.05-1.51.05-2.075.01-1.74-.11-2.36-.58-2.8-1.227-2.47-3.66-1.49-6.066.932-6.57'/%3E   %3C/g%3E %3C/svg%3E" />
              <span class="address left">北京</span>
            </li>
            <li @click="regin">区域<p class="sj"></p></li>
            <li>离我最近<p class="sj"></p></li>
            <li @click="support">特色<p class="sj"></p></li>
            <li>
              <img class="search" src="../../static/img/search.jpg"/>
            </li>
          </ul>

          <!-- 头部导航点击内容 -->
          <div class="mtk" v-show="hide">
              <!-- 区域下拉列表 -->
              <ul class="regin_list clear" v-show="hide1">
                <li @click="reginList(index)" :class="{active:index===currentIndex}" v-for="item,index in regionNameFilters">{{item.code}}</li>
              </ul>
              <!-- 离我最近 -->

              <!-- 特色 -->
              <ul class="regin_list clear" v-show="hide2">
                   <li @click="supportList(index)" :class="{active:index===currentIndex}" v-for="item,index in supportFilters">{{item.title}}</li>
              </ul>
          </div>
          

          <!-- 模板循环 -->
          <ul class="regin clear">
            <router-link to="/movie">
              <li v-for="item in arr">
              <div class="regin_left left">
                <p class="cinema">{{item.cinemaName}}</p>
                <p class="site">{{item.address}}</p>
                <span class="ps" v-for="i in item.displaySupports">{{i}}</span>
              </div>
              <p class="price right">
                <span>{{item.minPrice}}元</span>起
              </p>
            </li>
            </router-link>
            
          </ul>
  </div>
</template>

<script>

export default {
    data(){
        return{
            currentIndex:0,
            arr:[],
            regionNameFilters:[],
            supportFilters:[],
            hide: false,
            hide1:false,
            hide2:false,
        }
    },
    methods:{
        regin(){
            this.hide=!this.hide;
            this.hide1=!this.hide1;
        },
        support(){
            this.hide=!this.hide;
            this.hide2=!this.hide2;
        },
        reginList(index){
            this.currentIndex=index;
        },
        supportList(index){
            this.currentIndex=index;
        }
    },
    mounted(){
        this.Axios.get('../../static/address1.json',{

        }).then(res=>{
            this.arr=res.data.data.returnValue.cinemas;
            this.regionNameFilters=res.data.data.returnValue.cinemaFilter.regionNameFilters
            this.supportFilters=res.data.data.returnValue.cinemaFilter.supportFilters
            // console.log(res.data.data.returnValue.cinemaFilter.supportFilters)
        })
    }
}
</script>

<style>
#header,#header1{
  box-sizing: border-box;
  line-height: 0.45rem;
  padding: 0.2rem 0.25rem;
  font-size: 14px;
}
.header_left{
  width: 40%;
}
.header_right{
  width: 60%;
}
.header_right>mt-p{
  line-height: 0.45rem;
  margin-right: 1rem;
}
#header .address,#header1 .address{
  color: #A59999;
}
#header img,#header1 img{
  width: 0.45rem;
  height: 0.45rem;
  display: block;
  margin-right: 0.25rem;
}
.mint-button--small{
  background: none;
}
#header1 .sj{
  display: inline-block;
  width: 0;
  margin-left: 0.08rem;
  border: 0.06rem solid #f00;
  border-color: transparent;
  border-top-color: #231815;
}
#header1{
  display: flex;  
  border-bottom: 1px solid #F2F2F2;
}
#header1 li:first-child,#header1>li:nth-child(3){
  flex: 1.5;
}
#header1 li:last-child{
  border-right: none;
}
#header1 li{
  border-right: 1px solid #F2F2F2;
  font-size: 12px;
  text-align: center;
  flex: 1;
}
#header1 li>.search{
  margin: 0.1rem auto 0;
  width: 0.25rem;
  height: 0.25rem;
}
.regin li{
  padding: 0.3rem 0.25rem;
  box-sizing: border-box;
  width: 100%;
  line-height: 0.4rem;
  font-size: 13px;
  display: block;
  color: #666666;
  border-bottom: 1px solid #F2F2F2;
}
.regin li .cinema{
  color: #231815;
  font-size: 17px;
  line-height: 0.5rem;
}
.regin li .cinema,.site{
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.regin li>.regin_left{
  width: 75%;
}
.regin li>.price{
  margin-top: 0.2rem;
  text-align: center;
  width: 20%;
}
.regin li>.price>span{
  color: #FF4D64;
}
.regin li .ps{
  border-radius: 0.04rem;
  border: 1px solid #6DA8ED;
  color: #6DA8ED;
  padding: 0.03rem;
  line-height: 0.25rem;
  font-size: 12px;
  display: inline-block;
  margin-right: 0.08rem;
}
.mtk{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.regin_list{
    background: #fff;
    width: 100%;
    padding: 0.25rem 0 0 0.25rem;
}
.regin_list>li{
    color: #A2A2A2;
    font-size: 13px;
    display: inline-block;
    width: 20%;
    margin: 0 3% 0.15rem 0;
    line-height: 0.4rem;
    text-align: center;
    border: 1px solid #EFEFEF;
    border-radius: 0.05rem;
}
.regin_list>li.active{
    color: #f00;
    border: 1px solid #f00;
}
</style>

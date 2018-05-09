<template>
  <div>
    <!-- tabcontainer -->  
      <mt-tab-container class="page-tabbar-container" v-model="selected">  
        <mt-tab-container-item id="热映">  
          <!-- 头部 -->
          <div id="header" class="clear">
            <div class="header_left left">
              <img class="left" src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E   %3Cg fill='none' fill-rule='evenodd'%3E     %3Cpath fill='%23F6303E' d='M38.793 50H11.207C5.017 50 0 44.982 0 38.793V11.207C0 5.017 5.017 0 11.207 0h27.586C44.983 0 50 5.017 50 11.207v27.586C50 44.983 44.982 50 38.793 50'/%3E     %3Cpath fill='%23FFF' d='M30.004 10.63c-3.158-.837-4.13-5.006-10.032-5.006 2.137 2.454 1.15 4.61-.453 5.103-7.83 2.09-13.69 8.68-13.32 17.79.38 9.38 8.39 15.495 18.75 15.495 10.35 0 18.37-6.116 18.75-15.494.37-9.258-5.69-15.913-13.7-17.888'/%3E     %3Cpath fill='%23373D42' d='M25 26.3c-.716 0-1.267 3.092-2.473 4.794-.896 1.265-2.162 1.838-4.37 1.976-.763.048-1.64.045-2.687-.01-1.432-.075-2.67-.847-3.582-2.234-.65-.992-1.134-2.283-1.436-3.838v-.007c-.107-.54-.205-1.05-.265-1.54-.163-1.08-.623-1.46-.926-1.59l-.03-.01c-.23-.06-.28-.294-.28-.34-.03-.44-.13-1.41-.17-2.015-.03-.453.35-.512.42-.517 2.608-.163 8.655-.49 11.4.23.825.214 3.17.66 4.41.66 1.24 0 3.59-.446 4.41-.66 2.75-.72 8.798-.393 11.4-.23.075.005.448.064.42.517-.04.605-.146 1.58-.174 2.014-.002.044-.047.28-.28.34-.012.003-.022.01-.033.014-.305.134-.765.516-.93 1.594-.06.487-.16.996-.263 1.542V27c-.304 1.553-.787 2.844-1.438 3.836-.91 1.387-2.15 2.16-3.584 2.234-1.045.055-1.923.06-2.686.01-2.207-.138-3.473-.71-4.37-1.976-1.21-1.706-1.76-4.8-2.48-4.8'/%3E     %3Cpath fill='%23F6303E' d='M19.925 23.308c-.06-.01-.125-.024-.195-.038-.98-.183-2.975-.436-4.52-.338-.68.043-1.27.152-1.65.367-.94.53-1.016 1.36-.858 2.49.046.32.112.67.182 1.05.376 2 1.264 4.13 3.112 4.24.83.05 1.51.05 2.075.01 1.74-.11 2.36-.58 2.8-1.227 2.47-3.66 1.49-6.066-.932-6.57'/%3E     %3Cpath fill='%231F9BDE' d='M30.075 23.308c.06-.01.125-.024.195-.038.98-.183 2.975-.436 4.52-.338.68.043 1.27.152 1.65.367.94.53 1.016 1.36.858 2.49-.046.32-.112.67-.182 1.05-.376 2-1.264 4.13-3.112 4.24-.83.05-1.51.05-2.075.01-1.74-.11-2.36-.58-2.8-1.227-2.47-3.66-1.49-6.066.932-6.57'/%3E   %3C/g%3E %3C/svg%3E" />
              <p class="address left" @click="choose_address">北京(选择地址)</p>
            </div>
           <div class="header_right right">
              <mt-button size="small" @click.native.prevent="active = 'tab-container1'">正在热映</mt-button>  
              <mt-button size="small" @click.native.prevent="active = 'tab-container2'">即将上映</mt-button>
           </div>
          </div>

        <div id="choose_id" v-show="choose">
          <p class="close" @click="close">X</p>
           <mt-index-list>
            <mt-index-section index="热门">
                <mt-cell  v-for="item,index in arrAuto" :title="item" :key="index"></mt-cell>
            </mt-index-section>
            <mt-index-section v-for="item,index in data" :key="index" :index="item">
                <mt-cell  v-for="i,index in arr[item]" :key="index" :title="i.name"></mt-cell>
            </mt-index-section>
            </mt-index-list>
       </div>

          <!-- 内容 -->
          <div id="content">
            <mt-tab-container v-model="active">
              <mt-tab-container-item id="tab-container1">
                <Home1></Home1>
            </mt-tab-container-item>
              <mt-tab-container-item id="tab-container2">
                <Home2></Home2>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>
        </mt-tab-container-item>

        
        <mt-tab-container-item id="影院">
          <Cinema></Cinema>
        </mt-tab-container-item>  

        <mt-tab-container-item id="我的">
          <div>
            <Mine v-show="minehide"></Mine>
            <Loginsus v-show="loginsushide"></Loginsus>
          </div>  
           
        </mt-tab-container-item>  
      </mt-tab-container>  
  
    <mt-tabbar v-model="selected" fixed>  
      <mt-tab-item id="热映">  
        <img slot="icon" src="../../static/img/hot1.png">  
        热映  
      </mt-tab-item>  
      <mt-tab-item id="影院">  
        <img slot="icon" src="../../static/img/movie1.png">  
        影院  
      </mt-tab-item>  
      <mt-tab-item id="我的">  
        <img slot="icon" src="../../static/img/mine1.png">  
        我的  
      </mt-tab-item>   
    </mt-tabbar> 


    </div>
    
 
</template>

<script>
import Vue from "vue"
import Home1 from "./home1.vue"
import Home2 from "./home2.vue"
import Cinema from "./cinema.vue"
import Mine from "./mine.vue"
import Loginsus from "./loginsus.vue"
import {Swipe,SwipeItem,TabContainer, TabContainerItem,Tabbar, TabItem,IndexList,IndexSection} from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
  components:{Home1,Home2,Cinema,Mine,Loginsus},
  data() {
    return {
      arrAuto: ["北京", "上海", "深圳", "广州", "成都", "武汉", "杭州", "重庆"],
      arr:[],
      data:[],
      active: 'tab-container1',
      selected: '热映',
      choose:false,
      name:"",
      minehide:true,
      loginsushide:false
    };
  },
  methods:{
    choose_address(){
      this.choose=!this.choose;
    },
    close(){
      this.choose=!this.choose;
    }
  },
  mounted(){
    this.Axios.get("../../static/global.json",{

    }).then(res=>{
      this.arr=res.data
      this.data=Object.getOwnPropertyNames(res.data);
      this.data.pop();
      console.log(this.data)
      console.log(res.data)
    }),
    this.name=localStorage.getItem("username")
      console.log(this.name)
      if(this.name==null){
        this.minehide=true
        this.loginsushide=false
      }else{
        this.minehide=false,
        this.loginsushide=true
      }
  }
};
</script>

<style>
#choose_id{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
#choose_id>.close{
  color: #7E7E7E;
  z-index: 999;
  font-size: 20px;
  position: absolute;
  right: 0.7rem;
  line-height: 0.45rem;
}
.mint-indexsection {
  font-weight: 400;
  color: #777777;
  font-size: 13px;
  float: none;
}
.mint-indexsection-index {
  font-weight: 700;
  background: #eeeeee;
  padding: 8px;
}
.mint-swipe-indicators {
  bottom: -0.12rem;
}
#tabbar {
  width: 100%;
  height: 4rem;
}
#header,
#header1 {
  box-sizing: border-box;
  line-height: 0.45rem;
  padding: 0.2rem 0.25rem;
  font-size: 14px;
}
.header_left {
  width: 30%;
}
.header_right {
  width: 65%;
}
.header_right > mt-p {
  line-height: 0.45rem;
  margin-right: 1rem;
}
#header .address,
#header1 .address {
  color: #a59999;
}
#header img,
#header1 img {
  width: 0.45rem;
  height: 0.45rem;
  display: block;
  margin-right: 0.25rem;
}
.mint-button--small {
  background: none;
}
</style>

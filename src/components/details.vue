<template>
  <div>
      <div class="details_top">
          <div class="top_tit clear">
              <div class="tit_left left">
                <div class="clear">
                    <span class="tit left">{{arr2.name}}</span>
                    <p class="icon left">
                     <span class="left">{{arr2.pattern[0]}}</span>
                     <span class="left">{{arr2.pattern[1]}}</span>
                    </p>
                </div>
                <span class="english">{{arr2.data.english}}</span>
                <span class="class">{{arr2.data.class}}</span>
                <p class="country">
                  <span>{{arr2.data.country}}</span>
                  <span>{{arr2.data.time}}</span>
                </p>
                <p class="data_time left">{{arr2.data.datatime}}</p>
              </div>
              <img class="right" :src="arr2.img.large"/>
          </div>
          <ul class="top_support clear">
              <li>
                  <p>{{arr2.score}}</p>
              </li>
              <li>
                  <p>{{arr2.data.recommend}}</p>
                  <p>V淘推荐度</p>
              </li>
              <li>
                  <p>{{arr2.data.people}}</p>
                  <p>想看人数</p>
              </li>
          </ul>
          <div class="top_cont">
              <span>简介：</span>
              {{arr2.data.abstract}}
          </div>
      </div>
      <div class="actor_list">
          <p>演职人员</p>
          <ul class="clear">
              <li>
                  <img :src="arr2.img.first"/>
                  <p>{{arr2.data.dataPerformers.first}}</p>
              </li>
              <li>
                  <img :src="arr2.img.second"/>
                  <p>{{arr2.data.dataPerformers.second}}</p>
              </li>
              <li>
                  <img :src="arr2.img.third"/>
                  <p>{{arr2.data.dataPerformers.third}}</p>
              </li>
              <li>
                  <img :src="arr2.img.four"/>
                  <p>{{arr2.data.dataPerformers.four}}</p>
              </li>
          </ul>
      </div>
      <div class="hotView">
          <p>观众热评</p>
          <ul class="view_list clear">
              <li v-for="item in review">{{item}}</li>
          </ul>
          <div class="people_view">
              <ul class="clear">
                  <li v-for="item in peopleReview">
                      <div class="top clear">
                          <img class="left" :src="item.img"/>
                          <p class="left">{{item.name}}</p>
                          <span class="left">{{item.score}}</span>
                      </div>
                      <div class="content">{{item.cont}}</div>
                      <span class="time">{{item.time}}</span>
                  </li>
              </ul>
          </div>
      </div>
      <router-link to="/cinema">
          <div class="choose">选座购票</div>
      </router-link>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[],
            arr2:{},
            review:[],
            peopleReview:[]
        }
    },
    mounted(){
        this.Axios.get("../../static/list.json",{

        }).then(res=>{
            this.arr=res.data.data
            console.log(res.data.data)
            for(var i=0;i<this.arr.length;i++){
            if(this.$route.query.id==this.arr[i].id){
                this.arr2=this.arr[i]
                this.review=this.arr2.data.review
                this.peopleReview=this.arr2.data.people_review
                console.log(this.arr2)
            }
        }
        })
    }
}
</script>

<style>
.choose{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 1rem;
    background: linear-gradient(to right,#FF789C,#FF5068);
    color: #fff;
    text-align: center;
    font-size: 20px;
}
.details_top{
    font-size: 12px;
    color: #DADBDD;
}
.top_tit{
    background: #718B9B;
    padding: 0.3rem 0.25rem 0 0.25rem;
    line-height: 0.35rem;
}
.top_tit .tit{
    font-size: 20px;
    margin: 0 0.1rem 0.1rem 0;
    color: #fff;
    line-height: 0.55rem;
}
.top_tit .icon{
    margin-top: 0.15rem;
}
.top_tit .icon>span{
    color: #fff;
    line-height: 0.25rem;
    border: 1px solid #A6A8AC;
    border-radius: 0.02rem;
}
.top_tit .icon>span:first-child{
    background: #AFB1B5;
    padding: 0 0.03rem;
}
.top_tit .icon>span:nth-child(2){
    padding: 0 0.05rem;
}
.top_tit .english{
    display: block;
}
.top_tit>img{
    display: block;
    width: 33%;
    height: 2.8rem;
}
.top_support{
    display: flex;
}
.top_support,.top_cont{
    background: #fff;
    padding: 0.3rem 0.25rem;
}
.top_support>li{
    flex: 1;
    text-align: center;
}
.top_support>li>p:first-child{
    font-size: 18px;
    color: #000;
    line-height: 0.5rem;
}
.top_support>li:first-child>p:first-child{
    color: #FEA54C;
}
.top_support>li>p:nth-child(2){
    color: #BDBDBD;
    float: left;
    width: 100%;
}
.top_cont{
    font-size: 15px;
    line-height: 0.42rem;
    color: #333;
    letter-spacing: 0.01rem;
}
.top_cont>span{
    color: #000;
    font-size: 18px;
}
.actor_list,.hotView{
    padding: 0.3rem 0.25rem;
    background: #fff;
}
.actor_list{
    border-top: 0.25rem solid #F5F5F5;
    border-bottom: 0.25rem solid #F5F5F5;
}
.actor_list>p,.hotView>p{
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: 0.7rem;
}
.actor_list li{
    font-size: 12px;
    text-align: center;
    width: 22%;
    margin-right: 2%;
}
.actor_list li:last-child{
     margin-right: 0;
}
.actor_list li>img{
    display: block;
    height: 1.8rem;
    margin-bottom: 0.05rem;
    background: cadetblue;
}
.hotView{
    margin-bottom: 1rem;
}
.hotView .view_list>li{
    font-size: 12px;
    padding: 0 0.25rem;
    border: 1px solid #E2E2E2;
    line-height: 0.45rem;
    border-radius: 0.2rem;
    margin: 0 0.25rem 0.15rem 0;
}
.people_view li{
    width: 100%;
    display: block;
}
.people_view li>.top>img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: cadetblue;
    margin-right: 0.2rem;
}
.people_view li>.top>p{
    line-height: 1.3rem;
    font-size: 16px;
    color: #000;
    margin-right: 0.15rem;
}
.people_view li>.top>span{
    font-size: 14px;
    line-height: 1.35rem;
    color: #fEA54C;
}
.people_view li>.content{
    width: 100%;
    font-size: 15px;
    text-overflow: ellipsis;
    line-height: 0.35rem;
    color: #333;
    letter-spacing: 0.01rem;
}
.people_view li>.time{
    color: #BCC2D3;
    font-size: 14px;
    display: block;
    margin: 0.2rem 0
}
</style>

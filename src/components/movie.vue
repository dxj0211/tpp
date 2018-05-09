<template>
  <div class="movie">
      <div class="movie_top">
          <div class="top_box clear">
              <div class="top_left left">
                  <p>{{topBox.cinemaName}}</p>
                  <span>{{topBox.address}}</span>
                  <ul class="clear">
                      <li v-for="i in topBox.supportList">{{i.name}}</li>
                  </ul>
              </div>
              <div class="top_right right">
                  <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='37' height='42'%3E   %3Cg fill='%2368A6D8' fill-rule='evenodd'%3E     %3Cpath d='M14.293 17c0-2.31 1.878-4.188 4.188-4.188 2.31 0 4.19 1.878 4.19 4.188 0 2.31-1.877 4.188-4.187 4.188-2.31 0-4.187-1.878-4.187-4.188zm-2.812 0c0 3.858 3.145 7 7 7 3.86 0 7-3.142 7-7s-3.14-7-7-7c-3.855 0-7 3.142-7 7z'/%3E     %3Cpath d='M31.63 26.77c-1.156 1.924-5.3 6.086-11.372 11.425-.484.425-1.113.66-1.758.66s-1.268-.235-1.758-.66C10.67 32.862 6.526 28.7 5.37 26.77c-2.348-3.915-2.343-5.188-2.343-8.587v-.43c0-8.062 6.562-14.62 14.624-14.62h1.7c8.06 0 14.625 6.558 14.625 14.62v.43c0 3.4.005 4.672-2.343 8.588zM37 18.044v-.446c0-4.702-1.834-9.123-5.157-12.444C28.52 1.827 24.097 0 19.39 0h-1.78C12.902 0 8.485 1.832 5.156 5.153 1.834 8.48 0 12.895 0 17.597v.446c-.005 3.794-.005 5.53 2.782 10.177 1.726 2.875 7.684 8.4 12.384 12.522.92.813 2.104 1.258 3.334 1.258s2.41-.445 3.334-1.258c4.7-4.127 10.658-9.647 12.384-12.522 2.787-4.646 2.787-6.383 2.782-10.177z'/%3E   %3C/g%3E %3C/svg%3E"/>
                  <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='41'%3E   %3Cg fill='%2368A6D8' fill-rule='evenodd'%3E     %3Cpath d='M19.984 32.966l9.513 4.7c.517.257 1.135.244 1.652-.033.25-.136.7-.458.77-1.075.01-.07.01-.14.01-.214l.14-26.852c.02-2.542-2.59-6.648-6.59-6.447L8.99 3.018c-2.806 0-5.95 2.91-5.95 5.747l-.01 27.552c0 .075.004.145.013.215.07.62.517.943.773 1.075.515.277 1.133.285 1.65.033l9.717-4.674c.75-.376 1.573-.558 2.397-.558.824 0 1.647.186 2.4.558zM29.894 41c-.805 0-1.61-.182-2.343-.545l-9.28-4.586c-.48-.24-1.06-.24-1.54 0l-9.28 4.58c-1.52.75-3.33.72-4.84-.08-1.45-.76-2.38-2.11-2.57-3.68-.02-.2-.03-.4-.03-.61L.04 8.57C0 4.694 3.656-.145 8.81 0h17.83c4.534 0 8.323 4.32 8.323 8.186L35 36.09c0 .207-.012.408-.037.606-.185 1.573-1.124 2.912-2.568 3.682-.78.412-1.64.622-2.502.622z'/%3E     %3Cpath d='M20.978 14.008h.008-.008zm1.318 6.232l-.004.008s0-.004.004-.008zm-9.6.008s.005.004.005.008v-.008zm4.798.995c.413 0 .83.088 1.213.252l1.642.717-.16-1.85c-.08-.868.2-1.735.75-2.396l1.16-1.396-1.74-.422c-.82-.2-1.52-.736-1.95-1.465l-.93-1.592-.92 1.59c-.44.74-1.15 1.28-1.95 1.47l-1.75.42 1.17 1.41c.54.65.813 1.52.74 2.39l-.15 1.85 1.65-.714c.38-.164.793-.246 1.205-.246zm2.048 1.764c0 .004 0 .004 0 0zm-2.568.463s.004 0 0 0zm3.906 1.527c-.265 0-.533-.053-.79-.168l-2.596-1.13-2.592 1.13c-.662.28-1.4.2-1.98-.24-.58-.44-.888-1.14-.825-1.88l.237-2.91-1.84-2.21c-.468-.57-.614-1.32-.393-2.03.23-.71.77-1.23 1.47-1.4l2.74-.666 1.46-2.5c.37-.63 1.02-1.01 1.74-1.01s1.37.38 1.74 1.014l1.457 2.5 2.745.66c.698.17 1.247.693 1.468 1.4.22.706.07 1.467-.393 2.03l-1.84 2.21.236 2.905c.067.74-.245 1.442-.82 1.88-.37.262-.783.397-1.2.397z'/%3E   %3C/g%3E %3C/svg%3E"/>
              </div>
          </div>
          <div class="btn_box clear" v-for="item in notifyBannerVos">
              <div class="left">
                  <p>{{item.tag}}</p>
                  <p>{{item.title}}</p>
              </div>
              <img class="right" src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='46'%3E   %3Cpath fill='%23DAECF6' fill-rule='evenodd' d='M56 12H0V7c0-3.867 3.14-7 7.007-7h41.986C52.86 0 56 3.137 56 7v5zm0 3v24c0 3.867-3.14 7-7.007 7H7.007C3.14 46 0 42.863 0 39V15h56zM6 29v3h16v-3H6zm0 6v3h12v-3H6z'/%3E %3C/svg%3E" />
          </div>
      </div>

      <div class="movie_list">
          <!-- 轮播图上 -->
        <div class="swiper-container">
           <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in showVos">
                  <img :src="item.poster" />
              </div>
          </div>
        </div>
      </div>
      <!-- 轮播图下 -->
      <div class="movie_btm">
            <div class="btm_top">
                <div class="top clear">
                    <p class="left">{{arr.showName}}</p>
                    <span class="right">{{arr.remark}}</span>
                </div>
                <p class="btm clear">
                    <span class="left">{{arr.duration}}分钟</span>
                    <span class="right">{{arr.type}}</span>
                </p>
                <p class="actor">{{arr.leadingRole}}</p>
            </div>
      </div>
        <!-- 选项卡 -->
        <div class="movie_tab">
            <mt-navbar v-model="selected">
              <mt-tab-item :id="index+1" v-for="i,index in showScheduleMap[nowshowId]">{{i.dateDesc}}</mt-tab-item>
            </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="index+1" v-for="i,index in showScheduleMap[nowshowId]">
                <div class="data_list clear" v-for="item in i.scheduleVos">
                    <div class="data_left">
                        <p style="font-size:20px">{{item.openTime}}</p>
                        <p style="color:#A5A5C2;margin-top:5px;font-size:13px">{{item.closeTime}}</p>
                    </div>
                    <div class="data_mid">
                        <div class="mid_left">
                            <p style="color:#333333;margin-top:7.5px">{{item.showVersion}}</p>
                            <p style="color:#A5A5C2;margin-top:6px;font-size:13px">{{item.hallName}}</p>
                        </div>
                        <div class="mid_right">
                            <p style="color:#ff0000;">特惠<span style="font-size:22px;">{{item.tradePrice}}</span>元</p>
                            <p style="margin-top:2px;color:#A5A5C3;float:right;font-size:13px"><s>{{item.cinemaPrice}}</s></p>
                        </div>
                    </div>
                    <div class="data_right">
                        购票
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        </div>
      
      
  </div>
</template>

<script>
import Vue from "vue";
import { Navbar, TabItem } from "mint-ui";

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
      selected: "1",
      topBox: {},
      notifyBannerVos: [],
      showVos: [],
      arr: [],
      index: 0,
      bool: true,
      data: [],
      showScheduleMap: {},
      nowshowId: ""
    };
  },
  methods: {
    img() {},
    click(index){
        var appendNumber = 6;
        var prependNumber = 1;
        var that = this;
        if (that.bool) {
            var swiper = new Swiper(".swiper-container", {
            onClick: function(val) {
                // 设置状态，否则会一直更新
                that.bool = false;
                //   console.log(val.clickedIndex)
                
                    that.index = val.clickedIndex;
                
                
                $(".swiper-container").show();
                swiper.slideTo(val.clickedIndex);

                //   console.log(that.arr)
                that.arr = that.showVos[that.index];
                //   console.log(that.arr);
                that.nowshowId = that.arr.showId;
                //   console.log(that.nowshowId);
            },
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 5,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
            });
        };
    }

  },
  mounted() {
    // 数据请求
    this.Axios({
      url: "../../static/movie_list.json",
      method: "get"
    }).then(res => {
      this.topBox = res.data.data.returnValue.cinemaVo;
      this.notifyBannerVos = res.data.data.returnValue.notifyBannerVos;
      this.showVos = res.data.data.returnValue.showVos;
      this.showScheduleMap = res.data.data.returnValue.showScheduleMap;
      console.log( res.data.data.returnValue);
      this.data = Object.getOwnPropertyNames(
        res.data.data.returnValue.showScheduleMap
      );
      this.data.pop();
      console.log(this.data);
      //   console.log(that.arr)
      this.arr = this.showVos[this.index];
      //   console.log(that.arr);
      this.nowshowId = this.arr.showId;
      //   console.log(that.nowshowId);
    });

    // this.click(this.index)
    
  },
  updated() {
    // swiper
      this.click()
  }
};
</script>

<style>
body {
  font-size: 13px;
}
.movie_btm > .btm_top {
  font-size: 12px;
  color: #999999;
}
.movie_btm > .btm_top > .top {
  width: 25%;
  margin: 0 auto 0.07rem;
}
.movie_btm > .btm_top > .btm {
  width: 30%;
  margin: 0 auto;
}
.movie_btm > .btm_top > .actor {
  text-align: center;
}
.btm_top > .top > p {
  color: #000;
  font-size: 18px;
  font-weight: 600;
}
.btm_top > .top > span {
  margin-top: 0.1rem;
  color: #fea54c;
}
.movie_list {
  padding-top: 0.3rem;
  background: #4d4b45;
}
.movie_top .top_left {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60%;
  margin: 0.15rem;
  padding-right: 0.2rem;
  color: #999999;
  border-right: 1px dashed #f6f6f6;
}
.movie_top .top_right {
  margin-top: 0.85rem;
  width: 30%;
}
.movie_top .top_right > img {
  display: inline-block;
  width: 0.4rem;
  margin-right: 0.2rem;
}
.movie_top .top_right > img:first-child {
  margin-left: 0.3rem;
}
.movie_top .top_left > p {
  font-size: 16px;
  color: #333;
  line-height: 0.5rem;
}
.movie_top .top_left > span {
  line-height: 0.4rem;
}
.movie_top .top_left > ul > li {
  font-size: 12px;
  padding: 0 0.05rem;
  border-radius: 0.05rem;
  border: 1px solid #6dc4f6;
  color: #6dc4f6;
  line-height: 0.3rem;
  margin: 0.08rem 0.05rem 0 0;
}
.btn_box {
  border-radius: 0.1rem;
  padding: 0.15rem 0.2rem;
  width: 88%;
  margin: 0.1rem auto;
  background: #f3f9fd;
  border: 2px solid #d4eaf7;
}
.btn_box > div > p {
  color: #65b1db;
}
.btn_box > img {
  width: 0.55rem;
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin: 0.2rem auto 0.05rem;
}
.swiper-slide {
  text-align: center;
  font-size: 0.18rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide > img {
  width: 1.6rem;
  height: 2rem;
  display: block;
}
.append-buttons {
  text-align: center;
  margin-top: 0.2rem;
}
.append-buttons a {
  display: inline-block;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 0.04rem 0.1px;
  border-radius: 0.04rem;
  margin: 0 0.1px;
  font-size: 13px;
}
.data_list{
    width: 100%;
    height: 1.65rem;
    padding-left: 0.3rem;
    box-sizing: border-box;
    border-top: 1px solid #fafafa;
    border-bottom: 1px solid #fafafa;
    box-sizing: border-box;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
}
.data_list>div{
    float: left;
}
.data_list .data_left{
    width: 20%;
}
.data_list .data_mid{
    width: 55%;
    padding-left: 0.1rem;
    box-sizing: border-box;
}
.data_list .data_mid>div{
    float: left;
}
.data_list .data_mid .mid_left{
    float: left;
}
.data_list .data_mid .mid_right{
    float: right;

}
.data_list .data_right{
    width: 20%;
    width: 1rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    border: 1px solid #FF7F90;
    color: #FF7F90;
    text-align: center;
    line-height: 0.56rem;
    margin-left: 0.25rem;
    margin-top: 0.3rem
}
</style>
<template>
<div>
    <div class="userInfo">
        <img src="../../static/img/qu1.jpg"/>
        <p>{{username}}</p>
    </div>
    <ul class="loginsus clear">
      <router-link to="/ticket" style="color:#333">
           <li>
              <img class="left" src="../../static/img/ticket.svg"/>
              <span class="left">电影票</span>
              <span class="right">></span>
            </li>
      </router-link>
      <router-link to="/coupon" style="color:#333">
           <li>
             <img class="left" src="../../static/img/youhui.svg"/>
             <span class="left">优惠券</span>
             <span class="right">></span>
           </li>
      </router-link>
     <router-link to="/talk" style="color:#333">
        <li>
          <img class="left" src="../../static/img/talk.svg"/>
          <span class="left">帮助与反馈</span>
          <span class="right">></span>
          <span class="talk right">资讯票小蜜</span>
        </li>
     </router-link>
  </ul>
  <p class="button" @click="quit">退出登录</p>
</div>
  
</template>

<script>
export default {
    data(){
        return{
            username:""
        }
    },
    methods:{
        getInfo(){
       this.username=localStorage.getItem("username")
        },
        quit(){
            this.Axios({
        url:"/Handler/AdminLoginHandler?action=quit",
        method:"get"
      }).then(res=>{
        if(res.data.success){
          alert(res.data.success)
          //  this.$router.push("home")
        //    window.location.href="/";
        }
      })
        }
    },
    mounted(){
        this.getInfo()
    }
}
</script>
<style>
p.button{
    width: 80%;
    line-height: 0.7rem;
    text-align: center;
    color: #fff;
    background: brown;
    font-size: 16px;
    border-radius: 0.5rem;
    margin: 0.5rem auto 0;
}
.userInfo{
    padding: 0.6rem 0;
    background: lightblue;
}
.userInfo>img{
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto 0.2rem;
    display: block;
}
.userInfo>p{
    font-size: 15px;
    text-align: center;
    color: lightseagreen;
}
.loginsus li{
    margin:0 5%;
    width: 90%;
    font-size: 16px;
    line-height: 60px;
    border-bottom: 1px solid #F6F6F6;
}
.loginsus li>img{
    width: 20px;
    height: 20px;
    display: block;
    margin: 20px 20px 0 0;
}
.loginsus li>span.right{
    color: #CBCBCB;
    font-size: 20px;
}
.loginsus li>span.talk{
    font-size: 14px;
    margin-right: 10px;
}
</style>

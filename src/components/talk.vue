<template>
  <div class="talk_wrap">
     <div class="assistant">
         票小蜜 <span style="color:#999999">智能助理</span>
         <div class="img">
            <img src="../../static/img/people.png" alt="">
         </div>
     </div>
     <p class="tit">助理小蜜进入会话为您服务</p>
     <div class="chat">
         Hi,是否3464，我是您的票小蜜，<br>有关电影票的问题都可以问我哦~
     </div>
     <div class="research">
        <img src="../../static/img/01.jpg" alt="">
        <p style="border-bottom:1px solid #f3f5f5;">售后问题咨询</p>
        <p>小食问题</p>
     </div>
     <div class="bottom_list">
         <ul class="clear">
             <li>退换票</li>
             <li>影城卡</li>
             <li>城市卡</li>
             <li>查看取票码</li>
         </ul>
         <div class="input"></div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
    background: #f3f5f5;
}
/* .talk_wrap{
    
    overflow: hidden;
} */
.assistant{
    position: relative;
    width: 3.1rem;
    height: 1rem;
    background: #fff;
    text-align: center;
    font-size: 0.27rem;
    margin: auto;
    border-radius: 0.2rem;
    margin-top: 0.7rem;
    box-sizing: border-box;
    padding: 0.4rem
}
.assistant .img{
    position: absolute;
    width: 0.64rem;
    height: 0.74rem;
    left: 0;
    right: 0;
    margin: auto;
    top: -0.4rem;
    background: #fff;
    border-radius: 50%;
}
.assistant .img img{
    width: 100%;
    height: 100%;
}
.tit{
    font-size: 0.24rem;
    color: #999999;
    text-align: center;
    line-height: 0.8rem;
}
.chat{
    width: 4.92rem;
    height: 1.16rem;
    background: #fff;
    border-radius: 0.3rem;
    font-size: 0.28rem;
    margin-left: 0.4rem;
    box-sizing: border-box;
    padding: 0.2rem;
    line-height: 0.4rem;
    border-bottom-left-radius: 0.1rem;
}
.research{
    width: 5.92rem;
    height: 3.63rem;
    background: #fff;
    margin: auto;
    border-radius: 0.3rem;
    margin-top: 0.2rem;
    overflow: hidden;
}
.research img{
    width: 100%;
    height: 1.85rem;
    display: block;
}
.research p{
    width: 95%;
    margin: auto;
    padding: 0 0.2rem;
    box-sizing: border-box;
    font-size: 0.28rem;
    line-height: 0.88rem;
}
.bottom_list{
    position: fixed;
    bottom: 0;
}
.bottom_list ul{
    font-size: 0.28rem;
    padding-bottom: 0.1rem;
}
.bottom_list ul li{
    float: left;
    padding: 0.1rem 0.15rem;
    border-radius: 0.3rem;
    background: deeppink;
    margin-left: 0.3rem
}
.bottom_list .input{
    width: 100%;
    height: 0.94rem;
    padding: 0.2rem;
    box-sizing: border-box;
    background: sandybrown;
}
</style>

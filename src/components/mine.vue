<template>
  <div id="mine">
      <p class="mine_top">
          您需要登录才能继续访问
      </p>
      <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" />
      <div class="cont">
          <input id="username" type="text" placeholder="请输入用户名" ref="username">
          <input id="password" type="password" placeholder="请输入密码" ref="password">
          <router-link to="/code">
              <p class="left">免费注册</p>
          </router-link>
          <p class="right">忘记密码</p>
      </div>
      <p class="login" @click="login">登录</p>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        login(){
            if(this.$refs.username.value.length==0&&this.$refs.password.value.length==0){
                alert("请输入用户名和密码")
            }else{
                this.Axios({
                url:"/api/Handler/AdminRegHandler?action=login",
                method:"post",
                data:{
                    userName:this.$refs.username.value,
                    password:this.$refs.password.value
                }
            }).then(res=>{
                if(res.data.success){
                    alert(res.data.success)
                    this.$router.push("loginsus")
                    localStorage.setItem("username",this.$refs.username.value)
                }
            })
            }
        }
    }
}
</script>

<style>
#mine{
    font-size: 16px;
}
#mine .mine_top{
    text-align: center;
    padding: 0.2rem 0.3rem;
    font-weight: 600;
    background: #EEEEEE;
    line-height: 0.6rem;
    color: #000;
}
#mine>img{
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin: 0.2rem auto;
}
#mine>.cont{
    padding: 0 0.3rem 1rem;
}
#mine>.cont>input{
    text-align: center;
    margin-top: 0.2rem;
    padding-left: 0.1rem;
    line-height: 0.6rem;
    border: none;
    width: 100%;
    font-size: 16px;
    border-bottom: #FF5000 1px solid;
    outline: none;
}
#mine>.cont p{
    color: #555555;
    margin-top: 0.25rem;
}
#mine>p.login{
    font-size: 18px;
    color: #fff;
    letter-spacing: 0.03rem;
    width: 80%;
    margin: 0 auto;
    line-height: 0.7rem;
    text-align: center;
    border-radius: 0.5rem;
    background: linear-gradient(to right, #FF8E00,#FF5200);
}
</style>

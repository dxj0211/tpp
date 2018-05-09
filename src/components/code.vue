<template>
  <div id="mine">
      <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" />
      <div class="cont">
          <input id="username" type="text" placeholder="请输入用户名" ref="username">
          <input id="password" type="" placeholder="请输入密码" ref="password">
      </div>
      <p class="add" @click="add">注册</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      if (this.$refs.username.value.length==0&&this.$refs.password.value.length == 0) {
        alert("请输入用户名和密码");
      } else {
        this.Axios({
          url: "/api/Handler/AdminRegHandler?action=add",
          method: "post",
          data: {
            userName: this.$refs.username.value,
            password: this.$refs.password.value
          }
        }).then(res => {
          alert("注册成功"),
          this.$router.push("mine")
        })
      }
    }
  }
};
</script>

<style>
#mine {
  font-size: 16px;
}
#mine > img {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin: 0.2rem auto;
}
#mine .mine_top {
  text-align: center;
  padding: 0.2rem 0.3rem;
  font-weight: 600;
  background: #eeeeee;
  line-height: 0.6rem;
  color: #000;
}
#mine > .cont {
  padding: 0 0.3rem 1rem;
}
#mine > .cont > input {
  text-align: center;
  margin-top: 0.2rem;
  padding-left: 0.1rem;
  line-height: 0.6rem;
  border: none;
  width: 100%;
  font-size: 16px;
  border-bottom: #ff5000 1px solid;
  outline: none;
}
#mine > p.add {
  font-size: 18px;
  color: #fff;
  letter-spacing: 0.03rem;
  width: 80%;
  margin: 0 auto;
  line-height: 0.7rem;
  text-align: center;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #ff8e00, #ff5200);
}
</style>

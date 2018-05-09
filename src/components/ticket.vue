<template>
  <div>
         <backButton></backButton>
         <div class="none">
              这里还是空的哦~快去享受生活吧
      <router-link style="color:#D7CBC8" to="/" target="li">
          <p>淘票票</p>
      </router-link> 
         </div>
     
  
  </div>
</template>

<script>
import backButton from "./back.vue"
export default {
    components:{backButton}
}
</script>

<style>
div.none{
    text-align: center;
    line-height: 150px;
    color: #D7CBC8;
    font-size: 16px;
}
div.none p{
    margin: 20% auto;
    width: 80%;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background: crimson;
    border-radius: 15px;
}
</style>

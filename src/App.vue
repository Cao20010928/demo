<template>
  <img src="./assets/night.jpeg" class="backGround">
  <div class="loginBox">
    <h2 style="text-align: center; color: #162938">login</h2>
    <div style="display: flex; justify-content: center; align-items: center">
      <p style="margin-right: 10px; color: #000000">Username</p>
      <input type="text" v-model="login_username" />
    </div>

    <div style="display: flex; justify-content: center; align-items: center">
      <p style="margin-right: 10px; color: #000000">Password</p>
      <input type="password" v-model="login_password" />
    </div>
    <button type="submit" class="login" @click="login()">login</button>
<!--    <router-link to="/album">login</router-link>-->
<!--    <router-view :key="$route.fullPath" />-->
<!--    <router-view></router-view>-->
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {

  },
  activated() {
    this.login()
  },

  methods: {
    login(){
      this.$router.push({ path: '/album' })
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
  body{
    margin: 0;
    /*background-attachment: fixed;*/
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  padding: 0;
  color: #2c3e50;
  margin: 0;
  /*margin-top: 60px;*/
}
.backGround{
  position: absolute;
  margin: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /*background-size:100% 100%;*/
}
span{
  position: absolute;
  background: white;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: animate 1s linear infinite;
}
@keyframes animate {
  0%
  {
    width: 0px;
    height: 0px;
  }
  100%
  {
    width: 50px;
    height: 50px;
  }
}
  .loginBox{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 300px;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto auto;
    /*border: 1px solid #e0dcdc;*/
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0,0,0, 0.5);
    backdrop-filter: blur(4px);
  }
  .loginBox div{
    /*border-bottom: 2px solid #162938;*/
  }
  .loginBox input{
    width: 100%;
    height: 50%;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 2px solid #162938;
  }
  .login{
    width: 70%;
    margin-top: 20px;
    height: 45px;
    background: linear-gradient(90deg, #0162c8, #55e7fc);
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: white;
    font-weight: 500;
    transition: .5s;
  }
  .login:hover{
    background: linear-gradient(90deg, #755bea, #ff72c0);
  }

</style>

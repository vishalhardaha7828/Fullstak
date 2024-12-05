<template>
    <img class="logo" src="../assets/logo.png"/>
    <h1>LogIn</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email">
      <input type="password" v-model="password" placeholder="Enter Password">
      <button v-on:click="Login">LogIn</button>
      <p>
        <router-link to="/sign-up">SignUp</router-link>
      </p>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'LogIn',
    data()
    {
      return {
        email:'',
        password:''
      }
    },
    methods:{
      async Login()
      {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        
        if(result.status==200 && result.data.length>0)

       {
        localStorage.setItem("users-info",JSON.stringify(result.data[0]))
        this.$router.push({name:'HomePage'})
      }
      console.warn(result)
      }
    },
    mounted()
      {
        let users= localStorage.getItem('users-info');
        if(users)
        {
          this.$router.push({name:'HomePage'})
        }
      }
  };

</script>
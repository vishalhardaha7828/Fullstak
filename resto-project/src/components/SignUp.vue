<template>
    <img class="logo" src="../assets/logo.png"/>
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name">
      <input type="text" v-model="email" placeholder="Enter Email">
      <input type="password" v-model="password" placeholder="Enter Password">
      <button v-on:click="SignUp">Sign Up</button>
      <p>
        <router-link to="/LogIn">LogIn</router-link>
      </p>
    </div>

  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'SignUp',
    data()
    {
      return{
        name:'',
        email:'',
        password:''
      }
    },
    methods:{
      async SignUp()
      {
       let result =await axios.post("http://localhost:3000/users",{
        email:this.email,
        name:this.name,
        password:this.password
       });
       console.warn(result);
       if(result.status==201)
       {
        localStorage.setItem("users-info",JSON.stringify(result.data))
        this.$router.push({name:'HomePage'})
      }
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
  }

  </script>

  <style>



</style>
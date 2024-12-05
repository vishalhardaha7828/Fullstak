<template>
  <HeaderPage/>
    <h1>Hello {{name}}, Welcome on Add Restaurant Page</h1>
    <form class="AddRes">
      <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
      <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
      <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
      <button type="button" v-on:click="AddRestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios'
export default {
  name: 'AddRes',
  components:{
    HeaderPage
  },
  data()
  {
    return {
      name:'',
      restaurant :{
        name:'',
        address:'',
        contact:''
      }
      
    }
  },

  methods:{
    async AddRestaurant()
    {
      console.warn(this.restaurant)
      const result = await axios.post("http://localhost:3000/restaurant",{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
      });
      if(result.status==201)
      {
        this.$router.push({name:'HomePage'})
      }
      console.warn("result",result);      
    }
  },

 mounted ()
      {
        let users= localStorage.getItem('users-info');
        this.name= JSON.parse(users).name;
        if(!users)
        {
          this.$router.push({name:'SignUp'})
        }
      }
}
</script>
<template>
  <HeaderPage />
  <h1>Hello {{ name }}, Welcome on Home Page</h1>
  <table border="1px">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/UpdateRes/' + item.id">Update</router-link>
        <button v-on:click="deleteRestaurant(item.id)">Delete</button>

      </td>
    </tr>
  </table>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurant: [],
    }
  },

  components: {
    HeaderPage
  },

  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      console.warn(result)
      if (result.status == 200) {
        this.loadData();
      }
    },

    async loadData() {
      let users = localStorage.getItem('users-info');
      this.name = JSON.parse(users).name;
      if (!users) {
        this.$router.push({ name: 'SignUp' })
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      console.warn(result);
      this.restaurant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  }
}

</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style>
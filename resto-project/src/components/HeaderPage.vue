<template>
<div class="nav">
    <router-link to='/'>Home</router-link>
    <router-link to='/AddRes'>Add Restaurant</router-link>
    <a v-on:click="Logout" href ='#'>Logout</a>

</div>
</template>

<script>
export default {
    name:'HeaderPage',
    methods:{
        Logout()
        {
            localStorage.clear();
            this.$router.push({name:'LogIn'})
        }
    }
}
</script>
<style>
.nav{
    background-color: rgb(78, 68, 68);
    overflow: hidden;
}
.nav a {
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-left: 5px;
}
.nav a:hover{
    background: white;
    color: black;
}
</style>
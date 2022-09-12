<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/Add">Add Restaurant</router-link>
        
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>


export default ({
    name:'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
})
</script>
<style>
.nav{
    background-color: black;
    overflow: hidden;
}
.nav a{
    float: left;
    color: white;
    padding: 16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;

}
.nav a:hover{
    background: white;
    color:black ;
}
</style>
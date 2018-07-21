<template>
  <div class="about">
    <h1>This is an about page</h1>
<button v-on:click="aa">88888</button>
  </div>
</template>
<script>
// @ is an alias to /src
// import data from '../util/mock.js'

export default {
  name: 'about',
  components: {
    
  },
  data(){
    return{
    }
  },
  methods:{
    aa(){
      this.$router.push('/test')
      this.$http.post('http://192.168.1.8:8080/')
      .then(response => {
          console.log(response.data)
          // this.bb = response.data;
        });
    }
  }
}
</script>
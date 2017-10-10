<template>
    <div id="app">

    </div>
</template>

<script>
  export default {

    data() {
      return {
        galleries: []
      }
    },

    methods: {
      fetchImages() {
        this.$http.get('/static/images.json')
          .then((r) => {
            console.log(r)
          }, (r) => {
            console.log('Could not fetch images.json')
          })
      }
    },

    mounted() {
      this.fetchImages()
    }
  }
</script>

<style>
    .wrapper {
        display: flex;
        flex-flow: row wrap;
        background-color: #fff;
        color: #444;
    }

    .box {
        margin: 5px;
        background-color: #444;
        color: #fff;
        border-radius: 5px;
        padding: 20px;
        font-size: 150%;
    }
</style>

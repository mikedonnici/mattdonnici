<template>
    <div class="overlay" style="" v-if="show" v-on:click="handleHide()">
        <div class="overlay-content">
            <div v-if="imageUrl">
                <h3><slot>Working...</slot></h3>
            </div>
            <div v-else>
                <img :src="img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {

      // how long to show the overlay for, default is infinite
      duration: {
        type: Number,
        default: -1
      },

      // show the 'indeterminate' progress bar, default true
      indeterminate: {
        type: Boolean,
        default: true
      },

      img: {
        type: String,
      },

      handleHide: {
        type: Function
      }
    },

    data() {
      return {
        show: false,
        imageUrl: null,
      }
    },

    computed: {
      imageLoaded() {
        let i = new Image()
        i.src= this.img // requested img passed in as props
        console.log(i.src)
        i.onload = () => {
          return true
        }
      }
    },

    mounted() {
      // switch it on...
      this.show = true

      // show forever...
      if (this.duration < 0) {
        return
      }

      // ... or switch off after the specified duration
      const d = this.duration * 1000 // milliseconds
      setTimeout(() => {
        this.show = false
      }, d)
    }
  }
</script>

<style scoped>
    .overlay {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0, 0.5);
    }
    .overlay-content {
        width: 50vw;
        text-align: center;
        color: #ddd;
    }
</style>
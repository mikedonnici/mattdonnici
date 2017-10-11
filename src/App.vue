<template>
    <div id="app">
        <app-overlay v-if="overlay" v-bind:img="overlayImage" :handleHide="hide"></app-overlay>
        <div class="gallery-container" v-for="gallery in galleries">
            <div class="gallery-title"><h1>{{ gallery.name }}</h1></div>
            <div class="gallery">
                <div class="gallery-item" v-for="(image, index) in gallery.images" key="index">
                    <img :src="image.src" alt="" v-on:click="show(image.url3)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import cloudinary from 'cloudinary-core'
  import Overlay from './Overlay.vue'
  import Galleries from './galleries'

  export default {
    components: {
      appOverlay: Overlay
    },

    data() {
      return {
        overlay: false,
        overlayImage: null,
        galleries: Galleries,
        cloudinary: null
      }
    },

    methods: {

      show(imageUrl) {
        this.overlayImage = imageUrl
        this.overlay = true
      },

      hide() {
        this.overlayImage = ''
        this.overlay = false
      },

      // Loads the higher res images at .url2
      loadImages() {
        console.log("Loading better images....")

        // Loop through all of the images and replace with the hi res version once they are downloaded
        this.galleries.forEach((gallery, gi) => {
          gallery.images.forEach((image, ii) => {

            // Vue cannot detect certain changes to existing arrays and objects.
            // See https://vuejs.org/v2/guide/list.html#Caveats
            // So create a new imageObject and use splice() so that Vue will react
            const newImageObj = {
              url1: image.url1,
              url2: image.url2,
              url3: image.url3,
              src: image.url2 // updated src
            }
            // Fetch the new image, and when don update the image object
            let newImage = new Image()
            newImage.src = image.url2 // url2 is better resolution
            newImage.onload = () => {
              this.galleries[gi].images.splice(ii, 1, newImageObj)
            }
          })
        })
        console.log(this.galleries)
      },

      // generate the image urls using cloudinary api
      createUrl(tag, transformation) {
        this.cloudinary = cloudinary.Cloudinary.new({
          cloud_name: 'mesa'
        })
        // this generates a complete image tag
        //return this.cloudinary.imageTag(tag).transformation().crop('scale').width(400).toHtml()
        // this generates the image url only
        return this.cloudinary.url(tag, transformation)
      }
    },

    created() {
      console.log('created setting up the image urls...')
      this.galleries.forEach((gallery) => {
        gallery.images.forEach((image) => {
          image.url1 = this.createUrl(image.tag, {crop: "scale", quality: 20, width: 300, effect: "blackwhite"}) // super lo res
          image.url2 = this.createUrl(image.tag, {crop: "scale", quality: 80, width: 300}) // colour, higher res
          image.url3 = this.createUrl(image.tag, {crop: "scale", quality: 90, width: 800}) // full size for pop up
          // The initial src from the image will be url1
          image.src = image.url1
        })
      })
    },

    mounted() {
      console.log("mounted loading higher quality images...")
      this.loadImages()
      console.log("galleries:")
      console.log(this.galleries)

    }
  }
</script>

<style scoped>
    #app {

    }
    .gallery-container {
        background-color: #232323;
        padding: 20px;
    }
    .gallery-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        /*border: solid 3px whitesmoke;*/
        /*border-radius: 5px;*/
        color: whitesmoke;
    }

    .gallery {
        column-gap: 1em;
    }

    @media only screen and (min-width: 500px) {
        .gallery {
            column-count: 2;
        }
    }

    @media only screen and (min-width: 700px) {
        .gallery {
            column-count: 3;
        }
    }

    @media only screen and (min-width: 900px) {
        .gallery {
            column-count: 4;
        }
    }

    @media only screen and (min-width: 1100px) {
        .gallery {
            column-count: 5;
        }
    }

    .gallery-item {
        display: inline-block;
        margin-bottom: 1em;
    }

    .gallery-item img {
        width: 100%;
        transition: .8s opacity;
    }

    .gallery-item:hover img {
        opacity: 0.4;
    }

    .gallery-item:hover img:hover {
        opacity: 1;
    }


</style>

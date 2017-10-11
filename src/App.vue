<template>
    <div id="app">
        <app-overlay v-if="overlay">Fetching galleries...</app-overlay>
        <div class="gallery-container" v-for="gallery in galleries">
            <div class="gallery-title"><h1>{{ gallery.name }}</h1></div>
            <div class="gallery">
                <div class="gallery-item" v-for="(image, index) in gallery.images" :key="index">
                    <img :src="image.src" alt="">
                </div>


            </div>
        </div>
    </div>
</template>

<script>
  import Overlay from './Overlay.vue'
  import Galleries from './galleries'

  export default {
    components: {
      appOverlay: Overlay
    },

    data() {
      return {
        overlay: false,
        galleries: Galleries,
        imageBlob: null
      }
    },

    methods: {
      fetchImages() {

        // Loop through all of the images and replace with the hi res version once they are downloaded
        this.galleries.forEach((gallery) => {
          console.log(gallery.name)
          gallery.images.forEach((image) => {
            let img = image
            let newImage = new Image()
            newImage.onload = () => {
              img.src = newImage.src
            }
            newImage.src = image.hr
          })
        })
      }
    },

    mounted() {
      this.fetchImages()
    }
  }
</script>

<style scoped>
    .gallery-container {
        background-color: #444;
    }

    .gallery-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        border: solid 3px whitesmoke;
        border-radius: 5px;
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
        border: solid 2px hotpink;
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

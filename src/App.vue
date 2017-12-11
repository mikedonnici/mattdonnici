<template>
    <div id="app">
        <header>
            <h1>Matt Donnici</h1>
            <h2>digital artist</h2>
            <ul>
                <li>email: <a href="mailto:matthew@mesa.net.au">matthew@mesa.net.au</a></li>
                <li>skype: matthew.donnici</li>
                <li><a href="static/matt_donnici_folio.pdf" target="_blank">Portfolio</a> (pdf)</li>
            </ul>
        </header>
        <main>
            <app-overlay v-if="overlay" v-bind:img="overlayImage" :handleHide="hide">
                <img src="static/loading.gif">
            </app-overlay>
            <div class="gallery-container" v-for="gallery in galleries">
                <div class="gallery-title">{{ gallery.name }}</div>
                <div class="gallery">
                    <div class="gallery-item" v-for="(image, index) in gallery.images" key="index">
                        <transition-group name="fade">
                            <img :src="image.src" alt="" v-on:click="show(image.url3)" key="index">
                        </transition-group>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <p>&copy; matt donnici</p>
            <p>site by <a href="https://mikedonnici.github.io" target="_blank">mike</a></p>
        </footer>
    </div>
</template>

<script>
    import cloudinary from 'cloudinary-core'
    import { EventBus } from './main'
    import Overlay from './Overlay.vue'

    export default {

        components: {
            appOverlay: Overlay
        },

        data() {
            return {
                overlay: false,
                overlayImage: null,
                galleries: null,
                cloudinary: null,

                // testGalleries: [
                //     {"name": "anatomy", "count": 13, images[
                //             {tag: "", url1: "", url2: "", url3: "", src: ""},
                //         ]},
                //     {"name": "characters", "count": 19},
                //     {"name": "landscape", "count": 10},
                //     {"name": "3D", "count": 15}
                // ],
            }
        },


        methods: {

            fetchGalleries() {

                let galleries = []

                fetch('static/galleries.json')
                    .then( r => r.json())
                    .then((data) => {

                        for (let i = 0; i < data.length; i++) {

                            galleries[i] = data[i]
                            galleries[i].images = []
                            for (let j = 0; j < galleries[i].total; j++) {
                                const tag = `mattdonnici/${galleries[i].name}_${j+1}.jpg`
                                const url1 = this.createUrl(tag, {crop: "scale", quality: 20, width: 300, effect: "blackwhite"}) // super lo res
                                const url2 = this.createUrl(tag, {crop: "scale", quality: 80, width: 300}) // colour, higher res
                                const url3 = this.createUrl(tag, {crop: "scale", quality: 90, width: 1200}) // full size for pop up
                                const img = {
                                    tag: tag,
                                    url1: url1,
                                    url2: url2,
                                    url3: url3,
                                    src: url1, // Initial src
                                }
                                galleries[i].images[j] = img
                            }

                            // shuffle the images
                            galleries[i].images = this.shuffle(galleries[i].images)

                        }

                        // shuffle the galleries
                        this.galleries = this.shuffle(galleries)

                        // yell out so proper image loading can start
                        EventBus.$emit("loadImages", true)



                    })
                    .catch((r) => {
                        console.log("Error configuring galleries using JSON data")
                        console.log("Response:", r)
                    })

            },

            // Loads the higher res images at .url2
            loadImages() {
                console.log("Loading better images....")
                // Loop through all of the images and replace with the hi res version once they are downloaded
                this.galleries.forEach((gallery, gi) => {
                    console.log(gi, gallery["name"])

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
                        // Fetch the new image, and when done update the image object
                        let newImage = new Image()
                        newImage.src = image.url2 // url2 is better resolution
                        newImage.onload = () => {
                            this.galleries[gi].images.splice(ii, 1, newImageObj)
                        }
                    })
                })
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
            },

            shuffle(array) {
                let currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            },

            show(imageUrl) {
                this.overlayImage = imageUrl
                this.overlay = true
            },

            hide() {
                this.overlayImage = ''
                this.overlay = false
            },

        },

        beforeMount() {
           this.fetchGalleries()
        },

        mounted() {
            // Listen for the call to start loading better images
            EventBus.$on("loadImages", () => {
                this.loadImages()
            })
        },
    }
</script>

<style>
    body {
        padding: 20px;
        background-color: #232323;
        font-family: 'Noto Sans', sans-serif;
        color: #e5e5e5;
    }

    header h1 {
        margin-bottom: 0;
        font-size: 5rem;
    }

    header h2 {
        font-size: 2rem;
        margin-top: 0;
    }

    footer {
        text-align: right;
        opacity: 0.8;
    }

    a {
        color: skyblue;
        text-decoration: none;
    }

    a:hover {
        color: lightblue;
        text-decoration: underline;
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

    .gallery-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100px;
        color: #e5e5e5;
        font-size: 2.6rem;
        font-style: italic;
    }

    .gallery-item {
        display: inline-block;
        margin-bottom: 1em;
    }

    .gallery-item img {
        width: 100%;
    }

    .gallery-item:hover img {
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>

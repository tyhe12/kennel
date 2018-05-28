<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <image-carousel width="640px" height="310px" :images="images"></image-carousel> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <modal-carousel :images="images" :modal-images="images" width="640px" height="320px"></modal-carousel> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import ImageCarousel from '@/components/ImageCarousel';
import ModalCarousel from '@/components/ModalCarousel';


export default {
  name: 'home',
  components: {
    // HelloWorld,
    ModalCarousel
  },
  data() {
    return {
      images: [
        {
            src: 'https://bulma.io/images/placeholders/640x320.png',
            // src: 'https://wikiki.github.io/images/merry-christmas.jpg',
            title: 'Picture 1',
            alt: 'picture 1',
            height: 640,
            width: 320
        }, {
            src: 'https://bulma.io/images/placeholders/640x320.png',
            title: 'Picture 2',
            alt: 'picture 2',
            height: 640,
            width: 320
        }
      ]
      };
  }
}
</script>

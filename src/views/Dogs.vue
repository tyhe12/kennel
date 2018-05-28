<template>
  <div class="dogs">
    <modal-carousel :images="images" :modal-images="images" width="640px" height="320px"></modal-carousel>
  </div>
</template>

<script>
import ModalCarousel from '@/components/ModalCarousel';

export default {
    components: {
        ModalCarousel
    },
    data() {
        return {
            images: [
                {
                    src: 'https://bulma.io/images/placeholders/640x320.png',
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


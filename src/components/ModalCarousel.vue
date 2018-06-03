<template>
    <section class="section modal-carousel-container">
        <div class="container modal-carousel">
            <image-carousel :images="images" @container-click="show" v-model="index"></image-carousel>
            <b-modal :active.sync="showModal">
                <image-carousel :images="images" v-model="index"></image-carousel>
            </b-modal>
        </div>
    </section>
</template>

<script>
import ImageCarousel from './ImageCarousel'

export default {
    name: 'modal-carousel',
    components: {
        ImageCarousel
    },
    props: {
        images: {
            type: [Array],
            required: true,
            default() {
                return [];
            }
        },
        modalImages: {
            type: [Array],
            required: true,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            showModal: false,
            // index: 0
        }
    },
    methods: {
        show() {
            this.showModal = true;
        }
    },
    watch: {
        images() {
            this.index = 0;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants.scss';

.modal-carousel-container {
    padding-top: 0;
}
</style>


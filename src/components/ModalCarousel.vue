<template>
    <div class="modal-carousel-container">
        <div class="modal-carousel">
            <image-carousel :width="width" :height="height" :images="images" @container-click="show" v-model="index"></image-carousel>
            <b-modal :active.sync="showModal">
                <image-carousel :images="images" v-model="index"></image-carousel>
            </b-modal>
        </div>
    </div>
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
        },
        width: {
            type: [String, Number],
            default: '100%'
        },
        height: {
            type: [String, Number],
            default: '100%'
        },
    },
    data() {
        return {
            showModal: false,
            index: 0
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
.modal-carousel-container {
    display: flex;
    justify-content: center;
}
</style>


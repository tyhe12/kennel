<template>
    <div class="modal-carousel">
        <image-carousel :width="width" :height="height" :images="images" @container-click="show" v-model="index"></image-carousel>
        <b-modal :active.sync="showModal">
            <image-carousel :images="images" v-model="index"></image-carousel>
        </b-modal>
    </div>
</template>

<script>
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import ImageCarousel from './ImageCarousel'

export default {
    name: 'modal-carousel',
    components: {
        'b-modal': Buefy.Modal,
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
            console.log('show modal');
            this.showModal = true;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>


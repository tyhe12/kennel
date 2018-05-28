<template>
    <div :style="[dimensions]" class='carousel'>
        <div class='carousel-container' @click="onContainerClick">
            <transition name="fade" mode="out-in">
                <div class='carousel-item' :key="index" v-if="activeItem(index)" v-for="(image, index) in images">
                    <img class="background" :src="image.src" :alt="image.alt" :width="image.height" :height="image.width" />
                    <div class="title">{{image.title}}</div>
                </div>
            </transition>
        </div>
        <div class="carousel-navigation">
            <div class="carousel-nav-left" @click="nextImage">
                <b-icon icon="chevron-left"></b-icon>
            </div>
            <div class="carousel-nav-right" @click="previousImage">
                <b-icon icon="chevron-right"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

export default {
    name: 'image-carousel',
    model: {
        prop: 'index',
        event: 'change'
    },
    props: {
        width: {
            type: [String, Number],
            default: '100%'
        },
        height: {
            type: [String, Number],
            default: '100%'
        },
        images: {
            type: Array,
            required: true,
            default() {
                return [];
            }
        },
        index: {
            type: Number,
            default: 0
        }
    },
    components: {
        'b-icon': Buefy.Icon
    },
    data() {
        const currentImageIndex = this.index;
        return {
            currentImageIndex
        };
    },
    computed: {
        dimensions() {
            const height = this.height;
            const width = this.width;
            return {
                height,
                width
            };
        },
        currentImage() {
            return this.images[this.currentImageIndex];
        }
    },
    watch: {
        index(value) {
            this.currentImageIndex = value;
        }
    },
    methods: {
        nextImage() {
            this.showStuff = !this.showStuff;
            if (this.currentImageIndex >= this.images.length - 1) {
                this.currentImageIndex = 0;
                this.$emit('change', this.currentImageIndex);
                return;
            }
            this.currentImageIndex += 1;
            this.$emit('change', this.currentImageIndex);
        },
        previousImage() {
            this.showStuff = !this.showStuff;
            if (this.currentImageIndex <= 0) {
                this.currentImageIndex = this.images.length - 1;
                this.$emit('change', this.currentImageIndex);
                return;
            }
            this.currentImageIndex -= 1;
            this.$emit('change', this.currentImageIndex);
        },
        onContainerClick() {
            this.$emit('container-click');
        },
        activeItem(index) {
            return index === this.currentImageIndex;
        }
    }
}
</script>

<style lang="scss" scoped>
$white: hsl(0, 0%, 100%);
$text: hsl(0, 0%, 29%);
$size-7: 0.75rem;
$carousel-nav-background: rgba($white, 0.7) !default;
$carousel-nav-color: $text !default;
$carousel-title-background: rgba($white, 0.6) !default;
$carousel-title-size: $size-7 !default;
$carousel-border: none;

.carousel {
    position: relative;
    overflow: hidden;

    .carousel-container{
        border: $carousel-border;

        .carousel-item{
            position: relative;
            flex: 1 0 100%;
            display: block;

            .background {
                display: block;
                object-fit: cover;
                object-position: center center;
                height: 100%;
                width: 100%;
                cursor: pointer;
            }
            .title {
                position: absolute;
                top: auto;
                bottom: 0;
                text-align: center;
                width: 100%;
                padding: 1.5em;
                margin: 0;
                background: $carousel-title-background;
                font-size: $carousel-title-size;
            }
        }
    }

    .carousel-navigation {
        position: absolute;
        display: flex;
        width: 100%;
        pointer-events: none;
        top: 50%;
        transform: perspective(1px) translateY(-50%);
        bottom: auto;
        left: auto;
        right: auto;
        align-items: center;
        justify-content: space-between;

        .carousel-nav-left,
        .carousel-nav-right {
            padding: 1em;
            pointer-events: auto;
            height: 2.2em;
            width: 2em;
            background: $carousel-nav-background;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $carousel-nav-color;
            position: absolute;
            left: 0;
            cursor: pointer;
        }
        .carousel-nav-right{
            left: auto;
            right: 0;
        }
    }
}

.fade-leave-active, .fade-enter-active {
    transition: opacity .5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>


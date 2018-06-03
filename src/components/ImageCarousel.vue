<template>
    <section class='section carousel'>
        <div class='carousel-container' @click="onContainerClick">
            <transition name="fade" mode="out-in">
                <div class='carousel-item' :key="index" v-if="activeItem(index)" v-for="(image, index) in images">
                    <figure class="image is-4by3">
                        <img class="background" :src="image.src" :alt="image.alt" />
                    </figure>
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
    </section>
</template>

<script>
export default {
    name: 'image-carousel',
    model: {
        prop: 'index',
        event: 'change'
    },
    props: {
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
@import '../assets/constants.scss';

$carousel-nav-background: rgba($white, 0.7) !default;
$carousel-nav-color: $text !default;
$carousel-title-background: rgba($white, 0.6) !default;
$carousel-title-size: $size-7 !default;
$carousel-border: none;

.carousel {
    position: relative;
    overflow: hidden;
    padding: 0;

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
  opacity: 0.2;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>


<template>
    <div class="dogs">
        <section class="section">
            <div class="container">
                <h1 class="title">
                    Our {{breed.name}}
                </h1>
            </div>
		</section>

        <section class="section is-content">
            <div class="container">
                <modal-carousel :images="breed.images" :modal-images="breed.images" width="640px" height="480px"></modal-carousel>
            </div>
        </section>
        
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
            breeds: {
                shiba: {
                    name: 'Shiba',
                    images: [
                        {
                            src: 'https://bulma.io/images/placeholders/640x480.png',
                            title: 'Shiba 1',
                            alt: 'picture 1',
                            height: 640,
                            width: 320
                        }, {
                            src: 'https://bulma.io/images/placeholders/640x480.png',
                            title: 'Shiba 2',
                            alt: 'picture 2',
                            height: 640,
                            width: 320
                        }
                    ]
                },
                pom: {
                    name: 'Pomeranian',
                    images: [
                        {
                            src: 'https://bulma.io/images/placeholders/640x480.png',
                            title: 'Pom 1',
                            alt: 'picture 1',
                            height: 640,
                            width: 320
                        }, {
                            src: 'https://bulma.io/images/placeholders/640x480.png',
                            title: 'Pom 2',
                            alt: 'picture 2',
                            height: 640,
                            width: 320
                        }
                    ]
                },
                malamute: {
                    name: 'Alaskan Malamute',
                    images: [
                        {
                            src: 'https://bulma.io/images/placeholders/640x480.png',
                            title: 'Alaskan Halamute 1',
                            alt: 'picture 1',
                            height: 640,
                            width: 320
                        }, {
                            src: 'https://bulma.io/images/placeholders/640x480.png',
                            title: 'Alaskan Halamute 2',
                            alt: 'picture 2',
                            height: 640,
                            width: 320
                        }
                    ]
                }
            }
        };
    },
    computed: {
        breedName() {
            return this.$route.params.breed;
        },
        breed() {
            return this.breeds[this.breedName];
        }
    }
}
</script>

<style lang="scss" scoped>
.section.is-content {
    padding-top: 0;
}
</style>



<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="src" :alt="alt">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-card',
    props: {
        src: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
}
</style>


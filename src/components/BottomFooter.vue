<template>
    <footer class="footer">
        <div class="container is-fluid columns">
            <div class="connections column is-one-third">
                <h3 class="title is-4">Stay Connected</h3>
                <div class="icons">
                    <b-icon icon="facebook-box" size="is-large"></b-icon>
                    <b-icon icon="twitter-box" size="is-large"></b-icon>
                    <b-icon icon="instagram" size="is-large"></b-icon>
                    <b-icon icon="email" size="is-large"></b-icon>
                </div>
            </div>
            <div class="column is-two-thirds sitemap">
                <site-map></site-map>
            </div>
        </div>

        <div class="container">

        </div>
    </footer>
</template>

<script>
import SiteMap from './SiteMap';

export default {
    components: {
        SiteMap
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants.scss';

footer {
    background-color: $kennel-background-color;
    height: 100%;
    margin-top: $size-1;
    padding-bottom: $size-1;
    position: relative;

    .icons {
        display: flex;
        justify-content: space-around;
    }
}
</style>

<template>
    <div class="contact-info">
        <div class="contact-item">
            <div class="contact-item-title">
                <b-icon icon="crosshairs-gps" size="is-small"></b-icon>
                Address
            </div>
            <a href="https://www.google.com/maps/place/27474+Co+Hwy+F,+New+Auburn,+WI+54757/@45.2415377,-91.5030967,17z" class="is-link" target="_blank">
                27474 County Highway F, New Auburn, WI 54757 
            </a>
        </div>

        <div class="contact-item">
            <div class="contact-item-title">
                <b-icon icon="phone" size="is-small"></b-icon>
                Phone
            </div>
            <a href="tel:715-237-2035">
                715-237-2035
            </a>
            <a href="tel:715-579-5546">
                715-579-5546 
            </a>
        </div>
        
        <div class="contact-item">
            <div class="contact-item-title">
                <b-icon icon="email" size="is-small"></b-icon>
                E-Mail
            </div>
            <a href = "mailto: jakkennel2002@yahoo.com">
                jakkennel2002@yahoo.com 
            </a> 
        </div> 
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/constants.scss";

.contact-item:not(:last-child) {
    padding-bottom: $size-3;
    margin-bottom: $size-3;
    border-bottom: 1px solid $kennel-background-color;
}
</style>


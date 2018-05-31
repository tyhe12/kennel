<template>
    <section class="section">
        <b-field horizontal label="Name">
            <b-input expanded value=""
                placeholder="Enter Your Name"></b-input>
        </b-field>

        <b-field horizontal label="Email">
            <b-input expanded type="email"
                maxlength="30"
                placeholder="Enter Your Email">
            </b-input>
        </b-field>

        <b-field horizontal label="Message">
            <b-input expanded type="textarea"></b-input>
        </b-field>

        <b-field horizontal>
            <p class="control">
                <button class="button">
                  Send message
                </button>
            </p>
        </b-field>
    </section>
    
</template>

<script>
export default {
    name: 'contact-form'
}
</script>

<style lang="scss" scoped>
@import '../assets/constants.scss';

.button {
    background-color: $kennel-background-color;
    color: white;
}
</style>

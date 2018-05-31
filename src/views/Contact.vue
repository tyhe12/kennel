<template>
    <div class="contact columns">
        <section class="section column is-three-quarters">
            <h1 class="title">Email Us</h1>
            <p>Please feel free to contact us with any questions, comments, or concerns. </p>
            <contact-form></contact-form>
        </section>

        <section class="section column is-one-quarter">
            <h1 class="title">
                Contact
            </h1>
            <contact-info class="contact-info-break"></contact-info>
        </section>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default {
    components: {
        ContactForm,
        ContactInfo
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/constants.scss";

.section.is-content {
    padding-top: 0;
}

.contact-info-break {
    padding-top: $size-1;
}
</style>

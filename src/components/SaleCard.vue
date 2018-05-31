<template>
    <image-card :src="image" :alt="breed">
        <div class="columns">
            <div class="column is-half">
                <p>Breed: {{breed}}</p>
                <p>Birthday: {{ dob | formatDate }}</p>
                <p>Price: {{price | formatPrice}}</p>
            </div>
            <div class="column is-half">
                <p>Gender: {{gender}}</p>
                <p>Available on: {{ available | formatDate }}</p>
                <p>
                    Color: 
                    <b-taglist class="taglist">
                        <b-tag v-for="(color, index) in colors" :key="index">{{color}}</b-tag>
                    </b-taglist>
                </p>
            </div>
        </div>
        <slot></slot>
    </image-card>
</template>

<script>
import moment from 'moment';
import ImageCard from './ImageCard';

export default {
    props: {
        breed: {
            type: String,
            default: '',
            required: true
        },
        gender: {
            type: String,
            default: '',
            required: true
        },
        dob: {
            type: [Date, String],
            required: true,
            default: ''
        },
        available: {
            type: [Date, String],
            required: true,
            default: ''
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        colors: {
            type: Array,
            required: true,
            default: []
        },
        image: {
            type: String,
            required: true,
            default: ''
        }
    },
    components: {
        ImageCard
    },
    filters: {
        formatDate(date) {
            if (typeof date !== 'string') {
                return moment(date).format('MMM Do YY');
            }
            return date;
        },
        formatPrice(price) {
            return '$' + price;
        }
    }
}
</script>

<style lang="scss" scoped>
.taglist {
    display: inline-block;
}
</style>


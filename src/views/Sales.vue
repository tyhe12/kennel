<template>
    <section class="section available-dogs">
        <section class="section">
			<div class="container">
				<h1 class="title">
					Available {{type | capitalize}}
				</h1>
			</div>
		</section>
        <div class="container is-fluid columns is-multiline">
            <div class="column is-half" v-for="(dog, index) in dogs" :key="index">
                <sale-card class="tile-card"
                :breed="dog.breed"
                :gender="dog.gender"
                :dob="dog.dob"
                :available="dog.available"
                :price="dog.price"
                :colors="dog.color"
                :image="dog.image"></sale-card>
            </div>
        </div>
    </section>
</template>

<script>
import SaleCard from '../components/SaleCard';

export default {
    name: 'sales',
    components: {
        SaleCard
    },
    data() {
        return {
            puppies: [
                {
                    breed: 'Shiba',
                    name: 'shiba1',
                    gender: 'Male',
                    dob: new Date(),
                    available: new Date(),
                    price: 1000,
                    color: ['Cream'],
                    image: 'https://bulma.io/images/placeholders/640x480.png'
                }, {
                    breed: 'Shiba',
                    name: 'shiba2',
                    gender: 'Female',
                    dob: new Date(),
                    available: new Date(),
                    price: 1000,
                    color: ['Red'],
                    image: 'https://bulma.io/images/placeholders/640x480.png'
                }, {
                    breed: 'Shiba',
                    name: 'shiba3',
                    gender: 'Female',
                    dob: new Date(),
                    available: 'Now',
                    price: 1000,
                    color: ['Red'],
                    image: 'https://bulma.io/images/placeholders/640x480.png'
                }
            ],
            adults: [
                {
                    breed: 'Pom',
                    name: 'pom',
                    gender: 'Female',
                    dob: new Date(),
                    available: 'Now',
                    price: 1000,
                    color: ['Red'],
                    image: 'https://bulma.io/images/placeholders/640x480.png'
                }, {
                    breed: 'Shiba',
                    name: 'shiba',
                    gender: 'Male',
                    dob: new Date(),
                    available: 'Now',
                    price: 1000,
                    color: ['Red'],
                    image: 'https://bulma.io/images/placeholders/640x480.png'
                }
            ]
        }
    },
    computed: {
        type() {
            return this.$route.params.type;
        },
        dogs() {
            return this[this.type];
        }
    }
}
</script>

<style lang="scss" scoped>
.available-dogs {
    padding-top: 0;
}

.tile-card {
    margin: 0 1rem;
}
</style>


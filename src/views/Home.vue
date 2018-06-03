<template>
	<div class="home">
		<section class="section">
			<div class="container">
				<h1 class="title">
					J.A.K Kennel
				</h1>
				<h2 class="subtitle">
					Shiba Inu Puppies for Sale & Breeder in Wisconsin
				</h2>
			</div>
		</section>

		<section class="section is-content">
			<div class="container">
				<div class="tile is-ancestor">
					<div class="tile is-4 home-page-card">
					<!-- Add content or other tiles -->
						<image-card src="https://bulma.io/images/placeholders/640x480.png">
							Our Shibas
						</image-card>
					</div>
					
					<div class="tile is-4 home-page-card">
					<!-- Add content or other tiles -->
						<image-card src="https://bulma.io/images/placeholders/640x480.png">
							Our Poms
						</image-card>
					</div>

					<div class="tile is-4 home-page-card">
					<!-- Add content or other tiles -->
						<image-card src="https://bulma.io/images/placeholders/640x480.png">
							Our Alaskan Malamutes
						</image-card>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import ModalCarousel from '@/components/ModalCarousel';
import ImageCard from '@/components/ImageCard';


export default {
	name: 'home',
	components: {
		ImageCard,
		ModalCarousel
	},
	data() {
		return {
			images: [{
				src: 'https://bulma.io/images/placeholders/640x320.png',
				title: 'Picture 1',
				alt: 'picture 1',
				height: 640,
				width: 320
			}, {
				src: 'https://bulma.io/images/placeholders/640x320.png',
				title: 'Picture 2',
				alt: 'picture 2',
				height: 640,
				width: 320
			}]
		};
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/constants.scss';

.section.is-content {
	padding-top: 0;

	.home-page-card {
		padding: $size-6;
	}
}
</style>
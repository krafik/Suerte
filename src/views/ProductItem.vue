<template>
	<!-- <main class="page">
		<h2>product item page</h2>
		<div>{{ this.product }}</div>
		<div>{{ item }}</div>
		<div>{{ CATALOG_PRODUCT }}</div>

	</main> -->
	<main class="page">
		<h1 class="visually-hidden">{{ CATALOG_PRODUCT.name }}</h1>

		<section class="product-item">
			<div class="product-item__container">
				<ul class="breadcrumb">
					<li class="breadcrumb__item"><router-link to="/" class="breadcrumb__link"> HOME</router-link></li>
					<li class="breadcrumb__item"><router-link to="/catalog" class="breadcrumb__link"> CATALOG</router-link>
					</li>
					<li class="breadcrumb__item"><a href="#" class="breadcrumb__link">CURTAIN CURTAINS</a></li>
					<li class="breadcrumb__item breadcrumb__title">{{ CATALOG_PRODUCT.name }}</li>
				</ul>
			</div>
			<div class="product-item__container">
				<sProductItem :product_data="CATALOG_PRODUCT" @addToCart="addToCart" @addToWishList="addToWishList"/>
			</div>
		</section>

		<section class="section-more-product">
			<div class="section-more-product__container">
				<h2 class="section-more-product__title">Other colors</h2>
				<ul class="section-catalog__catalog page-catalog-list">
					<li class="page-catalog-list__item item-page-catalog-list">
						<div class="item-page-catalog-list__img-wrap">
							<img class="item-page-catalog-list__img" src="@/assets/img/17-nutmeg.jpg"
								srcset="img/17-nutmeg_2x.jpg 2x" alt="">
						</div>
						<a href="#">
							<h2 class="item-page-catalog-list__title">17 Nutmeg</h2>
						</a>
						<dl class="item-page-catalog-list__item-d-list">
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Collection:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Wool</dd>
							</div>
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Textile:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Сurtain</dd>
							</div>
						</dl>

					</li>
					<li class="page-catalog-list__item item-page-catalog-list">
						<div class="item-page-catalog-list__img-wrap">
							<img class="item-page-catalog-list__img" src="@/assets/img/14-Dune.jpg"
								srcset="img/14-Dune_2x.jpg 2x" alt="">
						</div>

						<a href="#">
							<h2 class="item-page-catalog-list__title">14 Dune</h2>
						</a>
						<dl class="item-page-catalog-list__item-d-list">
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Collection:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Wool</dd>
							</div>
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Textile:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Сurtain</dd>
							</div>
						</dl>

					</li>
					<li class="page-catalog-list__item item-page-catalog-list">

						<div class="item-page-catalog-list__img-wrap">
							<img class="item-page-catalog-list__img" src="@/assets/img/13-Hemp.jpg"
								srcset="img/13-Hemp_2x.jpg 2x" alt="">
						</div>

						<a href="#">
							<h2 class="item-page-catalog-list__title">13 Hemp</h2>
						</a>
						<dl class="item-page-catalog-list__item-d-list">
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Collection:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Wool</dd>
							</div>
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Textile:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Сurtain</dd>
							</div>
						</dl>


					</li>
					<li class="page-catalog-list__item item-page-catalog-list">

						<div class="item-page-catalog-list__img-wrap">
							<img class="item-page-catalog-list__img" src="@/assets/img/11-Pearl.jpg"
								srcset="img/11-Pearl_2x.jpg 2x" alt="">
						</div>

						<a href="#">
							<h2 class="item-page-catalog-list__title">11 Pearl</h2>
						</a>
						<dl class="item-page-catalog-list__item-d-list">
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Collection:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Wool</dd>
							</div>
							<div class="item-page-catalog-list__item-dl-wrap">
								<dt class="item-page-catalog-list__item-d-title">Textile:</dt>
								<dd class="item-page-catalog-list__item-d-descr">Сurtain</dd>
							</div>
						</dl>


					</li>

				</ul>
			</div>
		</section>
	</main>
</template>

<script>
import axios from 'axios'
import	sProductItem from '@/components/s-product-item.vue'
// import image from `~/assets/img/${CATALOG_PRODUCT.image}`
import { mapActions, mapGetters } from 'vuex';
export default {

	name: 'ProductView',
	props: ['id'],
	data() {
		return {
			product: {},
			// image
			image: null
		}
	},
	components: {
		sProductItem
	},
	computed: {
		...mapGetters(['CATALOG_PRODUCT', 'WISH_LIST']),
		// getImg() {
		// 	// console.log(new URL(`${CATALOG_PRODUCT.image}`, import.meta.url).href);
		// 	return new URL(`../assets/img/${this.CATALOG_PRODUCT.image}`, import.meta.url).href;
		// }

	},
	created() {
		// this.GET_CATALOG_PRODUCT(this.id)
		// 	.then((responce) => {
		// 		if (responce.data) {
		// 			// console.log('data is come');
		// 			// console.log(responce.data);
		// 		}
		// 	})
	},
	mounted() {

		// this.getProductItem();
		console.log(this.id);
		this.GET_CATALOG_PRODUCT(this.id)
			.then((responce) => {
				if (responce.data) {
					// console.log('data is come');
					// console.log(responce.data);
				}
			})
	},


	methods: {
		...mapActions([
			"GET_CATALOG_PRODUCT", "ADD_TO_CART", 'ADD_TO_WISH_LIST'
		]),
		addToCart(data) {
			console.log(data);
			this.ADD_TO_CART(data)
		},
		addToWishList(data) {
			console.log(data);
			this.ADD_TO_WISH_LIST(data)
		},

		// getProductItem() {
		// 	axios.get('http://localhost:3000/products/' + this.id)
		// 		.then((data) => {
		// 			console.log(data)
		// 			// return products
		// 			return this.product = data.data
		// 		})
		// }
	},

}
</script>

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
				<!-- <sProductItem :product_data="CATALOG_PRODUCT" @addToCart="addToCart" @addToWishList="addToWishList"/> -->
				<!-- <sProductItem :id="id"  @addToCart="addToCart" @addToWishList="addToWishList"/> -->
				<div class="product-item__inner">

					<div class="product-item__sliders-wrapper">

						<div class="main main-product-slider swiper">
							<div class="main-product-slider__slides-wrap swiper-wrapper">

								<div class="slider-product-item__slide swiper-slide">
									<!-- <p>{{ `${this.publicPath}img/${CATALOG_PRODUCT.image}` }}</p> -->
									<!-- <p>{{ new URL(`../assets/img/17-nutmeg.jpg`, import.meta.url).href }}</p> -->

									<picture>
										<!-- <img :src="`${this.publicPath}img/${CATALOG_PRODUCT.image}`" :alt="CATALOG_PRODUCT.name" width="696" height="696"> -->
										<!-- <img :src="getImage(CATALOG_PRODUCT.image)" :alt="CATALOG_PRODUCT.name" width="696" height="696"> -->
										<!-- <img v-if="this.imageD !== null" :src="`/img/${imageD}`" :alt="CATALOG_PRODUCT.name"
											width="696" height="696"> -->
										<img v-if="this.imageD !== null" :src="require('../assets/img/' + this.imageD)" :alt="CATALOG_PRODUCT.name"
											width="696" height="696">

									</picture>
								</div>

							</div>

						</div>
						<!-- thumb -->
						<div thumbsSlider="" class="thumb thumb-product-slider swiper">
							<div class="thumb-product-slider__wrapper swiper-wrapper" style="display: flex;">

								<div class="slider-product-item__slide  thumb-product-slider__thumb-img swiper-slide">
									<picture>
										<img src="@/assets/img/02-Sterling-thumb.jpg"
											alt="Тканина Sterling вид материалу ближче мініатюра">
									</picture>
								</div>
								<div class="slider-product-item__slide  thumb-product-slider__thumb-img swiper-slide">
									<picture>
										<img src="@/assets/img/02-Sterling-thumb-2.jpg"
											alt="Тканина Sterling вид материалу ближче мініатюра">
									</picture>
								</div>
							</div>
						</div>
					</div>

					<!-- info -->
					<div class="product-item__info">
						<h2 class="product-item__title " tabindex="0">{{ CATALOG_PRODUCT.name }}</h2>
						<span class="product-item__vendor-code">Article: {{ CATALOG_PRODUCT.article }}</span>
						<dl class="product-item__list-info list-info-item" tabindex="0">

							<div class="list-info-item__item">
								<dt class="list-info-item__item-title">Brand:</dt>
								<dd class="list-info-item__item-descr">Suerte collection«{{ CATALOG_PRODUCT.collection }}»
								</dd>
							</div>
							<div class="list-info-item__item">
								<dt class="list-info-item__item-title">Textile:</dt>
								<dd class="list-info-item__item-descr"> {{ CATALOG_PRODUCT.Textile }}</dd>
							</div>
							<div class="list-info-item__item">
								<dt class="list-info-item__item-title">Compound: </dt>
								<dd class="list-info-item__item-descr">{{ CATALOG_PRODUCT.compound }}</dd>
							</div>

							<div class="list-info-item__item">
								<dt class="list-info-item__item-title">Color:</dt>
								<dd class="list-info-item__item-descr">{{ CATALOG_PRODUCT.color }}</dd>
							</div>
							<div class="list-info-item__item">
								<dt class="list-info-item__item-title">Width:</dt>
								<dd class="list-info-item__item-descr"> {{ CATALOG_PRODUCT.width }}</dd>
							</div>
							<div class="list-info-item__item">
								<dt class="list-info-item__item-title">Weight: </dt>
								<dd class="list-info-item__item-descr">{{ CATALOG_PRODUCT.weight }} г/м2</dd>
							</div>

							<div class="list-info-item__item">
								<dt class="list-info-item__item-title">Fite standart:</dt>
								<dd class="list-info-item__item-descr">{{ CATALOG_PRODUCT.fireStandard }}</dd>
							</div>


						</dl>
						<div class="product-item__price">{{ CATALOG_PRODUCT.price }}<span>$/м<sup>2</sup></span></div>

						<div class="product-item__actions action-product-item">
							<button class="action-product-item__add-to-basket btn-white"
								@click="addToCart(CATALOG_PRODUCT)">Add to
								card</button>
							<button class="action-product-item__add-to-favorites __icon-Like"
								:class="inWishList ? 'inWished' : ''" @click="addToWishList(CATALOG_PRODUCT)"></button>
						</div>
						<!-- <p>{{ this.CATALOG_PRODUCT.id }}</p> -->
						<!-- <p>{{ this.WISH_LIST.length !== 0 ? this.WISH_LIST : null }}</p>
						<p>{{ this.isWished }}</p> -->
					</div>
				</div>


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
// import image from `~/assets/img/${CATALOG_PRODUCT.image}`
import { mapActions, mapGetters } from 'vuex';
// console.log(new URL(`${publicPath}img/17-nutmeg.jpg`, import.meta.url).href);
export default {

	name: 'ProductViewItem',
	props: ['id'],
	data() {
		return {
			product: {},
			load: false,
			// idItem: this.id
			// image
			imageD: null,
			inWishList: false
			// publicPath: process.env.BASE_URL
		}
	},
	components: {
		// sProductItem
	},
	computed: {
		...mapGetters(['CATALOG_PRODUCT', 'WISH_LIST']),
		// image() {
		// 	this.imageD = this.CATALOG_PRODUCT.image
		// 	return require('../assets/img/' + this.CATALOG_PRODUCT.image);
		// },
		
		// getImg() {
		// 	// console.log(new URL(`${CATALOG_PRODUCT.image}`, import.meta.url).href);
		// 	return new URL(`../assets/img/${this.CATALOG_PRODUCT.image}`, import.meta.url).href;
		// }
		isWished(){
			console.log('call');
			console.log(this.WISH_LIST);
			this.WISH_LIST.forEach(element => {
				element.id == this.id ? this.inWishList = true : null;
				// return element.id == this.id ? true : false;
			});
			// if (this.WISH_LIST.length !== 0) {
			// 		if(this.WISH_LIST.inclides)
			// }
		},

	},

	mounted() {
		this.GET_CATALOG_PRODUCT(this.id)
			.then((responce) => {
				if (responce.data) {
					// console.log(responce.data);
					this.imageD = responce.data.image;
					// this.load = true;
					console.log('mounted - data is come');

				}
			});
		this.isWished	
	},


	methods: {
		...mapActions([
			"GET_CATALOG_PRODUCT", "ADD_TO_CART", 'ADD_TO_WISH_LIST'
		]),
		
		getImage(name) {
			// return new URL(`../assets/img/${name}`, import.meta.url).href
		},

		addToCart(data) {
			// console.log(data);
			this.ADD_TO_CART(data)
		},
		addToWishList(data) {

			if (this.WISH_LIST.length === 0) { this.ADD_TO_WISH_LIST(data); this.inWishList = true; }

			else if (this.WISH_LIST.length !== 0) {
				this.WISH_LIST.forEach(element => {
					// console.log('elem');
					// console.log(element);
					if (element.id == data.id) console.log('this element already exists'); return
				});
			}

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

<style scoped lang="scss">
.inWished:before{
	color: red;
}
</style>
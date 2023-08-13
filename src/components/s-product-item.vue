<template>
<div class="product-item__inner">

<div class="product-item__sliders-wrapper">

	<div class="main main-product-slider swiper">
		<div class="main-product-slider__slides-wrap swiper-wrapper">

			<div class="slider-product-item__slide swiper-slide">
				<picture>
					<!-- <img :src="require('../assets/img/'+product_data.image)" width="696" height="696" alt="Тканина Sterling вид материалу ближче"> -->
					<!-- <img src="../assets/img/02-Sterling-second.jpg" width="696" height="696"
						alt="Тканина Sterling вид материалу ближче"> -->
					<!-- <img src="../assets/img/02-Sterling-second.jpg"
						alt="Тканина Sterling вид материалу подалі"> -->
					<!-- <img :src="require('../assets/img/'+CATALOG_PRODUCT.image)" alt="Тканина Sterling вид материалу подалі"> -->
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
<!-- 		
		<div class="list-info-item__item">
			<dt class="list-info-item__item-title">Brand:</dt>
			<dd class="list-info-item__item-descr">Suerte collection«{{ product_data.collection }}»
			</dd>
		</div>
		<div class="list-info-item__item">
			<dt class="list-info-item__item-title">Textile:</dt>
			<dd class="list-info-item__item-descr"> {{ product_data.Textile }}</dd>
		</div>
		<div class="list-info-item__item">
			<dt class="list-info-item__item-title">Compound: </dt>
			<dd class="list-info-item__item-descr">{{ product_data.compound }}</dd>
		</div>
	
		<div class="list-info-item__item">
			<dt class="list-info-item__item-title">Color:</dt>
			<dd class="list-info-item__item-descr">{{ product_data.color }}</dd>
		</div>
		<div class="list-info-item__item">
			<dt class="list-info-item__item-title">Width:</dt>
			<dd class="list-info-item__item-descr"> {{ product_data.width }}</dd>
		</div>
		<div class="list-info-item__item">
			<dt class="list-info-item__item-title">Weight: </dt>
			<dd class="list-info-item__item-descr">{{ product_data.weight }} г/м2</dd>
		</div>
		
		<div class="list-info-item__item">
			<dt class="list-info-item__item-title">Fite standart:</dt>
			<dd class="list-info-item__item-descr">{{ product_data.fireStandard }}</dd>
		</div> -->


	</dl>
	<div class="product-item__price">{{ product_data.price }}<span>$/м<sup>2</sup></span></div>

	<div class="product-item__actions action-product-item">
		<button class="action-product-item__add-to-basket btn-white" @click="addToCart">Add to
			card</button>
		<button class="action-product-item__add-to-favorites __icon-Like"
			@click="addToWishList"></button>
	</div>
</div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default{
	name: 'sProductItem',
	props:{
		product_data:{
			type: Object,
			default() {
				return {}
			}
		},
		id:{
			type: Object,
			default:{
				return:{}
			}
		}

	},
	data(){
		return {
			img: this.product_data.image
		}
	},
	computed: {
		...mapGetters(['CATALOG_PRODUCT']),

	},
	mounted(){
		this.GET_CATALOG_PRODUCT(this.id)
			.then((responce) => {
				if (responce.data) {
					// console.log('data is come');
					// console.log(responce.data);
				}
			})
	},
	methods:{
		...mapActions([
			"GET_CATALOG_PRODUCT"
		]),
		addToCart() {
			console.log('click');
			this.$emit('hello', this.product_data.article)
			this.$emit('addToCart', this.product_data)
		},
		addToWishList() {
			console.log('click');
			this.$emit('hello', this.product_data.article)
			this.$emit('addToWishList', this.product_data)
		}

	}
}
</script>

<style>

</style>
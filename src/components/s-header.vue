<template>
	<header class="header">
		<div class="header__container">
			<!-- data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500"  -->
			<nav class="header-navigation header-navigation__nav site-navigation">
				<!-- <a rou class="header__logo"> -->
				<router-link to="/" class="header__logo">


					<picture>
						<img src="@/assets/img/Logo.png" alt="Логотип компании" loading="lazy" width="130" height="58">
					</picture>
				</router-link>
				<!-- </a> -->


				<ul class="site-navigation__nav-list" data-da=".menu__body, 991.98">
					<li data-spollers class="site-navigation__nav-item ">
						<router-link to="/catalog">Catalog</router-link>
						<!-- <a href="/catalog.html">Каталог</a> -->
						<button type="button" data-spoller class="site-navigation__btn-spoller __icon-Arrow-down"></button>
						<div hidden class="site-navigation__nav-item-body">Контент спойлера</div>
					</li>
					<li class="site-navigation__nav-item"><a  class="site-navigation__link">Fabric brands</a></li>
					<li class="site-navigation__nav-item"><a  class="site-navigation__link">About us</a></li>
					<li class="site-navigation__nav-item"><a  class="site-navigation__link ">News</a></li>
					<li class="site-navigation__nav-item"><a  class="site-navigation__link">Contacts</a></li>
					<li data-spollers class="site-navigation__nav-item ">
						<a href="#">For customers</a>
						<button type="button" data-spoller class="site-navigation__btn-spoller __icon-Arrow-down"></button>
						<div hidden class="site-navigation__nav-item-body">Контент спойлера</div>
					</li>


				</ul>
				<ul class="header-navigation__action-list">
					<!-- <li class="header-navigation__action-item"><a href="#"
							class="header-navigation__action-link __icon-Search"></a></li> -->
					<li class="header-navigation__action-item">
						<div class="item-action__wrapper">
							<a @click="openWishList" class="header-navigation__action-link __icon-Like"></a>
							<span class="header-navigation__quantity-item">{{ WISH_LIST.length }}</span>
						</div>
						<div v-if="this.isOpenWishList" class="item-action__cart-body cart-body">
							<div class="cart-body__title"><b>Wishlist</b> - {{ WISH_LIST.length }}</div>
							<ul class="cart-body__list-items">
								<li v-for="(item, index) in WISH_LIST" :key="item.id" class="cart-body__item item-cart"
									style="margin-bottom: 30px;">
									<div class="item-page-catalog-list__img-wrap" style="border-radius: 0;">

										<img class="item-page-catalog-list__img"
											:src="require('../assets/img/' + item.image)" alt="a" width="50" height="50">
									</div>
									<dl class="item-page-catalog-list__item-d-list">
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Title:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.name }}</dd>
										</div>
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Collection:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.collection }}</dd>
										</div>
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Textile:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.Textile }}</dd>
										</div>
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Price:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.price }}</dd>
										</div>
									</dl>
									<button style="border: 1px solid #ccc; border-radius: 5px; padding: 2px;"
										@click="deleteFromWishList(index)">delete</button>
								</li>
							</ul>

							<span style="display: block;margin-top: 20px;">TOTAL price: {{ totalPrice }}</span>
						</div>
					</li>
					<li class="header-navigation__action-item">
						<div class="item-action__wrapper">
							<a @click="openCart" class="header-navigation__action-link __icon-Cart"></a>
							<span class="header-navigation__quantity-item">{{ CART.length }}</span>
						</div>
						<div v-if="this.isOpenCart" class="item-action__cart-body cart-body">
							<div class="cart-body__title"><b>Cart</b> - {{ CART.length }}</div>
							<ul class="cart-body__list-items">
								<li v-for="(item, index) in CART" :key="item.id" class="cart-body__item item-cart"
									style="margin-bottom: 30px;">
									<div class="item-page-catalog-list__img-wrap" style="border-radius: 0;">
										<!-- <img class="item-page-catalog-list__img"
											:src="item" alt="a" width="50" height="50"> -->
										<img class="item-page-catalog-list__img"
											:src="require('../assets/img/' + item.image)" alt="a" width="50" height="50">
									</div>
									<dl class="item-page-catalog-list__item-d-list">
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Title:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.name }}</dd>
										</div>
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Collection:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.collection }}</dd>
										</div>
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Textile:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.Textile }}</dd>
										</div>
										<div class="item-page-catalog-list__item-dl-wrap">
											<dt class="item-page-catalog-list__item-d-title">Price:</dt>
											<dd class="item-page-catalog-list__item-d-descr">{{ item.price }}</dd>
										</div>
									</dl>
									<button style="border: 1px solid #ccc; border-radius: 5px; padding: 2px;"
										@click="deleteFromCart(index)">delete</button>
								</li>
							</ul>

							<span style="display: block;margin-top: 20px;">TOTAL price: {{ totalPrice }}</span>
						</div>

					</li>
				</ul>

				<div data-spollers class="header-navigation__site-language-wrap" data-da=".menu__body, 991.98">
					<button data-spoller class="header-navigation__site-language site-language">
						<span class="site-language__current">EN</span>
						<span class="site-language__btn __icon-Arrow-down"></span>

					</button>
					<div hidden class="site-language__list-body">
						<a href="#">UA</a>
						<a href="#">EN</a>
						<a href="#">RU</a>
					</div>
				</div>



				<div hidden class="header__menu menu">
					<button type="button" class="menu__icon icon-menu"><span></span></button>
					<nav class="menu__body">

					</nav>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: "sHeader",
	data() {
		return {
			isOpenCart: false,
			isOpenWishList: false,

			totalPriceF: 0,
		}
	},
	computed: {
		...mapGetters(['CART','WISH_LIST']),
		totalPrice(){
			if(this.CART.length !==0){
				let tPrice=0;
				this.CART.forEach(element => {
					tPrice += element.price
					
				});
				console.log(tPrice);
				return tPrice.toFixed(1);
			}
			return 0
		}
		// image(){
		// 	// return require('../assets/img/' + this.CART.image);
		// 	return console.log(this.CART);
		// }
		// getImg() {
		// 	// console.log(new URL(`${CATALOG_PRODUCT.image}`, import.meta.url).href);
		// 	return new URL(`../assets/img/${this.CATALOG_PRODUCT.image}`, import.meta.url).href;
		// }
		// totalPrice(){
		// 	for(let i=0; i<=this.CART.length; i++)
		// 	console.log(CART[i]);
		// },
	},
	methods: {
		
		// totalPrice(){
		// 	for(let i=0; i<=this.CART.length; i++)
		// 	console.log(CART[i]);
		// },
		openCart() {
			this.isOpenCart = !this.isOpenCart;
			// if(this.isOpenWishList === true){
			// 	this.isOpenWishList = !this.isOpenWishList
			// } else {
			// 	console.log('close');
			// }
			this.isOpenWishList ? this.isOpenWishList = !this.isOpenWishList : null;
		},
		openWishList() {
			this.isOpenWishList = !this.isOpenWishList;
			this.isOpenCart ? this.isOpenCart = !this.isOpenCart : null;
		},
		...mapActions(['DELETE_FROM_CART','DELETE_FROM_WISH_LIST']),
		deleteFromCart(index) {
			console.log('click');
			console.log(index);
			this.DELETE_FROM_CART(index);
		},
		deleteFromWishList(index) {
			console.log('click');
			console.log(index);
			this.isWished
			this.DELETE_FROM_WISH_LIST(index);
		},
	}
}
</script>

<style lang="scss">
.item-action__wrapper {
	position: relative;
}

.item-action__cart-body {
	font-size: 1rem;
	position: absolute;
	top: 100%;
	width: 300px;
	height: 300px;
	right: 0;
	z-index: 1;
	margin: 0.3125rem 0 0 0;
	border-radius: 0.625rem;
	background-color: #fff;
	padding: 0.9375rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	overflow-y: hidden;



}

.cart-body__list-items {
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	height: 190px;
	overflow-y: auto;
}

.header-navigation__action-link:hover {
	cursor: pointer;
}

.cart-body__title{
	font-size: 20px;
}
.site-navigation__link:hover{
	cursor: pointer;
}
</style>
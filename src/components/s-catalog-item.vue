<template>
	<li class="page-catalog-list__item item-page-catalog-list">
		<div class="item-page-catalog-list__img-wrap">
			<!-- <img class="item-page-catalog-list__img" :src="require('@/assets/img/' + itemData.image)"
				srcset="@/assets/img/17-nutmeg_2x.jpg 2x" alt=""> -->
			<img class="item-page-catalog-list__img" :src="require('../assets/img/' + itemData.image)" alt="a">
		</div>
		<router-link :to="`catalog/${itemData.id}`" :item="item">
			<h2 class="item-page-catalog-list__title">{{ itemData.name }}</h2>
		</router-link>
		<!-- <a href="#">
			<h2 class="item-page-catalog-list__title">{{itemData.name}}</h2>
		</a> -->
		<dl class="item-page-catalog-list__item-d-list">
			<div class="item-page-catalog-list__item-dl-wrap">
				<dt class="item-page-catalog-list__item-d-title">Collection:</dt>
				<dd class="item-page-catalog-list__item-d-descr">{{ itemData.collection }}</dd>
			</div>
			<div class="item-page-catalog-list__item-dl-wrap">
				<dt class="item-page-catalog-list__item-d-title">Textile:</dt>
				<dd class="item-page-catalog-list__item-d-descr">{{ itemData.Textile }}</dd>
			</div>
		</dl>

	</li>
</template>
<script>
export default {
	name: 's-catalog-item',
	props: {
		itemData: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {
			item:
				{ id: 1 }

		}
	},
	computed: {

	},
	methods: {

	}
}
</script>

<style></style>
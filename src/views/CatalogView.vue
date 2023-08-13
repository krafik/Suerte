<template>
	<main class="page">
		<section class="section-catalog">
			<div class="section-catalog__container">
				<h1 class="section-catalog__title section-title">CATALOG OF Textile</h1>
				<div data-spollers class="section-catalog__filter">
					<form action="#" class="section-catalog__filter-form form-filter">
						<div class="form-filter__column">
							<div class="form-filter__item-wrap">
								<button type="button" data-spoller class="form-filter__item-title spollers__title">
									<span class="">Categories</span>
									<span class=" __icon-Arrow-down"></span>
								</button>
								<div hidden class="form-filter__item-body body-item-filter spollers__body">
									<ul class="body-item-filter__items-wrap-inner">
										<li>
											<label class="body-item-filter__item"><input
													class="body-item-filter__input-check" type="checkbox">
												<span class="form__fake-checkbox"></span> <span
													class="body-item-filter__input-title">Категория
													1</span></label>
										</li>
										<li>
											<label class="body-item-filter__item"><input
													class="body-item-filter__input-check" type="checkbox" disabled>
												<span class="form__fake-checkbox"></span> <span
													class="body-item-filter__input-title">Категория
													2</span></label>
										</li>
										<li>
											<label class="body-item-filter__item"><input
													class="body-item-filter__input-check" type="checkbox" checked disabled>
												<span class="form__fake-checkbox"></span> <span
													class="body-item-filter__input-title">Категория
													3</span></label>
										</li>
									</ul>
								</div>
							</div>

							<div class="form-filter__item-wrap form-filter__item-filters">
								<button type="button" data-spoller class="form-filter__item-title spollers__title">
									<span class="">Filters</span>
									<span class=" __icon-Arrow-down"></span>
								</button>
								<div class="form-filter__item-body body-item-filter spollers__body" style="display: none;"> 
									<ul class="body-item-filter__items-wrap" >
										<li>
											<fieldset class="body-item-filter__fieldset">
												<legend>Color</legend>
												<ul class="body-item-filter__items-wrap-inner">
													<li>
														<!-- <label class="body-item-filter__item"><input
																	class="body-item-filter__input-check"
																	type="checkbox"><span
																	class="body-item-filter__input-title">Синій</span></label> -->
														<label class="body-item-filter__item"><input
																class="body-item-filter__input-check" type="checkbox">
															<span class="form__fake-checkbox"></span>
															<span class="body-item-filter__input-title">Blue</span></label>
													</li>
													<li>
														<label class="body-item-filter__item"><input
																class="body-item-filter__input-check" type="checkbox">
															<span class="form__fake-checkbox"></span> <span
																class="body-item-filter__input-title">Dark
																blue</span></label>

													</li>
													<li>
														<label class="body-item-filter__item"><input
																class="body-item-filter__input-check" type="checkbox">
															<span class="form__fake-checkbox"></span> <span
																class="body-item-filter__input-title">Gray</span></label>

													</li>
													<li>
														<label class="body-item-filter__item"><input
																class="body-item-filter__input-check" type="checkbox">
															<span class="form__fake-checkbox"></span>
															<span class="body-item-filter__input-title">White</span></label>

													</li>
												</ul>
											</fieldset>
										</li>
										<li>
											<fieldset class="body-item-filter__fieldset">
												<legend>Collection</legend>
												<ul class="body-item-filter__items-wrap-inner">
													<li>
														<label class="body-item-filter__item"><input
																class="body-item-filter__input-check" type="checkbox">
															<span class="form__fake-checkbox"></span> <span
																class="body-item-filter__input-title">Wool</span></label>

													</li>
													<li>
														<label class="body-item-filter__item"><input
																class="body-item-filter__input-check" type="checkbox">
															<span class="form__fake-checkbox"></span>
															<span
																class="body-item-filter__input-title">Cotton</span></label>
													</li>
												</ul>
											</fieldset>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div class="form-filter__column">

							<div class="form-filter__item-search-wrap">
								<div class="form-filter__search-wrap">
									<div class="form-filter__search __icon-Search">
										<input autocomplete="off" type="search" name="form[]" data-error="Ошибка"
											placeholder="Search" class="form-filter__search-input">
										<!-- <span class="__icon-Search"></span> -->
									</div>
									<div class="form-filter__search-result-body">
										<span>Результат поиска</span>
									</div>
								</div>

							</div>

							<div class="form-filter__item-wrap">
								<button type="button" data-spoller class="form-filter__item-title spollers__title">
									<span class="">Sort from A to Z</span>
									<span class=" __icon-Arrow-down"></span>
								</button>
								<div class="form-filter__item-sort-body body-sort-filter spollers__body" style="display: none;">
									<div class="body-sort-filter__wrap">
										<a href="#">from the most expensive</a>
										<a href="#">from the cheapest</a>
									</div>

								</div>
							</div>
						</div>
					</form>
				</div>
				<ul class="section-catalog__catalog page-catalog-list">
					<sCatalogItemVue v-for="product in CATALOG_PRODUCTS" :key="product.id" :item-data="product"/>

				</ul>
				<div class="section-catalog__more-btn-wrap">
					<button type="button" class="section-catalog__more-btn btn-white">Show more</button>
				</div>

			</div>
		</section>

	</main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import sCatalogItemVue from "@/components/s-catalog-item.vue";
export default {
	name: 'CatalogView',
	components: {
    sCatalogItemVue
},
	computed: {
		...mapGetters(['CATALOG_PRODUCTS']),
	},
	methods: {
		...mapActions([
			"GET_CATALOG_PRODUCTS_FROM_API"
		]),
	},
	mounted() {
		this.GET_CATALOG_PRODUCTS_FROM_API()
			.then((responce) => {
				if (responce.data) {
					// console.log('data is come');
					// console.log(responce.data);
				}
			})
	}
}
</script>

<style></style>
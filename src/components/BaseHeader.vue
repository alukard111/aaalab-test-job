<template>
  <div class="base-header">
    <div class="base-header__wrapper">
      <div class="base-header__logo logo">
        <a class="logo__link" href="#">
          <img 
            class="logo__img"
            src="@/assets/icons/header-logo.png"
            alt="logo"
          >
          <h4 class="logo__title">
            прекрасная Работа,<br>
            достойная каждого
          </h4>
        </a>
      </div>
      <div class="base-header__basket basket">
        <div class="basket__wrapper">
          <img 
            class="basket__icon" 
            src="@/assets/icons/basket.svg" 
            alt="basket"
          >
          <h4 class="basket__title">Корзина</h4>
          <span 
            v-if="$store.state.basket.length"
            class="basket__count"
          >
            {{ $store.state.basket.length }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
}
</script>


<style lang="postcss" scoped>
.base-header {
  @apply
    m-auto
    mx-5
    md:mx-10
    lg:mx-20
  ;
}
.base-header__wrapper {
  @apply
    flex
    justify-between
    items-center
  ;
}
h4 {
  @apply
    select-none
    uppercase
    text-xs
    md:text-sm
  ;
}
.logo__link {
  @apply
    flex
    items-center
  ;
}
.logo__img {
  @apply
    w-10
    h-10
    mr-4

    md:w-12
    md:h-12
    md:mr-6
  ;
}
.basket__wrapper {
  @apply
    flex
    align-baseline
    items-center
    
    cursor-pointer
  ;
}
.basket__icon {
  @apply
    md:mr-3
    md:mb-1
  ;
}
.basket__title {
  @apply
    hidden
    md:block
  ;
}
.basket__count {
  @apply
    rounded-full
    
    text-center
    text-black
    
    ml-1
    w-6
    h-6
    
    bg-custom-gray
  ;
}
</style>
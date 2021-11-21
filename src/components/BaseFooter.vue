<template>
  <div class="base-footer ">
    <div class="base-footer__wrapper">
      <div class="base-footer__container">
        <div class="base-footer__column">
          <a href="tel:+7 (495) 555-55-55">+7 (495) 555-55-55</a>
          <h2>Москва, Красная площадь, 52</h2>
        </div>
        <div class="base-footer__column">
          <h2 class="base-footer__copyright">© Эпоха возрождения, 2021</h2>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.base-footer {
  @apply
    w-screen
    h-52

    bg-footer
    bg-center
    bg-no-repeat
  ;
}
.base-footer__wrapper {
 @apply
  bg-opacity-50
  bg-custom-black

  h-full
 ;
}
.base-footer__container {
  @apply
    mx-auto
    
    w-11/12
    h-full

    sm:w-5/6
    md:w-4/5
    lg:w-2/3
    lg:p-0

    flex
    justify-between
    items-center
  ;
}
.base-footer__column {
  @apply
    text-xs
    sm:text-base
    md:text-lg
  ;
}
.base-footer__copyright {
  @apply
    opacity-75
  ;
}
</style>
<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="postcss" scoped>
@font-face {
  font-family: 'Roboto Regular';
  font-weight: normal;
  font-style: normal;
  src: local("Roboto-Regular"), url("~@/assets/fonts/Roboto-Regular.woff2") format("woff2");
}

.app {
  font-family: 'Roboto Regular';
  letter-spacing: 0.06em;
  @apply
    w-full

    bg-custom-black
    
    text-custom-gray
  ;
}
</style>

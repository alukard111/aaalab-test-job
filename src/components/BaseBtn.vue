<template>
  <div class="base-btn-component">
    <button 
      @click="$emit('click')"
      class="base-btn-component__button"
      :class="{ 'base-btn-component__button_card-sold' :  btnActive }"
    >
      {{ btnName }} 
      <span
        class="base-btn-component_checked"
        :class="{ 'hidden' : btnActive ? false : true }"
      >
        &#10003;
      </span>
    </button>
    
  </div>
</template>


<script>
export default {
  props: {
    btnName: {
      type: String,
      require: false,
      default: ''
    },
    btnActive: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>


<style lang="postcss" scoped>
.base-btn-component {
  @apply
    w-6/12
    lg:w-5/12
    h-12
    xs:h-10
    xl:h-12
  ;
}
.base-btn-component__button {
  @apply
    w-full
    h-full
    flex
    items-center
    justify-center
    
    border
    
    text-xs
    xl:text-sm
    text-custom-gray 

    transition
    ease-in-out
    duration-200

    hover:border-none
    hover:bg-custom-dark-gray
    active:border-none
    active:bg-custom-gray
    active:text-black
  ;
}
.base-btn-component__button_card-sold {
  @apply
    border-none

    bg-custom-gray

    text-black
  ;
}
.base-btn-component_checked {
  @apply
    pl-1
  ;
}
</style>
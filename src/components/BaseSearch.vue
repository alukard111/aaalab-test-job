<template>
  <div class="base-input-search">
    <input 
      @focus="searchStyleActive()"
      @blur="searchStyleToggle()"
      ref="searchInput"
      id="search"
      class="base-input-search__input hidden"
      type="text"
      placeholder="Поиск по названию картины"
      autocomplete="off"
      :value="inputValue"
      @input="$emit('input', $event.target.value)"
    >
    <label
      @click="showInput()"
      ref="labelSearch"
      for="search"
      class="base-input-search__btn"
    >
      найти
      <img 
        class="base-input-search__icon"
        src="@/assets/icons/search.png"
        alt="magnifying glass"
        style="width: 14px; height:14px;" 
      >
    </label>
  </div>
</template>


<script>
export default {
  props: {
    inputValue: {
      type: String,
      require: false,
      default: ''
    }
  },


  methods: {
    searchStyleToggle() {
      this.searchStyleActive()
      this.showInput()  
    },

    searchStyleActive() {
      this.$refs.labelSearch.classList.toggle('opacity-40')
    },

    showInput() {
      if (document.body.offsetWidth < 768 && !Boolean(this.$refs.searchInput.value)) {
        this.$refs.searchInput.classList.toggle('hidden')
      }
    }
  }
}
</script>


<style lang="postcss" scoped>
.base-input-search {
  @apply
    flex
    items-start
    flex-row-reverse
    md:flex-row
    justify-end
    md:justify-between

    border-opacity-50
    md:border-b

    h-10
    
    text-xs
    lg:text-sm
    xl:text-base
  ;
}
.base-input-search__input {
  @apply
    bg-transparent

    w-9/12
    ml-2
    md:m-0
    
    outline-none
    
    md:inline
    
  ;
}
.base-input-search__btn {
  @apply
    flex
    flex-row-reverse
    md:flex-row
    items-center
    
    uppercase
    select-none
    cursor-pointer
    
    transition
    ease-in-out
    duration-150
    
    active:opacity-40
  ;
}
.base-input-search__icon {
  @apply
    mr-1
    md:ml-3
  ;
}
</style>
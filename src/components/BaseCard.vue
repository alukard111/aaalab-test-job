<template>
  <div 
    v-if="!soldCardAtAuction ? true : stateSoldCard"
    class="base-card"
    :class="{ 
      'xs:col-span-2' : isBigCard, 
      'xs:row-span-2' : isBigCard, 
      'md:col-start-2' : isBigCard,
      'md:row-start-1' : isBigCard,
      'xl:col-start-auto' : isBigCard,
      'xl:row-start-auto' : isBigCard
    }"
  >
    <div  class="base-card__wrapper">
      <div class="base-card__wrapper-img">
        <img
          class="base-card__img" 
          alt="cardImg"
          :src="srcImg"
        >
      </div>
      <div  
        @mouseleave="$emit('mouseleave', $event)" 
        class="base-card__price-info" 
        :class="{ 'base-card__price-info_sold': stateSoldCard }"
      >
        <div class="base-card__info">
          <h2>
            {{ cardTitle }}
          </h2>
          <h4>
            {{ cardAuthor }}
          </h4>
        </div>
        <div 
          v-if="!stateSoldCard"
          class="base-card__price"
        >
          <div class="price__old-new-price">
            <h4 class="price__old-price"> 
              {{ oldPrice }} $
            </h4>
            <h2> 
              {{ newPrice }} $
            </h2>
          </div>
          <slot name="btn"></slot>
        </div>
        <div 
          v-if="stateSoldCard"
          class="base-card_sold-at-auction"
        > 
          <img 
            src="@/assets/icons/hammer.png" 
            alt=""
          >
          <h4 class="md:ml-2">Продана на аукционе</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    oldPrice: {
      type: String || Number,
      require: false,
      default: ''
    },
    newPrice: {
      type: String || Number,
      require: false,
      default: ''
    },
    cardTitle: {
      type: String,
      require: false,
      default: ''
    },
    cardAuthor: {
      type: String,
      require: false,
      default: ''
    },
    srcImg: {
      type: String,
      require: false,
      default: ''
    },
    stateSoldCard: {
      type: Boolean,
      require: false,
      default: false
    },
    isBigCard: {
      type: Boolean,
      require: false,
      default: false
    },
    soldCardAtAuction: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>


<style lang="postcss" scoped>
.base-card {
  @apply
    my-4 
    xs:my-0
  ;
}
.base-card__wrapper {
  @apply
    relative

    w-full
    h-full

    cursor-pointer
  ;
}
.base-card__img {
  @apply
    w-full
    h-full
  ;
}
.base-card__price-info {
  @apply
    flex
    flex-col
    justify-around
    
    p-4
    sm:p-3
    2xl:p-4
    
    w-full
    h-full

    absolute
    top-0
    left-0

    bg-custom-black
    
    text-custom-gray 
    
    transition-all
    ease-in-out
    duration-200
    
    opacity-0
    hover:bg-opacity-75
    hover:opacity-100
  ;
}
.base-card_sold-at-auction {
  @apply
    flex
    flex-wrap

    opacity-0
  ;
}
.base-card__price-info:hover>.base-card_sold-at-auction {
  @apply
    opacity-100
  ;
}
.base-card__price-info_sold {
  @apply
    opacity-75
    bg-opacity-100
    text-opacity-0
    hover:text-opacity-100
  ;
}
.base-card__price {
  @apply
    flex
    justify-start
    items-center

    w-full
  ;
}
.price__old-new-price {
  @apply
    mr-4
    xs:mr-1
    lg:mr-2
    2xl:mr-5
  ;
}
.price__old-price {
  @apply
    line-through

    opacity-50
  ;
}
h4 {
  @apply
    text-xs
    2xl:text-sm
  ;
}
h2 {
  @apply
    text-sm
    md:text-base
    2xl:text-lg
  ;
}
</style>
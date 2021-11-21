<template>
  <div class="home">
    <div class="home__header">
      <BaseHeader />
    </div>
    <div class="home__content content">
      <div class="content__title">
        <h1>
          Картины эпохи <br>
          Возрождения
        </h1>
      </div>
      <div class="content__filter filter">
        <div class="filter__toggle-wrapper">
          <div 
            @click="toggleContent($event)"
            ref="filter__all"
            class="
              filter__togle
              filter__togle_active
            "
          >
            <span>Все</span>
          </div>
          <div 
            @click="toggleContent($event)"
            ref="filter__sold"
            class="filter__togle"
          >
            <span>
              Проданные на аукционе
            </span>
          </div>
        </div>
        <div class="filter__search">
          <BaseSearch 
            v-model="setFilterValue"
            :inputValue="this.$store.state.valueFilterCards"
          />
        </div>
      </div>
      <div class="content__main">
        <base-card
          v-for="card in getCards" 
          :key="card.cardId"
          :oldPrice="parseInt(card.oldPrice).toLocaleString()"
          :newPrice="parseInt(card.newPrice).toLocaleString()"
          :cardTitle="card.title"
          :cardAuthor="card.author"
          :srcImg="card.srcImg"
          :stateSoldCard="card.stateSold"
          :isBigCard="card.isBigCard"
          :soldCardAtAuction="soldCardAtAuction"
          @mouseleave="toggleStateSoldCard(card.cardId, card.stateSale, $event)"
        >
          <template v-slot:btn>
            <BaseBtn 
              :btnName="card.stateSale ? btnNameSold : btnNameBuy"
              :btnActive="card.stateSale"
              @click="togglePurchase(card.cardId, card.stateSale)"
            />
          </template>
        </base-card>
      </div>
    </div>
    <div class="footer">
      <BaseFooter />
    </div>
  </div>
</template>


<script>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import BaseSearch from '@/components/BaseSearch.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseBtn from '@/components/BaseBtn.vue'


export default {
  components: {
    BaseHeader,
    BaseFooter,
    BaseSearch,
    BaseCard,
    BaseBtn
  },


  data: () => ({
    btnNameBuy: 'Купить',
    btnNameSold: 'В корзине',
    soldCardAtAuction: false
  }),


  computed: {
    getCards() {
      return this.$store.getters.getFilteredCards
    },

    setFilterValue: {
      get() {
        return this.$store.state.valueFilterCards
      },
      set(inputValue) {
        this.$store.commit({
          type: 'SET_VALUE_FILTER',
          value: inputValue
        }) 
      }
    }
  },


  methods: {
    toggleContent(event) {
      if (!event.currentTarget.classList.contains('filter__togle_active')) {
        this.soldCardAtAuction = !this.soldCardAtAuction
        this.$refs.filter__all.classList.toggle('filter__togle_active')
        this.$refs.filter__sold.classList.toggle('filter__togle_active')
      }
    },
   
    toggleStateSoldCard(cardId, stateSaleCard, e) {
      if (stateSaleCard && !e.currentTarget.classList.contains('base-card__price-info_sold')) {
        e.currentTarget.classList.toggle('base-card__price-info_sold')
        this.setSoldCard(cardId)
      }
    },

    setSoldCard(cardId) {
      // setTimeout - зачем и почему
        // При смене кнопки(когда курсор увели с купленной карточки) и её цены
        // меня смущала резкая смена тегов,
        // можно было видеть как кнопка и цена исчезли,
        // а на их место встал <span> Продана на аукционе </span>
        // поэтому решил вставить сюда setTimeout
      setTimeout(() => {
        this.$store.commit({
          type: 'SET_CARD_SOLD',
          cardId: cardId
        })
      }, 100)
    },

    togglePurchase(cardId, stateSaleCard) {
      if (!stateSaleCard) {
        this.$store.dispatch({
          type: 'SELL_PAINTING',
          cardId: cardId
        })
      } else {
        this.$store.dispatch({
          type: 'CANCEL_PURCHASE',
          cardId: cardId
        })
      }
    }
  },
}
</script>


<style lang="postcss" scoped>
  .home {
    @apply
      w-full
      h-full

      flex
      flex-col
      justify-between
    ;
  }
  .home__header {
    @apply
      pt-4
      xl:pt-12
      md:pt-8
    ;
  }
  h1 {
    @apply
      text-2xl
      xl:text-7xxl
      lg:text-7xl
      md:text-5xl
    ;
  }
  .content {
    @apply
      mx-auto
      lg:p-0

      h-full
      w-10/12
      xs:w-11/12
      sm:w-5/6
      md:w-4/5
      lg:w-2/3
      
      flex
      flex-col
      justify-around
      items-center
    ;
  }
  .content__title {
    @apply
      w-full
      h-36
      sm:h-40
      md:h-56
      lg:h-72

      my-5
      sm:m-10
      md:m-16
      lg:m-20
      
      uppercase
      text-center
      
      bg-40
      bg-no-repeat
      bg-title
      bg-center
      
      flex
      items-center
      justify-center
    ;
  }

  .filter {
    @apply
      w-full

      flex
      justify-between
      items-start
      flex-col
      md:flex-row
    ;
  }
  .filter__toggle-wrapper {
    @apply
      flex
      order-2
      md:order-1
    ;
  }

  .filter__togle {
    @apply
      px-4
      py-1
      mr-2
      m-auto

      cursor-pointer
      select-none
      text-xs
      lg:text-sm
      xl:text-base

      transition
      ease-in-out
      duration-200

      opacity-50
      hover:opacity-100
    ;
  }
  .filter__togle_active {
    @apply
      border
      opacity-100
    ;
  }
  .filter__search {
    @apply
      order-1
      md:order-2

      w-full
      sm:w-7/12
      md:w-5/12
      
      mb-2
      md:mb-0
    ;
  }
  .content__main {
    @apply
      w-full

      mt-10
      mb-16
      xs:mt-16
      xs:mb-24
      md:mt-24
      md:mb-36

      grid
      xs:gap-4
      2xl:gap-6
      xs:grid-cols-2
      md:grid-cols-3
      xl:grid-cols-4
    ;
  }

</style>
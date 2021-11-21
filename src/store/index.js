import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valueFilterCards: '',
    basket: [],
    cards: [
      {
        cardId: '0',
        srcImg: '/cards/img0.png',
        title: 'Тайная вечеря',
        author: 'Леонардо да Винчи, 1495—1498 г',
        oldPrice: '32122222',
        newPrice: '1232222',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '1',
        srcImg: '/cards/img1.png',
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        oldPrice: '3212222',
        newPrice: '123222',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '2',
        srcImg: '/cards/img2.png',
        title: 'Мадонна с младенцем у камина',
        author: 'Робера Кампена, 1430 г',
        oldPrice: '3212222',
        newPrice: '123222',
        stateSale: false,
        stateSold: false,
        isBigCard: true
      },
      {
        cardId: '3',
        srcImg: '/cards/img3.png',
        title: 'Ангел',
        author: 'Рафаэль Санти, 1500 г',
        oldPrice: '3212222',
        newPrice: '123222',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '4',
        srcImg: '/cards/img4.png',
        title: 'Весна',
        author: 'Сандро Боттичелли, 1482 г',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '5',
        srcImg: '/cards/img5.png',
        title: 'Данте смотрит на Чистилище',
        author: 'Аньоло Бронзино, 1530 г',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '6',
        srcImg: '/cards/img6.png',
        title: 'Данте Алигьери',
        author: 'Сандро Боттичелли, 1495 г',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '7',
        srcImg: '/cards/img7.png',
        title: 'Страшный суд. Фрагмент',
        author: 'Джотто ди Бондоне, 1306 г',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '8',
        srcImg: '/cards/img8.png',
        title: 'Анания и Сапфира',
        author: 'Мазаччо',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '9',
        srcImg: '/cards/img9.png',
        title: 'Алтарь святого Коломба.',
        author: 'Рогир ван дер Вейден, 1460 г',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '10',
        srcImg: '/cards/img10.png',
        title: 'Благовещение',
        author: 'Леонардо да Винчи, 1472—1475 г',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '11',
        srcImg: '/cards/img11.png',
        title: 'Женский портрет',
        author: 'Рафаэлло Санцио',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
      {
        cardId: '12',
        srcImg: '/cards/img12.png',
        title: 'Оплакивание Христа',
        author: 'Джованни Беллини',
        oldPrice: '5212222',
        newPrice: '309999',
        stateSale: false,
        stateSold: false,
        isBigCard: false
      },
    ]
  },


  getters: {
    getFilteredCards(state) {
      if (state.valueFilterCards && typeof(state.valueFilterCards) === 'string') {
        return state.cards.filter(card => card.title.toLowerCase().includes(state.valueFilterCards.toLowerCase().trim()))
      }
      return state.cards
    },
  },


  mutations: {
    SET_VALUE_FILTER(state, payload) {
      state.valueFilterCards = payload.value
    },

    ADD_CARD_IN_BASKET(state, payload) {
      state.basket.push(state.cards.find(card => {
        return card.cardId === payload.cardId && card.stateSale
      }))
    },

    REMOVE_CARD_FROM_BASKET(state) {
      state.basket.splice(state.basket.findIndex(card => !Boolean(card.stateSale)), 1)
    },

    BUY_CARD(state, payload) {
      state.cards.find(card => card.cardId === payload.cardId).stateSale = true
    },
    
    RETURN_CARD(state, payload) {
      state.cards.find(card => card.cardId === payload.cardId).stateSale = false
    },

    SET_CARD_SOLD(state, payload) {
      state.cards.find(card => card.cardId === payload.cardId).stateSold = true
    }
  },


  actions: {
    async SELL_PAINTING(context, payload) {
      await context.commit({
        type: 'BUY_CARD',
        cardId: payload.cardId
      })
      await context.commit({
        type: 'ADD_CARD_IN_BASKET',
        cardId: payload.cardId
      })
    },

    async CANCEL_PURCHASE(context, payload) {
      await context.commit({
        type: 'RETURN_CARD',
        cardId: payload.cardId
      })
      await context.commit({
        type: 'REMOVE_CARD_FROM_BASKET'
      })
    }
  },
})

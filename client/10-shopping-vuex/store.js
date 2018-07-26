import { frequentlyPurchasedItems } from './api/frequent-items.js'

// Item statuses
const IN_LIST = 'IN_LIST' // item is in shopping list
const IN_CART = 'IN_CART' // item is in shopping cart

export const store = new Vuex.Store({
  strict: true,
  state: {
    items: frequentlyPurchasedItems(),
    newItem: ''
  },
  getters: {
    matchingItems(state) {
      return state.newItem &&
        state.items
          .filter(item => item.label.indexOf(state.newItem) > -1)
    },
    itemsInList(state) {
      return state.items
        .filter(item => item.status === IN_LIST)
    },
    itemsInCart(state) {
      return state.items
        .filter(item => item.status === IN_CART)
    },
    nextId(state) {
      return state.items
        .reduce((max, cur) => cur.id > max ? cur.id : max, 0) + 1
    }
  },
  mutations: {
    addToList(state, newItem) {
      state.items.push({
        id: nextId(state.items),
        label: newItem,
        status: IN_LIST
      })
      state.newItem = ''

      function nextId (items) {
        return items.reduce((max, cur) => cur.id > max ? cur.id : max, 0) + 1
      }
    },
    addMatchToList(state, item) {
      item.status = IN_LIST
      state.newItem = ''
    },
    addToCart(state, item) {
      item.status = IN_CART
    },
    removeFromList(state, item) {
      item.status = ''
    },
    removeFromCart(state, item) {
      item.status = IN_LIST // they can remove it from the list separately
    },
    setNewItem(state, newItem) {
      state.newItem = newItem
    }
  }
})


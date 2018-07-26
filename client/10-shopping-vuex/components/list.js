Vue.component('app-list', {
  template: `
    <section v-show="itemsInList.length">
      <h3>LIST ({{itemsInList.length}}):</h3>
      <ul>
        <li v-for="item in itemsInList">
          <span class="app-icon"
                tabindex="0"
                title="remove from list"
                @click="remove(item)"
                @keyup.enter="remove(item)">❌</span>
          <span class="app-icon"
                tabindex="0"
                title="add to cart"
                @click="addToCart(item)"
                @keyup.enter="addToCart(item)">🛒</span>
          <span>
            {{item.label}}
          </span>
        </li>
      </ul>
    </section>
  `,
  computed: {
    ...Vuex.mapGetters(['itemsInList'])
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item)
    },
    remove(item) {
      this.$store.commit('removeFromList', item)
    }
  }
})


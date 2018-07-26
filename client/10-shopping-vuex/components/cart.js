Vue.component('app-cart', {
  template: `
    <section v-show="itemsInCart.length">
      <h3>CART ({{itemsInCart.length}}):</h3>
      <ul>
        <li v-for="(item, index) in itemsInCart">

          <span class="app-icon"
                tabindex="0"
                title="remove from cart"
                @click="remove(item)"
                @keyup.enter="remove(item)">🛒
            <span class="app-not-icon">❌</span>
          </span>

          <span class="app-cart-label">
            {{item.label}}
          </span>
        </li>
      </ul>
    </section>
  `,
  computed: {
    ...Vuex.mapGetters(['itemsInCart'])
  },
  methods: {
    remove(item) {
      this.$store.commit('removeFromCart', item)
    }
  }
})

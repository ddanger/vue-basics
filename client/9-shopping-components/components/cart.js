Vue.component('app-cart', {
  props: ['items'],
  template: `
    <section v-show="items.length">
      <h3>CART ({{items.length}}):</h3>
      <ul>
        <li v-for="(item, index) in items">

          <span class="app-icon"
                tabindex="0"
                title="remove from cart"
                @click="$emit('remove', item)"
                @keyup.enter="$emit('remove', item)">🛒
            <span class="app-not-icon">❌</span>
          </span>

          <span class="app-cart-label">
            {{item.label}}
          </span>
        </li>
      </ul>
    </section>
  `
})

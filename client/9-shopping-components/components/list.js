Vue.component('app-list', {
  props:['items'],
  template: `
    <section v-show="items.length">
      <h3>LIST ({{items.length}}):</h3>
      <ul>
        <li v-for="item in items">
          <span class="app-icon"
                tabindex="0"
                title="remove from list"
                @click="$emit('remove', item)"
                @keyup.enter="$emit('remove', item)">❌</span>
          <span class="app-icon"
                tabindex="0"
                title="add to cart"
                @click="$emit('add-to-cart', item)"
                @keyup.enter="$emit('add-to-cart', item)">🛒</span>
          <span>
            {{item.label}}
          </span>
        </li>
      </ul>
    </section>
  `
})


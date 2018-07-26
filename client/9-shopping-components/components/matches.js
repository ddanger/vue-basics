Vue.component('app-matches', {
  props: ['items'],
  template: `
    <section v-show="items.length">
      <h3>Matches:</h3>
      <ul>
        <li v-for="match in items"
            tabindex="0"
            @keyup.enter="$emit('add-to-list', match)"
            @click="$emit('add-to-list', match)">
          {{match.label}}
        </li>
      </ul>
    </section>
  `
})

Vue.component('app-matches', {
  props: ['items'],
  template: `
    <section id="matches" v-show="items.length">
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

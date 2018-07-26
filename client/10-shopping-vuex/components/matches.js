Vue.component('app-matches', {
  template: `
    <section v-show="matchingItems.length">
      <h3>Matches:</h3>
      <ul>
        <li v-for="match in matchingItems"
            tabindex="0"
            @keyup.enter="addMatchToList(match)"
            @click="addMatchToList(match)">
          {{match.label}}
        </li>
      </ul>
    </section>
  `,
  computed: {
    ...Vuex.mapGetters(['matchingItems'])
  },
  methods: {
    addMatchToList(match) {
      this.$store.commit('addMatchToList', match)
    } 
  }
})

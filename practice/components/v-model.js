import Vue from 'vue'

const component = {
  model: {
    prop: 'value1'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  // template: `
  //   <div>
  //     <input type="text" :value="value">
  //   </div>
  // `,
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  // template: `
  //   <div>
  //     <comp-one :value="value" @input="value = arguments[0]"></comp-one>
  //   </div>
  // `
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `
})

import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    // active: {
    //   // type: Boolean,
    //   validator (value) {
    //     return typeof value === 'boolean'
    //   }
    // },
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="propOne">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  // mounted () {
  //   this.propOne = 'inner content'
  // },
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  template: `
    <div>
      <comp-one :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" prop-one="text2"></comp-one>
    </div>
  `
})

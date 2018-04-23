import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div>{{text}}</div>
      <ul>
        <li v-for="(val, key, index) in obj">{{val}}-{{key}}-{{index}}</li>
      </ul>
      <input type="checkbox" v-model="active">
      <div>
        <input type="checkbox" :value="111" v-model="arr">
        <input type="checkbox" :value="222" v-model="arr">
        <input type="checkbox" :value="333" v-model="arr">
        <input type="checkbox" :checked="checked" ref="cc" @change="change">
        <input type="checkbox" v-model="tf">
      </div>
      <p>{{typeof tf[0]}}</p>
      <p>{{arr}}</p>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    arr1: false,
    arr: [111, 222, 3333],
    checked: true,
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    tf: true
  },
  methods: {
    change () {
      this.checked = this.$refs.cc.checked
    }
  }
})

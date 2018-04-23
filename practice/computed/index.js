import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p><input type="text" v-model="number"></p>
      <p>firstName: <input type="text" v-model="firstName"></p>
      <p>lastName: <input type="text" v-model="lastName"></p>
      <p><input type="text" v-model="name"></p>
      <p>watch fullName: <input type="text" v-model="fullName"></p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'ruinan',
    lastName: 'Li',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  computed: {
    // name () {
    //   console.log('computed')
    //   return `${this.firstName} ${this.lastName}`
    // }
    name: {
      get () {
        console.log('computed')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  // mounted () {
  //   this.obj = {
  //     a: '345'
  //   }
  // },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + '-' + this.lastName
    // }
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + '-' + this.lastName
      },
      immediate: true
    },
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
      // deep: true // 默认是false
    }
  },
  methods: {
    getName () {
      console.log('methods')
      return `${this.firstName} ${this.lastName}`
    }
  }
})

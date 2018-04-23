import Vue from 'vue'

const component = {
  props: ['prop1'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render () {
    return this.$createElement(
      'div',
      {
        style: this.style
        // on: {
        //   click: () => { this.$emit('click') }
        // }
      }, [
        // this.$slots.default,
        this.$slots.header,
        this.prop1
      ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
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
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <div>
  //     <comp-one ref="comp">
  //       <span ref="span">{{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          prop1: this.value
        },
        // on: {
        //   click: this.handleClick
        // },
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement('span', {
          ref: 'span',
          slot: 'header',
          // domProps: {
          //   innerHTML: '<span>345</span>'
          // }
          attrs: {
            id: 'test-id'
          }
        }, this.value)
      ])
  }
})

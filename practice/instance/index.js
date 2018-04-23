import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

// let i = 0
setInterval(() => {
  // i++
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // app.obj.a = i
  // app.$set(app.obj, 'a', i)
  // app.$delete()
  // console.log(i)
  // app.$forceUpdate() // 强制组件去渲染一次
  // app.$options.data.text += 1 // 这里是没有效果的，说明在init这个对象的时候是做过一些修改的，不是直接引用的的$options.data
  // app.$data.text += 1 // 挂载vue实例根对象上的text（app.text），和$data上的text是同一个
}, 1000)

// console.log(app.$data)
// console.log(app.$props) // undefined
// console.log(app.$el)
// console.log(app.$options) // new Vue()的时候传进去的一整个对象
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app) // vue是以一个树状结构往下渲染的，我们会有一个在最上层的根节点，根节点其实就是我们new出来的app
// <item><div></div></item> 这个div就是作为item的children传入到item里面的
// console.log(app.$children)
// 下面的两个就是vue的插槽的概念 可以在template中书写调用 也可以编译成一个对象挂载到vue的实例上面
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs) // {div: div}
// console.log(app.$isServer) // 一般情况下不会用到，只有在服务端渲染的时候才会做这个判断，有一些代码可以在服务端运行，有一些只能在客户端运行
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
//   // console.log(newText, oldText)
// }) // 和在组件内声明一个watch是一样的，但是我们建议从options中写，为什么呢？

// setTimeout(() => {
//   unWatch()
// }, 2000)

// $once 只会触发一次
// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} - ${b}`)
// })

// app.$emit('test', 1, 2)

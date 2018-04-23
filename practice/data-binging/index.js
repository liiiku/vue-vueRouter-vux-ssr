import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div>
  //     {{isActive ? 'active' : 'not active'}}
  //     {{arr.join('-')}}
  //     {{html}}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div :class="[isActive ? 'active' : '']">
      {{html}}
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>'
  }
})

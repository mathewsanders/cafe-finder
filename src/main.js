// import Vue framework
import Vue from 'vue'

// turn on dubugging messages
Vue.config.debug = true

// import our CafeCard component
import CafeCard from './CafeCard.vue'

// tell vue that we'll use <cafe-card> as the tag for our component
Vue.component('cafe-card', CafeCard)

// start vue, and tell it that it should work across the scope of the 'body' element
// and pass in data that includes cafeNames, an array containgin the names of cafes to show
new Vue({
  el: 'body',
  data: {
    cafeNames: ["Cafe Grumpy", "Gimmie! Coffee", "Underline", "Stumptown", "Third Rail"]
  }
})

// import Vue framework
import Vue from 'vue'

// turn on dubugging messages
Vue.config.debug = true

// import our component
import CafeGridView from './CafeGridView.vue'
import CafeCard from './CafeCard.vue'
import GoogleMap from './GoogleMap.vue'

// tell vue the tags we want to use for our components
Vue.component('cafe-grid', CafeGridView)
Vue.component('cafe-card', CafeCard)
Vue.component('google-map', GoogleMap)

// start vue, and tell it that it should work across the scope of the 'body' element
new Vue({
  el: 'body'
})

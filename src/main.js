// import Vue framework
import Vue from 'vue'
import Resource from 'vue-resource'

// tell vue to use the package loaded from vue-resource
Vue.use(Resource)

// turn on dubugging messages
Vue.config.debug = true

/*
 Note: when vue requests a resource, include this as authorization infomration as a header
 you'll need to enter your own key:password value that you get from fieldbook.
 Note that this is *not* best practice, and would not be used in production
 because anyone who views source would be able to see the key and password which
 allows people to add, change, or delete records on your Fieldbook book.
 For our use of Fieldbook in this project, this actually isn't needed since we can
 configure Fieldbook to allow anyone access to view information, but I'm adding it
 to show the format to use if you extended the project to allow creation of new records.
*/
// Vue.http.headers.common['Authorization'] = 'Basic '+btoa('your-key:your-key-secret')

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

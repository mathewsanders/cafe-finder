// import Vue framework
import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

// tell vue to use the packages loaded from vue-resource, and vue-router
Vue.use(Resource)
Vue.use(Router)

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
import StyleGuideView from './StyleGuideView.vue'
import CafeGridView from './CafeGridView.vue'
import CafeCard from './CafeCard.vue'
import GoogleMap from './GoogleMap.vue'

// tell vue the tags we want to use for our components
// because we don't use StyleGuideView or CafeGridView as tags, but instead through the mounter we don't need to define tags for their use
Vue.component('cafe-card', CafeCard)
Vue.component('google-map', GoogleMap)

// create the router object
var router = new Router()

// configure the router to tell it what component to swap out with <router-view> depending
// on what the current URL matches.
router.map({
  '/city/:city': {
    component: CafeGridView
  },
  '/styleguide': {
    component: StyleGuideView
  }
})

// the default route to use if none of our matching rules match
router.redirect({
  '*': '/styleguide'
})

// this is a bit cludgy, but we're creating an empty vue component that's used momentarially
// while the router matches and figures out which component to show
var App = Vue.extend({})

// start the router
router.start(App, '#app')

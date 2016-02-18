// import Vue framework
import Vue from 'vue'

// turn on dubugging messages
Vue.config.debug = true

// import our CafeCard component
import CafeCard from './CafeCard.vue'

// tell vue that we'll use <cafe-card> as the tag for our component
Vue.component('cafe-card', CafeCard)

// our data structure that holds information about the cafes we want to display
var cafeData = [
  {
    name: "Cafe Grumpy",
    address: "224 W 20th St, New York, NY 10011",
    hours: "7am — 8pm",
    description: "Hip local coffeehouse chain serving a range of house-roasted brews in a relaxed setting."
  },
  {
    name: "Gimmie! Coffee",
    address: "228 Mott St, New York, NY 10012",
    hours: "7am — 8pm",
    description: "Espresso, drip brews & small-batch roasted coffee beans are the draws at this small cafe."
  },
  {
    name: "Underline",
    address: "511 W 20th St, New York, NY 10011",
    hours: "7am — 6pm",
    description: "Hip cafe offering espresso drinks, pour-overs & elevated toast in a petite, brick-walled setting."
  },
  {
    name: "Stumptown",
    address: "Ace Hotel New York, 18 W 29th St, New York, NY 10001",
    hours: "6am — 8pm",
    description: "Coffee bar chain offering house-roasted direct-trade coffee, along with brewing gear & whole beans."
  },
  {
    name: "Third Rail",
    address: "New York University, 240 Sullivan St, New York, NY 10012",
    hours: "7am — 8pm",
    description: "Small, cash-only spot draws serious caffeine lovers with wide selection of brews & baked goods."
  }
]

// start vue, and tell it that it should work across the scope of the 'body' element and pass in data to use
new Vue({
  el: 'body',
  data: {
    cafes: cafeData
  }
})

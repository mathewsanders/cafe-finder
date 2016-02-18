<!-- template code -->
<template>
  <nav>
    <h1>☕️ Coffee Finder <a >New York</a></h1>
    <ul id="sort">
      <li><a href="#">Nearby</a></li>
      <li><a href="#">Name</a></li>
    </ul>
  </nav>

  <main>
    <cafe-card
      v-for="cafe in cafes"
      :cafe="cafe">
    </cafe-card>
  </main>
</template>

<!-- logic code -->
<script>

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

export default {
  // make this 'cafes' property avalaible as data for this component
  data: function() {
    return {
      cafes: cafeData
    }
  }
}
</script>

<!-- style code -->
<style scoped>
nav {
  margin: 0.5em 1em;
  padding: 1em;
  overflow: auto;
}

nav h1 {
  display: inline;
  float: left;
}

nav a, a {
  color: #37BFD7;
}

#sort {
  list-style: none;
  display: inline;
  margin: 0;
  float:right;
}

#sort li {
  display: inline;
  font-weight: bold;
}

main {
  margin: 0;
  padding: 1em;
  background: #F8F8F8;
  overflow: auto;
}
</style>

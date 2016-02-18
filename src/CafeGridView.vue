<!-- template code -->
<template>
  <nav>
    <h1>☕️ Coffee Finder <a >New York</a></h1>
    <ul id="sort">
      <li><a href="#" @click="setSortOrder('distanceMeters')">Nearby</a></li>
      <li><a href="#" @click="setSortOrder('name')">Name</a></li>
    </ul>
  </nav>

  <main>
    <cafe-card
      v-for="cafe in cafes | orderBy cafeSortOrder"
      :cafe="cafe">
    </cafe-card>
  </main>
</template>

<!-- logic code -->
<script>

// you'll need to update your ID based on the book you create on Fieldbook
var bookId = '56c3c166589a1f0300c53acd'
var baseUrl = 'https://api.fieldbook.com/v1/' + bookId

export default {
  // make 'cafes' and 'cafeSortOrder' avalaible as data avalaible for this component to use
  data: function() {
    return {
      cafes: [],
      cafeSortOrder: 'distanceMeters'
    }
  },
  // add a method that changes 'cafeSortOrder' to whatever value is passed in
  methods: {
    setSortOrder: function (sortOrder) {
      this.cafeSortOrder = sortOrder
    }
  },
  // this defines a method that is called when this component is ready to display
  ready: function () {

    var listCafesUrl = baseUrl + '/cafes'

    // request content from a URL, and then when we have the response update our 'cafes' property
    this.$http.get(listCafesUrl).then(function (response) {
        this.cafes = response.data
    }, function (response) {
        // error callback
    })
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

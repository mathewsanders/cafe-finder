<!-- template code -->
<template>
  <main>

    <h1>Scenarios</h1>
    <ul>
      <li><a v-link="{ path: '/city/newyork' }">Cafes in New York</a></li>
    </ul>

    <h1>Components</h1>

    <section>
      <div class="details">
        <h1>Cafe Card</h1>
        <p>The cafe card shows information about a specific cafe including a description, hours, and the cafe's location.</p>
        <textarea v-model="cafe | json"></textarea>
      </div>
      <div class="component">
        <cafe-card :cafe="cafe"></cafe-card>
      </div>
    </section>

    <section>
      <div class="details">
        <h1>Google Map</h1>
        <p>The google map simply shows a location with the option to open Google Maps for more information.</p>
        <textarea v-model="place | json"></textarea>
      </div>
      <div class="component">
        <google-map :place="place.address"></google-map>
      </div>
    </section>

    <h1>Styles</h1>
    <p>Default CSS styles (headings, paragraph text, lists, colors etc) can be documented here.</p>

  </main>
</template>

<!-- logic code -->
<script>

export default {
  // some data to use when displaying components in our style guide
  data: function (){
    return {
      cafe: {
        name: "Umbar Cafe",
        description: 'A place to drink coffee and meet friends.',
        hours: '7am — 8pm',
        address: '26 Broadway New York',
      },
      place: {
        address: "2818 Cypress Ridge Blvd, Wesley Chapel"
      }
    }
  },
  // when this component is ready to show, also update the page title
  ready: function () {
    document.title = "Components"
  }
}
</script>

<!-- style code -->
<style scoped>
main {
  margin: 1em;
}

main section {
  display: table;
  background: #F8F8F8;
  padding: 1em;
  margin: 1em;
  position: relative;
}

section textarea {
  min-height: 10em;
  margin-bottom: 1em;
  box-sizing: border-box;
	width: 100%;
  padding: 0.5em;
  font-size: 0.8em;
}

section div {
  display: table-cell;
  width: 50%;
  vertical-align: top;
  padding: 0.5em;
}

.component {
  vertical-align: middle;
  text-align: center;
}
</style>

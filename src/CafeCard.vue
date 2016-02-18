<!-- template code -->
<template>
  <div class="cafe-card">
    <h1>Cafe Grumpy</h1>
    <p class="description">Hip local coffeehouse chain serving a range of house-roasted brews in a relaxed setting.</p>
    <dl class="address">
      <dt>Address</dt>
      <dd>224 W 20th St, New York, NY 10011</dd>
    </dl>
    <div class="map"></div>
  </div>
</template>

<!-- style code -->
<style>
.cafe-card {
  display: inline-block;
  margin: 1em;
  padding: 1em;
  padding-top: 1.5em;
  width: 14em;
  height: 23em;
  background: white;
  border: 1px solid #C0C0C0;
  position: relative;
  text-align: left;
}

.cafe-card:after {
  content: " ";
  position: absolute;
  left: -1px;
  right: -1px;
  top: -1px;
  height: 10px;
  background: #D0021B;
  border: 1px solid #D0021B;
}

.description {
  height: 5em;
  overflow: hidden;
}

dl {
  margin: 0.5em 0;
}

dt {
  font-weight: bold;
  font-size: 0.8em;
}

dd {
  margin: 0;
  font-size: 0.9em;
}

.map {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0em;
  height: 10em;
  background: #F8F8F8;
}
</style>

<!-- template code -->
<template>
  <div class="cafe-card">
    <h1>{{ cafe.name }}</h1>
    <p class="description">{{ cafe.description }}</p>
    <dl class="hours">
      <dt>Hours</dt>
      <dd>{{ cafe.hours }}</dd>
    </dl>
    <dl class="address">
      <dt>Address</dt>
      <dd>{{ cafe.address }}</dd>
    </dl>
    <div class="map"></div>
  </div>
</template>

<!-- logic code -->
<script>
export default {
  props: ['cafe']
}
</script>

<!-- style code -->
<style scoped>
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
  float: left;
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

.address dd {
  height: 1.2em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

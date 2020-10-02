<template>
  <div id="app">
    <b-container>
      <b-row class="gallery">
        <div class="gallery__title">
          <i><img src="../assets/images/picture.svg" alt=""></i>
          <h2>Gallery</h2>
        </div>
      </b-row>
      <Test :images="images" />
    </b-container>
  </div>
</template>
<script>
  import Test from '../components/Test.vue';
export  default {
  name:'app',
  comments: {
    Test,
  },
}

</script>

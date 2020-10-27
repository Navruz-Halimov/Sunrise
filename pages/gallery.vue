<template>
  <div id="app">
    <b-container>
      <b-row class="gallery">
        <div class="gallery__title">
          <h2>{{$t('navbar.gallery')}}</h2>
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

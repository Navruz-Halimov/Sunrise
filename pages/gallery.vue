<template>
  <div id="app">
    <b-container>
      <Test :thumbnail="images[2]" :images="images" />
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
  data(){
    return  {
      images: [
        'https://www.wyndhamhotels.com/content/dam/property-images/en-us/hr/uz/others/tashkent/49135/49135_exterior_view_1.jpg?crop=3000:2000;*,*&downsize=720:*',
        'https://www.wyndhamhotels.com/content/dam/property-images/en-us/hr/uz/others/tashkent/49135/49135_exterior_view_2.jpg?crop=1278:852;*,*&downsize=720:*',
        'https://www.wyndhamhotels.com/content/dam/property-images/en-us/hr/uz/others/tashkent/49135/49135_lobby_view_2.jpg?crop=3000:2000;*,*&downsize=720:*',
        'https://www.wyndhamhotels.com/content/dam/property-images/en-us/hr/uz/others/tashkent/49135/49135_lobby_view_3.jpg?crop=3000:2000;*,*&downsize=720:*',
      ],
    }
  },
  methods:{

  }
}

</script>

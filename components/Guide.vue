<template>
  <div class="tourist__guide">
    <b-container>
      <h1 class="tourist__guide-heading">
        <font-awesome-icon
          class="info__circle"
          :icon="['fas', 'info-circle']"
        />
        {{$t('tourist.heading')}}
      </h1>
      <b-row>
        <b-col cols="12" lg="5">
          <ul class="guide__list">
            <li class="guide__item" v-for="(guide, index) in getGuides.slice(0,6)" :key="index.id">
              <nuxt-link :to="localePath('/guide/'+guide.id)" class="guide__link">
                {{guide.title_ru}}
              </nuxt-link>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" offset="0" lg="5" offset-lg="2">
           <ul class="guide__list">
            <li class="guide__item" v-for="(guide, index) in getGuides.slice(6,12)" :key="index.id">
              <nuxt-link :to="localePath('/guide/'+guide.id)" class="guide__link">
                {{guide.title_ru}}
              </nuxt-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  // import {mapGetters} from 'vuex';

  export default {
    data() {
      return{
        getGuides:[
         {
           id:1,
           title_ru:"The best places to visit"
         },
          {
           id:2,
           title_ru:"the best Restaurants"
         }, 
         {
           id:3,
           title_ru:"The best shops"
         },
          {
           id:4,
           title_ru:"Sightseeings"
         },
          {
           id:5,
           title_ru:"Cinemas"
         },
          {
           id:6,
           title_ru:"Parks"
         },
          {
           id:7,
           title_ru:"Old Memorandum"
         },
          {
           id:8,
           title_ru:"New Buildings"
         },
          {
           id:9,
           title_ru:"Tour"
         },
          {
           id:10,
           title_ru:"Place to Visit"
         },
          {
           id:11,
           title_ru:"Atractions"
         },
          {
           id:12,
           title_ru:"Subway and Bus stations"
         },
        ]
      }
    },
    methods: {},
    // mounted() {
    //   this.$store.dispatch('getGuides');
    // },
    computed: {
      // ... mapGetters({
      //   getGuides: 'getGuides'
      // })
    }
  }
</script>

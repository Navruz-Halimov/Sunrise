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
            <li class="guide__item" v-for="(guide, index) in getGuides" :key="index.id">
              <nuxt-link :to="localePath('/guide/'+guide.id)" class="guide__link">
                <span v-html="`${guide.title_}`+`${$i18n.locale}`"></span>
              </nuxt-link>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" offset="0" lg="5" offset-lg="2">
          <ul class="guide__list">
            <li class="guide__item">
              <nuxt-link to="" class="guide__link"></nuxt-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return{}
    },
    methods: {},
    mounted() {
      this.$store.dispatch('getGuides');
    },
    computed: {
      ... mapGetters({
        getGuides: 'getGuides'
      })
    }
  }
</script>

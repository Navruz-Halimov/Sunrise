<template>
  <div class="gallery">
    <b-container class="p-0">
      <b-row class="gallery__content gallery__content-main">
        <b-col
          v-for="(gallereyid, index) of gallery.slice(0,count)"
          :key="index"
          cols="10"
          offset="1"
          sm="6"
          offset-sm="0"
          md="6"
          lg="3"
        >
          <div class="photo" @click.prevent="show(index)">
            <img
              class="photo__img"
              :src="gallereyid.image"
              alt="gallery image"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="modals" v-if="visible">
      <button type="button" @click.stop="hide" class="close">
        <i></i>
        <i></i>
      </button>
      <swiper class="swiper modals__content" :options="visit__slider">
        <swiper-slide
          v-for="(gallereyid, index) of gallery"
          :key="index"
          class="modals__img"
        >
          <img :src="gallereyid.image" alt="" />
        </swiper-slide>
        <div class="swiper-button-prev book__prev" slot="button-prev"></div>
        <div class="swiper-button-next book__next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['count'],
  data() {
    return {
      gallery: [],
      visit__slider: {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      visible: false,
      index: 0,
      id: 0,
    }
  },
  methods: {
    async getGallery() {
      await this.$axios.get('/gallery/list/').then((res) => {
        this.gallery = res.data
        console.log(res)
      })
    },
    show(id) {
      this.visible = true
      this.id = id
    },
    hide() {
      this.visible = false
      this.id = 0
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.getGallery()
  },
}
</script>

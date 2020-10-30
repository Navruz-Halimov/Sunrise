<template>
  <div class="gallery">
    <div class="spinner__wrapper" v-if="loader">
    <div class="atom-spinner" >
      <div class="spinner-inner">
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <!--Chrome renders little circles malformed :(-->
        <div class="spinner-circle">
          &#9679;
        </div>
      </div>
    </div>

    </div>
    <b-container class="p-0" v-else>
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
      loader: true,
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
      await this.$axios.get('/gallery/list/')
      .then((res) => {
        this.gallery = res.data
        this.loader = false;
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



<style scoped>
.spinner__wrapper{
display: flex;
justify-content: center;
align-content: center;
height: 100vh;
}
.atom-spinner, .atom-spinner * {
      box-sizing: border-box;
    }

    .atom-spinner {
      height: 60px;
      width: 60px;
      overflow: hidden;

    }

    .atom-spinner .spinner-inner {
      position: relative;
      display: block;
      height: 100%;
      width: 100%;  
    }

    .atom-spinner .spinner-circle {
      display: block;
      position: absolute;
      color: #ff1d5e;
      font-size: calc(60px * 0.24);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .atom-spinner .spinner-line {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation-duration: 1s;
      border-left-width: calc(60px / 25);
      border-top-width: calc(60px / 25);
      border-left-color: #ff1d5e;
      border-left-style: solid;
      border-top-style: solid;
      border-top-color: transparent;
    }

    .atom-spinner .spinner-line:nth-child(1) {
      animation: atom-spinner-animation-1 1s linear infinite;
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
    }

    .atom-spinner .spinner-line:nth-child(2) {
      animation: atom-spinner-animation-2 1s linear infinite;
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
    }

    .atom-spinner .spinner-line:nth-child(3) {
      animation: atom-spinner-animation-3 1s linear infinite;
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
    }

    @keyframes atom-spinner-animation-1 {
      100% {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes atom-spinner-animation-2 {
      100% {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes atom-spinner-animation-3 {
      100% {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
</style>
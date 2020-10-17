<template>
  <div class="gallery">
    <b-container>
      <b-row class="gallery__content gallery__content-main">
        <b-col
          v-for="(image, index) of images.slice(0, 3)" :key="index"
          cols="10" offset="1" sm="6" offset-sm="0" md="6" lg="3"
        >
          <div class="photo" @click.prevent="show(index)">
            <img class="photo__img" :src="require(`../assets/images/rooms/${image}`)"  alt="gallery image" />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="modals" v-if="visible">
      <button type="button" @click.stop="hide" class="close">
        <i></i>
        <i></i>
      </button>
      <swiper class="swiper modals__content"  :options="visit__slider">
        <swiper-slide v-for="(image,index) of images.slice(0, 3)" :key="index" class="modals__img">
          <img :src="require(`../assets/images/rooms/${image}`)" alt=""/>
        </swiper-slide>
        <div class="swiper-button-prev book__prev" slot="button-prev"></div>
        <div class="swiper-button-next book__next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visit__slider: {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      images: [
        'ABDUMANNONRAKHIMOVV-162.jpg',
        'ABDUMANNONRAKHIMOVV-194.jpg',
        'ABDUMANNONRAKHIMOVV-212.jpg',
        'ABDUMANNONRAKHIMOVV-217.jpg',
      ],
      visible: false,
      index: 0,
      id: 0,
    }
  },
  methods: {
    show(id) {
      this.visible = true
      this.id = id
    },
    hide() {
      this.visible = false
      this.id = 0
    },
  },
}
</script>

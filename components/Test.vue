<template>
  <div class="gallery">
    <b-container>
      <b-row class="gallery__content">
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
        'ABDUMANNONRAKHIMOVV-218.jpg',
        'ABDUMANNONRAKHIMOVV-235.jpg',
        'ABDUMANNONRAKHIMOVV-239.jpg',
        'ABDUMANNONRAKHIMOVV-241.jpg',
        'ABDUMANNONRAKHIMOVV-258.jpg',
        'ABDUMANNONRAKHIMOVV-260.jpg',
        'ABDUMANNONRAKHIMOVV-261.jpg',
        'ABDUMANNONRAKHIMOVV-262.jpg',
        'ABDUMANNONRAKHIMOVV-263.jpg',
        'ABDUMANNONRAKHIMOVV-279.jpg',
        'ABDUMANNONRAKHIMOVV-281.jpg',
        'ABDUMANNONRAKHIMOVV-286.jpg',
        'ABDUMANNONRAKHIMOVV-289.jpg',
        'photo_2020-10-12_16-13-54.jpg',
        'photo_2020-10-12_16-13-55.jpg',
        'photo_2020-10-12_16-13-56.jpg',
        'photo_2020-10-12_16-14-03.jpg',
        'photo_2020-10-12_16-14-05.jpg',
        'photo_2020-10-12_16-14-06.jpg',
        'photo_2020-10-12_16-14-15.jpg',
        'photo_2020-10-12_16-14-16.jpg',
        'photo_2020-10-12_16-14-20.jpg',
        'photo_2020-10-12_16-14-22.jpg',
        'photo_2020-10-12_16-14-56.jpg',
        'photo_2020-10-12_16-14-57.jpg',
        'photo_2020-10-12_16-14-58.jpg',
        'photo_2020-10-12_16-15-06.jpg',
        'photo_2020-10-12_16-15-07.jpg',
        'photo_2020-10-12_16-15-08.jpg',
        'photo_2020-10-12_16-15-0811.jpg',
        'photo_2020-10-12_16-15-09.jpg',
        'photo_2020-10-12_16-15-11.jpg',
        'photo_2020-10-12_16-15-17.jpg',
        'photo_2020-10-12_16-15-18.jpg',
        'photo_2020-10-12_16-15-1911.jpg',
        'photo_2020-10-12_16-15-19.jpg',
        'photo_2020-10-12_16-15-21.jpg',
        'photo_2020-10-12_16-15-23.jpg',
        'photo_2020-10-12_16-15-24.jpg',
        'photo_2020-10-12_16-15-25.jpg',
        'photo_2020-10-12_16-15-28.jpg',
        'photo_2020-10-12_16-15-30.jpg',
        'photo_2020-10-12_16-15-39.jpg',
        'photo_2020-10-12_16-15-41.jpg',
        'photo_2020-10-12_16-15-42.jpg',
        'photo_2020-10-12_16-15-43.jpg',
        'photo_2020-10-12_16-15-46.jpg',
        'photo_2020-10-12_16-15-47.jpg',
        'photo_2020-10-12_16-15-49.jpg',
        'photo_2020-10-12_16-15-51.jpg',
        'photo_2020-10-12_16-15-53.jpg',
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

<template>
  <div class="visit">
    <b-container>
      <b-row>
        <b-col class="visit__title" lg="12">
          <h2>PLACES TO VISIT</h2>
        </b-col>
        <b-col sm="6" md="4" lg="3" v-for="(image,index) of images" :key="index" >
          <div class="visit__card">
            <img :src="require(`../assets/images/rooms/${image.url}`)" alt=""/>
            <div class="visit__text" @click="show(index)">
              <h6>{{image.title}}</h6>
            </div>
          </div>
        </b-col>

      </b-row>
    </b-container>
    <div class="visit__modal" v-if="visible">
      <button @click="hide" type="button" class="close">
      <i></i>
      <i></i>
      </button>
        <swiper class="swiper modal__content"  :options="visit__slider">
          <swiper-slide v-for="(image,index) of images" :key="index">
            <img :src="require(`../assets/images/rooms/${image.url}`)" alt=""/>
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
          {
            url: 'ABDUMANNONRAKHIMOVV-162.JPG',
            title: 'Place 1'
          },
          {
            url: 'photo_2020-10-12_16-14-03 (2).jpg',
            title: 'Place 2'
          },
          {
            url: 'photo_2020-10-12_16-14-58 (3).jpg',
            title: 'Place 3'
          },
          {
            url: 'photo_2020-10-12_16-15-41 (2).jpg',
            title: 'Place 4'
          },
        ],
        id: 0,
        index: 0,
        visible: false
      }
    },
    methods: {
      show(id) {
        this.visible = true;
        this.id = id;
      },
      hide() {
        this.visible = false;
        this.id = 0;
      },
    }
  }
</script>

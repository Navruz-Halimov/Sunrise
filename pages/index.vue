<template>
  <div class="main__page">
    <div class="navbar__slider">
      <swiper class="swiper" :options="header__slider">
        <swiper-slide
          ><img src="../assets//images/11.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/22.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <b-container>
      <div class="box">
         <section class="order__part">
      <date-picker v-model="value2" value-type="format" format="YYYY-MM-DD" placeholder="Arrival date"    :default-value="new Date()" :disabled-date="notBeforeToday"></date-picker>
      <date-picker v-model="value3" value-type="format" format="YYYY-MM-DD" placeholder="Departure date"    :default-value="new Date()" :disabled-date="notBeforeToday"></date-picker>
      <select name="adults__capacity" id="" class="adults__capacity">
        <option value="0">Adults</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
       <select name="children__capacity" id="" class="children__capacity">
        <option value="0">Children</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </section>
      </div>
    </b-container>
    <b-container>
      <b-row class="gallery">
        <div class="gallery__title">
          <i><img src="../assets/images/picture.svg" alt=""></i>
          <h2>Gallery</h2>
        </div>
      </b-row>
      <Test :images="images" />
      <b-button href="http://localhost:3000/gallery" class="btn-img my-4">Gallery page</b-button>
    </b-container>
  </div>
</template>

<script>
  import Test from '../components/Test.vue';
export default {
  name: 'Range',
  comments: {
    Test,
  },
  data() {
    return {
      value2: [new Date()],
      value3:[new Date()],
      header__slider: {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        effect: 'fade',
        //  grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods:{
     notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
  }
}
</script>

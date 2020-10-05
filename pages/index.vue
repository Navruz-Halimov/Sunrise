<template>
  <div class="main__page">
    <div class="navbar__slider">
      <swiper class="swiper" :options="header__slider">
        <swiper-slide
          ><img src="../assets//images/3D/1.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              yeah man itis working I think don't pay attention to the typos
              that I have typed
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/1night.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2night.jpg" alt="" />
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
      <form class="booking__form" method="" action="POST">
        <section class="order__part">
          <b-row>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <date-picker
                v-model="value2"
                value-type="format"
                format="YYYY-MM-DD"
                placeholder="Arrival date"
                :default-value="new Date()"
                :disabled-date="notBeforeToday"
              ></date-picker>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <date-picker
                v-model="value3"
                value-type="format"
                format="YYYY-MM-DD"
                placeholder="Departure date"
                :default-value="new Date()"
                :disabled-date="notBeforeToday"
              ></date-picker>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="adults__capacity" class="adults__capacity">
                <option value="0" selected disabled>Adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="children__capacity" class="children__capacity">
                <option value="0" selected disabled>Children</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="room__type" class="room__type">
                <option value="0" selected disabled>Choose a Room</option>
                <option value="1">Standard room</option>
                <option value="2">Standard Family room</option>
                <option value="3">Deluxe double room</option>
                <option value="4">Standard room</option>
                <option value="5">Standard room</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <input type="submit" class="book__btn" value="Book now" />
            </div>
          </b-row>
        </section>
      </form>
    </b-container>
    <b-container>
      <b-row class="gallery">
        <div class="gallery__title">
          <i><img src="../assets/images/picture.svg" alt="" /></i>
          <h2>Gallery</h2>
        </div>
      </b-row>
      <Test :images="images" />
      <b-button
        href="http://localhost:3000/gallery"
        class="btn-img my-4"
        to="/gallery"
        >For more</b-button
      >
    </b-container>
    <div class="tourist__guide">
      <b-container>
        <h1 class="tourist__guide-heading"><font-awesome-icon class="info__circle" :icon="['fas', 'info-circle']"/>Tourist guide</h1>
        <ul class="guide__list">
          <li class="guide__item">
            <b-row>
              <b-col lg="6">
                <nuxt-link to="" class="guide__link">
                  Online scoreboard of Tashkent airport Airlines</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Law and law OVIRs of Tashkent</nuxt-link
                >
                <nuxt-link to="" class="guide__link">Travel Tips</nuxt-link>
                <nuxt-link to="" class="guide__link"
                  >Travel insurance</nuxt-link
                >
                <nuxt-link to="" class="guide__link">Travel tips</nuxt-link>
                <nuxt-link to="" class="guide__link"
                  >Online scoreboard of Tashkent airport</nuxt-link
                >
              </b-col>
              <b-col lg="6">
                <nuxt-link to="" class="guide__link">
                  Tourism Code Horoscope for 2019</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Embassies in Tashkent</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Accommodation in hotels</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Communication abroad</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Travel Dictionary</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >TOP-10 in the world of tourism</nuxt-link
                >
              </b-col>
            </b-row>
          </li>
        </ul>
      </b-container>
    </div>
  </div>
</template>

<script>
import Test from '../components/Test.vue'
export default {
  name: 'Range',
  comments: {
    Test,
  },
  data() {
    return {
      value2: [new Date()],
      value3: [new Date()],
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
  methods: {
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0))
    },
  },
}
</script>

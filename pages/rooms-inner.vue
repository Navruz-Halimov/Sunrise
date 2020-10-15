<template>
  <div class="rooms__select">
    <b-container>
      <b-row>
        <b-col lg="3">
          <ul class="rooms__select-amenties">
            <span class="rooms__select-amenties-heading">Amenties</span>
            <li class="rooms__select-amenties-item">Regency Club access</li>
            <li class="rooms__select-amenties-item">Espresso machine</li>
            <li class="rooms__select-amenties-item">Hyatt Grand Bed™</li>
            <li class="rooms__select-amenties-item">55-inch flatscreen TV</li>
            <li class="rooms__select-amenties-item">Blackout drapes</li>
            <li class="rooms__select-amenties-item">Spacious work desk</li>
            <li class="rooms__select-amenties-item">
              Individually controlled air conditioning and heat
            </li>
            <li class="rooms__select-amenties-item">TV in bathroom</li>
            <li class="rooms__select-amenties-item">In-room safe</li>
            <li class="rooms__select-amenties-item">Minibar</li>
            <li class="rooms__select-amenties-item">Tea and coffeemaker</li>
            <li class="rooms__select-amenties-item">Iron and ironing board</li>
            <li class="rooms__select-amenties-item">Hair dryer</li>
            <li class="rooms__select-amenties-item">
              Plush bath robe and slippers
            </li>
            <li class="rooms__select-amenties-item">Morning newspaper</li>
            <li class="rooms__select-amenties-item">Pillow menu</li>
            <li class="rooms__select-amenties-item">Crib upon request</li>
            <li class="rooms__select-amenties-item">
              Rollaway bed upon request
            </li>
          </ul>
        </b-col>
        <b-col lg="6">
          <swiper class="rooms__select-slider" :options="rooms__select">
            <swiper-slide
              ><img src="../assets//images/3D/1.jpg" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="../assets/images/3D/1night.jpg" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="../assets/images/3D/2.jpg" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="../assets/images/3D/2night.jpg" alt="" />
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="rooms__select-text">
            The exclusive Presidential Suite encompasses 190 sq m of space with
            an elegant living area including a study room, a kitchenette with
            dining area, an expanded bathroom, and a guest bathroom. This is a
            premium suite.
          </div>
        </b-col>
        <b-col lg="3">
          <div class="floor__left-wrapper">
          <div class="floor__number">First Floor scheme</div>
          <img class="floor__mini-2d" src="../assets/images/1floor/1.jpg" alt="">
            <p class="floor__text">First floor rooms</p>
          <b-pagination-nav
            number-of-pages="10"
            base-url="#"
            hide-goto-end-buttons = "false"
            pills = "true"
            limit="10"
            class="room__inner-pagination"
          ></b-pagination-nav>
            <b-button class="floor__btn" pill :to="localePath('/payment')">Select room</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms__select: {
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
  methods: {},
}
</script>

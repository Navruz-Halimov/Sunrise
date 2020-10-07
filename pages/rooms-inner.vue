<template>
  <div class="rooms__select">
    <b-container>
      <b-row>
        <b-col lg="3"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          quae corporis vitae temporibus harum eaque soluta eos iste ad mollitia
          nobis, deserunt facere consequatur ullam non nesciunt dolores veniam.
          Autem!</b-col
        >
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
        </b-col>
        <b-col lg="3"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi
          porro, itaque nisi optio consequatur aut sequi reiciendis! At ipsam
          nobis ipsa eos molestiae! Odio nemo omnis nihil laudantium
          corporis.</b-col
        >
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

<style></style>

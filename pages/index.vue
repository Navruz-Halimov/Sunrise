<template>
  <div class="main__page">
    <div class="navbar__slider">
      <swiper class="swiper" :options="header__slider">
        <swiper-slide
          ><img src="../assets//images/11.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium error earum amet a qui.</p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/22.jpg" alt=""
        />
        <div class="swiper-caption" >
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium error earum amet a qui.</p>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <b-container>
      <!-- <h1 class="animate__animated animate__zoomInDown">hollow</h1> -->
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>

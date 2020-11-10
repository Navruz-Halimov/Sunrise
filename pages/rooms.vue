<template>
  <section class="house choshtepa rooms">
    <!-- 360 link -->
    <div class="house-main house-main__floor">
      <div class="left__block">
        <nuxt-link to="" class="left__block-btn block-1">
          Restaurant 
          <img src="../assets/images/rooms/cutlery.svg" alt="" />
        </nuxt-link>
        <nuxt-link to="" class="left__block-btn block-3">
          Conference rooms
          <img src="../assets/images/rooms/teacher.svg" alt="" />
        </nuxt-link>
        <nuxt-link to="" class="left__block-btn block-2">
          Spa
          <img src="../assets/images/rooms/lotus.svg" alt="" />
        </nuxt-link>
        
      </div>
      <!-- <img src="../assets/images/rooms/2.jpg" alt="sunrise hotel" /> -->
      <div class="house-popup" :class="{ visible: visible }">
        <span class="house-popup__number" id="floor">{{ this.floor }}</span>
        <span class="house-popup__desc">Floor</span>
        <span class="house-popup__line"></span>
        <span class="house-popup__desc">Hotel <br />Sunrise</span>
      </div>
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <a
          :href="localePath('/firstfloor')"
          @mouseover=";(visible = true), (floor = 1)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(183, '3', '8')"
            d="M450.17 927.767L445.88 810.746V810.582L1820.17 755.336V920.70Z"
          ></path>
        </a>
        <a
          :href="localePath('/secondfloor')"
          @mouseover=";(visible = true), (floor = 2)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(182, '2', '8')"
            d="M972.17 658.767L445.88 700.746V810.582L1820.17 755.336V590Z"
          ></path>
        </a>

        <a
          :href="localePath('/thirdfloor')"
          @mouseover=";(visible = true), (floor = 3)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(184, '4', '8')"
            d="M452.17 700.767L445.88 670.746V580.182L1820.17 400.336V590Z"
          ></path>
        </a>
        <a
          :href="localePath('/fourthfloor')"
          @mouseover=";(visible = true), (floor = 4)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(185, '5', '8')"
            d="M1372.17 460.767L445.88 580.46V470.482L1820.17 220.336V400Z"
          ></path>
        </a>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      floor: 0,
      visible: false,
    }
  },
  methods: {},
}
</script>

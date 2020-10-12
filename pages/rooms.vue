<template>
  <section class="house choshtepa rooms">
    <!-- 360 link -->
    <div class="house-main house-main__floor">
      <img src="../assets/images/3D/2.jpg" alt="sunrise hotel" />
      <div class="house-popup" :class="{ visible: visible }">
        <span class="house-popup__number" id="floor">{{ this.floor }}</span>
        <span class="house-popup__desc">Floor</span>
        <span class="house-popup__line"></span>
        <span class="house-popup__desc">Hotel <br />Sunrise</span>
      </div>
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <a
          :href="localePath('/floor/firstfloor')"
          id="house__svg_182"
          @mouseover="(visible = true), (floor = 1)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(183, '3', '8')"
            d="M1372.17 897.767L637.88 860.746V775.582L1852.17 745.336V887.70Z"
          ></path>
        </a>
        <a
          :href="localePath('/floor/secondfloor')"
          id="house__svg_183"
          @mouseover="(visible = true), (floor = 2)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(182, '2', '8')"
            d="M1372.17 610.767L637.88 670.746V775.582L1852.17 745.336V575Z"
          ></path>
        </a>

        <a
          :href="localePath('/floor/thirdfloor')"
          id="house__svg_184"
          @mouseover="(visible = true), (floor = 3)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(184, '4', '8')"
            d="M1372.17 610.767L637.88 670.746V570.582L1852.17 
                        410.336V575Z"
          ></path>
        </a>
        <a
          :href="localePath('/floor/fourfloor')"
          id="house__svg_185"
          @mouseover="(visible = true), (floor = 4)"
          @mouseleave="visible = false"
        >
          <path
            onmouseleave="mouseLeave()"
            onmouseenter="mouseEnter(185, '5', '8')"
            d="M1372.17 470.767L637.88 570.746V480.582L1852.17 
                        260.336V410Z"
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

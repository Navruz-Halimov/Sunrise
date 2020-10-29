<template>
  <div class="book__page">
    <b-container>
      <b-row>
        <b-col class="book__header" cols="12" md="12">
          <b-row>
            <b-col cols="12" sm="8" md="6" lg="4">
              <img src="../assets/images/rooms/ABDUMANNONRAKHIMOVV-279.jpg" alt=""/>
            </b-col>
            <b-col cols="12" sm="4" md="6" lg="4">
              <div class="pt-2">
                <h3>Sunrise Hotel in Tashkent</h3>
                <p>
                  <span>Navoi Street, 1 A</span>
                  <span>Tashkent,</span>
                  <span>Uzbekistan</span>
                </p>
                <a href="#">+998 99 000 00 00</a>
              </div>
            </b-col>
            <b-col md="4" />
            <b-col class="header__content" cols="12" md="12">
              <b-row>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/amenties/wifi.svg" alt="" />
                  <span>Free Internet Access</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/cutlery.svg" alt="" />
                  <span>Restaurant On-Site</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/serving-dish.svg" alt="" />
                  <span>Room Service</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/weight.svg" alt="" />
                  <span>Fitness Center</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/swimming-pool.svg" alt="" />
                  <span>Pool</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/lotus.svg" alt="" />
                  <span>Spa</span>
                </b-col>
              </b-row>
              <b-collapse id="collapse-1" class="mt-2">
                <b-row>
                  <b-col class="amenity" cols="4" sm="4" md="2">
                    <img src="../assets/images/icons/key.svg" alt="" />
                    <span>Digital Key</span>
                  </b-col>
                  <b-col class="amenity" cols="4" sm="4" md="2">
                    <img src="../assets/images/icons/clock.svg" alt="" />
                    <span>Digital Check-In</span>
                  </b-col>
                  <b-col class="amenity" cols="4" sm="4" md="2">
                    <img src="../assets/images/icons/printer.svg" alt="" />
                    <span>Business Services</span>
                  </b-col>
                  <b-col class="amenity" cols="4" sm="4" md="2">
                    <img src="../assets/images/icons/hanger-line.svg" alt="" />
                    <span>Laundry</span>
                  </b-col>
                  <b-col class="amenity" cols="4" sm="4" md="2">
                    <img src="../assets/images/icons/concierge.svg" alt="" />
                    <span>Concierge</span>
                  </b-col>
                  <b-col class="amenity" cols="4" sm="4" md="2">
                    <img src="../assets/images/icons/teacher.svg" alt="" />
                    <span>Meeting Facilities</span>
                  </b-col>
                </b-row>
              </b-collapse>
              <b-button
                v-b-toggle.collapse-1
                variant="transparent"
                @click="amenityShow()"
              >
                {{ amenityText }}
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="book_hr" cols="12" md="12"
               v-for="(room,index) of rooms" :key="index.id" >
          <b-row>
            <b-col class="mb-sm-2 mb-md-2" cols="12" sm="12" md="4" lg="4">
              <div class="book__slide">
                <swiper class="swiper book_img" :options="header__slider">
                  <swiper-slide v-for="room of imageset" :key="room.id">
                    <img :src="room.image" alt="///"/>
                  </swiper-slide>
                  <div
                    class="swiper-button-prev book__prev"
                    slot="button-prev"
                  ></div>
                  <div
                    class="swiper-button-next book__next"
                    slot="button-next"
                  ></div>
                </swiper>
                <div class="book__expand" @click.prevent="showModal(index)">
                  <font-awesome-icon
                    class="expand"
                    :icon="['fas', 'expand-arrows-alt']"
                  />
                </div>
              </div>
            </b-col>
            <b-col cols="12" sm="7" md="4" lg="5">
              <div class="book__text">
                <h4 v-html="room.description_1"></h4>
                <p v-html="room.description_2"></p>
                <a v-b-toggle.collapse-2 @click="showDetails()">
                  {{ textDetails }}
                </a>
                <b-collapse id="collapse-2">
                  <ul>
                    <h5>Удобства в номере</h5>
                    <li v-html="room.description_1"></li>
                  </ul>
                </b-collapse>
              </div>
            </b-col>
            <b-col cols="12" sm="5" md="4" lg="3">
              <div class="book__price">
                <h2>{{ Math.floor(room.cost_per_day * 10359.88) }} UZS</h2>
                <span>Сред. за ночь (UZS)</span>
                <button
                  @click="showPriceModal()"
                  class="btn book__btn book__btn--btn"
                  type="button">
                  Select
                </button>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="modals" class="book__modal" @click="hideModal">
      <button type="button" @click="hideModal" class="close">
        <i></i>
        <i></i>
      </button>
      <div @click.stop="" class="modal__slide">
        <swiper class="swiper book_img" :options="header__slider">
          <swiper-slide v-for="(image, index) of images" :key="index">
            <img :src="require(`../assets/images/rooms/${image}`)" alt=""/>
          </swiper-slide>
          <div class="swiper-button-prev book__prev" slot="button-prev"></div>
          <div class="swiper-button-next book__next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div v-if="priceModal" class="price__modal" @click="hidePriceModal">
      <button @click="hidePriceModal" type="button" class="close">
        <i></i>
        <i></i>
      </button>
      <b-col v-if="joinModal" @click.stop="" class="join" md="8" lg="5">
        <h4>Join World of Sunrise or sign in to your account to book.</h4>
        <div class="join__flex">
          <b-col
            class="join__content"
            cols="8"
            offset="2"
            md="6"
            offset-md="0"
            lg="6"
          >
            <p>Want to become a Sunrise member?</p>
            <a :href="localePath('/payment')">Join while you book</a>
          </b-col>
          <b-col
            class="join__content"
            cols="8"
            offset="2"
            md="6"
            offset-md="0"
            lg="6"
          >
            <p>Already a World of Sunrise member?</p>
            <a @click.prevent="showSignModal()" href="#">Sign in & book</a>
          </b-col>
        </div>
        <a @click.prevent="hidePriceModal()" href="#">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
          Maybe later. I'll choose another rate.</a
        >
      </b-col>
      <b-col v-if="signModal" @click.stop="" class="sign" md="6" lg="3">
        <h3><span>SIGN IN TO</span> WORLD OF SUNRISE</h3>
        <b-form class="form">
          <b-form-group
            label="World of Sunrise # or Username:"
            label-for="username"
          >
            <b-form-input type="text" id="username" required />
            <a href="#">Forgot your membership number?</a>
          </b-form-group>
          <b-form-group label="Last Name:" label-for="name">
            <b-form-input type="text" id="name" required />
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-form-input type="password" id="password" required />
          </b-form-group>
          <b-form-group>
            <b-form-checkbox-group class="d-flex justify-content-between">
              <b-form-checkbox>Remember Me</b-form-checkbox>
              <a href="#" class="mt-0">Forgot Password</a>
            </b-form-checkbox-group>
          </b-form-group>
          <b-button type="submit">Submit</b-button>
        </b-form>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Range',
  data() {
    return {
      rooms: [],
      imageset: [],
      header__slider: {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      amenityText: 'Show More',
      textDetails: 'More Details',
      modals: false,
      priceModal: false,
      joinModal: false,
      signModal: false,
      index: 0,
      id: 0,
    }
  },
  methods: {
    showDetails() {
      if (this.textDetails === 'More Details') {
        this.textDetails = 'Less Details'
      } else {
        this.textDetails = 'More Details'
      }
    },
    amenityShow() {
      if (this.amenityText === 'Show More') {
        this.amenityText = 'Show Less'
      } else {
        this.amenityText = 'Show More'
      }
    },
    showModal() {
      this.modals = true
    },
    hideModal() {
      this.modals = false
    },
    showPriceModal() {
      this.priceModal = true
      if (!this.joinModal) {
        this.joinModal = true
      }
    },
    hidePriceModal() {
      this.priceModal = false
      if (!this.priceModal) {
        this.joinModal = false
        this.signModal = false
      }
    },
    showSignModal() {
      if (!this.signModal) {
        this.signModal = true
        this.joinModal = false
      }
    },
    async getRooms() {
      await this.$axios.get('rooms/')
        .then((res) => {
          this.rooms = res.data;
          this.imageset = res.data.image_set;
          console.log(res);
          console.log(this.imageset);
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },
  computed: {},
  created() {
    this.getRooms();
  }
}
</script>

<template>
  <div class="book__page">
    <b-container>
      <b-row>
        <b-col class="book__header" md="12">
          <b-row>
            <b-col md="8">
              <div class="d-flex">
                <img src="https://images3.alphacoders.com/100/thumb-350-1007463.jpg" alt="">
                <div class="ml-3 pt-1">
                  <h3>Hyatt Regency Tashkent</h3>
                  <p>
                    <span>Navoi Street, 1 A</span>
                    <span>Tashkent,</span>
                    <span>Uzbekistan</span>
                  </p>
                  <a href="#">+998 99 000 00 00</a>
                  <a href="#">Visit Hotel Website</a>
                </div>
              </div>
            </b-col>
            <b-col md="4"/>
            <b-col class="header__content" md="12">
              <b-row>
                <b-col class="amenity" md="2">
                  <img src="../assets/images/amenties/wifi.svg" alt="">
                  <span>Free Internet Access</span>
                </b-col>
                <b-col class="amenity" md="2">
                  <img src="../assets/images/icons/cutlery.svg" alt="">
                  <span>Restaurant On-Site</span>
                </b-col>
                <b-col class="amenity" md="2">
                  <img src="../assets/images/icons/serving-dish.svg" alt="">
                  <span>Room Service</span>
                </b-col>
                <b-col class="amenity" md="2">
                  <img src="../assets/images/icons/weight.svg" alt="">
                  <span>Fitness Center</span>
                </b-col>
                <b-col class="amenity" md="2">
                  <img src="../assets/images/icons/swimming-pool.svg" alt="">
                  <span>Pool</span>
                </b-col>
                <b-col class="amenity" md="2">
                  <img src="../assets/images/icons/lotus.svg" alt="">
                  <span>Spa</span>
                </b-col>
              </b-row>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-row>
                    <b-col class="amenity" md="2">
                      <img src="../assets/images/icons/key.svg" alt="">
                      <span>Digital Key</span>
                    </b-col>
                    <b-col class="amenity" md="2">
                      <img src="../assets/images/icons/clock.svg" alt="">
                      <span>Digital Check-In</span>
                    </b-col>
                    <b-col class="amenity" md="2">
                      <img src="../assets/images/icons/printer.svg" alt="">
                      <span>Business Services</span>
                    </b-col>
                    <b-col class="amenity" md="2">
                      <img src="../assets/images/icons/hanger-line.svg" alt="">
                      <span>Laundry</span>
                    </b-col>
                    <b-col class="amenity" md="2">
                      <img src="../assets/images/icons/concierge.svg" alt="">
                      <span>Concierge</span>
                    </b-col>
                    <b-col class="amenity" md="2">
                      <img src="../assets/images/icons/teacher.svg" alt="">
                      <span>Meeting Facilities</span>
                    </b-col>
                  </b-row>
                </b-collapse>
              <b-button v-b-toggle.collapse-1 variant="primary">
                go
<!--                <a href="#">Show Less</a>-->
<!--                <a href="#">Show More</a>-->
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="book_hr" cols="12" md="12">
          <b-row>
            <b-col class="mb-sm-2 mb-md-2" cols="12" sm="12" md="12" lg="4">
              <div class="book__slide">
                <swiper class="swiper book_img" :options="header__slider">
                  <swiper-slide v-for="(image,index) of images" :key="index">
                    <img :src="image" alt=""/>
                  </swiper-slide>
                  <div class="swiper-button-prev book__prev" slot="button-prev"></div>
                  <div class="swiper-button-next book__next" slot="button-next"></div>
                </swiper>
                <div class="book__expand" @click.prevent="showModal(index)">
                  <font-awesome-icon class="expand" :icon="['fas', 'expand-arrows-alt']"/>
                </div>
              </div>
            </b-col>
            <b-col cols="12" sm="7" md="6" lg="5">
              <div class="book__text">
                <h4>Номера с большой двуспальной кроватью (King)</h4>
                <p>Насладитесь пребыванием в этом номере площадью 35 кв. м с большой двуспальной кроватью (King), окнами
                  от пола до потолка и большим рабочим столом.</p>
                <a @click.prevent="show()" v-if="none" href="#">Больше сведений
                  <font-awesome-icon :icon="['fas', 'chevron-down']"/>
                </a>
                <ul v-if="visible">
                  <h5>Удобства в номере</h5>
                  <li>Кровать Hyatt Grand Bed™</li>
                  <li>Телевизор с плоским экраном диагональю 55 дюймов</li>
                  <li>Затемняющие шторы</li>
                  <li>Система индивидуального климат-контроля и регулировки температуры</li>
                  <li>Телевизор в ванной</li>
                  <li>Душевая кабина с тропическим душем и отдельная ванна</li>
                  <li>Сейф в номере</li>
                  <a @click.prevent="hide()" href="#">Меньше подробностей
                    <font-awesome-icon :icon="['fas', 'chevron-up']"/>
                  </a>
                </ul>
              </div>
            </b-col>
            <b-col cols="12" sm="5" md="6" lg="3">
              <div class="book__price">
                <h2>1 656 000 UZS</h2>
                <span>Сред. за ночь (UZS)</span>
                <button @click="showPriceModal()" class="btn book__btn book__btn--btn" type="button">Выбрать</button>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="modals" class="book__modal">
      <button type="button" @click.prevent="hideModal()" class="close">
        <i></i>
        <i></i>
      </button>
      <transition name="slide" appear>
        <div class="modal__slide">
          <swiper class="swiper book_img" :options="header__slider">
            <swiper-slide v-for="(image,index) of images" :key="index">
              <img :src="image" alt=""/>
            </swiper-slide>
            <div class="swiper-button-prev book__prev" slot="button-prev"></div>
            <div class="swiper-button-next book__next" slot="button-next"></div>
          </swiper>
        </div>
      </transition>
    </div>
    <div v-if="priceModal" class="price__modal">
      <button @click="hidePriceModal()" type="button" class="close">
        <i></i>
        <i></i>
      </button>
      <b-col v-if="joinModal" class="join" md="5">
        <h4>Join World of Sunrise or sign in to your account to book.</h4>
        <div class="d-flex">
          <b-col class="join__content" md="6">
            <p>Want to become a World of Hyatt member?</p>
            <a href="#">Join while you book</a>
          </b-col>
          <b-col class="join__content" md="6">
            <p>Already a World of Hyatt member?</p>
            <a @click.prevent="showSignModal()" href="#">Sign in & book</a>
          </b-col>
        </div>
        <a @click.prevent="hidePriceModal()" href="#">
          <font-awesome-icon :icon="['fas', 'chevron-left']"/>
          Maybe later. I'll choose another rate.</a>
      </b-col>
      <b-col v-if="signModal" class="sign" md="3">
        <h3><span>SIGN IN TO</span> WORLD OF SUNRISE</h3>
        <b-form class="form">
          <b-form-group
            label="World of Sunrise # or Username:"
            label-for="username">
            <b-form-input type="text" id="username"/>
            <a href="#">Forgot your membership number?</a>
          </b-form-group>
          <b-form-group
            label="Last Name:"
            label-for="name">
            <b-form-input type="text" id="name"/>
          </b-form-group>
          <b-form-group
            label="Password"
            label-for="password">
            <b-form-input type="password" id="password"/>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox-group class="d-flex justify-content-between">
              <b-form-checkbox>Remember Me</b-form-checkbox>
              <a href="#" class="mt-0">Forgot Password</a>
            </b-form-checkbox-group>
          </b-form-group>
          <b-button type="submit" disabled>Submit</b-button>
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
        images: [
          'https://images3.alphacoders.com/100/thumb-350-1007463.jpg',
          'https://images.alphacoders.com/102/thumb-350-1029670.jpg',
          'https://images2.alphacoders.com/108/thumb-350-1081903.jpg'
        ],
        header__slider: {
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
        visible: false,
        amenity: false,
        amenityNone: true,
        amenityBlock: false,
        none: true,
        modals: false,
        priceModal: false,
        joinModal: false,
        signModal: false,
        index: 0,
        id: 0
      }
    },
    methods: {
      show(e) {
        if (e === 'amenity') {
          this.amenity = true
          this.amenityNone = false
          this.amenityBlock = true
        } else {
          this.visible = true
          this.none = false
        }
      },
      hide(e) {
        if (e === 'amenity') {
          this.amenity = false
          this.amenityNone = true
          this.amenityBlock = false
        } else {
          this.visible = false
          this.none = true
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
      }
    }
  }
</script>
